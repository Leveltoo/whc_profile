import { describe, expect, it } from "vitest";

import {
  buildPageDescription,
  buildPageTitle,
  getFeaturedProjects,
  getPrimaryContact,
  groupProjectsByCategory,
} from "@/lib/site";

describe("site helpers", () => {
  it("returns grouped project collections in the expected order", () => {
    const groups = groupProjectsByCategory();

    expect(groups[0]?.category).toBe("AI 智能体");
    expect(groups.some((group) => group.category === "开源系统")).toBe(true);
  });

  it("keeps featured projects available for the homepage", () => {
    const featured = getFeaturedProjects();

    expect(featured.length).toBeGreaterThanOrEqual(4);
    expect(featured[0]?.slug).toBe("cabinet");
  });

  it("builds stable title and description fallbacks", () => {
    expect(buildPageTitle("项目案例")).toBe("项目案例 | 王华琛");
    expect(buildPageDescription()).toContain("高级前端");
  });

  it("exposes a primary contact entry for CTA usage", () => {
    expect(getPrimaryContact().label).toBe("电话");
  });
});
