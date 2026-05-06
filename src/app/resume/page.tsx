import Link from "next/link";

import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/ssr";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  capabilities,
  careerTimeline,
  contactInfo,
  siteProfile,
} from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { buildResumeJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "在线简历",
  description: "王华琛在线简历，包含联系方式、核心能力、工作经历与项目方向。",
  path: "/resume",
});

export default function ResumePage() {
  const jsonLd = buildResumeJsonLd();

  return (
    <section className="px-5 pt-16 pb-18 sm:px-8 sm:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="简历"
            title="在线简历"
            description="把基本信息、联系方式、能力摘要和工作经历集中放在这里，方便直接查看和转发。"
          />
          <Button
            asChild
            size="lg"
            className="rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-6 text-[0.84rem] text-[color:var(--color-accent-foreground)] hover:bg-[color:var(--color-accent)]/90"
          >
            <Link href="/resume.pdf">
              简历 PDF
              <DownloadSimpleIcon size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-10">
            <div className="space-y-3">
              <h1 className="font-heading text-[3.1rem] tracking-[-0.06em] text-white sm:text-[4rem]">
                {siteProfile.name}
              </h1>
              <p className="text-[1.05rem] leading-8 text-[color:var(--color-text-soft)] sm:text-[1.18rem]">
                {siteProfile.title}
              </p>
            </div>
            <p className="max-w-3xl text-[0.98rem] leading-8 text-[color:var(--color-text-soft)]">
              {siteProfile.focus}
            </p>

            <section className="space-y-5 border-t border-white/9 pt-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-heading text-[1.9rem] tracking-[-0.04em] text-white">
                  能力摘要
                </h2>
                <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                  核心能力
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="border-t border-white/9 pt-4"
                  >
                    <h3 className="font-heading text-[1.45rem] tracking-[-0.04em] text-white">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-text-soft)]">
                      {capability.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5 border-t border-white/9 pt-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-heading text-[1.9rem] tracking-[-0.04em] text-white">
                  工作经历
                </h2>
                <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                  时间线
                </div>
              </div>
              <div className="grid gap-5">
                {careerTimeline.map((stage, index) => (
                  <article
                    key={stage.period}
                    className="grid gap-5 border-t border-white/9 pt-5 lg:grid-cols-[4.5rem_13rem_minmax(0,1fr)]"
                  >
                    <div className="font-mono text-[0.68rem] tracking-[0.12em] text-[color:var(--color-text-muted)]">
                      0{index + 1}
                    </div>
                    <div className="space-y-2">
                      <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                        {stage.period}
                      </p>
                      <h3 className="font-heading text-[1.55rem] tracking-[-0.04em] text-white">
                        {stage.company}
                      </h3>
                      <p className="text-sm text-[color:var(--color-text-soft)]">
                        {stage.role}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm leading-7 text-[color:var(--color-text-soft)]">
                        {stage.summary}
                      </p>
                      <ul className="grid gap-3 text-sm leading-7 text-[color:var(--color-text-soft)]">
                        {stage.highlights.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-3 h-1 w-1 rounded-full bg-white/45" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 border-t border-white/9 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
            <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
              联系方式
            </div>
            <div>
              <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                期望城市
              </div>
              <div className="mt-2 text-white">{siteProfile.location}</div>
            </div>
            <div>
              <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                工作经验
              </div>
              <div className="mt-2 text-white">{siteProfile.experience}</div>
            </div>
            {contactInfo.map((item) => (
              <div key={item.label} className="border-t border-white/8 pt-4">
                <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                  {item.label}
                </div>
                <Link
                  href={item.href}
                  className="mt-2 block text-white hover:text-[color:var(--color-accent)]"
                >
                  {item.value}
                </Link>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
