import React, { useState } from 'react';
import { FaCheckCircle, FaCircle, FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Create a Simple HTML Page", description: "Banaiye ek basic HTML page jisme heading aur paragraph ho." },
  { level: "Easy", title: "Build an Unordered List", description: "Ek unordered list banaiye apne 5 favourite fruits ke naam ke saath." },
  { level: "Easy", title: "Create a Table with 3 Rows", description: "Ek table banaiye jisme 3 rows aur 2 columns ho: Name aur Age." },

  { level: "Intermediate", title: "Form with Input Fields", description: "Ek form design kijiye jisme naam, email, aur password input fields ho aur ek submit button ho." },
  { level: "Intermediate", title: "Create an HTML Resume", description: "Apna ek simple resume banaiye sirf HTML ka use karke (without CSS)." },
  { level: "Intermediate", title: "Build a Navigation Menu", description: "Ek simple navigation bar banaiye jisme Home, About, Services aur Contact links ho." },

  { level: "Hard", title: "Create a Pricing Table Layout", description: "Ek pricing table banaiye 3 alag alag plans ke saath (Basic, Pro, Premium)." },
  { level: "Hard", title: "Multi-section Landing Page", description: "Ek landing page banaiye multiple sections ke saath jaise Hero, Features, Testimonials, Contact." },
  { level: "Hard", title: "FAQ Accordion Using Only HTML", description: "FAQ ke liye ek accordion style structure banaiye sirf HTML ke saath (without JavaScript or CSS)." },

  { level: "Project", title: "Design a Full Portfolio Website (HTML Only)", description: "Ek poora portfolio website banaiye jisme About, Skills, Projects aur Contact sections ho." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskhtml = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white md:py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md mt-11">
        HTML Tasks & Project
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`w-full p-6 rounded-md shadow-md transition-transform duration-300 border-2
              ${completed.includes(index) ? "border-green-400" : "border-transparent"}
              hover:scale-105 hover:border-blue-400 bg-white bg-opacity-80 backdrop-blur-sm`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3 ">
                {getIcon(task.level)}
                <h2 className="text-2xl font-bold text-black">{task.title}</h2>
              </div>
              <button
                onClick={() => toggleComplete(index)}
                className="text-green-500 text-2xl focus:outline-none"
              >
                {completed.includes(index) ? <FaCheckCircle /> : <FaCircle />}
              </button>
            </div>
            <p className="text-black font-bold mb-1 ">{task.level}</p>
            <p className="text-gray-700 font-bold">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskhtml;
