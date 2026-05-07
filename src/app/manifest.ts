import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "王华琛个人站",
    short_name: "王华琛",
    description: "高级前端工程师 / 全栈偏前端个人站，包含项目案例与在线简历。",
    start_url: "/",
    display: "standalone",
    background_color: "#f3efe6",
    theme_color: "#111111",
    lang: "zh-CN",
  };
}
