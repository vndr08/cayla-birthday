import { useEffect, useState, useRef } from "react";

function ScrollTriggerMessage() {
  const [message, setMessage] = useState(null);
  const triggeredRef = useRef(new Set());
  const hideTimerRef = useRef();

  useEffect(() => {
    const showMessage = (text) => {
      // Clear any existing hide timers and replace message
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setMessage(text);
      hideTimerRef.current = setTimeout(() => {
        setMessage(null);
      }, 3500);
    };

    const handleScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const scrollPercentage = (window.scrollY / maxScroll) * 100;

      if (scrollPercentage > 25 && !triggeredRef.current.has("quarter")) {
        triggeredRef.current.add("quarter");
        showMessage("You're 1/4 of the way through. Keep going! 💫");
      }
      if (scrollPercentage > 50 && !triggeredRef.current.has("half")) {
        triggeredRef.current.add("half");
        showMessage("Halfway there! You're doing great. 💕");
      }
      if (scrollPercentage > 75 && !triggeredRef.current.has("three-quarter")) {
        triggeredRef.current.add("three-quarter");
        showMessage("Almost at the end. But the best part is coming... 🎁");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!message) return null;

  return (
    <div className="scroll-trigger-messages">
      <div className="scroll-message show">{message}</div>
    </div>
  );
}

export default ScrollTriggerMessage;
