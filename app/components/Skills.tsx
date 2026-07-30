import { skillGroups } from "@/lib/data";
import { iconMap, type IconKey } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { getTechMonogram, techLogos } from "./techLogos";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-background-secondary py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills & tools"
          title="My technical toolkit"
          description="A snapshot of the technologies I reach for to design, build, and ship products from front to back."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon as IconKey];
            return (
              <Reveal
                key={group.title}
                delay={i * 80}
                spotlight
                className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/40"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill, j) => {
                    const Logo = techLogos[skill];
                    return (
                      <li
                        key={skill}
                        style={{ "--i": j } as React.CSSProperties}
                        className="stagger-item group/tech relative"
                      >
                        <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-muted transition-[color,border-color,transform] duration-300 group-hover/tech:-translate-y-0.5 group-hover/tech:border-accent/50 group-hover/tech:text-accent">
                          {Logo ? (
                            <Logo className="h-5 w-5" aria-hidden />
                          ) : (
                            <span
                              aria-hidden
                              className="text-sm font-semibold tracking-tight"
                            >
                              {getTechMonogram(skill)}
                            </span>
                          )}
                          <span className="sr-only">{skill}</span>
                        </div>

                        {/* Name on hover, since the tile itself shows only the logo */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-border bg-card px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-all duration-200 group-hover/tech:translate-y-0 group-hover/tech:opacity-100"
                        >
                          {skill}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
