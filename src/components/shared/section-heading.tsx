import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-white/12" />
        <span className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
          {eyebrow}
        </span>
      </div>
      <div className="space-y-3">
        <h2 className="font-heading text-[2.1rem] leading-[1.06] font-semibold tracking-[-0.05em] text-white sm:text-[2.7rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-[0.95rem] leading-8 text-[color:var(--color-text-soft)]">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
