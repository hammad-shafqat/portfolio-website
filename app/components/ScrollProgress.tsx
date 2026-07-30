"use client";

import { useEffect, useRef } from "react";

/**
 * A 2px accent bar across the very top of the viewport that tracks how far the
 * page has been scrolled. Writes straight to the DOM inside a rAF so scrolling
 * never triggers a React render.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      node.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-1"
    >
      {/* The starting scale is set inline rather than with a Tailwind scale
          utility. Those compile to the standalone `scale` property, which
          composes with - rather than being replaced by - the `transform` the
          effect writes, which would pin the bar at zero width. (The class name
          is spelled out nowhere here on purpose: Tailwind scans source text,
          so naming it would emit a dead rule.) */}
      <div
        ref={ref}
        style={{ transform: "scaleX(0)" }}
        className="h-full origin-left bg-gradient-to-r from-accent via-violet-500 to-fuchsia-500"
      />
    </div>
  );
}
