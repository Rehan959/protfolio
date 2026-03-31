import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import LoopingText from "@/components/Looptext";
import ProjectsSection from "@/components/project-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Hero />
      <ProjectsSection />
      <Expertise />
      <LoopingText />
      <Contact />
    </main>
  );
}
