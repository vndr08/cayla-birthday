import { useEffect, useState, useCallback } from "react";

function EffectsToggle() {
  const [off, setOff] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved preference
    try {
      const saved = localStorage.getItem("effectsOff");
      if (saved !== null) {
        const isOff = JSON.parse(saved);
        setOff(isOff);
      }
    } catch (error) {
      console.warn("Effects toggle load error:", error);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    try {
      if (off) {
        document.body.classList.add("effects-off");
      } else {
        document.body.classList.remove("effects-off");
      }
      localStorage.setItem("effectsOff", JSON.stringify(off));
    } catch (error) {
      console.warn("Effects toggle save error:", error);
    }
    return () => document.body.classList.remove("effects-off");
  }, [off, mounted]);

  const handleToggle = useCallback(() => {
    setOff(v => !v);
  }, []);

  return (
    <button
      type="button"
      className={`btn tiny ${off ? "ghost" : "primary"}`}
      aria-pressed={off}
      aria-label={off ? "Enable ambient effects" : "Disable ambient effects"}
      onClick={handleToggle}
    >
      {off ? "Focus mode" : "Effects on"}
    </button>
  );
}

export default EffectsToggle;
