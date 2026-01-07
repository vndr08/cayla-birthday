import { useEffect, useRef, useCallback } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const animationFrameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (e && typeof e.clientX === "number" && typeof e.clientY === "number") {
      posRef.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  const handleMouseOver = useCallback((e) => {
    if (!e || !e.target) return;
    const target = e.target;
    const isClickable =
      (target.tagName === "BUTTON") ||
      (target.tagName === "A") ||
      (target.onclick) ||
      (target.classList && target.classList.contains("clickable")) ||
      (target.closest && target.closest("button")) ||
      (target.closest && target.closest("a"));
    isHoveringRef.current = !!isClickable;
  }, []);

  const handleMouseOut = useCallback(() => {
    isHoveringRef.current = false;
  }, []);

  useEffect(() => {
    const animate = () => {
      const cursor = cursorRef.current;
      const trail = trailRef.current;

      if (cursor) {
        cursor.style.left = posRef.current.x + "px";
        cursor.style.top = posRef.current.y + "px";
        cursor.classList.toggle("hovering", isHoveringRef.current);
      }

      if (trail) {
        trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * 0.3;
        trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * 0.3;
        trail.style.left = trailPosRef.current.x + "px";
        trail.style.top = trailPosRef.current.y + "px";
        trail.classList.toggle("hovering", isHoveringRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="custom-cursor-trail" />
    </>
  );
}

export default CustomCursor;
