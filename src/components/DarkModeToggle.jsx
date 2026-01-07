import { useEffect, useState, useCallback } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((isDark) => {
    if (isDark) {
      document.documentElement.style.setProperty("--bg-primary", "#0a0e1a");
      document.documentElement.style.setProperty("--bg-secondary", "#0f1729");
      document.documentElement.style.setProperty("--text", "#ffffff");
      document.body.style.backgroundColor = "#0a0e1a";
    } else {
      document.documentElement.style.setProperty("--bg-primary", "#ffffff");
      document.documentElement.style.setProperty("--bg-secondary", "#f5f5f5");
      document.documentElement.style.setProperty("--text", "#000000");
      document.body.style.backgroundColor = "#ffffff";
    }
  }, []);

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = savedMode ? JSON.parse(savedMode) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    setIsDarkMode(prefersDark);
    applyTheme(prefersDark);
    setMounted(true);
  }, [applyTheme]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      applyTheme(newMode);
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  }, [applyTheme]);

  if (!mounted) return null;

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
      <span className="toggle-icon">{isDarkMode ? "☀️" : "🌙"}</span>
    </button>
  );
}

export default DarkModeToggle;
