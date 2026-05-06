import { CapabilitiesBlock } from "@/components/blocks/capabilities-block";
import { CareerBlock } from "@/components/blocks/career-block";
import { ContactBlock } from "@/components/blocks/contact-block";
import { FeaturedProjectsBlock } from "@/components/blocks/featured-projects-block";
import { HeroBlock } from "@/components/blocks/hero-block";
import { OpenSourceBlock } from "@/components/blocks/open-source-block";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  description:
    "王华琛的个人简历站，聚焦高级前端、复杂业务系统、AI 智能体应用与可视化工程落地。",
});

export default function Home() {
  return (
    <>
      <HeroBlock />
      <CapabilitiesBlock />
      <FeaturedProjectsBlock />
      <CareerBlock />
      <OpenSourceBlock />
      <ContactBlock />
    </>
  );
}
