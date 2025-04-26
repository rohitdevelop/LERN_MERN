import React, { useState } from 'react';
import { FaCheckCircle, FaCircle, FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Install Node.js & Verify", description: "Apne system par Node.js install kijiye aur terminal me 'node -v' aur 'npm -v' se verify kijiye." },
  { level: "Easy", title: "Create First Node Script", description: "Ek simple JavaScript file banaiye jo console me 'Hello from Node.js' print kare." },
  { level: "Easy", title: "Create a Simple Server", description: "Node.js 'http' module ka use karke ek basic server banaiye jo browser me 'Server Running' show kare." },

  { level: "Intermediate", title: "Build a Simple API", description: "Ek Node.js server banaiye jo '/api' route par ek simple JSON response bheje." },
  { level: "Intermediate", title: "Serve HTML File", description: "Ek HTML file ko Node.js server ke through serve karke browser me display kijiye." },
  { level: "Intermediate", title: "Understand nodemon", description: "Nodemon install karke Node.js app ko auto-restart karwana seekhiye." },

  { level: "Hard", title: "Create a Basic CRUD API", description: "Ek full CRUD (Create, Read, Update, Delete) API banaiye bina kisi framework ke (pure Node.js se)." },
  { level: "Hard", title: "Create a Logger Middleware", description: "Ek aisa custom middleware banaiye jo har request ka method aur URL log kare console me." },
  { level: "Hard", title: "Work with File System (fs module)", description: "Node.js 'fs' module ka use karke ek file create, read, update aur delete karna seekhiye." },

  { level: "Project", title: "Build a CLI Weather App", description: "Node.js ka use karke ek Command Line Weather App banaiye jo kisi API se data fetch kare aur console me show kare." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Tasknode = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white md:py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md mt-11">
        Node.js Tasks & Project
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

export default Tasknode;
