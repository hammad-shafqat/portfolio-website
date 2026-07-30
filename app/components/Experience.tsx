import { experiences } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-background-secondary py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Where I've worked"
          description="Building scalable products, delivering full-stack solutions, and continuously growing."
        />

        <ol className="relative mt-14 border-l border-border pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <Reveal
              as="li"
              key={`${exp.company}-${exp.period}`}
              delay={i * 90}
              className="relative pb-12 last:pb-0"
            >
              {/* Node on the line */}
              <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border border-border bg-background sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {exp.role}
                  <span className="text-accent"> · {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {exp.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{exp.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
