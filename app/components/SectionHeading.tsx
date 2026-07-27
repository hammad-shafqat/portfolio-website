import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
        <span className="h-px w-6 bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
