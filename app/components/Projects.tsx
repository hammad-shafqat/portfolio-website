import { hostOf, projectSlug, projects, type Project } from "@/lib/data";
import BrowserWindow from "./BrowserWindow";
import { ArrowUpRight, Github } from "./icons";

function CaseStudy({ project, flip }: { project: Project; flip: boolean }) {
  const host = hostOf(project.liveUrl);
  return (
    <article
      id={projectSlug(project.title)}
      className="grid scroll-mt-24 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
    >
      <a
        href={project.liveUrl ?? project.repoUrl}
        target="_blank"
        rel="noreferrer noopener"
        tabIndex={-1}
        aria-hidden
        className={`block transition-transform duration-300 hover:-translate-y-1 lg:col-span-7 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <BrowserWindow
          src={project.image}
          alt=""
          host={host || project.title}
          sizes="(min-width: 1024px) 640px, 100vw"
        />
      </a>

      <div className="lg:col-span-5">
        <p className="text-sm text-muted">{project.year}</p>
        <h3 className="display-sm mt-1 text-3xl sm:text-[2.25rem]">
          {project.title}
        </h3>
        <p className="mt-4 max-w-[60ch] text-muted">{project.description}</p>

        <p className="mt-5 text-sm">
          <span className="sr-only">Built with: </span>
          {project.tags.join(", ")}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong"
            >
              Visit {host}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              View source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-5xl sm:text-6xl">Selected work</h2>
          <a
            href="https://github.com/hammad-shafqat"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
          >
            More on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 space-y-20 sm:space-y-28">
          {projects.map((project, i) => (
            <CaseStudy key={project.title} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
