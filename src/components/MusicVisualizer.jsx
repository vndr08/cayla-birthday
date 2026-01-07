import { useEffect, useRef } from "react";

function MusicVisualizer({ isPlaying }) {
  const containerRef = useRef(null);
  const barsRef = useRef(Array(32).fill(0));
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;

    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      try {
        // Update bars smoothly
        barsRef.current = barsRef.current.map((current) => {
          const target = Math.random() > 0.5 ? Math.random() * 100 : 0;
          return current + (target - current) * 0.1;
        });

        // Update DOM
        const bars = container?.querySelectorAll(".visualizer-bar");
        if (bars && bars.length > 0) {
          bars.forEach((bar, i) => {
            if (bar && barsRef.current[i] !== undefined) {
              bar.style.height = `${barsRef.current[i]}%`;
            }
          });
        }

        animationIdRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.warn("Visualizer animation error:", error);
      }
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div ref={containerRef} className={`music-visualizer ${isPlaying ? "active" : ""}`}>
      <div className="visualizer-bars">
        {Array(32)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="visualizer-bar" style={{ animationDelay: `${i * 0.05}s` }} />
          ))}
      </div>
    </div>
  );
}

export default MusicVisualizer;
