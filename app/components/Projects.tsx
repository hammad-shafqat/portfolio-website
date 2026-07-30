import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import { ArrowUpRight, Github } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      delay={(index % 3) * 90}
      variant={index % 2 === 0 ? "left" : "right"}
      spotlight
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 ${
        project.featured ? "lg:col-span-3 lg:flex-row" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden ${
          project.featured ? "lg:w-1/2" : ""
        }`}
      >
        <div
          className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${project.accent}`}
        >
          {project.image ? (
            // `fill` needs a positioned parent - the aspect box above provides
            // both the ratio and the `relative` container.
            <Image
  src={project.image}
  alt={project.title}
  fill
  sizes={
    project.featured
      ? "(min-width: 1024px) 576px, (min-width: 640px) 90vw, 100vw"
      : "(min-width: 1024px) 384px, (min-width: 640px) 90vw, 100vw"
  }
  className="object-cover transition-transform duration-300 group-hover:scale-105"
/>
          ) : (
            <span className="font-mono text-2xl font-bold tracking-tight text-white/90">
              {project.title}
            </span>
          )}
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-xs text-white backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} source code`}
                className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-card-hover hover:text-accent"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live site`}
                className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-card-hover hover:text-accent"
              >
                <ArrowUpRight className="h-[18px] w-[18px]" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I'm proud of"
            description="A mix of client work, side projects, and open source. Each one taught me something new."
          />
          <Reveal variant="right">
            <a
              href="https://github.com/hammad-shafqat"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View all on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
