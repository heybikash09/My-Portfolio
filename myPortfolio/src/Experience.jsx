import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const experienceData = [
    {
      position: "MERN Stack Developer",
      company: "Briskode Pvt Ltd",
      location: "Bhubaneswar,Odisha",
      duration: "Oct 2025 - Present",
      type: "Intern",
      description:
        "Leading development of enterprise-level web applications using MERN stack. Managing a team of 5 developers and overseeing project delivery.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led migration from legacy systems to modern MERN architecture",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Leaflet"],
      projects: [{ name: "NAC Ganjam", link: "#" }],
    },
    {
      position: "MERN Stack Developer",
      company: "Web Bocket Pvt Ltd",
      location: "Bhubaneswar, Odisha",
      duration: "Jun 2024 - Nov 2024",
      type: "Intern",
      description:
        "Designed and developed a full-fledged movie streaming web application with authentication, dynamic content rendering, and real-time media streaming using the MERN stack.",
      achievements: [
        "Developed a Netflix-inspired movie streaming platform with personalized recommendations",
        "Implemented secure JWT-based authentication and user subscription features",
        "Integrated Cloudinary for video and image storage and Firebase for real-time data updates",
        "Optimized API performance and reduced load time by 40% through efficient database queries",
        "Collaborated with the UI/UX team to create a responsive, visually appealing interface",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],
      projects: [
        { name: "Movie Streaming Platform (Netflix Clone)", link: "#" },
      ],
    },
    {
      position: "Java Developer Intern",
      company: "Techzex Pvt Ltd",
      location: "Bhubaneswar, Odisha",
      duration: "jul 2023 - sept 2023",
      type: "Internship",
      description:
        "Worked on Core Java applications, focusing on backend logic, data structures, and efficient algorithm implementation to improve system performance.",
      achievements: [
        "Developed and optimized key modules using Core Java concepts such as OOPS, Collections, and Exception Handling",
        "Implemented file handling and multi-threading features for performance improvement",
        "Collaborated with senior developers to debug and refactor legacy Java code",
        "Gained experience in SDLC, version control, and documentation best practices",
      ],
      technologies: ["Core Java", "JDBC", "MySQL", "OOP", "Git"],
      projects: [
        { name: "Inventory Management System (Core Java Project)", link: "#" },
      ],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-[#0c0615] text-white py-20 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
            Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey and the valuable experiences that shaped my
            career
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mb-20"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500 transform md:-translate-x-0.5"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                variants={fadeInUp}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform md:-translate-x-2 border-4 border-[#0c0615]"></div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-[#16101C] p-8 rounded-2xl border border-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {exp.position}
                          </h3>
                          <p className="text-purple-300 text-lg">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === "Full-time"
                            ? "bg-green-600/20 text-green-400 border border-green-500/30"
                            : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-purple-400 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">
                        Notable Projects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((project, idx) => (
                          <a
                            key={idx}
                            href={project.link}
                            className="flex items-center px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-600/30 transition-colors"
                          >
                            {project.name}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Career Stats */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#16101C] p-8 rounded-2xl border border-purple-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8">
              Career Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  0.6+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  12+
                </div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
