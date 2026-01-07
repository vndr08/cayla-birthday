import { memo } from "react";

const FutureSection = memo(function FutureSection() {
  return (
    <section className="section reveal" id="future">
      <div className="container center">
        <p className="eyebrow">What Comes Next</p>
        <h2 className="section-title">Slowly, but in the same direction.</h2>
        <p className="body">
          I can't promise life will be smooth. But I promise you this:
          we won't abandon each other when things get hard or scary.
        </p>
        <ul className="promise-list">
          <li>I'll learn to listen more, not just respond.</li>
          <li>I'll remind you how far you've come, not just how far you need to go.</li>
          <li>I'll be honest when I'm struggling, so you don't have to guess.</li>
          <li>I'll protect this relationship, not just the idea of it.</li>
        </ul>
      </div>
    </section>
  );
});

export default FutureSection;
