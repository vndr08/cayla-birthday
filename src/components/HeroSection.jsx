import { useEffect, useState, useMemo } from "react";

function HeroSection() {
  const [showConfetti, setShowConfetti] = useState(true);

  // Memoize confetti array to prevent recalculation
  const confettiPieces = useMemo(() => [...Array(12)], []);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShowConfetti(false);
      return;
    }
    const t = setTimeout(() => setShowConfetti(false), 4500);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="section hero reveal" id="top">
      {/* Confetti particles */}
      {showConfetti && (
        <div className="confetti-container">
          {confettiPieces.map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 1}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container hero-content">
        <p className="eyebrow">Cayla • 20th Birthday</p>
        <h1 className="hero-title">Welcome to Your Celebration.</h1>
        <p className="hero-subtitle">
          Not a stage, not a crowd, just a space made with care for <strong>Cayla</strong>.
          <br />
          I want this page to feel like a quiet standing ovation from me to you.
        </p>
        <p className="hero-tagline">Made with love by Ivan.</p>
        <div className="hero-buttons">
          <a href="#countdown" className="btn primary">
            🚀 Begin the Journey
          </a>
          <a href="#letter" className="btn ghost">
            💌 Read My Letter
          </a>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="scroll-hint">
        <span className="scroll-text">scroll to explore</span>
        <span className="scroll-dot" />
      </div>

      <div className="hero-overlay" />
    </section>
  );
}

export default HeroSection;
