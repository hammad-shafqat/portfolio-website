import { skillGroups } from "@/lib/data";
import { iconMap, type IconKey } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
