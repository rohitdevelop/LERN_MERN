import React from 'react';
import { FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Install MongoDB Compass", description: "MongoDB Compass install karke GUI interface explore kijiye." },
  { level: "Easy", title: "Create Database and Collections", description: "MongoDB me manually database aur collections create karke data insert kijiye." },
  { level: "Easy", title: "Use Mongoose Schema", description: "Mongoose ka use karke ek simple schema design kijiye aur database me store kijiye." },

  { level: "Intermediate", title: "Relational Collections", description: "MongoDB me do collections banaiye aur unhe ObjectId ke through relational connect kijiye." },
  { level: "Intermediate", title: "MongoDB Query Operators", description: "MongoDB me $gt, $lt, $in jaise query operators ka practical use kijiye." },
  { level: "Intermediate", title: "API Deployment on Render", description: "Apne Node.js API ko Render.com par deploy karke live banaiye." },

  { level: "Hard", title: "MongoDB Aggregation Pipeline", description: "Aggregation pipeline ka use karke complex queries aur reports generate kijiye." },
  { level: "Hard", title: "Database Backup & Restore", description: "MongoDB database ka backup lena aur restore karna seekhiye (CLI commands ka use karke)." },
  { level: "Hard", title: "Secure API with CORS & Rate Limiting", description: "Apne Express API me CORS aur rate limiting lagaiye security ke liye." },

  { level: "Project", title: "Full Authentication System (MERN)", description: "Node, Express, MongoDB aur React ka use karke ek login-signup authentication system banaiye." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskmongo = () => {
  const renderTasksByLevel = (level) => {
    return tasks
      .filter(task => task.level === level)
      .map((task, index) => (
        <div
          key={index}
          className="p-5 rounded-xl shadow-lg transition-colors duration-300 hover:bg-purple-100 bg-white bg-opacity-90 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 mb-2">
            {getIcon(task.level)}
            <h2 className="text-lg font-bold text-black">{task.title}</h2>
          </div>
          <p className="text-sm font-semibold mb-1 text-gray-600">{task.level}</p>
          <p className="text-gray-700">{task.description}</p>
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-purple-900 via-black to-purple-900 py-16 px-4 pt-24">
 
      {/* Easy Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-yellow-400 font-bold mb-8 text-center">Easy Tasks</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {renderTasksByLevel("Easy")}
        </div>
      </section>

      {/* Intermediate Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-blue-400 font-bold mb-8 text-center">Intermediate Tasks</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {renderTasksByLevel("Intermediate")}
        </div>
      </section>

      {/* Hard Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-red-400 font-bold mb-8 text-center">Hard Tasks</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {renderTasksByLevel("Hard")}
        </div>
      </section>

      {/* Project Section */}
      <section className="mb-8">
        <h2 className="text-4xl text-green-400 font-bold mb-8 text-center">Project Task</h2>
        <div className="flex justify-center">
          <div className="p-6 rounded-2xl shadow-2xl hover:bg-purple-100 bg-white bg-opacity-90 backdrop-blur-md w-full max-w-md">
            <div className="flex items-center gap-3 mb-2">
              {getIcon("Project")}
              <h2 className="text-xl font-bold text-black">{tasks[9].title}</h2>
            </div>
            <p className="text-sm font-semibold mb-1 text-gray-600">{tasks[9].level}</p>
            <p className="text-gray-700">{tasks[9].description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Taskmongo;
