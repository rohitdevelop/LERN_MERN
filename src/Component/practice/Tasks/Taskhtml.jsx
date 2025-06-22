import React from 'react';
import { FaCheckCircle, FaCircle, FaStar, FaTrophy } from "react-icons/fa";

const tasks = [
  { level: "Easy", title: "Create a Simple HTML Page", description: "Banaiye ek basic HTML page jisme heading aur paragraph ho." },
  { level: "Easy", title: "Build an Unordered List", description: "Ek unordered list banaiye apne 5 favourite fruits ke naam ke saath." },
  { level: "Easy", title: "Create a Table with 3 Rows", description: "Ek table banaiye jisme 3 rows aur 2 columns ho: Name aur Age." },

  { level: "Intermediate", title: "Form with Input Fields", description: "Ek form design kijiye jisme naam, email, aur password input fields ho aur ek submit button ho." },
  { level: "Intermediate", title: "Create an HTML Resume", description: "Apna ek simple resume banaiye sirf HTML ka use karke (without CSS)." },
  { level: "Intermediate", title: "Build a Navigation Menu", description: "Ek simple navigation bar banaiye jisme Home, About, Services aur Contact links ho." },

  { level: "Hard", title: "Create a Pricing Table Layout", description: "Ek pricing table banaiye 3 alag alag plans ke saath (Basic, Pro, Premium)." },
  { level: "Hard", title: "Multi-section Landing Page", description: "Ek landing page banaiye multiple sections ke saath jaise Hero, Features, Testimonials, Contact." },
  { level: "Hard", title: "FAQ Accordion Using Only HTML", description: "FAQ ke liye ek accordion style structure banaiye sirf HTML ke saath (without JavaScript or CSS)." },

  { level: "Project", title: "Design a Full Portfolio Website (HTML Only)", description: "Ek poora portfolio website banaiye jisme About, Skills, Projects aur Contact sections ho." },
];

const getIcon = (level) => {
  if (level === "Easy") return <FaStar className="text-yellow-400" />;
  if (level === "Intermediate") return <FaStar className="text-blue-500" />;
  if (level === "Hard") return <FaTrophy className="text-red-500" />;
  if (level === "Project") return <FaTrophy className="text-green-500" />;
};

const Taskhtml = () => {
 
  

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
          <div className="p-6 rounded-2xl shadow-2xl border-2 transition-colors duration-300
            hover:bg-purple-100 bg-white bg-opacity-90 backdrop-blur-md w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {getIcon("Project")}
                <h2 className="text-xl font-bold text-black">{tasks[9].title}</h2>
              </div>
               
            </div>
            <p className="text-sm font-semibold mb-1 text-gray-600">{tasks[9].level}</p>
            <p className="text-gray-700">{tasks[9].description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Taskhtml;
