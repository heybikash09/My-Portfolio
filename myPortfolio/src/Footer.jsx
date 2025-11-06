import React from "react";
import { Facebook, Linkedin, Github, Dribbble } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-[#0f0818] text-white py-12 px-4 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {[Facebook, Linkedin, Github, Dribbble].map((Icon, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-400 hover:bg-purple-800 transition"
            >
              <Icon size={20} />
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-8 font-semibold text-lg mb-6">
          {[
            { name: "About", id: "about" },
            { name: "Education", id: "education" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-purple-400 transition cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.name}.
            </a>
          ))}
        </div>
        {/* Copyright */}
        <p className="text-sm text-purple-400">
          © 2024 All Rights Reserved by{" "}
          <span className="text-purple-500 font-semibold">ThemeJunction</span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
