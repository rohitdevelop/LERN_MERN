import React, { useState } from 'react';
import { FaCheckCircle, FaCircle, FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Apply Background Color", description: "Ek div element par koi bhi background color apply kijiye." },
  { level: "Easy", title: "Text Formatting", description: "Ek heading aur paragraph ko different font size aur color ke saath style kijiye." },
  { level: "Easy", title: "Create a Button with Hover Effect", description: "Ek button banaiye jisme hover karne par background aur text color change ho." },

  { level: "Intermediate", title: "Flexbox Layout", description: "Flexbox ka use karke ek responsive 3-column layout banaiye." },
  { level: "Intermediate", title: "Card Design", description: "Ek card design kijiye jisme image, title aur description ho (only CSS styling)." },
  { level: "Intermediate", title: "Create a Responsive Navbar", description: "Ek responsive navbar banaiye jo mobile view par hamburger icon me change ho (only CSS)." },

  { level: "Hard", title: "CSS Grid Gallery", description: "Ek responsive image gallery banaiye CSS Grid ka use karke." },
  { level: "Hard", title: "Animated Loading Spinner", description: "Sirf CSS ka use karke ek animated loading spinner banaiye." },
  { level: "Hard", title: "CSS Only Dropdown Menu", description: "Ek dropdown menu banaiye sirf CSS ke use se (without JavaScript)." },

  { level: "Project", title: "Complete Personal Website Design (CSS Only)", description: "Apna ek pura personal website design kijiye sirf CSS aur HTML ka use karke. (Responsive bhi hona chahiye.)" },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskcss = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white md:py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md mt-11">
        CSS Tasks & Project
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
              <div className="flex items-center gap-3">
                {getIcon(task.level)}
                <h2 className="text-2xl font-semibold text-black">{task.title}</h2>
              </div>
              <button
                onClick={() => toggleComplete(index)}
                className="text-green-500 text-2xl focus:outline-none"
              >
                {completed.includes(index) ? <FaCheckCircle /> : <FaCircle />}
              </button>
            </div>
            <p className="text-gray-800 mb-1 font-medium">{task.level}</p>
            <p className="text-gray-700">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskcss;
