"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/shared/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { groupProjectsByCategory } from "@/lib/site";

const groups = groupProjectsByCategory();
const categoryCopy: Record<string, string> = {
  "AI 智能体": "这部分主要是 AI 应用前端、流式交互和任务编排相关项目。",
  大屏可视化: "这里放的是大屏、地图渲染和实时数据展示类项目。",
  企业后台与审批流: "主要是复杂后台、工单流转、审批链和管理中台项目。",
  跨端与桌面端: "这一组偏跨端业务、桌面端和多终端交付经验。",
  开源系统: "个人长期维护的项目，会更完整地体现架构和全链路交付能力。",
};

export function ProjectCategoryTabs() {
  const [value, setValue] = useState(groups[0]?.category ?? "");
  const activeGroup = groups.find((group) => group.category === value);

  return (
    <Tabs value={value} onValueChange={setValue} className="gap-10">
      <div className="grid gap-6 border-b border-white/9 pb-6 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-end">
        <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0">
          {groups.map((group) => (
            <TabsTrigger
              key={group.category}
              value={group.category}
              className="flex-none rounded-full border border-white/8 px-4 py-2 font-mono text-[0.68rem] tracking-[0.12em] text-[color:var(--color-text-soft)] data-active:border-[color:var(--color-accent)] data-active:bg-transparent data-active:text-white data-active:shadow-none"
            >
              {group.category}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="text-sm leading-7 text-[color:var(--color-text-soft)] lg:text-right">
          当前分类 {activeGroup?.projects.length ?? 0} 个项目
        </div>
      </div>

      {groups.map((group) => (
        <TabsContent
          key={group.category}
          value={group.category}
          className="space-y-8"
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start">
            <div className="max-w-3xl text-[0.96rem] leading-8 text-[color:var(--color-text-soft)]">
              {categoryCopy[group.category]}
            </div>
            <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-[color:var(--color-text-muted)] lg:text-right">
              {group.category}
            </div>
          </div>
          <div className="grid gap-6">
            {group.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
