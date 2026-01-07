import { useState, useCallback } from "react";

function IntroGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback((e) => {
    try {
      if (!e) return;
      e.preventDefault();
      
      const normalized = value?.trim?.()?.replace?.(/\s+/g, "") || "";
      if (!normalized) {
        setError("Please enter a date");
        return;
      }

      const validAnswers = ["01-04", "1-4", "01/04", "1/4"];

      if (validAnswers.includes(normalized)) {
        setError("");
        if (typeof onUnlock === "function") {
          onUnlock();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(
          "Hmm… that doesn't seem right. Hint: April 1 → 01-04 or 1-4"
        );
      }
    } catch (error) {
      console.warn("Form submission error:", error);
      setError("An error occurred. Please try again.");
    }
  }, [value, onUnlock]);

  return (
    <section className="intro">
      <div className="intro-card">
        <p className="eyebrow">private page</p>
        <h1 className="intro-title">This corner of the internet is only for you.</h1>
        <p className="intro-text">
          If your name is <span className="highlight">Cayla Winri Azzahra</span>,
          you&apos;re allowed to enter.
        </p>

        <form className="intro-form" onSubmit={handleSubmit}>
          <label className="intro-label">
            Enter the date we started in format <code>DD-MM</code>:
          </label>
          <input
            type="text"
            placeholder="example: 01-04"
            className="intro-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {error && <p className="intro-error">{error}</p>}
          <button type="submit" className="btn primary intro-button">
            Enter
          </button>
        </form>

        <p className="intro-hint">
          April 1 · 00:37 — the moment we stopped being almost and became us.
        </p>
      </div>
    </section>
  );
}

export default IntroGate;
