import { SectionHeading } from "@/components/shared/section-heading";
import { capabilities } from "@/content/site";

export function CapabilitiesBlock() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow="能力"
          title="核心能力"
          description="不单独堆技术栈，直接按我平时承担的问题来拆。"
        />

        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="grid gap-4 border-t border-white/9 pt-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-heading text-[1.65rem] leading-tight tracking-[-0.05em] text-white">
                  {capability.title}
                </h3>
                <span className="font-mono text-[0.68rem] tracking-[0.12em] text-[color:var(--color-text-muted)]">
                  0{index + 1}
                </span>
              </div>
              <p className="max-w-xl text-[0.98rem] leading-8 text-[color:var(--color-text-soft)]">
                {capability.summary}
              </p>
              <ul className="space-y-3 text-[0.94rem] leading-7 text-[color:var(--color-text-soft)]">
                {capability.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[0.92rem] h-1 w-1 rounded-full bg-white/45" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
