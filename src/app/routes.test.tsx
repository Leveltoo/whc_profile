import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";
import ProjectDetailPage from "@/app/projects/[slug]/page";
import ProjectsPage from "@/app/projects/page";
import ResumePage from "@/app/resume/page";

describe("primary routes", () => {
  it("renders the home page identity and primary entry points", () => {
    render(<Home />);

    expect(screen.getByText("王华琛")).toBeInTheDocument();
    expect(screen.getByText("高级前端工程师 / 全栈偏前端")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /项目列表/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /查看在线简历/i }),
    ).toBeInTheDocument();
  });

  it("renders the projects overview with category navigation", () => {
    render(<ProjectsPage />);

    expect(screen.getByText("项目经历")).toBeInTheDocument();
    expect(screen.getByText("AI 智能体")).toBeInTheDocument();
    expect(
      screen.getByText("按项目类型整理，方便查看我做过的方向和代表项目。"),
    ).toBeInTheDocument();
  });

  it("renders the resume page with download action and profile summary", () => {
    render(<ResumePage />);

    expect(screen.getByText("在线简历")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /简历 pdf/i })).toBeInTheDocument();
    expect(screen.getByText("王华琛")).toBeInTheDocument();
    expect(screen.getByText("能力摘要")).toBeInTheDocument();
  });

  it("keeps project detail pages readable without rich media", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "ai-agent-platform" }),
    });

    render(page);

    expect(
      screen.getByRole("link", { name: /返回项目列表/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("项目概览")).toBeInTheDocument();
    expect(screen.getByText("问题背景")).toBeInTheDocument();
    expect(screen.getByText("关键技术拆解")).toBeInTheDocument();
    expect(screen.getByText("结果与指标")).toBeInTheDocument();
  });
});
