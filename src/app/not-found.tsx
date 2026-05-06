import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 rounded-[2rem] border border-white/10 bg-white/6 p-8">
        <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-[color:var(--color-accent)]">
          404
        </p>
        <div className="space-y-4">
          <h1 className="font-heading text-5xl tracking-[-0.06em] text-white">
            这个页面不存在。
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-[color:var(--color-text-soft)]">
            可能是链接已经变更，或者当前案例还没有公开。你可以先回首页，或者直接查看项目列表。
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-6 text-[0.84rem] text-[color:var(--color-accent-foreground)] hover:bg-[color:var(--color-accent)]/90"
          >
            <Link href="/">返回首页</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/12 bg-white/4 px-6 text-[0.84rem] text-white hover:bg-white/8"
          >
            <Link href="/projects">项目列表</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
