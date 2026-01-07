import { useState, useEffect, useRef, useMemo } from "react";

function FloatingMessages() {
  const messages = useMemo(() => [
    "You make everything better.",
    "I'm so proud of you.",
    "You deserve all the happiness.",
    "Thank you for being you.",
    "You're my favorite person.",
    "I love you more each day.",
    "You're stronger than you think.",
    "You light up my world.",
    "Happy 20th, my love. 💕",
  ], []);

  const [floatingMessages, setFloatingMessages] = useState([]);
  const timeoutRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const newMessage = {
        id: Date.now() + Math.random(),
        text: randomMessage,
        left: Math.random() * 80 + 10,
      };

      setFloatingMessages((prev) => [...prev, newMessage]);

      const timeout = setTimeout(() => {
        setFloatingMessages((prev) => prev.filter((m) => m.id !== newMessage.id));
      }, 5000);

      timeoutRef.current.push(timeout);
    }, 8000);

    return () => {
      clearInterval(interval);
      timeoutRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutRef.current = [];
    };
  }, []);

  return (
    <div className="floating-messages-container">
      {floatingMessages.map((msg) => (
        <div
          key={msg.id}
          className="floating-message"
          style={{ left: `${msg.left}%` }}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default FloatingMessages;
