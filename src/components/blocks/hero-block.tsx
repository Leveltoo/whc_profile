import Link from "next/link";

import {
  ArrowRightIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { heroMetrics, siteProfile } from "@/content/site";

export function HeroBlock() {
  return (
    <section className="px-5 pt-12 pb-10 sm:px-8 sm:pt-18">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(19rem,0.88fr)]">
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-[color:var(--color-text-muted)]">
              {siteProfile.location} · {siteProfile.experience} 经验
            </p>
            <div className="space-y-4">
              <h1 className="font-heading text-[3.25rem] leading-[0.93] tracking-[-0.07em] text-white sm:text-[5rem]">
                {siteProfile.name}
              </h1>
              <p className="max-w-3xl text-[1.08rem] leading-8 text-white/92 sm:text-[1.32rem] sm:leading-9">
                {siteProfile.title}
              </p>
            </div>
            <div className="grid gap-6 border-t border-white/9 pt-6 lg:grid-cols-[minmax(0,1fr)_16rem]">
              <div className="space-y-4">
                <p className="max-w-[42rem] text-[1rem] leading-8 text-[color:var(--color-text-soft)] sm:text-[1.04rem]">
                  {siteProfile.focus}
                </p>
                <div className="grid gap-2 text-[0.95rem] leading-7 text-white/78">
                  <p>
                    主要做偏复杂度高、协作链路长、前端需要自己兜住体验和结构的项目。
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-7 text-[color:var(--color-text-soft)]">
                <div>
                  <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                    当前关注
                  </div>
                  <p className="mt-2">高级前端、前端架构、全栈偏前端机会</p>
                </div>
                <div>
                  <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                    工作方式
                  </div>
                  <p className="mt-2">偏结果导向，也习惯把结构和边界先理顺。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-6 text-[0.84rem] text-[color:var(--color-accent-foreground)] hover:bg-[color:var(--color-accent)]/90"
            >
              <Link href="/projects">
                项目列表
                <ArrowRightIcon size={18} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/12 bg-transparent px-6 text-[0.84rem] text-white hover:bg-white/6"
            >
              <Link href="/resume">
                简历 PDF
                <DownloadSimpleIcon size={18} />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 border-t border-white/9 pt-6 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                主要工作
              </div>
              <p className="text-[0.95rem] leading-8 text-[color:var(--color-text-soft)]">
                复杂业务系统、AI 应用前端、可视化项目
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                交付范围
              </div>
              <p className="text-[0.95rem] leading-8 text-[color:var(--color-text-soft)]">
                React / Vue、BFF、工程化、多人协作项目
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                当前状态
              </div>
              <p className="text-[0.95rem] leading-8 text-[color:var(--color-text-soft)]">
                {siteProfile.availability}
              </p>
            </div>
          </div>
        </div>

        <aside className="border-t border-white/9 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
          <div className="space-y-7">
            <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
              最近做的事
            </p>
            <div className="space-y-7">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-b border-white/7 pb-6 last:border-b-0 last:pb-0"
                >
                  <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                    {metric.label}
                  </div>
                  <div className="mt-2 font-heading text-[1.85rem] tracking-[-0.05em] text-white">
                    {metric.value}
                  </div>
                  <p className="mt-3 text-[0.94rem] leading-7 text-[color:var(--color-text-soft)]">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
