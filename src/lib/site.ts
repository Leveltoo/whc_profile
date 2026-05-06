import {
  contactInfo,
  featuredProjectSlugs,
  projectDetails,
  siteProfile,
  type ProjectCategory,
  type ProjectDetail,
  type ProjectSummary,
} from "@/content/site";

export function getAllProjects(): ProjectDetail[] {
  return projectDetails;
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): ProjectDetail[] {
  return featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectDetail => Boolean(project));
}

export function groupProjectsByCategory(): Array<{
  category: ProjectCategory;
  projects: ProjectSummary[];
}> {
  const order: ProjectCategory[] = [
    "AI 智能体",
    "大屏可视化",
    "企业后台与审批流",
    "跨端与桌面端",
    "开源系统",
  ];

  return order
    .map((category) => ({
      category,
      projects: projectDetails.filter(
        (project) => project.category === category,
      ),
    }))
    .filter((group) => group.projects.length > 0);
}

export function getPrimaryContact() {
  return contactInfo[0];
}

export function buildPageTitle(title?: string) {
  return title
    ? `${title} | ${siteProfile.name}`
    : `${siteProfile.name} | ${siteProfile.title}`;
}

export function buildPageDescription(description?: string) {
  return (
    description ??
    `${siteProfile.title}，${siteProfile.focus} 当前关注 ${siteProfile.availability}。`
  );
}
