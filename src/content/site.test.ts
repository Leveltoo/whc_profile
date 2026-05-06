import { describe, expect, it } from "vitest";

import {
  featuredProjectSlugs,
  projectDetails,
  siteProfile,
} from "@/content/site";

describe("site content", () => {
  it("keeps each featured slug resolvable", () => {
    const slugs = new Set(projectDetails.map((project) => project.slug));

    for (const slug of featuredProjectSlugs) {
      expect(slugs.has(slug)).toBe(true);
    }
  });

  it("defines fallback-safe project content for every project", () => {
    for (const project of projectDetails) {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.summary.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.responsibilities.length).toBeGreaterThan(0);
      expect(project.sections.length).toBeGreaterThan(0);
      expect(Array.isArray(project.assets)).toBe(true);
      expect(Array.isArray(project.links)).toBe(true);
    }
  });

  it("keeps the site profile aligned with the senior frontend positioning", () => {
    expect(siteProfile.title).toContain("高级前端");
    expect(siteProfile.focus).toContain("AI");
  });
});
