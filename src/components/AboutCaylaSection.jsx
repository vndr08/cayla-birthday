import { memo } from "react";

const AboutCaylaSection = memo(function AboutCaylaSection() {
  return (
    <section className="section reveal" id="about">
      <div className="container two-columns">
        <div className="about-text">
          <p className="eyebrow">About You</p>
          <h2 className="section-title">Simple, yet never ordinary.</h2>
          <p className="body">
            Getting to you wasn't instant. There were phases of uncertainty,
            moments of hesitation, times when I pretended indifference while
            my heart had already decided.
          </p>
          <p className="body">
            But through it all, what moved me most were the smallest things:
            the way you listen, how you ask if I'm okay, the genuine care
            you show without any pretense.
          </p>
          <p className="body">
            You're not perfect in my eyes—and that's precisely what makes you real.
            You're funny, beautiful, intelligent, nurturing, and constantly striving
            to be better. That's more than enough. That's everything.
          </p>
          <div className="tag-row">
            <span className="tag">#Genuine</span>
            <span className="tag">#Dependable</span>
            <span className="tag">#Tenderhearted</span>
            <span className="tag">#Patient</span>
            <span className="tag">#MyHome</span>
          </div>
        </div>
        <div className="about-photo">
          <div className="photo-card">
            <div className="photo-placeholder">
              Your photo here
              <span>The one that always looks most like you.</span>
            </div>
            <p className="caption">
              I can't always explain why I love you this much.
              But every time I see you, the answer becomes clear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutCaylaSection;
