"use client";

import { FaAnglesDown } from "react-icons/fa6";

interface SectionIntroProps {
  sectionNumber: string;
  sectionTitle: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  sectionNumber,
  sectionTitle,
}) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4 uppercase font-black text-center">
      <h4 className="underline text-6xl md:text-9xl">{sectionNumber}</h4>
      <p className="text-5xl md:text-8xl">{sectionTitle}</p>
      <FaAnglesDown className="mt-3.5 size-10 animate-bounce" />
    </section>
  );
};

export { SectionIntro };
