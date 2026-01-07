import { useEffect, useState, useMemo } from "react";
import BirthdayCakeGame from "./BirthdayCakeGame.jsx";

function getTimeLeft(targetDate) {
  try {
    const now = new Date();
    if (!targetDate || typeof targetDate.getTime !== "function") {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return {
        total: diff,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { total: diff, days, hours, minutes, seconds };
  } catch (error) {
    console.warn("Countdown calculation error:", error);
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
}

function TimeBox({ label, value }) {
  const padded = useMemo(() => String(value).padStart(2, "0"), [value]);
  return (
    <div className="time-box">
      <div className="time-value">{padded}</div>
      <div className="time-label">{label}</div>
    </div>
  );
}

function CountdownSection() {
  // Target: January 9, 2026 at midnight
  // TESTING: Set to today to see celebration view. Change back to: new Date(2026, 0, 9, 0, 0, 0)
  const targetDate = new Date(); // Testing - shows celebration view
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    try {
      const timer = setInterval(() => {
        try {
          setTimeLeft(getTimeLeft(targetDate));
        } catch (error) {
          console.warn("Countdown update error:", error);
        }
      }, 1000);
      return () => {
        try {
          clearInterval(timer);
        } catch (error) {
          console.warn("Countdown cleanup error:", error);
        }
      };
    } catch (error) {
      console.warn("Countdown setup error:", error);
    }
  }, [targetDate]);

  const isToday = timeLeft.total <= 0;

  return (
    <section className="section reveal" id="countdown">
      <div className="container center">
        {!isToday ? (
          <>
            <p className="eyebrow">Towards January 9, 2026</p>
            <h2 className="section-title">You turn twenty.</h2>
            <p className="body">
              Time moves quietly toward this day. And with every passing second,
              I want you to know one thing: you deserve to be celebrated.
            </p>
            <div className="countdown">
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <TimeBox label="Minutes" value={timeLeft.minutes} />
              <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
          </>
        ) : (
          <div className="birthday-celebration">
            <div className="celebration-ribbon">
              <span className="ribbon-text">✨ HAPPY BIRTHDAY ✨</span>
            </div>
            
            <div className="celebration-divider-top" />
            
            <h2 className="celebration-title">TODAY YOU TURN TWENTY</h2>
            <p className="celebration-subtitle">Happy 20th Birthday, Cayla</p>
            
            <div className="celebration-message">
              <p className="celebration-line">Twenty years of being extraordinary.</p>
              <p className="celebration-line">Twenty more to look forward to.</p>
            </div>
            
            <div className="celebration-divider-bottom" />
            
            <BirthdayCakeGame />
            
            <p className="celebration-footer">Thank you for being you.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CountdownSection;
