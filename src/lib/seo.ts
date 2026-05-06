import { contactInfo, projectDetails, siteProfile } from "@/content/site";

const DEFAULT_SITE_URL = "https://whc-profile.vercel.app";

export function getSiteUrl() {
  const rawUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).trim();
  const normalizedUrl = /^https?:\/\//i.test(rawUrl)
    ? rawUrl
    : `https://${rawUrl}`;

  return normalizedUrl.replace(/\/+$/, "");
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

function getSameAsLinks() {
  return contactInfo
    .map((item) => item.href)
    .filter((href) => href.startsWith("https://"));
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteProfile.name} 的个人站`,
    url: getSiteUrl(),
    inLanguage: "zh-CN",
    description: `${siteProfile.title}，${siteProfile.focus}`,
    publisher: {
      "@type": "Person",
      name: siteProfile.name,
      url: getSiteUrl(),
    },
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    alternateName: siteProfile.englishName,
    jobTitle: siteProfile.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteProfile.location,
      addressCountry: "CN",
    },
    url: getSiteUrl(),
    description: `${siteProfile.title}，${siteProfile.focus}`,
    knowsAbout: [
      "React",
      "Vue",
      "Next.js",
      "AI 应用前端",
      "复杂业务系统",
      "可视化项目",
      "BFF",
      "前端工程化",
    ],
    sameAs: getSameAsLinks(),
  };
}

export function buildProjectsCollectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "项目经历",
    url: getAbsoluteUrl("/projects"),
    inLanguage: "zh-CN",
    description:
      "按 AI 智能体、可视化、企业后台、跨端与开源系统整理的项目案例集合。",
    about: projectDetails.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: getAbsoluteUrl(`/projects/${project.slug}`),
    })),
  };
}

export function buildResumeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${siteProfile.name} 在线简历`,
    url: getAbsoluteUrl("/resume"),
    inLanguage: "zh-CN",
    about: {
      "@type": "Person",
      name: siteProfile.name,
      jobTitle: siteProfile.title,
      description: siteProfile.focus,
      sameAs: getSameAsLinks(),
    },
  };
}

export function buildProjectJsonLd(slug: string) {
  const project = projectDetails.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Unknown project slug: ${slug}`);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    url: getAbsoluteUrl(`/projects/${project.slug}`),
    inLanguage: "zh-CN",
    author: {
      "@type": "Person",
      name: siteProfile.name,
      url: getSiteUrl(),
    },
    about: [project.category, ...project.stack],
    keywords: project.stack.join(", "),
  };
}

export function buildLlmsText() {
  const lines = [
    `# ${siteProfile.name}`,
    "",
    `> ${siteProfile.title}`,
    "",
    `- 站点地址: ${getSiteUrl()}`,
    `- 在线简历: ${getAbsoluteUrl("/resume")}`,
    `- 项目列表: ${getAbsoluteUrl("/projects")}`,
    "",
    "## 简介",
    siteProfile.focus,
    "",
    "## 重点页面",
    `- 首页: ${getAbsoluteUrl("/")}`,
    `- 项目列表: ${getAbsoluteUrl("/projects")}`,
    `- 在线简历: ${getAbsoluteUrl("/resume")}`,
    "",
    "## 代表项目",
    ...projectDetails
      .slice(0, 6)
      .map(
        (project) =>
          `- ${project.title}: ${getAbsoluteUrl(`/projects/${project.slug}`)}`,
      ),
    "",
    "## 联系方式",
    ...contactInfo.map((item) => `- ${item.label}: ${item.value}`),
  ];

  return lines.join("\n");
}
