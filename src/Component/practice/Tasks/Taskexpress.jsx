import React, { useState } from 'react';
import { FaCheckCircle, FaCircle, FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Setup Express App", description: "Ek naya Node.js project create karo aur Express install karke ek simple server banao." },
  { level: "Easy", title: "Create Basic Routes", description: "Express server me '/' aur '/about' ke liye do alag-alag routes banao aur simple text response bhejo." },
  { level: "Easy", title: "Handle 404 Error", description: "Agar koi route nahi milta to ek custom 404 page response bhejna sikho." },

  { level: "Intermediate", title: "Serve Static Files", description: "Express ka use karke ek public folder ke andar se HTML, CSS, JS files serve karna sikho." },
  { level: "Intermediate", title: "Create a REST API", description: "Ek simple REST API banao jisme GET, POST, PUT, aur DELETE routes available ho." },
  { level: "Intermediate", title: "Use Middleware", description: "Custom middleware banao jo har request par ek console log kare jaise 'Request Received'." },

  { level: "Hard", title: "Create Auth Middleware", description: "Ek authentication middleware banao jo har request ke header me ek token check kare." },
  { level: "Hard", title: "Handle Async Errors", description: "Async route handlers likho aur unka error handling sikho using Express error middleware." },
  { level: "Hard", title: "Connect to MongoDB", description: "Express server ko MongoDB database ke saath connect karo (Mongoose ka use kar sakte ho)." },

  { level: "Project", title: "Build a Basic Blog API", description: "Ek full Express.js backend banao jisme blog posts create, read, update aur delete kar sake." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskexpress = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white md:py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md mt-11">
        Express.js Tasks & Project
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

export default Taskexpress;
