"use client";

import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

enum Sections {
  ABOUT = "#about",
  PROJECTS = "#projects",
  EDUCATION = "#education",
  EXPERIENCE = "#experience",
  STACK = "#stack",
  CONTACT = "#contact",
}

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState(Sections.ABOUT);
  const links = [
    { section: Sections.ABOUT, label: "About" },
    { section: Sections.PROJECTS, label: "Projects" },
    { section: Sections.EDUCATION, label: "Education" },
    { section: Sections.EXPERIENCE, label: "Experience" },
    { section: Sections.STACK, label: "Stack" },
    { section: Sections.CONTACT, label: "Contact" },
  ];

  // ? Intersection observer for active path
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Intersecting: ${entry.target.id}`);

            setActivePath(entry.target.id as Sections);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
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
    <nav className="p-4 flex items-center justify-between handle-max-w">
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
              <a href={el.section}>{el.label}</a>
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
              <a href={el.section}>{el.label}</a>
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