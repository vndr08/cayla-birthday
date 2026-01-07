import { useState, useCallback } from "react";

function Card3DFlip({ front, back, title }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  return (
    <div
      className="card-3d-container"
      onClick={handleFlip}
    >
      <div className={`card-3d ${isFlipped ? "flipped" : ""}`}>
        <div className="card-3d-front">
          <h3>{title}</h3>
          <p>{front}</p>
          <p className="flip-hint">Click to reveal</p>
        </div>
        <div className="card-3d-back">
          <p>{back}</p>
          <p className="flip-hint">Click to hide</p>
        </div>
      </div>
    </div>
  );
}

export default Card3DFlip;
