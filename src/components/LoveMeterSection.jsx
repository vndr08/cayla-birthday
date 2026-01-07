import { useState, useCallback, useMemo } from "react";

function LoveMeterSection() {
  const [value, setValue] = useState(85);

  const getLabel = useCallback(() => {
    if (value <= 30) {
      return "That's it? You're joking, right? 😳";
    } else if (value <= 70) {
      return "Getting warmer. But I know you can go higher. 😊";
    } else if (value <= 95) {
      return "Now that's the Cayla I know. 💛";
    }
    return "Over 100%. This is exactly how I feel about you. 💫";
  }, [value]);

  const handleChange = useCallback((e) => {
    setValue(Number(e.target.value));
  }, []);

  const hearts = useMemo(() => {
    const heartsCount = Math.round((value / 100) * 6) || 1;
    return Array.from({ length: heartsCount });
  }, [value]);

  return (
    <section className="section reveal" id="love-meter">
      <div className="container">
        <p className="eyebrow">Today&apos;s Love Meter</p>
        <h2 className="section-title">
          How much do you love me today?
        </h2>
        <p className="body">
          Answer honestly in your heart. This slider is just for fun,
          but it feels like you're really moving my heart. 💫
        </p>

        <div className="love-meter">
          <div className="love-scale">
            <span className="love-scale-label">0%</span>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="love-range"
            />
            <span className="love-scale-label">100%</span>
          </div>

          <div className="love-indicator">
            <span className="love-value">{value}%</span>
            <p className="love-text">{getLabel()}</p>
          </div>

          <div className="love-hearts">
            {hearts.map((_, idx) => (
              <span key={idx} className="heart">
                ♥
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoveMeterSection;
