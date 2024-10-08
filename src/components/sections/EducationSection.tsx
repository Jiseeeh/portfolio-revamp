"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";

import { SectionIntro } from "./SectionIntro";
import { Education } from "@/components/ui/Education";
import { EducationModel } from "@/models/EducationModel";
import { gsapLib } from "@/lib/gsap";

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = ({}) => {
  const [educationHistory] = useState<EducationModel[]>([
    new EducationModel({
      id: 0,
      schoolName: "CvSU Bacoor Campus",
      date: "September 2022 - Present",
      description:
        "I will likely complete my education here. Although the National University offered a better experience, my scholarship there was not fixed. I'm grateful for the opportunity to continue my education and look forward to earning my degree at this institution. I'm excited to see what the future holds.",
      imageFileName: "cvsu_b.webp",
      imageAlt: "Image of CVSU Bacoor Campus",
      imageSource: "https://cvsubacoorlibrary.com/",
    }),
    new EducationModel({
      id: 1,
      schoolName: "National University Manila",
      date: "August 2021 - August 2022",
      description:
        "It was fun being a student here. I met friends that I still have contact today. Also professors that are really good, but I had to transfer because of financial problems.",
      imageFileName: "nu_m.webp",
      imageAlt: "Image of National University Manila",
      imageSource: "https://national-u.edu.ph/nu-manila/facilities/",
    }),
    new EducationModel({
      id: 2,
      schoolName: "AMACC Las Piñas",
      date: "2019 - 2021",
      description:
        "This is where it all started. I was introduced to Java, and I learned the basics, beginning to wire my brain for programming. From those early days of coding, my passion for technology grew, driving me to continually expand my knowledge and skills. ",
      imageFileName: "amacclp.webp",
      imageAlt: "Image of AMACC Las Piñas",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:3349Almanza_Uno,_Las_Pi%C3%B1as_City_06.jpg",
    }),
  ]);

  useGSAP(() => {
    const education = gsapLib.utils.toArray(
      "#education > div"
    ) as HTMLElement[];

    const tl = gsapLib.timeline({
      scrollTrigger: {
        trigger: "#education",
        start: () => {
          const windowWidth = window.innerWidth;
          const educationSectionWidth = (
            document.querySelector("#education") as HTMLElement
          ).offsetWidth;

          const startOffset =
            windowWidth <= 768 ? "-120p center" : "top center";
          return startOffset;
        },
        end: () =>
          "+=" +
          (document.querySelector("#education") as HTMLElement).offsetHeight,
        scrub: 1,
        // markers: true,
      },
    });

    education.forEach((educ, i) => {
      tl.fromTo(
        educ,
        {
          y: 0,
          x: i % 2 === 0 ? 100 : -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        i * 0.2
      );
    });
  });

  return (
    <section className="min-h-screen flex flex-col">
      <SectionIntro sectionNumber="02" sectionTitle="Education" />
      <section
        id="education"
        className="flex flex-col min-h-screen mt-24 pt-24 handle-max-w"
      >
        {educationHistory.map((education) => (
          <Education key={education.id} {...education} />
        ))}
      </section>
    </section>
  );
};

export { EducationSection };
