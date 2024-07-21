"use client";

import { useEffect, useRef } from "react";
import { SectionIntro } from "./SectionIntro";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const scrollContainer = useRef(null);

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
        <section className="min-w-full min-h-full snap-center bg-red-300 grid place-content-center">
          123
        </section>
        <section className="min-w-full min-h-full snap-center bg-green-300 grid place-content-center">
          345
        </section>
        <section className="min-w-full min-h-full snap-center bg-yellow-300 grid place-content-center">
          567
        </section>
      </section>
    </section>
  );
};

export { Projects };
