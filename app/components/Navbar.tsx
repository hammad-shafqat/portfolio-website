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
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent"
          }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-sm text-accent-foreground shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
              <Image
                src="/hammad-logo.png"
                width={500}
                height={500}
                alt="logo"
              />
            </span>
            <span className="text-[15px] tracking-tight">
              {profile.firstName}
              <span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-active={isActive}
                    className={`nav-underline relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 sm:inline-block"
            >
              Let&apos;s talk
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-card-hover md:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop and drawer sit outside <header> on purpose: the header sets
          `backdrop-blur-md` once scrolled, and an ancestor with a backdrop
          filter becomes the backdrop root, which would stop the overlay from
          blurring the page behind it. */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-lg transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      {/* Mobile menu: a side drawer that slides in from the right. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-72 max-w-[82%] flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <span className="text-[15px] font-semibold tracking-tight">
            {profile.firstName}
            <span className="text-accent">.</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-card-hover"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
          {navLinks.map((link, i) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  // Links cascade in behind the drawer panel, and collapse
                  // together (no delay) on the way out.
                  style={{
                    transitionDelay: open ? `${140 + i * 45}ms` : "0ms",
                  }}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-all duration-300 hover:bg-card-hover hover:text-foreground ${isActive ? "text-accent" : "text-muted"
                    } ${open ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-border p-4">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-accent px-4 py-3 text-center text-base font-medium text-accent-foreground"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </>
  );
}
