import React from 'react';
import { FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Apply Background Color", description: "Ek div element par koi bhi background color apply kijiye." },
  { level: "Easy", title: "Text Formatting", description: "Ek heading aur paragraph ko different font size aur color ke saath style kijiye." },
  { level: "Easy", title: "Create a Button with Hover Effect", description: "Ek button banaiye jisme hover karne par background aur text color change ho." },

  { level: "Intermediate", title: "Flexbox Layout", description: "Flexbox ka use karke ek responsive 3-column layout banaiye." },
  { level: "Intermediate", title: "Card Design", description: "Ek card design kijiye jisme image, title aur description ho (only CSS styling)." },
  { level: "Intermediate", title: "Create a Responsive Navbar", description: "Ek responsive navbar banaiye jo mobile view par hamburger icon me change ho (only CSS)." },

  { level: "Hard", title: "CSS Grid Gallery", description: "Ek responsive image gallery banaiye CSS Grid ka use karke." },
  { level: "Hard", title: "Animated Loading Spinner", description: "Sirf CSS ka use karke ek animated loading spinner banaiye." },
  { level: "Hard", title: "CSS Only Dropdown Menu", description: "Ek dropdown menu banaiye sirf CSS ke use se (without JavaScript)." },

  { level: "Project", title: "Complete Personal Website Design (CSS Only)", description: "Apna ek pura personal website design kijiye sirf CSS aur HTML ka use karke. (Responsive bhi hona chahiye.)" },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskcss = () => {

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

export default Taskcss;
