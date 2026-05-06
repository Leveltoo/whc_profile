import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectCategoryTabs } from "@/components/blocks/project-category-tabs";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

describe("site shell", () => {
  it("renders the header with personal positioning and resume entry", () => {
    render(<SiteHeader />);

    expect(screen.getByText("王华琛")).toBeInTheDocument();
    expect(screen.getByText("高级前端 / 全栈偏前端")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "首页" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "简历 PDF" })).toBeInTheDocument();
  });

  it("renders the footer as a personal profile summary instead of generic marketing copy", () => {
    render(<SiteFooter />);

    expect(
      screen.getByText(
        "这个站点主要用来集中展示我的项目经历、工作方向和联系方式。",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /gitee/i })).toBeInTheDocument();
  });

  it("renders project category guidance with work-type specific descriptions", () => {
    render(<ProjectCategoryTabs />);

    expect(screen.getByText("AI 智能体")).toBeInTheDocument();
    expect(
      screen.getByText(
        "这部分主要是 AI 应用前端、流式交互和任务编排相关项目。",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/当前分类/i)).toBeInTheDocument();
  });
});
