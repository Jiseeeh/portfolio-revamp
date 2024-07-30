"use client";

import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

enum Sections {
  ABOUT = "about",
  PROJECTS = "projects",
  EDUCATION = "education",
  EXPERIENCE = "experience",
  STACK = "stack",
  CONTACT = "contact",
}

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState(Sections.ABOUT);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const links = [
    { section: Sections.ABOUT, label: "About" },
    { section: Sections.PROJECTS, label: "Projects" },
    { section: Sections.EDUCATION, label: "Education" },
    { section: Sections.EXPERIENCE, label: "Experience" },
    { section: Sections.STACK, label: "Stack" },
    { section: Sections.CONTACT, label: "Contact" },
  ];
  const [isAtTop, setIsAtTop] = useState(true);

  // ? Intersection observer for active path
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!entry.target.id) return;

            if (entry.target.id !== Sections.PROJECTS) setIsNavVisible(true);
            else setIsNavVisible(false);

            // console.log(`Intersecting: ${entry.target.id}`);

            setActivePath(entry.target.id as Sections);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        return;
      }

      setIsAtTop(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ? Sidebar effect disabler
  useEffect(() => {
    const disableSidebarOnClickOutside = (ev: MouseEvent) => {
      if (ev.target instanceof HTMLElement && !ev.target.closest("aside")) {
        setIsSidebarOpen(false);
      }
    };

    const disableSidebarOnEscape = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", disableSidebarOnClickOutside);
    document.addEventListener("keydown", disableSidebarOnEscape);

    return () => {
      document.removeEventListener("click", disableSidebarOnClickOutside);
      document.removeEventListener("keydown", disableSidebarOnEscape);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`${
        isNavVisible ? "block" : "hidden"
      } p-4 z-10 flex items-center justify-between fixed w-full top-0 right-0 left-0 my-0 transition-all duration-500 xl:bg-transparent max-w-screen-xl mx-auto ${
        !isAtTop ? "shadow-md xl:shadow-none bg-[#e6e8f0]" : ""
      }`}
    >
      <h1 className="font-black text-3xl">jiseeeh.</h1>
      <aside
        className={`p-4 fixed inset-0 bg-light-black text-white h-full w-8/12 transition-transform duration-500 md:hidden ${
          isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h2 className="font-black text-3xl">jiseeeh.</h2>
        <ul className="p-4 space-y-5">
          {links.map((el) => (
            <li
              className="w-full group transition-all duration-500"
              key={el.label}
            >
              <a href={`#${el.section}`}>{el.label}</a>
              {activePath === el.section ? (
                <span className="block max-w-full h-0.5 bg-white"></span>
              ) : (
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <FaAngleRight
        onClick={toggleSidebar}
        className={`size-10 cursor-pointer transition-transform duration-500 md:hidden ${
          isSidebarOpen ? "rotate-180" : "rotate-0"
        }`}
      />
      <aside className="hidden md:block">
        <ul className="p-4 flex space-x-5">
          {links.map((el) => (
            <li
              className="flex flex-col w-full group transition-all duration-500"
              key={el.label}
            >
              <a href={`#${el.section}`}>{el.label}</a>
              {activePath === el.section ? (
                <span className="block max-w-full h-0.5 bg-light-black"></span>
              ) : (
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-light-black"></span>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export { Navbar };
