"use client";

import { useEffect, useRef } from "react";

import { SectionIntro } from "./SectionIntro";
import { ProjectSection } from "./ProjectSection";
import { Project } from "@/models/Project";

interface ProjectsContainerProps {}

const Projects: React.FC<ProjectsContainerProps> = ({}) => {
  const scrollContainer = useRef(null);
  const projects: Project[] = [
    new Project({
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
    new Project({
      id: 1,
      date: "1 year ago",
      description: (
        <>
          Yet Another Platformer Game that{" "}
          <span className="link">
            <a href="">Lue</a>
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

  useEffect(() => {
    const modifyScroll = (e: WheelEvent) => {
      console.log(`scrollingY ${e.deltaY}\nscrollingX ${e.deltaX}`);
      const container = scrollContainer.current as unknown as HTMLElement;

      // only allow scrollX if the scrollContainer.scrollLeft = 0
      if (e.deltaY < 0) {
        // means scrolling up

        if (container.scrollLeft !== 0) {
          e.preventDefault();
        }

        container.scrollLeft += e.deltaY;

        return;
      }

      container.scrollLeft += e.deltaY;
    };

    const snapToCenter = () => {
      const container = scrollContainer.current as unknown as HTMLElement;
      const sections = container.querySelectorAll("section");

      let closestSection = sections[0];
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const distance = Math.abs(
          section.getBoundingClientRect().left -
            container.getBoundingClientRect().left
        );

        if (distance < closestDistance) {
          closestSection = section;
          closestDistance = distance;
        }
      });

      container.scrollTo({
        left:
          closestSection.offsetLeft -
          container.offsetLeft +
          (closestSection.offsetWidth - container.offsetWidth) / 2,
        behavior: "smooth",
      });
    };

    console.log("Effect");

    const observerCallBack = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Intersecting: ${entry.target.id}`);

          document.addEventListener("wheel", modifyScroll, {
            passive: false,
          });
          document.addEventListener("wheel", snapToCenter, {
            passive: true,
          });
        } else {
          document.removeEventListener("wheel", modifyScroll);
          document.removeEventListener("wheel", snapToCenter);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallBack, {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    });

    observer.observe(document.querySelector("#x-scroll") as HTMLElement);
  }, []);

  return (
    <section id="projects" className="min-h-screen flex flex-col">
      <SectionIntro sectionNumber="01" sectionTitle="Projects" />
      <section
        id="x-scroll"
        ref={scrollContainer}
        className="min-h-screen flex overflow-x-auto snap-x snap-mandatory md:snap-none md:snap-normal"
      >
        {projects.map((project) => (
          <ProjectSection key={project.id} {...project} />
        ))}
      </section>
    </section>
  );
};

export { Projects };
