import { useState, useEffect, useCallback } from "react";

function LightSwitchAnimation({ onComplete, onLampOn }) {
  const [isOn, setIsOn] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handlePullString = useCallback(() => {
    try {
      if (isOn) return;
      
      setClicked(true);
      setIsOn(true);
      setShowConfetti(true);
      setShowParticles(true);

      // Call onLampOn immediately when lamp turns on
      if (typeof onLampOn === "function") {
        onLampOn();
      }

      // Show confetti for 1.2 seconds, then fade out
      const confettiTimer = setTimeout(() => {
        setShowConfetti(false);
        setShowParticles(false);
        setFadeOut(true);
        
        const fadeTimer = setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete();
          }
        }, 600);
        
        return () => clearTimeout(fadeTimer);
      }, 1200);
      
      return () => clearTimeout(confettiTimer);
    } catch (error) {
      console.warn("Light switch animation error:", error);
    }
  }, [isOn, onLampOn, onComplete]);

  return (
    <div className={`light-switch-container ${fadeOut ? "fade-out" : ""}`}>
      {/* Background Darkness */}
      <div className={`light-darkness ${isOn ? "lights-on" : ""}`} />

      {/* Ceiling Lamp */}
      <div className={`ceiling-lamp ${isOn ? "on" : ""}`}>
        {/* Ceiling Mount */}
        <div className="ceiling-mount" />
        
        {/* Lamp String with interactive pull effect */}
        <div 
          className={`lamp-string-wrapper ${hovering ? "hover" : ""} ${isOn ? "pulled" : ""}`}
          onMouseEnter={() => !isOn && setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="lamp-string" />
          <div className="string-knot" />
        </div>

        {/* Lamp Bulb Button */}
        <button
          className={`lamp-bulb ${hovering ? "hover" : ""} ${isOn ? "on" : ""}`}
          onClick={handlePullString}
          disabled={isOn}
          aria-label="Pull lamp string"
        >
          {/* Lamp Shade */}
          <div className="lamp-shade">
            <div className="shade-top" />
            <div className="shade-middle" />
            <div className="shade-bottom" />
          </div>
          
          {/* Bulb Glass */}
          <div className="bulb-glass">
            <div className="bulb-highlight" />
            <div className="bulb-inner" />
          </div>
          
          {/* Metal Base */}
          <div className="bulb-base" />
          
          {/* Glow Effects */}
          <div className="bulb-glow-1" />
          <div className="bulb-glow-2" />
          <div className="bulb-glow-3" />
        </button>

        {/* Instruction Text */}
        <p className={`lamp-label ${isOn ? "success" : ""}`}>
          {isOn ? "✨ Let there be light! ✨" : "✨ Pull the string ✨"}
        </p>
      </div>

      {/* Light Particles */}
      {showParticles && (
        <div className="light-particles-container">
          {[...Array(40)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="light-particle"
              style={{
                left: `${50 + (Math.random() - 0.5) * 100}%`,
                top: `${50 + (Math.random() - 0.5) * 100}%`,
                animationDelay: `${Math.random() * 0.4}s`,
                "--duration": `${0.8 + Math.random() * 0.4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Confetti */}
      {showConfetti && (
        <div className="confetti-burst-container">
          {[...Array(80)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="confetti-burst"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.4}s`,
                "--rotation": `${Math.random() * 360}deg`,
                "--tx": Math.random() * 2 - 1,
                "--ty": Math.random() * -2 - 0.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Light Rays */}
      {isOn && (
        <>
          <div className="light-ray light-ray-1" />
          <div className="light-ray light-ray-2" />
          <div className="light-ray light-ray-3" />
        </>
      )}
    </div>
  );
}

export default LightSwitchAnimation;
