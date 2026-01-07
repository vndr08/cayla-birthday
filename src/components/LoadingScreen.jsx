import { useState, useEffect } from "react";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    try {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + Math.random() * 30;
        });
      }, 300);

      // Complete loading after 2.5 seconds
      const timeout = setTimeout(() => {
        setProgress(100);
        setIsComplete(true);
        const completeTimer = setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete();
          }
        }, 600);
        
        return () => clearTimeout(completeTimer);
      }, 2500);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } catch (error) {
      console.warn("Loading screen error:", error);
    }
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isComplete ? "complete" : ""}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-text">✨ Cayla's 20th ✨</div>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="loading-text">
          {progress < 100 ? "Loading your celebration..." : "Ready!"}
        </div>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Animated background */}
      <div className="loading-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="loading-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
