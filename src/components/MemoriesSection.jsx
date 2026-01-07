import { useState, useCallback } from "react";
import { memories } from "../data";

function MemoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMemoryClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="section reveal" id="memories">
      <div className="container">
        <p className="eyebrow">Pick a Memory</p>
        <h2 className="section-title">Choose a moment, and let's remember together.</h2>
        <p className="body">
          These are the moments that come to mind first. Click through them
          and take your time reading each one.
        </p>

        <div className="memories-grid">
          {memories.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                className={`memory-card ${isActive ? "active" : ""}`}
                onClick={() => handleMemoryClick(index)}
                type="button"
              >
                <span className="memory-tag">{item.tag}</span>
                <h3 className="memory-title">{item.title}</h3>
                {isActive && <p className="memory-body">{item.story}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MemoriesSection;
