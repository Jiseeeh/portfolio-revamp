import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      {/* <ExperienceSection /> */}
      <TechStackSection />
      <ContactSection />
    </>
  );
}
