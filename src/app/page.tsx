"use client";

import { useEffect, useState } from "react";

import { Navbar } from "@/components/navigation/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 w-screen min-h-screen bg-white z-50">
        <div className="flex flex-col space-y-5 justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-8 border-black"></div>
          <span className="font-bold uppercase animate-bounce">
            Summoning the tech spirits...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      {/* <ExperienceSection /> */}
      <TechStackSection />
      <ContactSection />
    </>
  );
}
