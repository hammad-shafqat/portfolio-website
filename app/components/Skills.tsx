import { skillGroups } from "@/lib/data";
import { getTechMonogram, techLogos } from "./techLogos";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 className="display display-strong text-[2rem] sm:text-[2.5rem]">Skills</h2>
        <p className="mt-4 max-w-[52ch] text-muted">
          What I use day to day to design, build and run products.
        </p>

        <dl className="mt-12 divide-y divide-border border-y border-border">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-4 py-7 md:grid-cols-[13rem_1fr] md:gap-10"
            >
              <dt className="display-sm text-xl">{group.title}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Logo = techLogos[skill];
                    return (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-[15px]"
                      >
                        {Logo ? (
                          <Logo className="h-4 w-4 text-muted" aria-hidden />
                        ) : (
                          <span
                            aria-hidden
                            className="grid h-4 w-4 place-items-center text-[10px] font-bold text-muted"
                          >
                            {getTechMonogram(skill)}
                          </span>
                        )}
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
