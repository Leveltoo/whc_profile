import { SectionHeading } from "@/components/shared/section-heading";
import { careerTimeline } from "@/content/site";

export function CareerBlock() {
  return (
    <section className="px-5 py-18 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow="经历"
          title="工作经历"
          description="从早期业务系统到后面的可视化、Next.js 和 AI 项目，工作内容基本沿着这条线在往前走。"
        />

        <div className="grid gap-8">
          {careerTimeline.map((stage, index) => (
            <article
              key={stage.period}
              className="grid gap-5 border-t border-white/9 pt-6 lg:grid-cols-[11rem_14rem_minmax(0,1fr)]"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-[0.68rem] tracking-[0.12em] text-[color:var(--color-text-muted)]">
                  0{index + 1}
                </span>
                <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                  {stage.period}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-[1.65rem] tracking-[-0.05em] text-white">
                  {stage.company}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-text-soft)]">
                  {stage.role}
                </p>
              </div>
              <div className="space-y-4">
                <p className="max-w-3xl text-sm leading-8 text-[color:var(--color-text-soft)]">
                  {stage.summary}
                </p>
                <ul className="grid gap-3 text-sm leading-7 text-[color:var(--color-text-soft)]">
                  {stage.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1 w-1 rounded-full bg-white/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
