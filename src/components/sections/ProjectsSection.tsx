"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { SectionIntro } from "./SectionIntro";
import { Project } from "@/components/ui/Project";
import { ProjectModel } from "@/models/ProjectModel";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  const scrollContainer = useRef(null);
  const projects: ProjectModel[] = [
    new ProjectModel({
      id: 0,
      date: "February 2024 - Present",
      description: (
        <>
          My capstone project, a note-taking app that incorporates AI to suggest
          the best learning method for each note and provides users with
          progress analytics to help them see what they need to improve.
        </>
      ),
      imageAlt: "Image of umaru-chan",
      imageFileName: "under_construction_umaru.webp",
      isUnderDevelopment: true,
      projectGithubLink: "https://github.com/Jiseeeh/u-do-note",
      projectTags: [],
      title: "u do note",
      source:
        "https://thestickyseat.tumblr.com/post/130082806054/himouto-umaru-chan-review-a-literal-moeblob",
    }),
    new ProjectModel({
      id: 1,
      date: "1 year ago",
      description: (
        <>
          Yet Another Platformer Game that{" "}
          <span className="link">
            <a href="https://pixel-art-gallery.vercel.app/">Lue</a>
          </span>{" "}
          and I created in our free time to practice using Godot. It was a fun
          and exciting experience. We used some free assets, as well as
          custom-made assets created by Lue.
        </>
      ),
      imageAlt: "Image of our platformer game",
      imageFileName: "yapg.webp",
      isUnderDevelopment: false,
      projectGithubLink: "https://github.com/Jiseeeh/yapg",
      projectTags: ["Godot", "GDScript"],
      title: "YAPG",
    }),
  ];

  useGSAP(
    () => {
      const projectSections = gsap.utils.toArray("#projects > section");

      gsap.to(projectSections, {
        xPercent: -100 * (projectSections.length - 1),
        ease: "none",
        scrollTrigger: {
          markers: true,
          start: "100p top",
          trigger: scrollContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (projectSections.length - 1),
          end: () =>
            "+=" +
            (scrollContainer.current as unknown as HTMLElement).offsetWidth,
        },
      });
    },
    {
      scope: scrollContainer,
    }
  );

  return (
    <section>
      <SectionIntro sectionNumber="01" sectionTitle="Projects" />
      <section
        id="projects"
        ref={scrollContainer}
        // ? extra padding top to account for the start of gsap scroll
        // ? width must be based on the number of sections
        className={`h-full pt-16 xl:pt-0 w-[${
          projects.length * 100
        }vw] flex flex-nowrap`}
      >
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </section>
  );
};

export { ProjectsSection };
