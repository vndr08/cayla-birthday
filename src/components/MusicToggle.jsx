import { useRef, useState, useCallback } from "react";

function MusicToggle() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Audio play failed:", err);
        });
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" loop />
      <button
        type="button"
        className={`music-toggle ${isPlaying ? "playing" : ""}`}
        onClick={handleToggle}
      >
        <span className="music-icon">{isPlaying ? "❚❚" : "▶"}</span>
        <span className="music-label">
          {isPlaying ? "Pause our song" : "Play our song"}
        </span>
      </button>
    </>
  );
}

export default MusicToggle;
