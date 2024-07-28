import { About } from "@/components/sections/About";
import { EducationSection } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <EducationSection />
    </>
  );
}
