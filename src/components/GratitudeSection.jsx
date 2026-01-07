import { useState, useCallback } from "react";

function GratitudeSection() {
  const [input, setInput] = useState("");
  const [note, setNote] = useState("");

  const handleSave = useCallback((e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setNote(trimmed);
    setInput("");
  }, [input]);

  return (
    <section className="section reveal" id="gratitude">
      <div className="container">
        <p className="eyebrow">💭 For You to Write</p>
        <h2 className="section-title">
          Today, remember one thing you're grateful for.
        </h2>
        <p className="body">
          It's okay if you're tired. It's okay if you're not feeling strong.
          But I want you to remember: there's always something small to be grateful for.
          Write it here, take your time.
        </p>

        <form className="gratitude-form" onSubmit={handleSave}>
          <label className="gratitude-label">
            One thing you're grateful for today:
          </label>
          <textarea
            className="gratitude-input"
            rows={3}
            placeholder="Example: 'Today I made it through another day, even though it was hard.'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="gratitude-actions">
            <button type="submit" className="btn tiny">
              💾 Save this for today
            </button>
            <p className="gratitude-hint">
              This note stays here, just for you.
            </p>
          </div>
        </form>

        {note && (
          <div className="gratitude-note">
            <p className="gratitude-note-label">Your note for today:</p>
            <p className="gratitude-note-text">{note}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default GratitudeSection;
