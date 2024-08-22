import Hero from "@/layout/hero";
import TimeLine from "@/layout/timeline";
import Header from "@/layout/header";
import KuraLayout from "@/layout/KuraLayout";
import Posts from '@/layout/posts'
import Accomplishments from '@/layout/accomplishments'
import Contact from '@/layout/contact'
import MobileMenu from "@/layout/mobileMenu";

import dynamic from "next/dynamic";
const Skills = dynamic(() => import("@/layout/skills"), {
  ssr: false,
});


const Index = () => {
  return (
    <KuraLayout>
      <MobileMenu />
      <Header />
      <Hero />
      <Posts />
      <Accomplishments />
      <Skills />
      <TimeLine />
      <Contact />
    </KuraLayout>
  );
};
export default Index;
