import { profile, services } from "@/lib/data";
import { iconMap, type IconKey } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: portrait / initials card */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/15 via-card to-fuchsia-500/10">
                {profile.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <span className="select-none font-mono text-8xl font-bold text-accent/70">
                      {profile.firstName[0]}
                      {profile.name.split(" ")[1]?.[0] ?? ""}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl shadow-black/5">
                <div className="text-2xl font-bold gradient-text">5+ yrs</div>
                <div className="text-xs text-muted">of building</div>
              </div>
            </div>
          </Reveal>

          {/* Right: copy + services */}
          <div>
            <SectionHeading
              eyebrow="About me"
              title="Turning complex problems into elegant products."
            />
            <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a full stack engineer based in {profile.location}, with
                a passion for building web applications that are fast, reliable,
                and a joy to use. I care deeply about the details - clean code,
                thoughtful UX, and performance that holds up under real-world
                load.
              </p>
              <p>
                Over the last five years I&apos;ve worked with startups and
                agencies to ship products end-to-end: designing APIs, modelling
                data, and crafting interfaces that feel effortless. I thrive in
                collaborative teams and love mentoring other developers.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => {
                const Icon = iconMap[service.icon as IconKey];
                return (
                  <Reveal
                    key={service.title}
                    delay={i * 80}
                    className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40 hover:bg-card-hover"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
