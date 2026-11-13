import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center px-4 py-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-muted">Error 404</p>
        <h1 className="display mt-3 max-w-[14ch] text-4xl sm:text-5xl">
          There&apos;s no page at this address.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg text-muted">
          The link may be out of date or mistyped. Head back to the homepage, or
          jump straight to a section.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-3 text-[15px] font-semibold text-accent-foreground transition-colors hover:bg-accent-strong"
          >
            Go to homepage
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="inline-flex items-center rounded-lg border border-border bg-surface px-4 py-3 text-[15px] font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
