import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:px-8">
        <p>
          © {year} {profile.name}
        </p>
        <a href="#top" className="underline-offset-4 hover:text-accent hover:underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}
