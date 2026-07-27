"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "./icons";

type Theme = "light" | "dark";

const THEME_EVENT = "themechange";

// A tiny external store backed by the `data-theme` attribute on <html>, which
// the inline script in <head> sets before hydration. useSyncExternalStore reads
// it without triggering a hydration mismatch or a set-state-in-effect.
function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Theme {
  return (document.documentElement.getAttribute("data-theme") as Theme) ?? "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  function toggle() {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage may be unavailable — ignore */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-card-hover hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      {/* Both icons render; the dark: variant swaps them so the button looks
          right even before JS hydrates. */}
      <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
