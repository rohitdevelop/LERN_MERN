import React, { useState } from 'react';
import { FaCheckCircle, FaCircle, FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Alert Box on Button Click", description: "Ek button banaiye jo click karne par ek alert message show kare." },
  { level: "Easy", title: "Change Text Content", description: "Ek paragraph ka text JavaScript se change kariye jab button click ho." },
  { level: "Easy", title: "Counter Increment Button", description: "Ek button banaiye jo click karne par counter 1 se increment karta rahe." },

  { level: "Intermediate", title: "Simple To-do List", description: "JavaScript ka use karke ek simple to-do list banaiye jisme items add aur remove kar sakein." },
  { level: "Intermediate", title: "Toggle Dark/Light Mode", description: "Button ke click par website ka theme dark aur light mode ke beech toggle ho." },
  { level: "Intermediate", title: "Form Validation", description: "Ek form banaiye jisme JavaScript se email aur password validate ho submit karne se pehle." },

  { level: "Hard", title: "Stopwatch App", description: "JavaScript ka use karke ek basic stopwatch app banaiye (start, stop, reset buttons ke saath)." },
  { level: "Hard", title: "Quiz App", description: "Ek mini quiz app banaiye jo user ke answers ko check kare aur score show kare." },
  { level: "Hard", title: "Weather App using API", description: "Weather API se data fetch karke ek simple weather app banaiye jo city ke hisaab se weather dikhaye." },

  { level: "Project", title: "Build a Calculator App", description: "Ek fully functional calculator app banaiye jo basic operations (add, subtract, multiply, divide) perform kare." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskjs = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white md:py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md mt-11">
        JavaScript Tasks & Project
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

export default Taskjs;
