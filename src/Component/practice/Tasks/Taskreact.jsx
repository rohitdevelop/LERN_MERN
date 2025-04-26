import React, { useState } from 'react';
import { FaCheckCircle, FaCircle, FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Create a Simple React Component", description: "Ek simple React functional component banaiye jo ek 'Hello World' show kare." },
  { level: "Easy", title: "Render a List of Items", description: "Ek array of items ko map karke render kariye list ke form mein." },
  { level: "Easy", title: "Create a Button with Click Event", description: "Ek button banaiye jo click hone par ek message console me print kare." },

  { level: "Intermediate", title: "Build a Toggle Component", description: "Ek component banaiye jisme button click se koi text show/hide ho." },
  { level: "Intermediate", title: "Counter App Using useState", description: "React useState ka use karke ek counter banaiye jo increment aur decrement kare." },
  { level: "Intermediate", title: "Simple Form Handling", description: "Ek form banaiye jisme naam aur email field ho aur submit hone par form data console me aaye." },

  { level: "Hard", title: "Todo App with Add and Delete", description: "Ek fully functional todo app banaiye jisme user task add aur delete kar sake." },
  { level: "Hard", title: "Fetch API Data in React", description: "React me useEffect aur fetch ka use karke kisi public API ka data display kariye." },
  { level: "Hard", title: "Build a Theme Switcher", description: "React me ek theme switcher banaiye jo dark aur light mode ke beech toggle kare." },

  { level: "Project", title: "Portfolio Website in React", description: "Ek poora portfolio website React ke through banaiye jisme Home, About, Projects aur Contact pages ho." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Tsskreact = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white md:py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md mt-11">
        React Tasks & Project
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

export default Tsskreact;
