export type ContactChannel = {
  label: string;
  href: string;
  value: string;
};

export type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

export type CapabilityItem = {
  title: string;
  summary: string;
  bullets: string[];
};

export type CareerStage = {
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: string[];
};

export type ProjectAsset = {
  title: string;
  type: "cover" | "gallery" | "diagram";
  description: string;
};

export type ProjectDetailSection = {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type ProjectCategory =
  | "AI 智能体"
  | "大屏可视化"
  | "企业后台与审批流"
  | "跨端与桌面端"
  | "开源系统";

export type ProjectSummary = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  impact: string;
  stack: string[];
  spotlight?: boolean;
};

export type ProjectDetail = ProjectSummary & {
  role: string;
  period: string;
  teamContext: string;
  challenge: string;
  responsibilities: string[];
  sections: ProjectDetailSection[];
  outcomes: string[];
  assets: ProjectAsset[];
  links: Array<{ label: string; href: string }>;
};

export const siteProfile = {
  name: "王华琛",
  englishName: "Wang Huachen",
  title: "高级前端工程师 / 全栈偏前端",
  location: "南京",
  experience: "7 年",
  focus:
    "做过复杂业务系统、AI 应用前端和可视化项目，也处理过 BFF 和工程化相关工作。",
  availability: "在职，关注高级前端 / 前端架构 / 全栈偏前端机会",
};

export const heroMetrics: HeroMetric[] = [
  {
    label: "复杂项目交付",
    value: "0 到 1",
    detail: "做过 SSR 管理台、AI 智能体应用、大屏重构与工单编排系统。",
  },
  {
    label: "主技术范围",
    value: "React + Vue",
    detail: "既能做 Next.js / React，也有长期 Vue / UniApp / Electron 经验。",
  },
  {
    label: "架构与协作",
    value: "BFF / Monorepo",
    detail: "有前端工程化、权限模型、NestJS BFF 和多人协作项目经验。",
  },
];

