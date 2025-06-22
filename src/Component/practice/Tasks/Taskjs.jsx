import React from 'react';
import { FaStar, FaTrophy } from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 py-16 px-4 pt-24">
 
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

export default Taskjs;
