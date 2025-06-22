import React from 'react';
import { FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Setup Basic Express Server", description: "Express install karke ek basic server setup kijiye jo browser me 'Hello World' show kare." },
  { level: "Easy", title: "Route Handling", description: "Express me GET, POST, PUT, DELETE routes banaiye aur simple response return kijiye." },
  { level: "Easy", title: "Serving Static Files", description: "Express ka use karke images aur CSS files jaise static files serve kijiye." },

  { level: "Intermediate", title: "Express Middleware Practice", description: "Custom middleware create karke request aur response ke beech me console log dikhaiye." },
  { level: "Intermediate", title: "Basic CRUD API", description: "Express ka use karke CRUD API banaiye (GET, POST, PUT, DELETE) bina database ke." },
  { level: "Intermediate", title: "Route Parameters & Query Strings", description: "Route params aur query string se data fetch karna practice kijiye." },

  { level: "Hard", title: "CRUD API with MongoDB", description: "Express + MongoDB ka use karke ek CRUD API banaiye jisme data database me save ho." },
  { level: "Hard", title: "Error Handling in Express", description: "Custom error middleware create karke errors ko handle karna sikhiye." },
  { level: "Hard", title: "Build RESTful API with Router File Structure", description: "Router files alag alag bana kar ek REST API design kijiye (controller, route structure use karke)." },

  { level: "Project", title: "User Authentication API", description: "Node, Express aur MongoDB ka use karke ek user authentication API banaiye (signup, login, protected routes with JWT)." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskexpress = () => {
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

export default Taskexpress;
