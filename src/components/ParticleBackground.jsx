import { useEffect, useRef } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect system preference to reduce motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      return; // don't run animation
    }

    // Disable particles on mobile for performance
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return; // skip particle animation on mobile
    }

    let animationId;
    let isRunning = true;

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();

    // Particle system
    const particles = [];
    const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = `rgba(250, 204, 107, ${Math.random() * 0.5 + 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Attract to mouse
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          this.speedX += dx * 0.001;
          this.speedY += dy * 0.001;
        }

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles (fewer on small screens)
    const baseCount = window.innerWidth < 768 ? 24 : 50;
    for (let i = 0; i < baseCount; i++) {
      particles.push(
        new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
      );
    }

    // Mouse move listener with throttling
    let lastMouseUpdate = 0;
    const handleMouseMove = (e) => {
      try {
        const now = Date.now();
        if (now - lastMouseUpdate < 16) return; // ~60fps throttle
        lastMouseUpdate = now;
        
        if (e && typeof e.clientX === "number" && typeof e.clientY === "number") {
          mousePos.x = e.clientX;
          mousePos.y = e.clientY;
        }
      } catch (error) {
        console.warn("Mouse move error:", error);
      }
    };

    // Resize listener with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      if (!isRunning || !canvas) return;

      // Clear the frame to avoid heavy trails that obscure content
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // If effects are toggled off, skip drawing
      if (document.body.classList.contains('effects-off')) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      isRunning = false;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default ParticleBackground;
