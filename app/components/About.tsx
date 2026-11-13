import { profile, services, stats } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border bg-surface-sunk py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-8 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <div>
          {profile.avatar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full max-w-[22rem] rounded-[10px] border border-border object-cover"
            />
          )}
          <dl className="mt-6 grid max-w-[22rem] grid-cols-2 gap-x-6 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="display-sm text-2xl tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="display display-strong text-[2rem] sm:text-[2.5rem]">About</h2>
          <div className="mt-6 max-w-[62ch] space-y-4 text-muted">
            <p>
              I&apos;m a full stack engineer based in {profile.location}. I like
              owning a product from the database schema to the last pixel, and I
              care about the parts users never see: auth that holds up, payments
              that reconcile, and pages that load fast on a bad connection.
            </p>
            <p>
              For the last 1.5+ years I&apos;ve worked with startups, agencies
              and freelance clients, designing APIs, modelling data and building
              the interfaces on top. I work well in small teams and enjoy helping
              other developers level up.
            </p>
          </div>

          <h3 className="display-sm mt-12 text-2xl">How I can help</h3>
          <dl className="mt-5 grid max-w-3xl gap-x-10 gap-y-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="border-t-2 border-accent pt-3">
                <dt className="font-semibold">{service.title}</dt>
                <dd className="mt-1 text-[15px] text-muted">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
