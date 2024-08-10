"use client";

import { useGSAP } from "@gsap/react";

import { SectionIntro } from "./SectionIntro";
import { gsapLib } from "@/lib/gsap";


interface ExperienceSectionProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({}) => {
  useGSAP(() => {
    const experiences = gsapLib.utils.toArray(".exp > div") as HTMLElement[];

    const tl = gsapLib.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "96p bottom",
        end: () =>
          "+=" +
          (document.querySelector("#experience") as HTMLElement).offsetHeight,
        scrub: 1,
        // ? reminder that markers can cause overflow if you forgot bruh
        // markers: true,
      },
    });

    experiences.forEach((exp, i) => {
      tl.fromTo(
        exp,
        {
          y: 0,
          x: i % 2 === 0 ? 100 : -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
        },
        i * 0.2
      );
    });
  });
  return (
    <>
      <SectionIntro sectionNumber="03" sectionTitle="Experience" />
      <section
        id="experience"
        className="min-h-screen px-4 pb-4 pt-24 mt-24 gap-2 mx-auto handle-max-w"
      >
        <div className="exp h-full relative">
          <span className="line absolute h-full -left-3 w-2 xl:-left-10 xl:w-3 bg-black"></span>
          <div>
            <h5 className="text-4xl font-black">Freelancing</h5>
            <span className="font-semibold">Web Developer</span>
            <hr className="h-1 border-none bg-black" />
            <span className="">September 2023 - Present</span>
            <p className="text-lg mt-4">
              Developed dynamic and responsive web applications using Next.js
              and Tailwind CSS, ensuring both performance and aesthetic
              excellence. Implemented scalable and secure back-end solutions
              with MongoDB and Firebase, while leveraging TypeScript to enhance
              code reliability and maintainability. Committed to delivering
              robust, user-centric digital solutions tailored to client needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export { ExperienceSection };
