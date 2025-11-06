import React, { useState, useEffect } from "react";
import { Facebook, Linkedin, Github, Dribbble } from "lucide-react";

function NavBar() {
  const [activeSection, setActiveSection] = useState("about"); // Default to 'about'

  const navItems = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll just below the navbar
      const offsetTop = element.offsetTop - 80; // 80px = h-20
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 80; // Adjust for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md h-20 flex items-center justify-center px-4 shadow-lg border-b border-purple-500/20">
      <ul className="flex justify-center gap-7 font-semibold text-lg text-fuchsia-400">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer hover:text-purple-400 transition-colors duration-300 relative group ${
              activeSection === item.id ? "text-purple-400" : ""
            }`}
          >
            {item.name}
            {activeSection === item.id && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;