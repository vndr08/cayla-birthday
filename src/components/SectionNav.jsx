import { useCallback, useMemo } from "react";

function SectionNav() {
  const sections = useMemo(() => [
    { id: "about", label: "About" },
    { id: "timeline", label: "Story" },
    { id: "gallery", label: "Photos" },
    { id: "letter", label: "Letter" },
  ], []);

  const handleClick = useCallback((id) => {
    try {
      const el = document.getElementById(id);
      if (el && typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (error) {
      console.warn("Section navigation error:", error);
    }
  }, []);

  return (
    <nav className="section-nav">
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          className="section-nav-item"
          onClick={() => handleClick(s.id)}
        >
          <span className="section-nav-dot" />
          <span className="section-nav-label">{s.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default SectionNav;
