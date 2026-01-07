import { useEffect, useRef, useMemo } from "react";

function ScrollReveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  const observerConfig = useMemo(() => ({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        try {
          if (entry && entry.isIntersecting && entry.target) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        } catch (error) {
          console.warn("ScrollReveal intersection error:", error);
        }
      },
      observerConfig
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      try {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      } catch (error) {
        console.warn("ScrollReveal cleanup error:", error);
      }
    };
  }, [observerConfig]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