export const capabilities: CapabilityItem[] = [
  {
    title: "前端架构与工程化",
    summary: "项目里会先把页面边界、状态组织和复用方式理顺。",
    bullets: [
      "Next.js App Router、Vue3、Monorepo、组件抽象与权限建模",
      "SSR/SSG、BFF 协作、状态管理与代码组织",
    ],
  },
  {
    title: "AI 智能体交互前端",
    summary: "做过 SSE、文件解析和多轮上下文这类 AI 交互前端。",
    bullets: [
      "流式对话、任务看板、文件上传解析、多轮上下文管理",
      "做过 Agent、Copilot 和内部效率工具方向的界面",
    ],
  },
  {
    title: "可视化与实时数据",
    summary: "做过大屏重构、地图渲染和实时数据推送类项目。",
    bullets: [
      "ECharts、地图渲染、撒点动画、磁贴布局、WebSocket",
      "对大屏复杂布局、数据刷新和多分辨率适配有实战经验",
    ],
  },
  {
    title: "全栈偏前端交付",
    summary: "除了前端页面，也能处理 BFF 和接口聚合这一层。",
    bullets: [
      "NestJS、RESTful API、SQLite、Socket.IO、鉴权与聚合层",
      "能独立推进完整链路而不是停在页面层",
    ],
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    slug: "cabinet",
    title: "Cabinet - 多智能体内阁系统",
    category: "开源系统",
    summary:
      "个人独立开发的多智能体协作系统，聚焦智能体编排、实时通信与记忆体系。",
    impact: "把多智能体协作、记忆系统、权限安全和实时通信整理成一个完整项目。",
    stack: [
      "NestJS 11",
      "Vue 3",
      "Nx Monorepo",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
    ],
    spotlight: true,
    role: "独立设计与开发",
    period: "个人持续迭代项目",
    teamContext: "开源项目 / 个人长期维护",
    challenge:
      "项目不是单一聊天界面，而是多部门 Agent 协作、记忆蒸馏、实时事件广播与权限安全并存的复杂系统。",
    responsibilities: [
      "定义 Nx Monorepo 边界与前后端模块划分",
      "设计多智能体协作链路与事件广播机制",
      "实现凭证加密、密钥派生与实时通信流程",
      "搭建前端任务与决策可视化界面",
    ],
    sections: [
      {
        title: "多智能体协作编排",
        problem: "Agent 之间的协作关系复杂，直接堆接口会让状态和事件失控。",
        solution:
          "将决策、事件与部门职责模块化，配合 EventBus 到 WebSocket 的广播桥接，收敛实时交互路径。",
        outcome: "前端能稳定展示系统状态，协作过程也更容易看清。",
      },
      {
        title: "安全与凭证管理",
        problem: "多模型与多服务接入需要处理敏感凭证，明文存储不可接受。",
        solution:
          "实现 AES-256-GCM 加密与 scrypt KDF 密钥派生，建立基础安全策略。",
        outcome: "让项目在安全处理上更接近真实可用系统，而不只是演示。",
      },
      {
        title: "品牌级工程组织",
        problem: "个人项目容易在功能扩张后迅速失控，后续迭代成本陡增。",
        solution:
          "用 Nx 管理前后端模块、共享类型与增量迭代节奏，保持边界清晰。",
        outcome: "项目后续扩展时不容易失控，也更适合长期维护。",
      },
    ],
    outcomes: [
      "比较完整地覆盖了架构设计、AI 工程理解和全栈交付这几个方向",
      "覆盖智能体协作、事件广播、实时前端和安全处理等关键能力点",
    ],
    assets: [
      {
        title: "系统概览占位",
        type: "cover",
        description:
          "首版先用结构化封面与模块列表代替完整截图，后续可补产品截图。",
      },
    ],
    links: [
      { label: "Gitee 仓库", href: "https://gitee.com/wanghuachen/cabinet" },
    ],
  },
  {
    slug: "ai-agent-platform",
    title: "AI 智能体应用平台",
    category: "AI 智能体",
    summary:
      "面向业务场景的智能体交互平台，支持流式对话、文件上传解析和任务看板。",
    impact: "把后端智能体能力整理成用户能直接使用的前端界面。",
    stack: ["Vue 3", "TypeScript", "SSE", "文件上传", "流式对话"],
    spotlight: true,
    role: "前端主导开发",
    period: "近阶段业务项目",
    teamContext: "企业内 AI 应用 / 智能体前端交互",
    challenge:
      "平台既要承接流式结果，又要处理文件解析、多轮上下文和任务状态切换，不能只做一个聊天壳子。",
    responsibilities: [
      "设计智能体交互主界面与任务管理视图",
      "对接 SSE 流式响应与消息状态更新",
      "实现文件上传解析与多轮上下文管理",
      "组织前端状态与界面反馈，降低交互不确定性",
    ],
    sections: [
      {
        title: "流式响应设计",
        problem: "AI 响应是逐步返回的，如果状态管理混乱，体验会非常碎。",
        solution:
          "围绕 SSE 建立消息流生命周期，区分输入、生成中、完成与失败状态。",
        outcome: "对话体验更完整，不是一次性把整段文本刷出来。",
      },
      {
        title: "文件与上下文协同",
        problem: "用户输入不只是一段文本，还可能带文件和连续上下文。",
        solution:
          "把文件上传解析、消息上下文和任务状态拆开管理，再在界面层统一组装。",
        outcome: "输入链路更清楚，后面继续加能力也更容易。",
      },
    ],
    outcomes: [
      "支撑文件上传、流式对话和任务管理一体化交互",
      "把 AI 能力落实到可用的前端交互里",
    ],
    assets: [],
    links: [],
  },
  {
    slug: "workorder-platform",
    title: "智能工单调度平台",
    category: "企业后台与审批流",
    summary: "围绕工单全生命周期、审批流与实时同步构建的复杂业务平台。",
    impact: "把工单流转、看板和实时协作放到同一个业务系统里。",
    stack: [
      "React 18",
      "TypeScript",
      "Zustand",
      "Ant Design Pro",
      "ECharts",
      "WebSocket",
    ],
    spotlight: true,
    role: "前端核心开发",
    period: "企业业务平台项目",
    teamContext: "工单管理 / 调度 / 审批流",
    challenge:
      "工单创建、分配、执行、验收、归档涉及状态复杂、审批链长、数据实时性强，传统 CRUD 方式很快会失控。",
    responsibilities: [
      "实现工单全生命周期前端交互",
      "封装 Zustand + Hook 的状态管理方案",
      "实现 Kanban 看板、审批流与图表数据看板",
      "通过 WebSocket 处理实时更新与多人协作反馈",
    ],
    sections: [
      {
        title: "状态流转编排",
        problem: "工单跨多个页面与角色流转，如果状态定义松散，维护成本很高。",
        solution:
          "用 Zustand + 自定义 Hook 抽象统一状态入口，把流转规则聚合到可复用逻辑层。",
        outcome: "减少了页面散落逻辑，后续流程调整更可控。",
      },
      {
        title: "实时与可视化协同",
        problem: "业务方既要看实时处理，又要快速洞察趋势和效率。",
        solution:
          "通过 WebSocket 推送关键变更，并用 ECharts 构建趋势、热力与效率视图。",
        outcome: "系统不只是录入工具，也能拿来看趋势和效率。",
      },
    ],
    outcomes: [
      "支撑多级审批、看板操作和实时数据更新",
      "提升运营团队工单处理效率 50%",
    ],
    assets: [
      {
        title: "工单看板占位",
        type: "gallery",
        description: "后续适合补 Kanban、审批流和图表截图。",
      },
    ],
    links: [],
  },
  {
    slug: "visualization-platform",
    title: "数据大屏可视化平台",
    category: "大屏可视化",
    summary: "参与能源电力与视联平台方向的大屏重构，主导可视化基础能力建设。",
    impact: "把原本偏定制化的大屏整理成更容易复用和维护的组件体系。",
    stack: ["Vue 3", "ECharts", "WebSocket", "地图渲染", "磁贴布局", "3D"],
    spotlight: true,
    role: "前端架构与核心功能实现",
    period: "近阶段大屏重构项目",
    teamContext: "能源电力 / 视联大屏 / 组件化重构",
    challenge:
      "大屏项目常见问题是页面耦合严重、复用差、分辨率适配困难，且实时数据与视觉效果都很重。",
    responsibilities: [
      "主导前端架构设计与基础框架搭建",
      "设计磁贴布局系统与 ECharts 地图渲染引擎",
      "实现撒点动画、实时数据刷新和适配策略",
      "推动组件化拆分与团队复用沉淀",
    ],
    sections: [
      {
        title: "大屏组件化重构",
        problem: "传统大屏经常是一次性页面，迭代一多就变成维护灾难。",
        solution:
          "围绕布局、图表、地图和动画拆分成独立组件与通用脚本，并建立统一发布方式。",
        outcome: "组件复用率提升 60%，后续需求交付更快。",
      },
      {
        title: "实时地图与动画引擎",
        problem: "地图、撒点和实时数据更新容易互相干扰，导致卡顿和代码混乱。",
        solution:
          "将地图渲染、图层更新和动画效果拆成有边界的模块，并控制刷新节奏。",
        outcome: "既保证展示效果，也降低了后续维护和扩展的难度。",
      },
    ],
    outcomes: [
      "沉淀大屏基础能力，支撑多个展示项目复用",
      "兼顾实时展示效果、多分辨率适配与后续扩展性",
    ],
    assets: [
      {
        title: "地图与撒点占位",
        type: "diagram",
        description: "首版用架构化描述代替真实项目截图，后续可补视觉素材。",
      },
    ],
    links: [],
  },
  {
    slug: "component-management",
    title: "组件库管理系统",
    category: "企业后台与审批流",
    summary:
      "基于 Next.js App Router 与 NestJS BFF 的组件库管理中台，兼顾 SSR 与权限系统。",
    impact: "把组件复用、BFF 聚合和后台权限整理成一套团队可复用的系统。",
    stack: [
      "Next.js App Router",
      "React 18",
      "TypeScript",
      "Ant Design",
      "Redux Toolkit",
      "NestJS BFF",
    ],
    role: "前端核心开发",
    period: "企业组件管理项目",
    teamContext: "管理中台 / 团队组件资产",
    challenge: "要同时处理 SSR、业务组件复用、动态权限和中台类复杂列表交互。",
    responsibilities: [
      "参与 Next.js App Router 管理中台开发",
      "二次封装通用业务组件并建设文档站",
      "设计 RBAC 动态权限与多租户细粒度控制",
      "通过 RTK Query 和性能优化降低首屏压力",
    ],
    sections: [
      {
        title: "BFF 聚合与权限",
        problem: "前端直接对接多后端服务会让鉴权与数据拼装非常分散。",
        solution:
          "用 NestJS BFF 做聚合与转换，前端围绕权限模型与页面状态进行组织。",
        outcome: "减少前端直接拼装多服务接口时的分散问题。",
      },
      {
        title: "可复用业务组件系统",
        problem: "后台系统迭代快，如果没有组件复用，团队会持续重复造轮子。",
        solution: "封装高级搜索、数据表格、权限按钮、树形选择器等业务组件。",
        outcome: "团队复用率达到 80%，同时缩短新页面搭建时间。",
      },
    ],
    outcomes: ["首屏加载时间降低 40%", "列表页渲染性能提升 60%"],
    assets: [],
    links: [],
  },
  {
    slug: "liveshop",
    title: "LiveShop 社交电商平台",
    category: "跨端与桌面端",
    summary: "面向移动端的社交电商平台，包含即时通讯、支付和社区互动模块。",
    impact: "把跨端业务、即时通讯和支付接入放进同一个移动端项目里。",
    stack: ["UniApp", "Vue 3", "TypeScript", "NIMSDK", "PayPal"],
    role: "前端核心开发",
    period: "业务平台项目",
    teamContext: "移动端社交电商",
    challenge:
      "跨端业务功能与 IM、支付、社区互动叠加后，交互和状态复杂度明显上升。",
    responsibilities: [
      "负责移动端核心业务开发与互动模块实现",
      "集成网易云信 NIMSDK、PayPal 支付和 Google 登录",
      "封装通用组件与公共逻辑，提升业务复用性",
    ],
    sections: [
      {
        title: "即时通讯集成",
        problem: "电商中的社交与沟通环节需要稳定消息能力。",
        solution:
          "接入 NIMSDK 实现单聊/群聊，并围绕业务场景组织会话和社区互动模块。",
        outcome: "增强用户互动链路，提升平台完整性。",
      },
    ],
    outcomes: ["完成社交、支付与社区能力组合交付"],
    assets: [],
    links: [],
  },
];

