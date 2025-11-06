import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
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

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "GIFT AUTONOMOUS",
      year: "2022 – 2026",
      grade: "CGPA: 7.9/10",
      description:
        "Specialized in Software Engineering, Data Structures, and Web Technologies. Actively involved in full-stack development projects using the MERN stack.",
      achievements: [],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Godavarish Higher Secondary School",
      year: "2019 – 2021",
      grade: "Percentage: 77%",
      description:
        "Studied Mathematics, Physics, Chemistry, and Computer Science. Built foundational programming logic and problem-solving skills.",
      achievements: [],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bhetinath dev Bidyapith",
      year: "2018 – 2019",
      grade: "Percentage: 76.5%",
      description:
        "Focused on STEM subjects with strong performance in Mathematics and Science.",
      achievements: [],
    },
  ];

  // ✅ Your actual certifications
  const certifications = [
    {
      title: "MERN Stack Developer",
      issuer: "Wev Bocket Pvt Ltd",
      year: "2024",
    },
    {
      title: "Core Java",
      issuer: "Techzex Pvt Ltd",
      year: "2023",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL (IIT Madras)",
      year: "2024",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-[#140820] text-white py-20 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Education & Certifications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic foundation and industry-recognized credentials
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="mb-20"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 transform md:-translate-x-0.5"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                variants={fadeInUp}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full transform md:-translate-x-2 border-4 border-[#140820]"></div>

                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-[#16101C] p-8 rounded-2xl border border-indigo-500/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <GraduationCap className="w-8 h-8 text-indigo-400 mr-3" />
                        <span className="text-sm font-medium text-indigo-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.year}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-indigo-300 mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-purple-400 font-semibold mb-4">
                      {edu.grade}
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Certifications
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Validated expertise through hands-on learning and national programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-[#16101C] p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-purple-300 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-2">{cert.year}</p>
                <p className="text-xs text-gray-500 mt-2 bg-[#1a1225] inline-block px-2 py-1 rounded">
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Learned */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#16101C] p-8 rounded-2xl border border-indigo-500/30 max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-xl font-semibold text-indigo-300 mb-3">
                  Development
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• MERN Stack</li>
                  <li>• RESTful APIs</li>
                  <li>• Core Java</li>
                  <li>• JavaScript & ES6+</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-indigo-300 mb-3">
                  Databases & Tools
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• MongoDB, MySQL</li>
                  <li>• Git & GitHub</li>
                  <li>• Postman</li>
                  <li>• VS Code, IntelliJ</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-indigo-300 mb-3">
                  Concepts
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• OOPs (Java)</li>
                  <li>• Data Structures</li>
                  <li>• Algorithms</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;