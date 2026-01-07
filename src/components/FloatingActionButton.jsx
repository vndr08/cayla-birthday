import { useState, useCallback, useMemo } from "react";

function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const galleryAction = useCallback(() => {
    try {
      const gallery = document.querySelector(".photo-gallery");
      if (gallery && typeof gallery.scrollIntoView === "function") {
        gallery.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
      }
    } catch (error) {
      console.warn("Gallery scroll error:", error);
    }
  }, []);

  const messageAction = useCallback(() => {
    try {
      const message = prompt("💌 Send a message to Cayla:");
      if (message && message.trim()) {
        alert("✨ Message sent! Thank you!");
        setIsOpen(false);
      }
    } catch (error) {
      console.warn("Message action error:", error);
    }
  }, []);

  const musicAction = useCallback(() => {
    try {
      alert("🎵 Music is playing in the background!");
      setIsOpen(false);
    } catch (error) {
      console.warn("Music action error:", error);
    }
  }, []);

  const actions = useMemo(() => [
    { 
      icon: "📸", 
      label: "Gallery", 
      action: galleryAction
    },
    { 
      icon: "💬", 
      label: "Message", 
      action: messageAction
    },
    { 
      icon: "🎵", 
      label: "Music", 
      action: musicAction
    },
  ], [galleryAction, messageAction, musicAction]);

  return (
    <div className="floating-action-button-container">
      <button
        className="fab-main"
        onClick={() => setIsOpen(!isOpen)}
        title="Quick actions"
        aria-label="Quick actions menu"
      >
        <span className={`fab-icon ${isOpen ? "open" : ""}`}>✨</span>
      </button>

      {isOpen && (
        <div className="fab-menu" role="menu">
          {actions.map((action, index) => (
            <button
              key={index}
              className="fab-item"
              onClick={action.action}
              style={{ "--fab-index": index }}
              title={action.label}
              role="menuitem"
              aria-label={action.label}
            >
              <span className="fab-item-icon">{action.icon}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FloatingActionButton;
