import Link from "next/link";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { type ProjectSummary } from "@/content/site";

type ProjectCardProps = {
  project: ProjectSummary;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid gap-5 border-t border-white/9 pt-5 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-8">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[0.63rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
            {project.category}
          </p>
          <span className="h-1 w-1 rounded-full bg-white/25" />
          <p className="text-[0.82rem] text-[color:var(--color-text-soft)]">
            {project.impact}
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-[1.65rem] leading-[1.08] tracking-[-0.05em] text-white">
            {project.title}
          </h3>
          <p className="max-w-xl text-[0.97rem] leading-8 text-[color:var(--color-text-soft)]">
            {project.summary}
          </p>
        </div>
      </div>
      <div className="space-y-4 lg:pl-2">
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="rounded-sm border border-white/8 bg-transparent px-2 py-1 text-[0.7rem] text-[color:var(--color-text-soft)]"
            >
              {item}
            </Badge>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-[0.92rem] text-white transition-colors group-hover:text-[color:var(--color-accent)]"
        >
          项目详情
          <ArrowUpRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}
