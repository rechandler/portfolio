import Hero from "@/layout/hero";
import TimeLine from "@/layout/timeline";
import Header from "@/layout/header";
import KuraLayout from "@/layout/KuraLayout";
import Posts from '@/layout/posts'
import Skills from '@/layout/skills'
import Accomplishments from '@/layout/accomplishments'
import Contact from '@/layout/contact'
// import MobileMenu from "@/layout/MobileMenu";

import dynamic from "next/dynamic";
// const Portfolio = dynamic(() => import("@/components/Portfolio"), {
//   ssr: false,
// });
// const News = dynamic(() => import("@/components/News"), {
//   ssr: false,
// });
// const Skills = dynamic(() => import("@/components/Skills"), {
//   ssr: false,
// });

const Index = () => {
  return (
    <KuraLayout>
      {/* MOBILE MENU */}
      {/* <MobileMenu /> */}
      {/* /MOBILE MENU */}
      {/* TOPBAR */}
      <Header />
      {/* HERO */}
      <Hero />
      {/* /HERO */}
      {/* PORTFOLIO */}
      <Posts />
      {/* /PORTFOLIO */}
      <Accomplishments />
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* TIMELINE */}
      <TimeLine />
      {/* /TIMELINE */}
      {/* PRICING */}
      {/* /PRICING */}
      {/* NEWS */}
      {/* <News /> */}
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </KuraLayout>
  );
};
export default Index;
