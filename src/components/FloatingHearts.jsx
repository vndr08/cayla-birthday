import { useEffect, useState, useRef } from "react";

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);
  const timeoutRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
      };

      setHearts((prev) => [...prev, newHeart]);

      const timeout = setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 4000);
      
      timeoutRef.current.push(timeout);
    }, 3000);

    return () => {
      clearInterval(interval);
      timeoutRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutRef.current = [];
    };
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;
