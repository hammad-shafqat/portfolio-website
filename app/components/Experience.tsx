import { experiences } from "@/lib/data";

const VISIBLE = 3;

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border bg-surface-sunk py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 className="display text-5xl sm:text-6xl">Experience</h2>

        <ol className="mt-14">
          {experiences.map((exp) => {
            const shown = exp.highlights.slice(0, VISIBLE);
            const rest = exp.highlights.slice(VISIBLE);
            const current = /present/i.test(exp.period);
            return (
              <li
                key={`${exp.company}-${exp.period}`}
                className="grid gap-3 border-l-2 border-border pb-14 pl-6 last:pb-0 md:grid-cols-[13rem_1fr] md:gap-10 md:border-l-0 md:pl-0"
              >
                <div className="md:border-r-2 md:border-border md:pr-6 md:text-right">
                  <p className="text-sm font-medium">{exp.period}</p>
                  <p className="text-sm text-muted">{exp.location}</p>
                  {current && (
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Current role
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="display-sm text-2xl">
                    {exp.role}, {exp.company}
                  </h3>
                  <p className="mt-3 max-w-[64ch] text-muted">{exp.description}</p>

                  <ul className="mt-5 max-w-[64ch] space-y-2.5 text-[15px]">
                    {shown.map((h) => (
                      <Highlight key={h}>{h}</Highlight>
                    ))}
                  </ul>

                  {rest.length > 0 && (
                    <details className="mt-2.5 max-w-[64ch]">
                      <summary className="inline-flex items-center gap-1.5 rounded py-1 text-sm font-semibold text-accent">
                        Show {rest.length} more
                        <svg
                          aria-hidden
                          viewBox="0 0 16 16"
                          className="chevron h-3.5 w-3.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m4 6 4 4 4-4" />
                        </svg>
                      </summary>
                      <ul className="mt-2.5 space-y-2.5 text-[15px]">
                        {rest.map((h) => (
                          <Highlight key={h}>{h}</Highlight>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent">
      {children}
    </li>
  );
}
