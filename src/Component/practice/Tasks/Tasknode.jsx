import React from 'react';
import { FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Setup Node.js Project", description: "Node.js project initialize karke ek simple server setup kijiye using Express." },
  { level: "Easy", title: "Create Basic Express Route", description: "Ek Express route banaiye jo browser me 'Hello from Express' show kare." },
  { level: "Easy", title: "Send JSON Response", description: "Ek route banaiye jo JSON data return kare browser me." },

  { level: "Intermediate", title: "Connect MongoDB with Node", description: "Node.js application me MongoDB connect kijiye using Mongoose." },
  { level: "Intermediate", title: "POST API for Creating Data", description: "Ek POST API banaiye jo MongoDB me data insert kare." },
  { level: "Intermediate", title: "GET API for Fetching Data", description: "Ek GET API banaiye jo MongoDB se data fetch karke response me bheje." },

  { level: "Hard", title: "CRUD API (Create, Read, Update, Delete)", description: "Full CRUD API develop kijiye Express aur MongoDB ka use karke." },
  { level: "Hard", title: "Middleware for Validation", description: "Custom middleware likhiye jo incoming requests ko validate kare." },
  { level: "Hard", title: "Build Authentication System", description: "JWT authentication system implement kijiye Express backend me." },

  { level: "Project", title: "Build Full Stack Blog App", description: "Ek full stack Blog app banaiye jisme Node.js, Express, MongoDB backend ho aur React frontend connected ho." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Tasknode = () => {
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

export default Tasknode;
