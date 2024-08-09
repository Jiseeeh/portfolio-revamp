"use client";

import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

import { SectionIntro } from "./SectionIntro";

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <>
      <SectionIntro sectionNumber="04" sectionTitle="Contact" />
      <section className="min-h-screen px-4 mt-24 pt-24 handle-max-w flex flex-col">
        <h5 className="uppercase font-black mb-4 text-5xl lg:text-6xl xl:text-8xl">
          let's connect
        </h5>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col">
            <Image
              className="h-full object-cover rounded-md"
              src="/images/me_profile.webp"
              alt="My picture"
              width={1500}
              height={500}
            />
          </div>
          <div className="flex flex-col space-y-5">
            <p className="text-xl">
              Feel free to contact me anytime! My socials and email are listed
              below. Whether it's about work, a casual chat, or playing games,
              I'm always open to new opportunities. I'm excited to connect with
              new people, collaborate on interesting projects, and explore fresh
              ideas.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <SiGmail className="size-14 xl:size-16" />
                <a
                  className="font-medium xl:text-3xl"
                  href="mailto:johncarlo.camara1@gmail.com"
                >
                  johncarlo.camara1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiLinkedin className="size-14 xl:size-16" />
                <a
                  className="font-medium xl:text-3xl"
                  href="https://linkedin.com/in/john-carlo-camara"
                  target="_"
                >
                  linkedin.com/in/john-carlo-camara/
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiGithub className="size-14 xl:size-16" />
                <a
                  className="font-medium xl:text-3xl"
                  href="https://github.com/Jiseeeh"
                  target="_"
                >
                  github.com/Jiseeeh
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiInstagram className="size-14 xl:size-16" />
                <a
                  className="font-medium xl:text-3xl"
                  href="https://instagram.com/jiseeehh/"
                  target="_"
                >
                  instagram.com/jiseeehh/
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center mt-auto pt-4 text-gray-500">
          &copy; {new Date().getFullYear()} John Carlo Camara. All rights
          reserved.
        </footer>
      </section>
    </>
  );
};

export { ContactSection };
