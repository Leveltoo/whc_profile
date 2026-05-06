import { ProjectCategoryTabs } from "@/components/blocks/project-category-tabs";
import { SectionHeading } from "@/components/shared/section-heading";
import { createMetadata } from "@/lib/metadata";
import { buildProjectsCollectionJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "项目案例",
  description:
    "按 AI 智能体、可视化、企业后台、跨端与开源系统整理的项目案例集合。",
  path: "/projects",
});

export default function ProjectsPage() {
  const jsonLd = buildProjectsCollectionJsonLd();

  return (
    <section className="px-5 pt-16 pb-18 sm:px-8 sm:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow="项目"
          title="项目经历"
          description="按项目类型整理，方便查看我做过的方向和代表项目。"
        />
        <ProjectCategoryTabs />
      </div>
    </section>
  );
}
