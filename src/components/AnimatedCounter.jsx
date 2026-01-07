import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, duration = 2000, label = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          try {
            if (entry && entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;
              let start = 0;
              const increment = (target || 0) / (duration / 16);

              const animate = () => {
                try {
                  start += increment;
                  if (start < target) {
                    setCount(Math.floor(start));
                    requestAnimationFrame(animate);
                  } else {
                    setCount(target);
                  }
                } catch (error) {
                  console.warn("Counter animation error:", error);
                }
              };

              animate();
            }
          } catch (error) {
            console.warn("Counter intersection error:", error);
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn("Counter cleanup error:", error);
        }
      };
    } catch (error) {
      console.warn("Counter setup error:", error);
    }
  }, [target, duration]);

  return (
    <div ref={elementRef} className="animated-counter">
      <div className="counter-value">{count.toLocaleString()}</div>
      {label && <div className="counter-label">{label}</div>}
    </div>
  );
}

export default AnimatedCounter;
