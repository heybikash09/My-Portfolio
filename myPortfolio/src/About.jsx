import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Layers,
  Puzzle,
  Monitor,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { a, link } from "framer-motion/client";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    {
      title: "MERN Stack Development",
      desc: "Building full-stack applications with MongoDB, Express, React, Node.js",
      icon: <Layers className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Strong foundation in DSA with problem-solving skills",
      icon: <Database className="w-8 h-8 text-pink-400" />,
    },
    {
      title: "Problem Solving",
      desc: "Analytical thinking and efficient solution development",
      icon: <Puzzle className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Full-Stack Development",
      desc: "End-to-end development from frontend to backend",
      icon: <Monitor className="w-8 h-8 text-blue-400" />,
    },
  ];

  const techStack = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "HTML/CSS",
    "TailwindCSS",
    "Git",
    "Figma",
  ];
  const interests = [
    "Photography",
    "Travel",
    "Music",
    "Fitness",
    "Cooking",
    "Coding Challenges",
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-[#140820] text-white overflow-x-hidden mt-5"
    >
      {/* Hero + About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Profile Card */}
          <motion.div
            className="lg:col-span-4 h-fit"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden">
                  <img src="/profile.jpg" alt="" />
                </div>
                <h2 className="mt-4 text-xl sm:text-2xl font-bold text-white">
                  Bikash Ranjan Ghadai
                </h2>
                <p className="text-gray-400 text-sm">MERN Developer</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 text-sm mb-6 pb-6 border-b border-purple-500/20">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="break-all">bikashghadai5856@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>+91 7735135856</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Frebruary 25, 2003</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Bhubaneswar, Odisha</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-6">
                {[
                  {
                    img: "/linkedin.png",
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/bikash-ranjan-ghadai-a23710299",
                  },
                  {
                    img: "/leetcode.png",
                    label: "Leetcode",
                    link: "https://leetcode.com/u/Ghadai5678/",
                  },
                  {
                    img: "/instagram.jpeg",
                    label: "Instagram",
                    link: "https://www.instagram.com/___bkkxxyy/",
                  },
                  {
                    img: "/github_img.png",
                    label: "Github",
                    link: "https://github.com/heybikash09",
                  },
                ].map(({ img, label, link }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600/20 text-purple-400 rounded-full hover:bg-purple-600/40 transition-all transform hover:scale-125 flex items-center justify-center overflow-hidden w-8 h-8"
                    aria-label={label}
                  >
                    <img
                      src={img}
                      alt={label}
                      className="w-10 h-10 object-contain" 
                    />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition transform">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* About Intro */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20"
              variants={fadeInUp}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                About Me
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Heyy, I'm Bikash — a passionate MERN developer crafting digital
                experiences with creativity and precision. I specialize in
                building scalable, user-friendly solutions that combine
                beautiful design with robust functionality. My journey in tech
                started with curiosity and has evolved into a deep love for
                crafting digital experiences that make a difference.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4">
                What I'm Doing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:scale-105 transition-transform duration-300"
                    variants={fadeInUp}
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Honors & Awards */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20"
              variants={fadeInUp}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-6">
                Honors & Awards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-[#16101C] p-5 rounded-xl">
                  <h3 className="text-base sm:text-lg font-bold text-purple-400 mb-2">
                    Winners at GIET Suravi-2k25 Hackathon
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Secured 1st  position in the inter-college
                    hackathon under the category of Smart Cities &
                    Sustainability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20"
              variants={fadeInUp}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4">
                Interests & Hobbies
              </h2>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm font-medium border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
