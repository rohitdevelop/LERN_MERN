import React from "react";
import { Link } from "react-router-dom";
import Navmain from "../Navbar/Navmain";

// Import icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { MdWeb } from "react-icons/md"; // ✅ For Web Fundamentals


const Subnav = () => {
  const navLinks = [
    {
      name: "Web Fundamentals",
      path: "/introduction/web-development",
      Chapter: "Chapter 1",
      icon: <MdWeb className="text-2xl text-white" />,
    },
    {
      name: "HTML",
      path: "/html/what-is-html",
      Chapter: "Chapter 2",
      icon: <FaHtml5 className="text-2xl text-orange-500" />,
    },
    {
      name: "CSS",
      path: "/css/what-is-css",
      Chapter: "Chapter 3",
      icon: <FaCss3Alt className="text-2xl text-blue-500" />,
    },
    {
      name: "JavaScript",
      path: "/javascript/what-is-js",
      Chapter: "Chapter 4",
      icon: <SiJavascript className="text-2xl text-yellow-400" />,
    },
    {
      name: "React",
      path: "/react/what-is-react",
      Chapter: "Chapter 5",
      icon: <FaReact className="text-2xl text-cyan-400" />,
    },
    {
      name: "Node.js",
      path: "/node/what-is-node",
      Chapter: "Chapter 6",
      icon: <FaNodeJs className="text-2xl text-green-600" />,
    },
    {
      name: "Express",
      path: "/express/What-is-express",
      Chapter: "Chapter 7",
      icon: <SiExpress className="text-2xl text-gray-300" />,
    },
    {
      name: "MongoDB",
      path: "/mongo/What-is-mongo",
      Chapter: "Chapter 8",
      icon: <SiMongodb className="text-2xl text-green-500" />,
    },
  ];
  

  return (
    <>
      <Navmain />
      <nav className="bg-gradient-to-br from-purple-950 via-black to-gray-900 text-white px-4 py-6 mt-16 min-h-screen">
        <div className="flex flex-col gap-6 items-center w-full max-w-4xl mx-auto">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="bg-gray-800 w-full p-4 rounded-lg hover:bg-gray-700 transition flex items-center justify-between shadow-md"
            >
              <div>
                <span className="font-semibold text-sm sm:text-base">{link.Chapter}:</span>
                <span className="ml-2 text-lg sm:text-xl hover:text-cyan-500">{link.name}</span>
              </div>
              <div className="ml-4">{link.icon}</div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Subnav;
