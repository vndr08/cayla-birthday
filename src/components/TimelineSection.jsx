import { memo } from "react";
import { timelineData } from "../data";

const TimelineSection = memo(function TimelineSection() {
  return (
    <section className="section reveal" id="timeline">
      <div className="container">
        <p className="eyebrow">📖 Our Story</p>
        <h2 className="section-title">How we became us—one moment at a time.</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <p className="timeline-date">{item.date}</p>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="body">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
});

export default TimelineSection;
