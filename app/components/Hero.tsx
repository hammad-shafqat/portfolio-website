import { profile, socials, stats } from "@/lib/data";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { iconMap, type IconKey } from "./icons";
import { ArrowRight, Download, MapPin } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Background glow + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* The wrappers carry the static offset so the drift animation on the
            inner element doesn't fight the centering transform. */}
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2">
          <div className="animate-drift h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]" />
        </div>
        <div className="absolute right-[8%] top-[30%]">
          <div className="animate-drift-slow h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy. Each block is a `.hero-item`, cascading in on load via
            its `--i` index rather than all at once. */}
        <div>
          <span
            style={{ "--i": 0 } as React.CSSProperties}
            className="hero-item inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1
            style={{ "--i": 1 } as React.CSSProperties}
            className="hero-item mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.firstName}
            <span className="text-accent">.</span>
            <br />
            <span className="gradient-text-flow">{profile.role}</span>
          </h1>

          <p
            style={{ "--i": 2 } as React.CSSProperties}
            className="hero-item mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.summary}
          </p>

          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className="hero-item mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:scale-95"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card-hover active:scale-95"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>
          </div>

          <div
            style={{ "--i": 4 } as React.CSSProperties}
            className="hero-item mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
            <div className="flex items-center gap-1">
              {socials.map((s) => {
                const Icon = iconMap[s.icon as IconKey];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: floating code card */}
        <div
          style={{ "--i": 3 } as React.CSSProperties}
          className="hero-item relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="animate-float rounded-2xl border border-border bg-card p-1 shadow-2xl shadow-black/5">
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-xs text-muted">
                developer.ts
              </span>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-background-secondary p-4 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-fuchsia-500">const</span>{" "}
                <span className="text-sky-500">developer</span> = {"{"}
                {"\n"}
                {"  "}name: <span className="text-emerald-500">&apos;{profile.name}&apos;</span>,
                {"\n"}
                {"  "}role: <span className="text-emerald-500">&apos;Software Engineer&apos;</span>,
                {"\n"}
                {"  "}stack: [
                <span className="text-emerald-500">&apos;TypeScript&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;MongoDB&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;PostgreSQL&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;Express&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;React&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;Node.js&apos;</span>,{" "}
                <span className="text-emerald-500">&apos;Next.js&apos;</span>
                ],
                {"\n"}
                {"  "}specializesIn: <span className="text-emerald-500">&apos;Scalable Web Apps&apos;</span>,
                {"\n"}
                {"  "}builds: <span className="text-emerald-500">&apos;Fast & Responsive Experiences&apos;</span>,
                {"\n"}
                {"  "}<span className="text-sky-500">deploys</span>:{" "}
                <span className="text-fuchsia-500">() =&gt;</span>{" "}
                <span className="text-amber-500">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
          {/* Accent glow behind the card */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
        </div>
      </div>

      {/* Stats */}
      <Reveal className="mx-5 mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mx-8 sm:mt-20 sm:grid-cols-4 lg:mx-auto lg:max-w-6xl">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{ "--i": i } as React.CSSProperties}
            className="stagger-item bg-card px-5 py-6 text-center hover:bg-card-hover sm:py-8"
          >
            <div className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">
                <CountUp value={stat.value} />
              </span>
            </div>
            <div className="mt-1 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
