"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface MouseInvertCursorProps {
  /** Radius of the cursor circle in pixels (default: 80) */
  radius?: number;
  /** Enable/disable the cursor (default: true) */
  enabled?: boolean;
  /** Smoothness factor - lower is smoother but slower (default: 0.12) */
  smoothness?: number;
}

/**
 * MouseInvertCursor - A circular mouse follower that inverts colors underneath it
 * using mix-blend-mode: difference
 *
 * @example
 * ```tsx
 * // In layout.tsx
 * import { MouseInvertCursor } from "@/components/MouseInvertCursor";
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <MouseInvertCursor />
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function MouseInvertCursor({
  radius = 80,
  enabled = true,
  smoothness = 0.12,
}: MouseInvertCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const isVisibleRef = useRef(false); // Use ref to avoid stale closure
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameId = useRef<number>(0);

  // Lerp interpolation function for smooth following (lower = smoother)
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // Animation loop for smooth cursor movement
  const animate = useCallback(() => {
    if (!cursorRef.current) return;

    // Use configurable smoothness factor
    currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, smoothness);
    currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, smoothness);

    // Centering offset
    const offsetX = currentPos.current.x - radius;
    const offsetY = currentPos.current.y - radius;

    // Apply position directly to DOM (no re-renders)
    cursorRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Continue animation loop
    animationFrameId.current = requestAnimationFrame(animate);
  }, [radius, smoothness]);

  useEffect(() => {
    if (!enabled) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      // Show cursor on first mouse movement (using ref to avoid stale closure)
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    // Mouse down handler - expand cursor
    const handleMouseDown = () => {
      setIsPressed(true);
    };

    // Mouse up handler - restore cursor size
    const handleMouseUp = () => {
      setIsPressed(false);
    };

    // Hide cursor when mouse leaves the window
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    // Show cursor when mouse re-enters the window
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    // Touch devices - hide cursor
    const handleTouchStart = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    // Restore cursor on touch end
    const handleTouchEnd = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [enabled, animate]);

  // Don't render anything if disabled
  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isPressed ? radius * 2 : radius * 1.5,
        height: isPressed ? radius * 2 : radius * 1.5,
        borderRadius: "50%",
        backgroundColor: "white",
        opacity: isVisible ? 1 : 0,
        transform: "translate(-1000px, -1000px)",
        transition: "width 0.2s ease-out, height 0.2s ease-out",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}

export default MouseInvertCursor;