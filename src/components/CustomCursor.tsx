import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        if (cursorRef.current) cursorRef.current.style.opacity = "1";
        if (dotRef.current) dotRef.current.style.opacity = "1";
      }
    };
    const leave = () => {
      visible.current = false;
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const over = () => {
      hovering.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.width = "50px";
        cursorRef.current.style.height = "50px";
        cursorRef.current.style.background = "hsla(38, 92%, 55%, 0.15)";
        cursorRef.current.style.borderColor = "hsla(38, 92%, 55%, 0.6)";
      }
    };
    const out = () => {
      hovering.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.width = "20px";
        cursorRef.current.style.height = "20px";
        cursorRef.current.style.background = "transparent";
        cursorRef.current.style.borderColor = "hsl(38, 92%, 55%)";
      }
    };

    const animate = () => {
      // Smooth lerp for outer cursor
      cursorPos.current.x += (pos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (pos.current.y - cursorPos.current.y) * 0.15;
      // Faster lerp for inner dot
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.35;

      if (cursorRef.current) {
        const size = hovering.current ? 50 : 20;
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x - 3}px, ${dotPos.current.y - 3}px, 0)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    raf.current = requestAnimationFrame(animate);

    // Use MutationObserver to handle dynamic elements
    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", over);
        el.addEventListener("mouseleave", out);
      });
    };
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{ opacity: 0 }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0 }}
      />
    </>
  );
};

export default CustomCursor;
