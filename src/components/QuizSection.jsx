import { useState, useCallback } from "react";
import { quizQuestions } from "../data";

function QuizSection() {
  const [revealedIndex, setRevealedIndex] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  const handleReveal = useCallback((index) => {
    setRevealedIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  const handleUnlock = useCallback(() => {
    setUnlocked(true);
    const letterSection = document.getElementById("letter");
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="section reveal" id="game">
      <div className="container">
        <p className="eyebrow">A Little Game</p>
        <h2 className="section-title">How well do you know us?</h2>
        <p className="body center">
          Answer in your heart. When you're ready, click the button below
          to unlock the real birthday letter.
        </p>
        <div className="quiz-grid">
          {quizQuestions.map((item, index) => (
            <div key={index} className="quiz-card">
              <p className="quiz-question">{item.question}</p>
              <button
                className="btn tiny"
                onClick={() => handleReveal(index)}
              >
                {revealedIndex === index ? "Hide my answer" : "Reveal my answer"}
              </button>
              {revealedIndex === index && (
                <p className="quiz-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="unlock-area">
          <p className="body center">
            When you're ready, mentally and emotionally…
          </p>
          <button
            className="btn primary"
            onClick={handleUnlock}
            disabled={unlocked}
          >
            {unlocked ? "Letter unlocked ↓" : "Unlock the Letter"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuizSection;
