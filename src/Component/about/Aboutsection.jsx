import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si"; // Extra icons

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-gray-900 text-white py-16 px-6 md:px-20 min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10">
      <img
        src="/image/geeksforgeeks.jpg"
        alt="My Picture"
        className="w-96 mt-7 h-80 object-cover rounded-2xl shadow-2xl"
      />

      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-6 animate-fade-in">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Hello everyone, mera naam{" "}
          <strong className="text-purple-400">Rohit Singh</strong> hai. Jaisa ki
          aap jaante hain, maine ye website banayi hai. Aur is website mein
          aapko
          <strong className="text-purple-400"> pura MERN Stack</strong> se
          related cheezein milengi —
          <strong className="text-purple-400"> Basics</strong> se lekar
          <strong className="text-purple-400"> Advanced Topics</strong> tak.
          Maine apna course{" "}
          <strong className="text-purple-400">GeeksforGeeks</strong> se complete
          kiya hai. Ye website maine banayi hai taaki aapki{" "}
          <strong className="text-purple-400">learning easy</strong> ho, Hindi +
          English mix language mein. Ummid karta hoon ki aapko ye website pasand
          aayegi aur
          <strong className="text-purple-400">
            {" "}
            apki journey start hogi
          </strong>{" "}
          ek naye safar ke saath! 🚀
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
          <div className="flex flex-col items-center animate-bounce">
            <SiMongodb className="text-green-400 text-5xl" />
            <span className="text-sm mt-1">MongoDB</span>
          </div>
          <div className="flex flex-col items-center animate-bounce delay-100">
            <SiExpress className="text-gray-300 text-5xl" />
            <span className="text-sm mt-1">Express.js</span>
          </div>
          <div className="flex flex-col items-center animate-bounce delay-200">
            <FaReact className="text-cyan-400 text-5xl" />
            <span className="text-sm mt-1">React</span>
          </div>
          <div className="flex flex-col items-center animate-bounce delay-300">
            <FaNodeJs className="text-green-500 text-5xl" />
            <span className="text-sm mt-1">Node.js</span>
          </div>
          <div className="flex flex-col items-center animate-bounce delay-400">
            <FaDatabase className="text-yellow-400 text-5xl" />
            <span className="text-sm mt-1">Database</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
