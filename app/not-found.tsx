import Link from "next/link";
import { navLinks, profile } from "@/lib/data";
import { ArrowRight, Mail } from "./components/icons";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center overflow-hidden px-5 py-24 sm:px-8">
      {/* Background glow + grid, mirroring the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute right-[8%] top-[40%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 40%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-2xl text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-medium text-muted">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          404 · Page not found
        </span>

        <h1 className="mt-6 text-7xl font-bold leading-none tracking-tight sm:text-8xl">
          <span className="gradient-text">404</span>
        </h1>

        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          This page took a wrong turn
          <span className="text-accent">.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or the
          link is broken. Let&apos;s get you back to something that does.
        </p>

        {/* Code card echoing the hero's floating snippet */}
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-card p-1 text-left shadow-2xl shadow-black/5">
          <div className="flex items-center gap-1.5 px-3 py-2.5">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono text-xs text-muted">route.ts</span>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-background-secondary p-4 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="text-fuchsia-500">const</span>{" "}
              <span className="text-sky-500">page</span> ={" "}
              <span className="text-fuchsia-500">await</span>{" "}
              <span className="text-sky-500">find</span>(url);
              {"\n"}
              <span className="text-fuchsia-500">if</span> (!page){" "}
              <span className="text-fuchsia-500">throw</span>{" "}
              <span className="text-amber-500">notFound</span>();
            </code>
          </pre>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card-hover"
          >
            <Mail className="h-4 w-4" />
            Report a broken link
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted">Or jump straight to a section</p>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
