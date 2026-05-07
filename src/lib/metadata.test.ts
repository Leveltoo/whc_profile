import { describe, expect, it } from "vitest";

import { createMetadata } from "@/lib/metadata";

describe("metadata helpers", () => {
  it("builds route-specific titles and canonical urls", () => {
    const metadata = createMetadata({
      title: "项目案例",
      description: "项目列表",
      path: "/projects",
    });

    expect(metadata.title).toBe("项目案例 | 王华琛");
    expect(metadata.description).toBe("项目列表");
    expect(metadata.alternates?.canonical).toBe(
      "https://whc-profile.vercel.app/projects",
    );
  });

  it("falls back to site-level description when route copy is omitted", () => {
    const metadata = createMetadata({});

    expect(String(metadata.title)).toContain("王华琛");
    expect(String(metadata.description)).toContain("高级前端");
    expect(metadata.metadataBase?.toString()).toBe(
      "https://whc-profile.vercel.app/",
    );
    expect(metadata.openGraph?.siteName).toBe("王华琛简历站");
  });

  it("includes webmaster verification fields when env values are provided", () => {
    process.env.BING_SITE_VERIFICATION = "bing-token";
    process.env.GOOGLE_SITE_VERIFICATION = "google-token";

    const metadata = createMetadata({});

    expect(metadata.verification?.other?.["msvalidate.01"]).toBe("bing-token");
    expect(metadata.verification?.google).toBe("google-token");

    delete process.env.BING_SITE_VERIFICATION;
    delete process.env.GOOGLE_SITE_VERIFICATION;
  });
});
