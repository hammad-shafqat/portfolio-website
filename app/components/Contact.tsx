import { profile, socials } from "@/lib/data";
import { ArrowRight, iconMap, Mail, MapPin, Phone, type IconKey } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-12 sm:py-20">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="animate-drift pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
          />
          <div
            aria-hidden
            className="animate-drift-slow pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                Get in touch
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build something{" "}
                <span className="gradient-text-flow">great together.</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Have a project in mind or just want to say hi? My inbox is always
                open - I&apos;ll get back to you within a day or two.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:scale-95"
                >
                  Say hello
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
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
                        className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact details card */}
            <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm">
              <ul className="space-y-5">
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  label="Location"
                  value={profile.location}
                />
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wide text-muted">
          {label}
        </div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </div>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="block rounded-lg transition-colors hover:text-accent"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
