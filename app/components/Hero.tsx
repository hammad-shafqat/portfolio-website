import { hostOf, profile, projectSlug, projects, socials } from "@/lib/data";
import BrowserWindow from "./BrowserWindow";
import { Download, iconMap, type IconKey } from "./icons";

// Resting positions for the fanned stack, back to front.
const fan = [
  { x: "0%", y: "0%", r: "-4deg" },
  { x: "18%", y: "14%", r: "1.5deg" },
  { x: "6%", y: "34%", r: "-1deg" },
];

export default function Hero() {
  const stack = projects.slice(0, 3);

  return (
    <section id="top" className="overflow-x-clip pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <p
            className="hero-line inline-flex items-center gap-2 text-sm text-muted"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span aria-hidden className="h-2 w-2 rounded-full bg-signal" />
            {profile.availability}
          </p>

          <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-[4.5rem]">
            <span className="hero-line block" style={{ "--i": 1 } as React.CSSProperties}>
              I build web apps
            </span>
            <span className="hero-line block" style={{ "--i": 2 } as React.CSSProperties}>
              from the database
            </span>
            <span className="hero-line block" style={{ "--i": 3 } as React.CSSProperties}>
              to the interface.
            </span>
          </h1>

          <p
            className="hero-line mt-7 max-w-[34rem] text-lg text-muted"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            I&apos;m {profile.name}, a full stack engineer in{" "}
            {profile.location.split(",")[0]}. I work across the whole stack
            with TypeScript, React, Next.js, Node.js and MongoDB: REST APIs,
            authentication, payments and real-time features, behind interfaces
            that stay fast and accessible.
          </p>

          <div
            className="hero-line mt-9 flex flex-wrap items-center gap-3"
            style={{ "--i": 5 } as React.CSSProperties}
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-3 text-[15px] font-semibold text-accent-foreground transition-colors hover:bg-accent-strong"
            >
              See my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-[15px] font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <ul className="ml-1 flex items-center gap-1">
              {socials
                .filter((s) => s.icon !== "mail")
                .map((s) => {
                  const Icon = iconMap[s.icon as IconKey];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={s.label}
                        className="grid h-11 w-11 place-items-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        {/* The real products, stacked like open tabs. Each one jumps to its
            case study below. */}
        <div className="relative mx-auto aspect-[10/9] w-full max-w-[560px]">
          {stack.map((project, i) => {
            const pos = fan[i];
            return (
              <a
                key={project.title}
                href={`#${projectSlug(project.title)}`}
                aria-label={`${project.title} case study`}
                className="hero-window absolute left-0 top-0 block w-[78%] rounded-[10px]"
                style={
                  {
                    "--x": pos.x,
                    "--y": pos.y,
                    "--r": pos.r,
                    "--i": i,
                    zIndex: i + 1,
                  } as React.CSSProperties
                }
              >
                <BrowserWindow
                  src={project.image}
                  alt=""
                  host={hostOf(project.liveUrl)}
                  sizes="(min-width: 1024px) 440px, 78vw"
                  priority={i === stack.length - 1}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
