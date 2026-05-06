import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";
import { buildProjectJsonLd } from "@/lib/seo";
import { getAllProjects, getProjectBySlug } from "@/lib/site";

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

function AssetPlaceholder({
  type,
  title,
  description,
}: {
  type: "cover" | "gallery" | "diagram";
  title: string;
  description: string;
}) {
  const gradients = {
    cover:
      "from-[rgba(199,164,92,0.28)] via-[rgba(255,255,255,0.05)] to-[rgba(114,144,196,0.2)]",
    gallery:
      "from-[rgba(114,144,196,0.26)] via-[rgba(255,255,255,0.05)] to-[rgba(128,186,165,0.18)]",
    diagram:
      "from-[rgba(255,255,255,0.08)] via-[rgba(199,164,92,0.14)] to-[rgba(255,255,255,0.03)]",
  };

  return (
    <div
      className={`rounded-[1.4rem] border border-white/9 bg-gradient-to-br ${gradients[type]} p-5`}
    >
      <div className="flex min-h-52 flex-col justify-between rounded-[1rem] border border-white/10 bg-black/12 p-5">
        <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
          {type}
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-[1.7rem] tracking-[-0.04em] text-white">
            {title}
          </h3>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--color-text-soft)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(
  props: ProjectRouteProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "项目不存在",
      description: "未找到对应项目案例。",
      path: `/projects/${slug}`,
    });
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage(props: ProjectRouteProps) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = buildProjectJsonLd(slug);

  return (
    <section className="px-5 pt-16 pb-18 sm:px-8 sm:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-[color:var(--color-text-soft)] hover:text-white"
        >
          <ArrowLeftIcon size={16} />
          返回项目列表
        </Link>

        <div className="grid gap-10 border-t border-white/9 pt-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-7">
            <Badge
              variant="outline"
              className="rounded-full border-white/12 bg-transparent px-3 py-1 font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[color:var(--color-text-soft)]"
            >
              {project.category}
            </Badge>
            <div className="space-y-4">
              <h1 className="font-heading text-[3rem] tracking-[-0.06em] text-white sm:text-[4.4rem]">
                {project.title}
              </h1>
              <p className="max-w-4xl text-[1rem] leading-8 text-[color:var(--color-text-soft)]">
                {project.summary}
              </p>
            </div>
            <div className="grid gap-4 border-l border-white/9 pl-4 lg:grid-cols-[11rem_minmax(0,1fr)] lg:items-start">
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                技术栈
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="rounded-sm border border-white/8 bg-transparent px-2 py-1 text-[0.68rem] text-white"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:pl-2">
            <div className="border-t border-white/9 pt-4">
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                项目概览
              </div>
            </div>
            <div className="space-y-5 text-sm leading-7 text-[color:var(--color-text-soft)]">
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                  角色
                </div>
                <p className="mt-2">{project.role}</p>
              </div>
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                  周期
                </div>
                <p className="mt-2">{project.period}</p>
              </div>
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                  场景
                </div>
                <p className="mt-2">{project.teamContext}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 border-t border-white/9 pt-5">
            <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
              素材与示意
            </div>
            <p className="text-sm text-[color:var(--color-text-soft)]">
              没有完整截图的项目，会先用结构化占位保证阅读不断档。
            </p>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {(project.assets.length > 0
            ? project.assets
            : [
                {
                  title: "素材待补充",
                  type: "cover" as const,
                  description: "当前没有公开截图，这里先保留结构，后面再补图。",
                },
              ]
          ).map((asset) => (
            <AssetPlaceholder
              key={`${asset.type}-${asset.title}`}
              type={asset.type}
              title={asset.title}
              description={asset.description}
            />
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="space-y-10">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="背景"
                title="问题背景"
                description={project.challenge}
              />
              <div className="grid gap-4 border-l border-white/10 pl-5">
                {project.responsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-[color:var(--color-text-soft)]"
                  >
                    <span className="mt-3 h-1 w-1 rounded-full bg-white/45" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <SectionHeading
                eyebrow="拆解"
                title="关键技术拆解"
                description="下面按问题、方案和结果来写，方便直接看我在项目里做了什么。"
              />
              <div className="grid gap-6">
                {project.sections.map((section, index) => (
                  <article
                    key={section.title}
                    className="grid gap-5 border-t border-white/9 pt-5 lg:grid-cols-[4.5rem_minmax(0,1fr)]"
                  >
                    <div className="font-mono text-[0.68rem] tracking-[0.12em] text-[color:var(--color-text-muted)]">
                      0{index + 1}
                    </div>
                    <div className="grid gap-5">
                      <h3 className="font-heading text-[1.75rem] tracking-[-0.04em] text-white">
                        {section.title}
                      </h3>
                      <div className="grid gap-5 text-sm leading-7 text-[color:var(--color-text-soft)] lg:grid-cols-3">
                        <div>
                          <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                            问题
                          </div>
                          <p className="mt-2">{section.problem}</p>
                        </div>
                        <div>
                          <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                            方案
                          </div>
                          <p className="mt-2">{section.solution}</p>
                        </div>
                        <div>
                          <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)]">
                            结果
                          </div>
                          <p className="mt-2">{section.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="border-t border-white/9 pt-5">
              <h2 className="font-heading text-[1.7rem] tracking-[-0.04em] text-white">
                结果与指标
              </h2>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-[color:var(--color-text-soft)]">
                {project.outcomes.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-3 h-1 w-1 rounded-full bg-white/50" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/9 pt-5">
              <h2 className="font-heading text-[1.7rem] tracking-[-0.04em] text-white">
                相关产出
              </h2>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-[color:var(--color-text-soft)]">
                {project.links.length > 0 ? (
                  project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 text-[color:var(--color-accent)] hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRightIcon size={16} />
                    </Link>
                  ))
                ) : (
                  <p>这个项目暂时没有公开链接，后面如果方便会再补充。</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
