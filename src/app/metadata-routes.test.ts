import { describe, expect, it } from "vitest";

import manifest from "@/app/manifest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

describe("metadata routes", () => {
  it("builds crawl directives with sitemap reference", () => {
    const result = robots();

    expect(result.rules).toBeDefined();
    expect(result.sitemap).toBe("https://whc-profile.vercel.app/sitemap.xml");
    expect(result.host).toBeUndefined();
  });

  it("builds a sitemap that exposes primary pages and project detail routes", () => {
    const entries = sitemap();

    expect(
      entries.some((entry) => entry.url === "https://whc-profile.vercel.app/"),
    ).toBe(true);
    expect(
      entries.some(
        (entry) => entry.url === "https://whc-profile.vercel.app/resume",
      ),
    ).toBe(true);
    expect(
      entries.some((entry) => entry.url?.endsWith("/projects/cabinet")),
    ).toBe(true);
  });

  it("builds a manifest with portfolio identity", () => {
    const result = manifest();

    expect(result.name).toContain("王华琛");
    expect(result.start_url).toBe("/");
    expect(result.icons).toBeUndefined();
  });
});
