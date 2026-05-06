import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroBlock } from "@/components/blocks/hero-block";
import ProjectDetailPage from "@/app/projects/[slug]/page";

describe("page blocks", () => {
  it("renders the hero with work-focus labels and current opportunity context", () => {
    render(<HeroBlock />);

    expect(screen.getByText("主要工作")).toBeInTheDocument();
    expect(screen.getByText("交付范围")).toBeInTheDocument();
    expect(screen.getByText("当前关注")).toBeInTheDocument();
    expect(
      screen.getByText("复杂业务系统、AI 应用前端、可视化项目"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "简历 PDF" })).toBeInTheDocument();
  });

  it("renders the project detail page with readable section ordering", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "cabinet" }),
    });

    render(page);

    expect(screen.getByText("项目概览")).toBeInTheDocument();
    expect(screen.getByText("问题背景")).toBeInTheDocument();
    expect(screen.getByText("关键技术拆解")).toBeInTheDocument();
    expect(screen.getByText("相关产出")).toBeInTheDocument();
  });
});
