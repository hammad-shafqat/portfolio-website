"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type PointerEvent,
  type ReactNode,
} from "react";

/** Entrance styles; the matching CSS lives under `.reveal[data-variant=…]`. */
export type RevealVariant = "up" | "left" | "right" | "scale" | "blur" | "line";

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms, useful when mapping over a list. */
  delay?: number;
  /** Direction/character of the entrance. Defaults to a slide up. */
  variant?: RevealVariant;
  /** Adds a soft accent glow that follows the cursor across the element. */
  spotlight?: boolean;
};

/**
 * Fades and slides its children in the first time they scroll into view.
 * Falls back to visible immediately if IntersectionObserver is unavailable.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "up",
  spotlight = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Track the pointer as CSS custom properties so the highlight is positioned
  // by CSS alone - no re-render per mouse move.
  const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${shown ? "in-view" : ""} ${
        spotlight ? "spotlight" : ""
      } ${className}`}
      // Passed as a custom property, not `transitionDelay`, so the stylesheet
      // can zero it out on hover - an inline declaration could not be beaten.
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined
      }
      onPointerMove={spotlight ? onPointerMove : undefined}
    >
      {children}
    </Tag>
  );
}
