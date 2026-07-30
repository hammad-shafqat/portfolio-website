import { profile, socials } from "@/lib/data";
import { iconMap, type IconKey } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = iconMap[s.icon as IconKey];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
