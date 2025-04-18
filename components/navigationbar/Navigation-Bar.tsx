"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Mode";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationBar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const paths = {
    home: "/",
    about: "/block/about-block",
    education: "/block/eduction-block",
    experience: "/block/experience-block",
    skills: "/block/skills-block",
    projects: "/block/projects-block",
    resume:
      "https://drive.google.com/file/d/1iGemOAXi8FTNwpmVurO_GuoGZMfgr_v-/view?usp=drive_link",
    contact: "/block/contact-block",
  };

  const navItems = [
    { label: "Home", href: paths.home },
    { label: "About", href: paths.about },
    { label: "Education", href: paths.education },
    { label: "Experience", href: paths.experience },
    { label: "Skills", href: paths.skills },
    { label: "Projects", href: paths.projects },
    { label: "Resume", href: paths.resume },
    { label: "Contact", href: paths.contact },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="bg-[#0E1117] sticky top-0 shadow py-8 px-4 z-50 text-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href={paths.home}
          className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          &lt;JAGADISH C K /&gt;
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black ">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center font-semibold dark:text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
    relative pb-1
    ${path === item.href ? "text-blue-800 font-bold" : ""}
    hover:text-blue-500 transition
    before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px]
    before:w-0 before:bg-blue-500 before:transition-all before:duration-300
    hover:before:w-full
  `}
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 font-semibold dark:text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`$${
                path === item.href ? "text-blue-800 font-bold" : ""
              } hover:text-blue-500 transition`}
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
      )}
    </div>
  );
}