import { profile, socials } from "@/lib/data";
import CopyEmail from "./CopyEmail";
import { iconMap, Mail, type IconKey } from "./icons";

/** Opens a new Gmail message addressed to `to`, in a new tab. */
function gmailCompose(to: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: `Hello ${profile.firstName}`,
  });
  return `https://mail.google.com/mail/?${params}`;
}

export default function Contact() {
  const linkedin = socials.find((s) => s.icon === "linkedin");

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 className="display max-w-[14ch] text-4xl sm:text-5xl">
          Have a project or a role in mind?
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg text-muted">
          Tell me what you&apos;re building. I usually reply within a day or two.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {profile.email && (
            <>
              <a
                href={gmailCompose(profile.email)}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[15px] font-semibold text-accent-foreground transition-colors hover:bg-accent-strong"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Let&apos;s talk
              </a>
              <CopyEmail email={profile.email} />
            </>
          )}
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              className={
                profile.email
                  ? "inline-flex items-center px-2 py-3 text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
                  : "inline-flex items-center rounded-lg bg-accent px-5 py-3 text-[15px] font-semibold text-accent-foreground transition-colors hover:bg-accent-strong"
              }
            >
              Message me on LinkedIn
            </a>
          )}
        </div>

        <dl className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:gap-16">
          {profile.phone && (
            <div>
              <dt className="text-sm text-muted">Phone</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="font-medium underline-offset-4 hover:text-accent hover:underline"
                >
                  {profile.phone}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm text-muted">Based in</dt>
            <dd className="mt-1 font-medium">{profile.location}</dd>
          </div>
          <div className="sm:ml-auto sm:text-right">
            <dt className="text-sm text-muted">Elsewhere</dt>
            <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
              {socials
                .filter((s) => s.icon !== "mail")
                .map((s) => {
                  const Icon = iconMap[s.icon as IconKey];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:text-accent hover:underline"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {s.label}
                    </a>
                  );
                })}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
