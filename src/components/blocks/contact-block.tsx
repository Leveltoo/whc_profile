import Link from "next/link";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/content/site";

export function ContactBlock() {
  return (
    <section className="px-5 pt-12 pb-18 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 border-t border-white/10 pt-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-4">
          <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
            联系
          </p>
          <h2 className="font-heading text-[2.2rem] tracking-[-0.05em] text-white sm:text-[2.6rem]">
            联系方式
          </h2>
          <p className="max-w-xl text-[0.95rem] leading-8 text-[color:var(--color-text-soft)]">
            如果你在看高级前端、AI
            应用前端、可视化或者偏全链路交付的人，这里可以直接联系我。
          </p>
          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-6 text-[0.74rem] tracking-[0.12em] uppercase text-[color:var(--color-accent-foreground)] hover:bg-[color:var(--color-accent)]/90"
            >
              <Link href="/resume">查看在线简历</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contactInfo.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-t border-white/10 pt-4"
            >
              <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                {item.label}
              </div>
              <div className="mt-2 text-[0.98rem] leading-7 text-white hover:text-[color:var(--color-accent)]">
                {item.value}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
