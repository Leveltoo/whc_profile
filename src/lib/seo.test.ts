import { afterEach, describe, expect, it } from "vitest";

import {
  buildLlmsText,
  buildPersonJsonLd,
  buildProjectJsonLd,
  buildWebsiteJsonLd,
  getSiteUrl,
} from "@/lib/seo";

describe("seo helpers", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  });

  it("uses the configured public site url and trims trailing slashes", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://resume.wanghuachen.dev/";

    expect(getSiteUrl()).toBe("https://resume.wanghuachen.dev");
  });

  it("normalizes configured site urls that omit the protocol", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "www.gem-chen.cn";

    expect(getSiteUrl()).toBe("https://www.gem-chen.cn");
  });

  it("falls back to the default production host when env is absent", () => {
    expect(getSiteUrl()).toBe("https://whc-profile.vercel.app");
  });

  it("builds website and person json-ld for search and ai crawlers", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://resume.wanghuachen.dev";

    const website = buildWebsiteJsonLd();
    const person = buildPersonJsonLd();

    expect(website["@type"]).toBe("WebSite");
    expect(website.url).toBe("https://resume.wanghuachen.dev");
    expect(person["@type"]).toBe("Person");
    expect(person.name).toBe("王华琛");
    expect(person.sameAs).toContain("https://gitee.com/wanghuachen");
  });

  it("builds project json-ld with stable public urls", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://resume.wanghuachen.dev";

    const project = buildProjectJsonLd("cabinet");

    expect(project["@type"]).toBe("Article");
    expect(project.url).toBe("https://resume.wanghuachen.dev/projects/cabinet");
    expect(project.headline).toContain("Cabinet");
  });

  it("builds llms text that exposes key routes and projects", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://resume.wanghuachen.dev";

    const llms = buildLlmsText();

    expect(llms).toContain("王华琛");
    expect(llms).toContain("https://resume.wanghuachen.dev/projects");
    expect(llms).toContain("Cabinet");
  });
});
