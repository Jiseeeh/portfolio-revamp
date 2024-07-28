"use client";

import { useEffect, useRef } from "react";

import { SectionIntro } from "./SectionIntro";
import { Project } from "@/components/ui/Project";
import { ProjectModel } from "@/models/ProjectModel";

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

  useEffect(() => {
    const modifyProjectScrolling = (e: WheelEvent) => {
      // console.log(`scrollingY ${e.deltaY}\nscrollingX ${e.deltaX}`);
      const container = scrollContainer.current as unknown as HTMLElement;

      if (e.deltaY > 0) {
        // means scrolling down
        // console.log({
        //   scrollLeft: Math.round(container.scrollLeft),
        //   scrollWidth: container.scrollWidth - container.offsetWidth,
        // });
        if (
          Math.round(container.scrollLeft) !==
          container.scrollWidth - container.offsetWidth
        ) {
          e.preventDefault();
        }
        container.scrollLeft += e.deltaY;
        return;
      }

      // only allow scrollX if the scrollContainer.scrollLeft = 0
      if (e.deltaY < 0) {
        // means scrolling up

        if (container.scrollLeft !== 0) {
          e.preventDefault();
        }

        container.scrollLeft += e.deltaY;

        return;
      }

      // horiz scroll
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

    const observerCallBack = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Adding event listener");

          document.addEventListener("wheel", modifyProjectScrolling, {
            passive: false,
          });
          document.addEventListener("wheel", snapToCenter, {
            passive: true,
          });
        } else {
          console.log("Removing event listener");
          document.removeEventListener("wheel", modifyProjectScrolling);
          document.removeEventListener("wheel", snapToCenter);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallBack, {
      root: null,
      rootMargin: "0px",
      threshold: 0.95,
    });

    observer.observe(document.querySelector("#projects") as HTMLElement);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col">
      <SectionIntro sectionNumber="01" sectionTitle="Projects" />
      <section
        id="projects"
        ref={scrollContainer}
        className="min-h-full flex overflow-x-hidden snap-x snap-mandatory md:snap-none md:snap-normal"
      >
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </section>
  );
};

export { ProjectsSection };
