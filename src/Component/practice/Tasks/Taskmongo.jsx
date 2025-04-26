import React, { useState } from 'react';
import { FaCheckCircle, FaCircle, FaDatabase, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Install MongoDB Locally", description: "Apne system pe MongoDB install karo aur check karo ki 'mongod' service run ho rahi hai." },
  { level: "Easy", title: "Create Your First Database", description: "Mongo shell ka use karke ek new database create karo (use command)." },
  { level: "Easy", title: "Create a Collection and Insert Documents", description: "Ek collection create karo aur usme kuch sample documents insert karo." },

  { level: "Intermediate", title: "Find and Query Data", description: "Find, filter aur sort commands ka use karke documents retrieve karna sikho." },
  { level: "Intermediate", title: "Update and Delete Documents", description: "UpdateOne, UpdateMany, aur Delete operations try karo collections pe." },
  { level: "Intermediate", title: "Connect MongoDB with Node.js", description: "Node.js se MongoDB connect karo aur basic CRUD operations perform karo (without Mongoose)." },

  { level: "Hard", title: "Use Mongoose ODM", description: "Mongoose ka use karke schema define karo aur models ke through CRUD operations perform karo." },
  { level: "Hard", title: "Create Relationships", description: "MongoDB me references aur embedded documents ke saath 1-to-1 aur 1-to-many relations banane ki practice karo." },
  { level: "Hard", title: "Aggregation Pipeline", description: "Aggregation pipeline ka use karke complex data analysis queries likhna sikho." },

  { level: "Project", title: "Create a Blog Database", description: "Ek blog ke liye MongoDB me poora database design karo with collections for Users, Posts, aur Comments." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaDatabase className="text-green-400" />;
  if (level === "Intermediate") return <FaDatabase className="text-blue-400" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-purple-500" />;
};

const Taskmongo = () => {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white md:py-12 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md mt-11">
        MongoDB Tasks & Project
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

export default Taskmongo;
