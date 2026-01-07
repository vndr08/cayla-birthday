import { useEffect, useState } from "react";

function Balloons() {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Create balloons on mount
    const balloonArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 8 + Math.random() * 4,
      color: ["#FF6B6B", "#FFD700", "#FF69B4", "#87CEEB", "#98D8C8", "#F7DC6F"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setBalloons(balloonArray);
  }, []);

  return (
    <div className="balloons-container">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            left: `${balloon.left}%`,
            "--delay": `${balloon.delay}s`,
            "--duration": `${balloon.duration}s`,
            "--color": balloon.color,
          }}
        >
          <div className="balloon-body" />
          <div className="balloon-string" />
        </div>
      ))}
    </div>
  );
}

export default Balloons;
