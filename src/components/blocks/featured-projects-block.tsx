import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/site";

export function FeaturedProjectsBlock() {
  const projects = getFeaturedProjects();
  const [leadProject, ...restProjects] = projects;

  return (
    <section className="px-5 py-18 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="项目"
            title="代表项目"
            description="先看几个更能代表我工作类型和问题处理方式的项目。"
          />
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/12 bg-transparent px-5 text-[0.82rem] text-white hover:bg-white/6"
          >
            <Link href="/projects">全部项目</Link>
          </Button>
        </div>

        {leadProject ? (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="space-y-6 border-t border-white/9 pt-6">
              <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                推荐项目
              </p>
              <div className="space-y-4">
                <h3 className="font-heading text-[2.55rem] leading-[1.02] tracking-[-0.06em] text-white">
                  {leadProject.title}
                </h3>
                <p className="max-w-2xl text-[1rem] leading-8 text-[color:var(--color-text-soft)]">
                  {leadProject.summary}
                </p>
                <p className="max-w-2xl text-[0.94rem] leading-7 text-white/66">
                  {leadProject.impact}
                </p>
              </div>
              <div className="grid gap-3 border-l border-white/8 pl-4 text-[0.92rem] leading-7 text-[color:var(--color-text-soft)]">
                {leadProject.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div>
                <Button
                  asChild
                  className="rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-5 text-[0.82rem] text-[color:var(--color-accent-foreground)] hover:bg-[color:var(--color-accent)]/90"
                >
                  <Link href={`/projects/${leadProject.slug}`}>项目详情</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-8">
              {restProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
