"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Mogra } from "next/font/google";

const mogra = Mogra({
  weight: "400",
  subsets: ["latin"],
});

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row-reverse handle-max-w"
    >
      <div
        className={`${mogra.className} flex flex-col justify-center items-center w-full space-y-2 p-4 lg:-space-y-12`}
      >
        <div className="flex flex-col items-center space-y-5">
          <h3 className="text-2xl lg:text-4xl">What&apos;s up?</h3>
          <p className="text-5xl text-center">I&apos;m John Carlo N. Camara</p>
        </div>
        <Image
          className="size-50 rounded-full lg:hidden"
          priority
          src="/images/me_bnw.jpg"
          alt="Black and White image of John Carlo N. Camara"
          width={200}
          height={200}
        />
        <div className="size-11/12 group relative">
          <Image
            className="hidden h-full w-full lg:block"
            priority
            src="/images/me_no_bg.png"
            alt="Image of John Carlo N. Camara wearing his uniform"
            width={200}
            height={200}
            quality={100}
            unoptimized
          />
          <div className="absolute top-40 -right-5 p-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-light-black text-lg">
              Snapped by{" "}
              <a
                href="https://www.instagram.com/prettyboimaks/"
                target="_"
                className="text-teal"
              >
                Maki
              </a>
            </span>
          </div>
        </div>
      </div>
      <section className="flex flex-col p-4 space-y-4 lg:w-11/12 lg:justify-center handle-max-w">
        <h4 className="text-xl font-black lg:text-4xl">About me</h4>
        <p className="lg:text-xl">
          I go by the name <span className="text-teal font-bold">Jiseeeh</span>{" "}
          on the internet. I am currently a 3rd year student taking BSIT in the
          Philippines.
        </p>
        <p className="lg:text-xl">
          My interest in tech began when I saw my cousin, who is now a software
          engineer, do seemingly magical things with computers. However, it
          wasn't until 2021, when I saw a friend's website about our country,
          that I really started to dive into self-learning and explore the
          endless possibilities that technology has to offer. I am excited to
          continue growing my knowledge and skills in the tech industry, and I
          hope to one day make a positive impact through my work.
        </p>
        <button className="flex px-4 py-3 font-bold text-xl bg-teal transition-colors duration-200 hover:bg-[#009199] self-start gap-3 rounded-md items-center">
          <a href="/CAMARA-JOHN_CARLO-N-RESUME-2024.pdf" target="_">
            Resume
          </a>{" "}
          <FaExternalLinkAlt />
        </button>
      </section>
    </section>
  );
};

export { About };
