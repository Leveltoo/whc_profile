import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { openSourceProjects } from "@/content/site";

export function OpenSourceBlock() {
  const [leadProject, ...restProjects] = openSourceProjects;

  return (
    <section className="px-5 py-18 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow="项目"
          title="个人项目"
          description="除了工作项目，平时也会持续做自己的东西，主要是拿来验证架构和完整交付能力。"
        />

        {leadProject ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <article className="grid gap-5 border-t border-white/9 pt-6">
              <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                持续维护
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-[2.5rem] tracking-[-0.06em] text-white">
                  {leadProject.title}
                </h3>
                <p className="max-w-2xl text-[1rem] leading-8 text-[color:var(--color-text-soft)]">
                  {leadProject.summary}
                </p>
              </div>
              <div>
                <Link
                  href={leadProject.href}
                  className="inline-flex text-[0.95rem] text-white hover:text-[color:var(--color-accent)]"
                >
                  仓库地址
                </Link>
              </div>
            </article>

            <div className="grid gap-6">
              {restProjects.map((project) => (
                <article
                  key={project.title}
                  className="border-t border-white/9 pt-5"
                >
                  <h3 className="font-heading text-[1.6rem] tracking-[-0.05em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-[color:var(--color-text-soft)]">
                    {project.summary}
                  </p>
                  <Link
                    href={project.href}
                    className="mt-4 inline-flex text-[0.92rem] text-white hover:text-[color:var(--color-accent)]"
                  >
                    仓库地址
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
