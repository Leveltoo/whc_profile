import { cn } from "@/lib/utils";

type MetricPillProps = {
  value: string;
  label: string;
  detail: string;
  className?: string;
};

export function MetricPill({
  value,
  label,
  detail,
  className,
}: MetricPillProps) {
  return (
    <article
      className={cn(
        "flex min-h-36 flex-col justify-between rounded-[1.6rem] border border-white/8 bg-white/[0.045] p-5 backdrop-blur-sm",
        className,
      )}
    >
      <div className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
        {label}
      </div>
      <div className="space-y-2.5">
        <div className="font-heading text-[2.1rem] leading-none font-semibold tracking-[-0.05em] text-white">
          {value}
        </div>
        <p className="text-[0.95rem] leading-7 text-[color:var(--color-text-soft)]">
          {detail}
        </p>
      </div>
    </article>
  );
}
