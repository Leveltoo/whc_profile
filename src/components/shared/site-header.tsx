import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteProfile } from "@/content/site";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/resume", label: "简历" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[color:var(--color-surface-strong)]/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="min-w-0">
          <div className="font-heading text-lg font-semibold tracking-[-0.04em] text-white">
            {siteProfile.name}
          </div>
          <div className="truncate font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
            高级前端 / 全栈偏前端
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="rounded-full border border-transparent px-4 text-[0.72rem] tracking-[0.08em] text-[color:var(--color-text-soft)] hover:border-white/10 hover:bg-white/6 hover:text-white"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <Button
          asChild
          className="rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-4 text-[0.8rem] text-[color:var(--color-accent-foreground)] hover:bg-[color:var(--color-accent)]/90"
        >
          <Link href="/resume">简历 PDF</Link>
        </Button>
      </div>
    </header>
  );
}
