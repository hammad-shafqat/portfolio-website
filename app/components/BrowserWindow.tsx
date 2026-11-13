import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  host: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** A product screenshot framed with a minimal address bar showing its domain. */
export default function BrowserWindow({
  src,
  alt,
  host,
  sizes,
  priority,
  className = "",
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] border border-border bg-surface ${className}`}
      style={{ boxShadow: "var(--window-shadow)" }}
    >
      <div className="flex items-center gap-3 border-b border-border px-3 py-2">
        <span aria-hidden className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded bg-surface-sunk px-2 py-0.5 text-center text-[11px] text-muted">
          {host}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-surface-sunk">
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}