export const featuredProjectSlugs = [
  "cabinet",
  "ai-agent-platform",
  "workorder-platform",
  "visualization-platform",
] as const;

export const careerTimeline: CareerStage[] = [
  {
    period: "2025.04 - 至今",
    company: "同道快才（人力合作至南京力维智联）",
    role: "前端开发工程师",
    summary: "承担大屏重构、AI 应用前端和 Next.js + NestJS BFF 项目交付。",
    highlights: [
      "主导能源电力大屏可视化项目重构与基础框架搭建",
      "使用 Next.js App Router + TypeScript + NestJS BFF 开发展会展示项目",
      "负责 AI 应用前端，落地 SSE 流式对话与文件上传解析",
    ],
  },
  {
    period: "2023.06 - 2025.03",
    company: "北京君南圣达信息技术有限公司",
    role: "前端开发工程师",
    summary: "聚焦 Monorepo、组件化大屏、审批流、官网与即时通信。",
    highlights: [
      "负责中国铁塔视联平台大屏组件化拆分与重构",
      "开发工作流 / 审批流模块，实现流程可视化与条件分支",
      "搭建项目框架与通用 Hook，提升团队开发效率",
    ],
  },
  {
    period: "2018.10 - 2023.05",
    company: "互联派教育科技 / 大连真想科技",
    role: "前端开发工程师",
    summary: "积累 Vue 全家桶、UniApp、qiankun 微前端与综合业务系统经验。",
    highlights: [
      "负责综合管理系统、官网、小程序等多类型项目",
      "使用 qiankun 搭建微前端架构，实现多子应用集成",
      "在性能优化、跨端适配和业务模块拆分上积累了大量实战经验",
    ],
  },
];

export const openSourceProjects = [
  {
    title: "Cabinet",
    summary: "多智能体协作系统，包含实时通信、记忆蒸馏和安全处理。",
    href: "https://gitee.com/wanghuachen/cabinet",
  },
  {
    title: "SaaS ERP 平台",
    summary: "基于 Nuxt 4 + Vue 3 + TypeScript 的企业级 ERP 前端项目。",
    href: "https://gitee.com/wanghuachen/sass-platform",
  },
];

export const contactInfo: ContactChannel[] = [
  { label: "电话", value: "15164252145", href: "tel:15164252145" },
  {
    label: "邮箱",
    value: "1056480375@qq.com",
    href: "mailto:1056480375@qq.com",
  },
  {
    label: "Gitee",
    value: "gitee.com/wanghuachen",
    href: "https://gitee.com/wanghuachen",
  },
  {
    label: "简历 PDF",
    value: "下载简历",
    href: "/resume.pdf",
  },
];
