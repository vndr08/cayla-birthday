import { useEffect, useRef, useState } from "react";

function ConfettiTrigger() {
  const [confetti, setConfetti] = useState([]);
  const triggeredRef = useRef({ 25: false, 50: false, 75: false });

  useEffect(() => {
    // Trigger confetti on specific scroll positions
    const handleScroll = () => {
      try {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;
        
        const scrollPercentage = (window.scrollY / scrollHeight) * 100;
        
        // Trigger at 25%, 50%, 75% scroll (only once per threshold)
        if (scrollPercentage > 25 && scrollPercentage < 27 && !triggeredRef.current[25]) {
          triggeredRef.current[25] = true;
          triggerConfetti();
        } else if (scrollPercentage > 50 && scrollPercentage < 52 && !triggeredRef.current[50]) {
          triggeredRef.current[50] = true;
          triggerConfetti();
        } else if (scrollPercentage > 75 && scrollPercentage < 77 && !triggeredRef.current[75]) {
          triggeredRef.current[75] = true;
          triggerConfetti();
        }
      } catch (error) {
        console.warn("Confetti trigger error:", error);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerConfetti = () => {
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 0.2,
      duration: 2 + Math.random() * 1,
      color: ["#FF6B6B", "#FFD700", "#FF69B4", "#87CEEB", "#98D8C8"][
        Math.floor(Math.random() * 5)
      ],
    }));
    
    setConfetti((prev) => [...prev, ...newConfetti]);
    
    // Remove confetti after animation
    setTimeout(() => {
      setConfetti((prev) => prev.slice(50));
    }, 3000);
  };

  return (
    <div className="confetti-trigger-container">
      {confetti.map((conf) => (
        <div
          key={conf.id}
          className="confetti-piece"
          style={{
            left: `${conf.left}%`,
            "--delay": `${conf.delay}s`,
            "--duration": `${conf.duration}s`,
            "--color": conf.color,
          }}
        />
      ))}
    </div>
  );
}

export default ConfettiTrigger;
