import { memo } from "react";
import { reasons } from "../data";

const ReasonsSection = memo(function ReasonsSection() {
  return (
    <section className="section reveal" id="reasons">
      <div className="container">
        <p className="eyebrow">For Your Twenty</p>
        <h2 className="section-title">
          Twenty small truths for your twentieth birthday.
        </h2>
        <p className="body">
          Not rules, not expectations. Just things I love about you,
          and gentle hopes for you at this beautiful new age.
        </p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-number">{index + 1}</div>
              <p className="body">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ReasonsSection;
