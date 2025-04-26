import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbNetwork } from "react-icons/tb";
import { useNavigate, Link } from 'react-router-dom';

const topics = [
  { name: "WEB", icon: <TbNetwork size={40} color="#ffffff" />, path: "/task/web" },
  { name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" />, path: "/task/html" },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#2965f1" />, path: "/task/css" },
  { name: "JavaScript", icon: <FaJs size={40} color="#f0db4f" />, path: "/task/js" },
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, path: "/task/react" },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68a063" />, path: "/task/node" },
  { name: "Express", icon: <SiExpress size={40} color="#ffffff" />, path: "/task/express" },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" />, path: "/task/mongodb" },
];

const Prep = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 text-white py-16 px-4 sm:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-400 drop-shadow-md">
        MERN Stack Topics
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-purple-950 via-black to-gray-900 p-6 rounded-2xl text-center overflow-hidden shadow-xl group transition-transform duration-300 hover:scale-105"
          >
            {/* Animated border loader effect */}
            <div className="absolute inset-0 z-0 rounded-2xl border-2 border-violet-500 animate-pulse group-hover:animate-spin-slow" />

            <div className="relative z-10">
              <div className="mb-4 flex justify-center">{topic.icon}</div>
              <h2 className="text-xl font-semibold mb-6 text-violet-300">
                {topic.name}
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => navigate(`/quiz/${topic.name.toLowerCase()}`)}
                  className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition duration-200"
                >
                  Start Quiz
                </button>
                {topic.path && (
                  <Link
                    to={topic.path}
                    className="block w-full py-2 text-center bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition duration-200"
                  >
                    Task
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prep;
