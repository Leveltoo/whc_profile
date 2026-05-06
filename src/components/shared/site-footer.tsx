import Link from "next/link";

import { contactInfo, siteProfile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/18">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="font-heading text-2xl tracking-[-0.04em] text-white">
            {siteProfile.name}
          </p>
          <p className="max-w-xl text-sm leading-8 text-[color:var(--color-text-soft)]">
            这个站点主要用来集中展示我的项目经历、工作方向和联系方式。
          </p>
        </div>
        <div className="grid gap-3 text-sm text-[color:var(--color-text-soft)] sm:grid-cols-2">
          {contactInfo.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              <span className="mr-2 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                {item.label}
              </span>
              {item.value}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
