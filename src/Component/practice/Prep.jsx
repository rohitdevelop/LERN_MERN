 import React from 'react'
 import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
 import { SiExpress, SiMongodb } from "react-icons/si";
 import { TbNetwork } from "react-icons/tb";
 const topics = [
   { name: "WEB", icon: <TbNetwork size={40} color="#ffffff" /> },
   { name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
   { name: "CSS", icon: <FaCss3Alt size={40} color="#2965f1" /> },
   { name: "JavaScript", icon: <FaJs size={40} color="#f0db4f" /> },
   { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
   { name: "Node.js", icon: <FaNodeJs size={40} color="#68a063" /> },
   { name: "Express", icon: <SiExpress size={40} color="#ffffff" /> },
   { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
 ];
 const Prep = () => {
   return (
 

    <div className="min-h-screen bg-black text-white py-10 px-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-purple-500">
        MERN Stack Topics
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-purple-600 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-400 transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{topic.icon}</div>
            <h2 className="text-xl font-semibold mb-4">{topic.name}</h2>
            <div className="space-y-2">
              <button className="w-full py-2 bg-purple-700 hover:bg-purple-500 rounded-md font-semibold transition">
                Start Quiz
              </button>
              <button className="w-full py-2 bg-purple-700 hover:bg-purple-500 rounded-md font-semibold transition">
  <span className="block md:hidden">Interview Prep</span>
  <span className="hidden md:block">Interview Questions</span>
</button>

              <button className="w-full py-2 bg-purple-700 hover:bg-purple-500 rounded-md font-semibold transition">
                Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   )
 }
 
 export default Prep
 