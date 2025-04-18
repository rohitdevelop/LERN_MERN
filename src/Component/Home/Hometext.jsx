import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hometext = () => {
  return (
    <div className="w-full p-5 md:pr-[35rem] md:py-20 text-white flex justify-center md:justify-start items-center">
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold text-purple-600 drop-shadow-md">
          LERN_MERN
        </h1>
        <h2 className="text-2xl md:text-3xl mt-4 font-semibold">
          Start Your Dev Journey From the Basics
        </h2>
        <p className="mt-6 text-md md:text-lg leading-relaxed text-gray-100">
          Master Web Development the right way — learn step-by-step from the ground up, starting with how the internet works, HTML/CSS, JavaScript, and dive deep into React, Node.js, MongoDB & more.
        </p>
        <p className="mt-2 text-sm text-gray-300">
          This blog is built for beginners who want to become confident full stack developers. Learn from scratch, stay consistent, and grow with real-world projects.
        </p>

        {/* Email and Button Stack Responsively */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-6 w-full max-w-md px-4 py-3 rounded-xl bg-transparent text-white placeholder-gray-400 outline-none ring-2 ring-purple-500"
          />
          <Link to="/chapters">
            <button className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-full text-lg flex items-center gap-2 shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 hover:shadow-purple-500/50 duration-300">
              Let's Start <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hometext;
