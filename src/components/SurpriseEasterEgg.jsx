import { useState, useEffect, useRef } from "react";

function SurpriseEasterEgg() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (clickCount === 20) {
      setShowSurprise(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowSurprise(false);
        setClickCount(0);
      }, 5000);
    }
  }, [clickCount]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleEasterEggClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <>
      <div
        className="easter-egg-trigger"
        onClick={handleEasterEggClick}
        title={`${20 - clickCount} clicks to surprise`}
      />

      {showSurprise && (
        <div className="surprise-popup">
          <div className="surprise-content">
            <p className="surprise-emoji">🎉</p>
            <p className="surprise-text">
              You found the secret! 🎁
            </p>
            <p className="surprise-message">
              This whole page is made with love, just for you.
              Every pixel, every word, every animation—it's all for celebrating you.
            </p>
            <p className="surprise-emoji">💕</p>
          </div>
        </div>
      )}
    </>
  );
}

export default SurpriseEasterEgg;
