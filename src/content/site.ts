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
      "个人独立开发的多智能体协作系统，覆盖角色分工、任务编排、实时事件同步与记忆管理，目标不是做聊天壳子，而是把多 Agent 协作链路真正跑起来。",
    impact:
      "把多智能体协作、实时通信、安全处理和长期可维护的工程结构收敛成一个能持续迭代的完整项目。",
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
      "项目不是单一对话界面，而是一个同时包含部门 Agent 协作、任务流转、记忆沉淀、实时事件广播和凭证安全的复杂系统。难点在于既要把协作链路设计清楚，又要让前后端状态、事件和权限边界长期可维护。",
    responsibilities: [
      "从零定义 Nx Monorepo 的前后端边界、共享类型和模块拆分方式",
      "设计多智能体协作链路、部门职责模型和实时事件广播机制",
      "实现凭证加密、密钥派生、WebSocket 实时通信等关键基础能力",
      "搭建任务流、决策过程和系统状态可视化界面",
    ],
    sections: [
      {
        title: "多智能体协作编排",
        problem:
          "多个 Agent 之间既有角色分工，又有跨节点事件传递。如果只是把接口串起来，前后端状态很快就会散掉，协作链路也很难排查。",
        solution:
          "我把部门职责、决策流程、事件模型拆成独立模块，再通过 EventBus 到 WebSocket 的桥接把实时路径收拢到统一通道里。",
        outcome:
          "前端可以稳定展示任务状态、角色分工和事件流转，后续继续加 Agent 或调整协作流程时也不容易失控。",
      },
      {
        title: "安全与凭证管理",
        problem:
          "项目要接多模型和多服务，就绕不开敏感凭证管理。如果直接明文存储或把安全逻辑散在业务代码里，项目很难进入可持续迭代阶段。",
        solution:
          "实现 AES-256-GCM 加密、scrypt KDF 密钥派生和基础密钥管理策略，把凭证处理从业务流程里独立出来。",
        outcome:
          "项目在安全处理上更接近真实系统，而不是只能演示功能逻辑的 Demo。",
      },
      {
        title: "品牌级工程组织",
        problem:
          "个人项目最容易出现的问题不是功能做不出来，而是功能一多以后结构迅速失控，后面每加一块都要反复返工。",
        solution:
          "我用 Nx 管理前后端模块、共享类型和依赖边界，把实时通信、AI 协作和基础设施拆成可以独立迭代的层次。",
        outcome:
          "后续再扩展 Agent、记忆系统或管理能力时，不需要把核心结构推倒重来，更适合长期维护。",
      },
    ],
    outcomes: [
      "完整覆盖了多智能体协作、实时前端、权限安全和全栈交付这几个关键能力点",
      "不是单点功能验证，而是一个可以持续扩展的多 Agent 系统雏形",
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
      "面向业务场景的智能体交互平台，支持流式对话、文件上传解析、多轮上下文和任务看板，重点是把后端能力整理成用户可持续使用的产品界面。",
    impact:
      "把后端智能体能力收敛成一套可操作、可反馈、可追踪的前端交互系统，而不是只做一个聊天窗口。",
    stack: ["Vue 3", "TypeScript", "SSE", "文件上传", "流式对话"],
    spotlight: true,
    role: "前端主导开发",
    period: "近阶段业务项目",
    teamContext: "企业内 AI 应用 / 智能体前端交互",
    challenge:
      "平台既要承接流式结果，又要处理文件解析、多轮上下文、任务状态切换和错误反馈。真正的难点不在于接上 SSE，而在于把这些状态组织成一个用户能持续操作的交互系统。",
    responsibilities: [
      "设计智能体工作台主界面、任务管理视图和结果反馈路径",
      "对接 SSE 流式响应，处理消息生成中、完成、失败等状态切换",
      "实现文件上传解析、多轮上下文管理和任务链路衔接",
      "组织前端状态与界面反馈，减少 AI 交互中的不确定感和断裂感",
    ],
    sections: [
      {
        title: "流式响应设计",
        problem:
          "AI 响应是逐步返回的，用户还会中途继续提问、上传文件或切任务。如果消息状态没有统一生命周期，界面体验会非常碎。",
        solution:
          "我围绕 SSE 建立消息流生命周期，明确区分输入、生成中、完成、失败和重试等状态，并把这些状态映射到统一界面反馈里。",
        outcome:
          "对话不是简单地把一整段文本刷出来，而是有连续反馈、可感知状态和可恢复路径的产品级交互。",
      },
      {
        title: "文件与上下文协同",
        problem:
          "用户输入不只是文本，还可能带文件、历史上下文和任务状态。如果把这些信息混在一个消息层里，后面很难扩能力。",
        solution:
          "我把文件上传解析、消息上下文和任务状态拆开管理，再在界面层统一组装，确保每条链路都能独立处理和追踪。",
        outcome:
          "输入链路更清楚，后续继续加知识库、插件调用或多 Agent 协作时也更容易扩展。",
      },
    ],
    outcomes: [
      "支撑文件上传、流式对话、多轮上下文和任务管理的一体化交互",
      "把 AI 能力落实到可持续使用的业务前端，而不是停留在能力演示层",
    ],
    assets: [],
    links: [],
  },
  {
    slug: "workorder-platform",
    title: "智能工单调度平台",
    category: "企业后台与审批流",
    summary:
      "围绕工单全生命周期、审批流、看板协作和实时同步构建的复杂业务平台，重点解决状态流转复杂、角色多、实时反馈要求高的问题。",
    impact:
      "把工单流转、审批协同、数据看板和实时反馈收敛到同一套业务系统里，让平台既能处理流程，也能支撑运营决策。",
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
      "工单创建、分配、执行、验收、归档涉及多角色参与、审批链长、状态转换复杂、实时性要求高。用传统 CRUD 思路硬堆页面，很快就会出现状态分散、规则难改和协同体验割裂的问题。",
    responsibilities: [
      "负责工单全生命周期的前端交互设计与页面实现",
      "封装 Zustand + Hook 的状态管理方案，统一工单流转入口",
      "实现 Kanban 看板、审批流视图和图表数据看板",
      "通过 WebSocket 处理实时更新、状态同步和多人协作反馈",
    ],
    sections: [
      {
        title: "状态流转编排",
        problem:
          "工单会跨多个页面、多个角色和多个阶段流转。如果状态定义松散，页面各自维护一套逻辑，后续流程调整几乎每次都要改一大片。",
        solution:
          "我用 Zustand + 自定义 Hook 抽象统一状态入口，把流转规则和关键业务判断收进可复用逻辑层，而不是散在页面组件里。",
        outcome:
          "页面层逻辑明显收敛，后续流程调整和角色变更时不会反复牵一发动全身。",
      },
      {
        title: "实时与可视化协同",
        problem:
          "业务方既要实时看到工单处理进度，也要快速判断效率、堆积和热点问题。只做列表录入满足不了管理和调度场景。",
        solution:
          "我用 WebSocket 推送关键状态变更，再结合 ECharts 构建趋势、热力和效率视图，把实时处理和经营视角放到同一套界面里。",
        outcome:
          "系统不只是录入工具，业务方可以直接在平台里看处理进度、趋势变化和效率表现。",
      },
    ],
    outcomes: [
      "支撑多级审批、看板操作、实时状态同步和数据洞察",
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
    summary:
      "参与能源电力与视联平台方向的大屏重构，主导布局、图表、地图和实时效果相关的基础能力建设，目标是把一次性页面改造成可复用的展示系统。",
    impact:
      "把原本偏定制化、强耦合的大屏项目整理成更容易复用、维护和扩展的组件体系。",
    stack: ["Vue 3", "ECharts", "WebSocket", "地图渲染", "磁贴布局", "3D"],
    spotlight: true,
    role: "前端架构与核心功能实现",
    period: "近阶段大屏重构项目",
    teamContext: "能源电力 / 视联大屏 / 组件化重构",
    challenge:
      "大屏项目常见问题是页面耦合重、复用差、分辨率适配困难，而且还要同时扛住地图渲染、动画效果和实时数据刷新。要解决的不只是视觉效果，而是长期交付能力。",
    responsibilities: [
      "主导前端架构设计与基础框架搭建，明确大屏公共层和业务层边界",
      "设计磁贴布局系统、ECharts 图表能力和地图渲染模块",
      "实现撒点动画、实时数据刷新和多分辨率适配策略",
      "推动组件化拆分、统一发布方式和团队复用沉淀",
    ],
    sections: [
      {
        title: "大屏组件化重构",
        problem:
          "传统大屏经常是按单页项目思路堆出来的，一旦页面数量和需求一多，布局、图表和交互逻辑都会迅速耦合，维护成本非常高。",
        solution:
          "我围绕布局、图表、地图和动画拆成独立组件与通用脚本，并统一沉淀发布方式，避免每个大屏重复搭一套底层能力。",
        outcome:
          "组件复用率提升 60%，后续新屏或改版时可以直接复用已有能力，交付节奏明显加快。",
      },
      {
        title: "实时地图与动画引擎",
        problem:
          "地图渲染、撒点动画和实时数据更新如果揉在一起，很容易互相干扰，既影响性能，也让代码越来越难维护。",
        solution:
          "我把地图渲染、图层更新、动画效果拆成边界清晰的模块，并对刷新节奏和渲染时机做控制。",
        outcome:
          "既保证了展示效果和实时反馈，也降低了后续维护、扩展和跨项目复用的难度。",
      },
    ],
    outcomes: [
      "沉淀出可跨项目复用的大屏基础能力，支撑多个展示场景共用",
      "同时兼顾实时展示效果、多分辨率适配和后续扩展性",
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
      "基于 Next.js App Router 与 NestJS BFF 的组件库管理中台，覆盖 SSR、权限系统、组件资产管理和复杂后台交互。",
    impact:
      "把组件复用、BFF 聚合、后台权限和团队资产管理整合成一套可持续复用的系统。",
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
    challenge:
      "项目同时要处理 SSR、业务组件复用、动态权限、多租户和中台类复杂列表交互。难点不只是技术栈切换，而是要让数据、权限和页面状态在后台场景里长期稳定运行。",
    responsibilities: [
      "参与 Next.js App Router 管理中台整体开发与页面交互实现",
      "二次封装通用业务组件并建设文档站，沉淀团队复用资产",
      "设计 RBAC 动态权限与多租户细粒度控制模型",
      "通过 RTK Query 和性能优化策略降低首屏和列表压力",
    ],
    sections: [
      {
        title: "BFF 聚合与权限",
        problem:
          "前端如果直接对接多后端服务，鉴权、字段转换和数据拼装会散在各个页面里，权限策略也很难统一管理。",
        solution:
          "我用 NestJS BFF 做接口聚合和数据转换，前端围绕权限模型、页面状态和组件复用来组织逻辑。",
        outcome:
          "减少了前端直接拼装多服务接口的分散问题，权限控制和页面状态也更容易统一收口。",
      },
      {
        title: "可复用业务组件系统",
        problem:
          "后台系统页面类型高度重复，如果没有一层业务组件沉淀，团队会不断重复搭列表、搜索、权限和树形选择交互。",
        solution:
          "我封装高级搜索、数据表格、权限按钮、树形选择器等业务组件，并配合文档站沉淀使用方式。",
        outcome:
          "团队复用率达到 80%，新页面搭建时间明显缩短，后续改动也不需要每个页面重复修。",
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
    summary:
      "面向移动端的社交电商平台，包含即时通讯、支付、社区互动和账号体系，重点解决跨端业务叠加后交互复杂度快速上升的问题。",
    impact:
      "把跨端业务、即时通讯、支付接入和社区互动能力收进同一套移动端项目里。",
    stack: ["UniApp", "Vue 3", "TypeScript", "NIMSDK", "PayPal"],
    role: "前端核心开发",
    period: "业务平台项目",
    teamContext: "移动端社交电商",
    challenge:
      "跨端业务功能叠加 IM、支付、社区互动和登录体系后，页面交互、状态同步和公共逻辑复用难度都会明显上升，单纯按页面堆代码很快会失控。",
    responsibilities: [
      "负责移动端核心业务开发和互动模块实现",
      "集成网易云信 NIMSDK、PayPal 支付和 Google 登录等关键能力",
      "封装通用组件与公共逻辑，降低多端业务重复开发成本",
    ],
    sections: [
      {
        title: "即时通讯集成",
        problem:
          "社交电商里的沟通链路直接影响转化和互动，如果消息能力不稳定，社区和交易场景都很难闭环。",
        solution:
          "我接入 NIMSDK 实现单聊、群聊和会话管理，再围绕业务场景组织社区互动与消息入口。",
        outcome:
          "把商品、社区和沟通链路打通，平台不只是卖货页面，而是具备持续互动能力的移动端产品。",
      },
    ],
    outcomes: ["完成社交、支付、登录与社区互动能力的组合交付"],
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
