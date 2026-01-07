import { useState, useRef, useEffect, useCallback } from "react";

function BirthdayCakeGame() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [blowing, setBlowing] = useState(false);
  const [blown, setBlown] = useState(false);
  const containerRef = useRef(null);

  const handleBlow = useCallback(() => {
    try {
      if (!candlesLit) return;
      
      setBlowing(true);
      
      // Simulate blowing out candles
      const timeout = setTimeout(() => {
        try {
          setCandlesLit(false);
          setBlown(true);
          setBlowing(false);
        } catch (error) {
          console.warn("Cake blow animation error:", error);
        }
      }, 800);
      
      return () => clearTimeout(timeout);
    } catch (error) {
      console.warn("Cake blow handler error:", error);
    }
  }, [candlesLit]);

  const handleReset = useCallback(() => {
    try {
      setCandlesLit(true);
      setBlown(false);
      setBlowing(false);
    } catch (error) {
      console.warn("Cake reset error:", error);
    }
  }, []);

  return (
    <div className="birthday-cake-game" ref={containerRef}>
      <div className="cake-container">
        {/* Cake Glow Background */}
        <div className="cake-glow" />
        
        {/* Cake */}
        <div className="cake">
          {/* Frosting Top */}
          <div className="frosting-top">
            <div className="frosting-swirl frosting-swirl-1" />
            <div className="frosting-swirl frosting-swirl-2" />
            <div className="frosting-swirl frosting-swirl-3" />
          </div>
          
          {/* Cake Layers */}
          <div className="cake-layer cake-top">
            <div className="cake-shine" />
          </div>
          <div className="cake-layer cake-middle">
            <div className="cake-shine" />
          </div>
          <div className="cake-layer cake-bottom">
            <div className="cake-shine" />
          </div>
          
          {/* Plate */}
          <div className="cake-plate" />
        </div>

        {/* Candles */}
        <div className="candles-container">
          {[0, 1, 2].map((i) => (
            <div key={i} className="candle-wrapper" style={{ '--candle-index': i }}>
              {/* Candle Stick */}
              <div className="candle-stick" />
              
              {/* Flame Glow */}
              {candlesLit && <div className="flame-glow" />}
              
              {/* Flames */}
              {candlesLit && (
                <>
                  <div className="flame flame-core" />
                  <div className="flame flame-outer" />
                  <div className="flame flame-top" />
                </>
              )}
              
              {/* Smoke on Blow */}
              {blowing && (
                <>
                  <div className="smoke smoke-1" />
                  <div className="smoke smoke-2" />
                  <div className="smoke smoke-3" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Instructions & Buttons */}
      <div className="cake-game-controls">
        {!blown ? (
          <>
            <p className="cake-instruction">
              {candlesLit ? "🌬️ Blow out the candles and make a wish!" : "Blowing..."}
            </p>
            <button
              className="btn primary cake-blow-btn"
              onClick={handleBlow}
              disabled={!candlesLit || blowing}
            >
              {blowing ? "Blowing..." : "💨 Blow Out the Candles"}
            </button>
          </>
        ) : (
          <>
            <p className="cake-success">🎉 Wish made! ✨ Happy Birthday, Cayla! 🎂</p>
            <button className="btn ghost cake-reset-btn" onClick={handleReset}>
              Light Candles Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BirthdayCakeGame;
