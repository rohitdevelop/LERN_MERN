import React from 'react';
import { FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Create a Simple React Component", description: "Ek functional component banaiye jo 'Hello React' return kare." },
  { level: "Easy", title: "JSX Practice", description: "Ek React component me image aur paragraph display kijiye using JSX." },
  { level: "Easy", title: "Button Click Event", description: "Ek button banaiye jo click karne par console me 'Button Clicked' print kare." },

  { level: "Intermediate", title: "Build a Counter App", description: "Ek counter app banaiye jo button click par increment aur decrement ho." },
  { level: "Intermediate", title: "Form Handling in React", description: "Ek form banaiye jisme input fields aur submit button ho, aur submit hone par form data show ho." },
  { level: "Intermediate", title: "Conditional Rendering", description: "Ek component banaiye jo button click karne par text show ya hide kare using conditional rendering." },

  { level: "Hard", title: "Todo App using React States", description: "Ek complete Todo App banaiye jisme add, delete, aur complete functionalities ho." },
  { level: "Hard", title: "React Routing Setup", description: "React Router ka use karke ek basic multi-page setup banaiye with Home, About, Contact pages." },
  { level: "Hard", title: "Fetch API in React", description: "Ek app banaiye jo kisi public API se data fetch karke list display kare." },

  { level: "Project", title: "Portfolio Website using React", description: "Apna ek complete portfolio website banaiye React me (multiple pages, reusable components, responsive design)." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskreact = () => {
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

export default Taskreact;
