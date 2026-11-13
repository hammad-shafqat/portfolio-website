"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import { Close, Menu } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll and allow Escape to dismiss while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8"
        >
          <a href="#top" className="flex items-center gap-2.5 rounded">
            <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-md bg-accent">
              <Image src="/hammad-logo.png" width={32} height={32} alt="" />
            </span>
            <span className="display-sm text-lg">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded px-3 py-2 text-[15px] transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:bg-accent after:transition-transform ${
                      isActive
                        ? "font-medium text-foreground after:scale-x-100"
                        : "text-muted after:scale-x-0 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Kept outside <header>: its backdrop-filter would otherwise become the
          backdrop root and stop the overlay from blurring the page. */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-72 max-w-[85%] flex-col border-l border-border bg-background transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-end px-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col px-4">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href} className="border-b border-border">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`display-sm block py-4 text-2xl ${
                    isActive ? "text-accent" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
