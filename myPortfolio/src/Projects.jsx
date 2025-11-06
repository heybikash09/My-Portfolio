import React, { useState, useEffect } from "react";

const filters = ["All", "Web", "AI/Ml"];
const projectCards = [
  {
    id: 1,
    codeLink: "https://github.com/heybikash09/Snap_ture",
    webLink: "https://snap-ture.onrender.com",
    name: "Snapture - Social Media Website",
    category: "SOCIAL",
    type: ["All", "Web"],
    about:
      "Built a full-stack social media app like Instagram using the MERN stack with 10+ core features. Includes real-time chat, media uploads, and performance optimization.",
    image: "/snapture.png",
    alt: "Snapture Project",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Socket.io",
      "Cloudinary",
      "Tailwind CSS",
      "Render",
    ],
    workfor: "Learning",
  },
  {
    id: 2,
    codeLink: "https://github.com/heybikash09/NetflixHere",
    webLink: "https://netflixhere-1.onrender.com",
    name: "MovieStreamer",
    category: "ENTERTAINMENT",
    type: ["All", "Web"],
    about:
      "Built a streaming web app with secure authentication, seamless video playback, and enhanced UI/UX. Deployed for high scalability and performance.",
    image: "/moviestreamer.png",
    alt: "MovieStreamer Project",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt.js",
      "React Player",
      "YouTube API",
      "Tailwind CSS",
      "Swiper.js",
      "Framer Motion",
      "Render",
    ],
    workfor: "Internship",
  },
  {
    id: 3,
    codeLink: "https://github.com/heybikash09/AirQualityAI",
    webLink: "https://airquality-ai.onrender.com",
    name: "AirPulse - AI-Powered Air Pollution Estimation",
    category: "AI/ML + ENVIRONMENT",
    type: ["All", "AI/Ml"],
    about:
      "Developed an intelligent system that predicts real-time air quality using machine learning models (trained on historical AQI data) and displays insights via an interactive MERN dashboard with geolocation support.",
    image: "/airpolution.png",
    alt: "AirPulse Project",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python (Flask/FastAPI)",
      "Scikit-learn",
      "Pandas",
      "TensorFlow.js",
      "Mapbox GL",
      "Tailwind CSS",
      "Render",
    ],
    workfor: "Hackathon",
  },
  {
    id: 4,
    codeLink: "https://github.com/heybikash09/EduSphere",
    webLink: "https://edusphere-mern.onrender.com",
    name: "EduSphere - AI-Enhanced E-Learning Platform",
    category: "EDTECH",
    type: ["All", "Web"],
    about:
      "Built a scalable e-learning platform with AI-driven course recommendations, progress tracking, and interactive quizzes. Integrated video lessons, discussion forums, and user analytics using the MERN stack.",
    image: "/elearning.png",
    alt: "EduSphere Project",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Stripe",
      "Tailwind CSS",
      "Framer Motion",
      "Recommendation Engine (Python)",
      "Render",
    ],
    workfor: "Hackathon",
  },
  {
    id: 5,
    codeLink: "https://github.com/heybikash09/FinSight",
    webLink: "https://finsight-ai.onrender.com",
    name: "FinSight - AI-Powered Financial Intelligence",
    category: "FINTECH + AI/ML",
    type: ["All", "AI/Ml"],
    about:
      "Created a personal finance dashboard that analyzes spending patterns, forecasts budgets, and detects anomalies using ML models. Features secure transaction logging, expense categorization, and smart insights.",
    image: "/finsightBharat.png",
    alt: "FinSight Project",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Scikit-learn",
      "Pandas",
      "JWT",
      "Chart.js",
      "Tailwind CSS",
      "Render",
    ],
    workfor: "Hackathon",
  },
];

function ProjectCard({ card, onClick }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <img
        src={card.image}
        alt={card.alt}
        className="w-full h-64 object-contain rounded-t-2xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/333333/ffffff?text=Image+Not+Found";
        }}
      />
      <div className="p-6">
        <div className="flex justify-between items-center font-extrabold text-xl text-blue-600 mb-2">
          <span>{card.name}</span>
        </div>
        <h3 className="text-md font-thin text-white mb-4 leading-tight truncate">
          {card.about}
        </h3>
        <div className=" flex justify-between ">
          <button
            onClick={() => onClick(card)}
            className="flex items-center px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full font-medium transition-colors duration-300 shadow-md cursor-pointer"
          >
            Click to view
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <h2 className="px-3 rounded-full text-sm font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30 flex justify-center items-center ">
            {card.workfor}
          </h2>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("code");

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      id="projects"
      className="min-h-screen bg-black text-white font-sans p-4 sm:p-8 lg:p-12 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 opacity-10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="relative bg-gray-900 text-white max-w-2xl w-full rounded-2xl p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold cursor-pointer transition-colors duration-300"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.alt}
              className="w-full h-64 object-contain rounded-xl mb-6"
            />
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              {selectedProject.name}
            </h2>
            <p className="text-sm text-gray-400 mb-2 uppercase">
              {selectedProject.category}
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              {selectedProject.about}
            </p>

            {/* Tech Stack */}
            {selectedProject.techStack && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Tech Stack:
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-800 text-sm text-gray-200 px-3 py-1 rounded-full shadow-inner hover:text-blue-700 cursor-pointer transition-colors duration-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-around  ring-1 ring-blue-700 mt-5 rounded-xl font-extrabold text-white">
              <a
                href={selectedProject.codeLink}
                onClick={() => {
                  setActiveTab("code");
                }}
                className={`cursor-pointer w-full px-4 flex justify-center py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === "code" ? "bg-blue-700" : "hover:bg-gray-700"
                }`}
              >
                View Code
              </a>
              <a
                href={selectedProject.webLink}
                onClick={() => {
                  setActiveTab("website");
                }}
                className={`cursor-pointer w-full flex justify-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === "website" ? "bg-blue-700" : "hover:bg-gray-700"
                }`}
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-700 mb-4">
            My Recent Works
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-3 p-2 bg-gray-800 rounded-full shadow-lg">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition duration-300
                  ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-900 to-indigo-500 text-white shadow-md"
                      : "bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectCards.map(
            (card) =>
              card.type.includes(activeFilter) && (
                <ProjectCard
                  key={card.id}
                  card={card}
                  onClick={setSelectedProject}
                />
              )
          )}
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default Projects;
