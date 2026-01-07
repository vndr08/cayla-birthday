import { useRef, useEffect, useState, useCallback } from "react";

function ScratchCard({ onReveal }) {
  const canvasRef = useRef(null);
  const effectsCanvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [revealPercentage, setRevealPercentage] = useState(0);
  const contextRef = useRef(null);
  const effectsContextRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const particlesRef = useRef([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const scratchDataRef = useRef(null);
  const lineWidthRef = useRef(80);

  const drawGoldenLayer = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d", { 
      willReadFrequently: true,
      alpha: true
    });
    contextRef.current = context;

    // Clear canvas to transparent first
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw premium golden gradient background
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#F5E6D3");
    gradient.addColorStop(0.25, "#FFE4B5");
    gradient.addColorStop(0.5, "#FFD700");
    gradient.addColorStop(0.75, "#FFC700");
    gradient.addColorStop(1, "#E8D4B8");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Add subtle texture
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2;
      const opacity = Math.random() * 0.08;
      context.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      context.fillRect(x, y, size, size);
    }
  };

  useEffect(() => {
    drawGoldenLayer();

    const handleResize = () => {
      drawGoldenLayer();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

    // Setup effects canvas
    const effectsCanvas = effectsCanvasRef.current;
    if (effectsCanvas) {
      effectsCanvas.width = window.innerWidth;
      effectsCanvas.height = window.innerHeight;
      const effectsContext = effectsCanvas.getContext("2d");
      effectsContextRef.current = effectsContext;

      // Animation loop for particles
      let animationId;
      const animate = () => {
        effectsContext.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
        
        particlesRef.current = particlesRef.current.filter(particle => {
          particle.life -= 0.02;
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.1; // gravity
          
          if (particle.life > 0) {
            effectsContext.globalAlpha = particle.life;
            effectsContext.fillStyle = particle.color;
            effectsContext.beginPath();
            effectsContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            effectsContext.fill();
            return true;
          }
          return false;
        });
        
        effectsContext.globalAlpha = 1;
        animationId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
      };
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = useCallback((e) => {
    if (revealed) return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    lastPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, [revealed]);

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDrawing || revealed) return;
    scratch(e);
  }, [isDrawing, revealed]);

  const handleTouchStart = useCallback((e) => {
    if (revealed) return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    lastPosRef.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    };
  }, [revealed]);

  const handleTouchEnd = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDrawing || revealed) return;
    scratch(e.touches[0]);
  }, [isDrawing, revealed]);

  const scratch = (e) => {
    if (!canvasRef.current || !contextRef.current || revealed) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const context = contextRef.current;
    const lastPos = lastPosRef.current;
    const lineWidth = lineWidthRef.current;
    
    // Interpolate between last and current position for smooth line
    const distance = Math.sqrt(Math.pow(x - lastPos.x, 2) + Math.pow(y - lastPos.y, 2));
    const steps = Math.max(Math.ceil(distance), 1);
    
    // Set composite operation to clear pixels
    context.globalCompositeOperation = "destination-out";
    
    for (let step = 0; step <= steps; step++) {
      const t = steps > 0 ? step / steps : 0;
      const px = lastPos.x + (x - lastPos.x) * t;
      const py = lastPos.y + (y - lastPos.y) * t;
      
      // Main eraser circle - fully clear
      context.fillStyle = "rgba(0, 0, 0, 1)";
      context.beginPath();
      context.arc(px, py, lineWidth / 2, 0, Math.PI * 2);
      context.fill();
      
      // Soft edges with gradient for smooth transition
      const softGradient = context.createRadialGradient(px, py, lineWidth / 2 - 15, px, py, lineWidth / 2 + 25);
      softGradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      softGradient.addColorStop(0.5, "rgba(0, 0, 0, 0.8)");
      softGradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");
      context.fillStyle = softGradient;
      context.beginPath();
      context.arc(px, py, lineWidth / 2 + 25, 0, Math.PI * 2);
      context.fill();
    }
    
    context.globalCompositeOperation = "source-over";

    // Create scratch particles effect
    for (let i = 0; i < 12; i++) {
      const t = Math.random();
      const px = lastPos.x + (x - lastPos.x) * t;
      const py = lastPos.y + (y - lastPos.y) * t;
      const angle = (Math.random() * Math.PI * 2);
      const velocity = 2 + Math.random() * 4;
      const colors = ["#D4AF37", "#FFD700", "#FFC700", "#E8D4B8", "#FFE4B5"];
      
      particlesRef.current.push({
        x: px,
        y: py,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        life: 1,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Update last position
    lastPosRef.current = { x, y };

    // Calculate reveal percentage more efficiently
    const sampleSize = 25;
    let transparentPixels = 0;
    let totalSamples = 0;

    for (let i = 0; i < canvas.width; i += sampleSize) {
      for (let j = 0; j < canvas.height; j += sampleSize) {
        try {
          const imageData = context.getImageData(i, j, 1, 1);
          // Pixel is transparent if alpha < 128
          if (imageData.data[3] < 128) {
            transparentPixels++;
          }
          totalSamples++;
        } catch (err) {
          // Skip if error
        }
      }
    }

    if (totalSamples > 0) {
      const percentage = (transparentPixels / totalSamples) * 100;
      setRevealPercentage(percentage);

      // Trigger reveal at 90% scratch - fully revealed
      if (percentage > 90 && !revealed) {
        setRevealed(true);
        setTimeout(() => {
          onReveal();
        }, 400);
      }
    }
  };

  return (
    <div className={`scratch-card-container ${revealed ? "revealed" : ""}`}>
      <div className="scratch-card-wrapper">
        <canvas
          ref={canvasRef}
          className="scratch-canvas"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        />
        <canvas
          ref={effectsCanvasRef}
          className="scratch-effects-canvas"
        />
      </div>
    </div>
  );
}

export default ScratchCard;
