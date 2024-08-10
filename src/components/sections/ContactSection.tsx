"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SiGmail, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { SectionIntro } from "./SectionIntro";

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    timeline
      .from(".contact-title", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        ".contact-image",
        {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        ".contact-text",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        ".contact-icon",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );
  });

  return (
    <>
      <SectionIntro sectionNumber="04" sectionTitle="Contact" />
      <section
        id="contact"
        className="min-h-screen px-4 mt-24 pt-24 handle-max-w flex flex-col"
      >
        <h5 className="contact-title uppercase font-black mb-4 text-5xl lg:text-6xl xl:text-8xl">
          let's connect
        </h5>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col">
            <Image
              className="contact-image hidden lg:block h-full object-cover rounded-md"
              src="/images/me_profile.webp"
              alt="My picture"
              width={1500}
              height={500}
            />
          </div>
          <div className="flex flex-col space-y-5">
            <p className="contact-text text-xl">
              Feel free to contact me anytime! My socials and email are listed
              below. Whether it's about work, a casual chat, or playing games,
              I'm always open to new opportunities. I'm excited to connect with
              new people, collaborate on interesting projects, and explore fresh
              ideas.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <SiGmail className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text font-medium xl:text-3xl"
                  href="mailto:johncarlo.camara1@gmail.com"
                >
                  johncarlo.camara1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiLinkedin className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text font-medium xl:text-3xl"
                  href="https://linkedin.com/in/john-carlo-camara"
                  target="_"
                >
                  linkedin.com/in/john-carlo-camara/
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiGithub className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text font-medium xl:text-3xl"
                  href="https://github.com/Jiseeeh"
                  target="_"
                >
                  github.com/Jiseeeh
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiInstagram className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text font-medium xl:text-3xl"
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
