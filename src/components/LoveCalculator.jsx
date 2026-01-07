import { useState, useCallback } from "react";

function LoveCalculator() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const getMessageForPercentage = useCallback((percent) => {
    if (percent >= 90) return "🔥 PERFECT MATCH! Destiny brought you together!";
    if (percent >= 80) return "💕 Amazing connection! You're meant to be!";
    if (percent >= 70) return "💖 Great chemistry! Love is in the air!";
    if (percent >= 60) return "💝 Good vibes! Keep nurturing this love!";
    if (percent >= 50) return "💗 Potential is there! Work on it!";
    return "💞 Every love story is unique! Make it yours!";
  }, []);

  const calculateLove = useCallback(() => {
    try {
      const trimmedName1 = name1?.trim?.() || "";
      const trimmedName2 = name2?.trim?.() || "";
      
      if (!trimmedName1 || !trimmedName2) return;

      // Fun algorithm
      const combined = (trimmedName1 + trimmedName2).toLowerCase();
      let hash = 0;
      for (let i = 0; i < combined.length; i++) {
        const charCode = combined.charCodeAt(i);
        if (typeof charCode === "number") {
          hash = charCode + ((hash << 5) - hash);
        }
      }
      const percentage = Math.abs(hash % 100) + 1;

      setResult({
        percentage,
        message: getMessageForPercentage(percentage),
      });
    } catch (error) {
      console.warn("Love calculator error:", error);
    }
  }, [name1, name2, getMessageForPercentage]);

  return (
    <section className="section reveal" id="love-calculator">
      <div className="container">
        <div className="love-calculator">
          <div className="calculator-content">
            <p className="eyebrow">💕 Fun Game</p>
            <h2 className="section-title">Love Calculator</h2>
            <p className="body">
              Let's see what the universe says about our love story.
            </p>
            <div className="calculator-inputs">
              <input
                type="text"
                placeholder="Your name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && calculateLove()}
              />
              <span className="plus">+</span>
              <input
                type="text"
                placeholder="Their name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && calculateLove()}
              />
            </div>
            <button className="btn primary" onClick={calculateLove}>
              Calculate Love
            </button>

            {result && (
              <div className="calculator-result">
                <div className="result-circle" style={{ "--percentage": result.percentage }}>
                  <div className="result-percentage">{result.percentage}%</div>
                </div>
                <p className="result-message">{result.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoveCalculator;
