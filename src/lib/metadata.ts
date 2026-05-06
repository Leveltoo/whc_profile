import type { Metadata } from "next";

import { buildPageDescription, buildPageTitle } from "@/lib/site";
import { getSiteUrl } from "@/lib/seo";

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const resolvedTitle = buildPageTitle(title);
  const resolvedDescription = buildPageDescription(description);
  const siteUrl = getSiteUrl();
  const url = new URL(path, siteUrl).toString();
  const bingVerification = process.env.BING_SITE_VERIFICATION;
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(siteUrl),
    title: resolvedTitle,
    description: resolvedDescription,
    applicationName: "王华琛个人站",
    keywords: [
      "王华琛",
      "高级前端工程师",
      "全栈偏前端",
      "AI 应用前端",
      "可视化项目",
      "复杂业务系统",
      "Next.js",
      "React",
      "Vue",
      "BFF",
    ],
    authors: [{ name: "王华琛", url: siteUrl }],
    creator: "王华琛",
    publisher: "王华琛",
    category: "Personal Portfolio",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: googleVerification,
      other: bingVerification
        ? {
            "msvalidate.01": bingVerification,
          }
        : undefined,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: "王华琛简历站",
      type: "website",
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}
