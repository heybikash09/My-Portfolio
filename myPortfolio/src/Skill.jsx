import React from "react";

// Combined Tech Stack (Frontend + Backend)
const techStack = {
  TechStack: [
    // Frontend
    { name: "React JS", src: "/react.svg", percentage: "89%" },
    { name: "Redux", src: "/redux.svg", percentage: "85%" },
    { name: "HTML5", src: "/html.svg", percentage: "92%" },
    { name: "CSS3", src: "/css3.svg", percentage: "80%" },
    { name: "Tailwind CSS", src: "/tailwindcss.svg", percentage: "87%" },
    { name: "JavaScript", src: "/js.svg", percentage: "85%" },
    // Backend
    { name: "Node JS", src: "/node.svg", percentage: "82%" },
    { name: "Socket.io", src: "/logo-dark.svg", percentage: "80%" },
    { name: "Express.js", src: "/Express.png", percentage: "84%" },
    { name: "Python", src: "/python.svg", percentage: "88%" },
    { name: "Java", src: "/java.svg", percentage: "75%" },
    { name: "MySQL", src: "/mysql.png", percentage: "80%" },
    { name: "MongoDB", src: "/mongo.svg", percentage: "84%" },
  ],
  Tools: [
    { name: "Git", src: "/git.png", percentage: "90%" },
    { name: "GitHub", src: "/github.png", percentage: "89%" },
    { name: "Vercel", src: "/vercel.png", percentage: "85%" },
    { name: "Netlify", src: "/netlify.webp", percentage: "86%" },
    { name: "VS Code", src: "/vscode.png", percentage: "91%" },
    { name: "IntelliJ IDEA", src: "/IntelliJ_IDEA_Icon.svg.png", percentage: "78%" },
    { name: "Postman", src: "/postman.png", percentage: "85%" },
    { name: "Cloudinary", src: "/cloudinary.jpeg", percentage: "82%" },
    { name: "Linux", src: "/linux.png", percentage: "80%" },
    { name: "Canva", src: "/canva.png", percentage: "80%" },
  ],
};

const SkillCard = ({ item }) => (
  <div className="flex flex-col items-center">
    <div className="group w-32 h-32 bg-[#16101C] hover:bg-gradient-to-br from-purple-700/20 to-indigo-700/20 border border-transparent hover:border-purple-500 rounded-xl flex flex-col justify-center items-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
      <img
        src={item.src}
        alt={item.name}
        className="h-16 w-16 object-contain mb-2 transition-transform duration-300 group-hover:scale-110 grayscale hover:grayscale-0"
        onError={(e) => {
          e.target.src = "/placeholder.svg";
        }}
      />
      <p className="text-gray-400 group-hover:text-indigo-300 text-base font-bold">
        {item.percentage}
      </p>
    </div>
    <p className="text-xs sm:text-sm text-purple-400 mt-2 font-medium text-center">
      {item.name}
    </p>
  </div>
);

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#0c0615] text-white py-16 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            My Skills
          </h1>
          <p className="text-gray-400 font-bold max-w-2xl mx-auto text-lg">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Tech Stack Section */}
          <div className="border border-purple-500 p-6 rounded-lg bg-[#16101C]">
            <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center underline">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {techStack.TechStack.map((item) => (
                <SkillCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Tools & Platforms Section */}
          <div className="border border-purple-500 p-6 rounded-lg bg-[#16101C]">
            <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center underline">
              Tools & Platforms
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {techStack.Tools.map((item) => (
                <SkillCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;