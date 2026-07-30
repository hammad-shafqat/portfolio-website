"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1300;

/** Splits "1.5+" into { target: 1.5, decimals: 1, suffix: "+" }. */
function parse(value: string) {
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value.trim());
  if (!match) return null;
  const [, number, suffix] = match;
  const decimals = number.includes(".") ? number.split(".")[1].length : 0;
  return { target: Number(number), decimals, suffix };
}

// easeOutExpo - fast off the line, long settle.
const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

type Props = {
  /** Display string, e.g. "1.5+". Non-numeric values render unchanged. */
  value: string;
};

/**
 * Counts up to a numeric value the first time it scrolls into view. Renders the
 * final string on the server, so the real number is present without JS.
 */
export default function CountUp({ value }: Props) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !parsed) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const { target, decimals, suffix } = parsed;
    let frame = 0;

    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1);
        const current = target * ease(progress);
        setText(`${current.toFixed(decimals)}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          run();
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // `value` fully determines `parsed`, so it is the only real dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // `tabular-nums` keeps the tile from reflowing as digit widths change.
  return (
    <span ref={ref} className="tabular-nums">
      {text}
    </span>
  );
}
