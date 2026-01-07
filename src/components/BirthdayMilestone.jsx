import { useEffect, useState } from "react";

function BirthdayMilestone() {
  const [isBirthday, setIsBirthday] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2026, 0, 9); // January 9, 2026

    if (
      today.getMonth() === birthDate.getMonth() &&
      today.getDate() === birthDate.getDate() &&
      today.getFullYear() === birthDate.getFullYear()
    ) {
      setIsBirthday(true);
      setShowCelebration(true);
    }
  }, []);

  if (!isBirthday) return null;

  return (
    <div className={`birthday-milestone ${showCelebration ? "active" : ""}`}>
      <div className="milestone-content">
        <p className="milestone-emoji">🎂</p>
        <h2 className="milestone-title">It's Your Day!</h2>
        <p className="milestone-text">
          Today you turn twenty. The world is brighter because you're in it.
        </p>
        <p className="milestone-emoji">✨</p>
      </div>
    </div>
  );
}

export default BirthdayMilestone;
