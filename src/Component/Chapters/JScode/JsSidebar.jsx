import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiBookOpen, FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const JsSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chapters = [
    {
      title: 'JS INTRODUCTION',
      topics: [
        { name: 'What is JavaScript?', path: '/javascript/what-is-js' },
        { name: 'Why Learn JavaScript?', path: '/javascript/why-learn' },
        { name: 'JS vs Other Languages', path: '/javascript/js-vs-others' },
      ]
    },
    {
      title: 'BASICS OF JS',
      topics: [
        { name: 'Variables (var, let, const)', path: '/javascript/variables' },
        { name: 'Data Types', path: '/javascript/data-types' },
        { name: 'Operators', path: '/javascript/operators' },
        { name: 'Conditionals (if, else)', path: '/javascript/conditionals' },
        { name: 'Loops (for, while)', path: '/javascript/loops' },
        { name: 'Functions', path: '/javascript/functions' },
      ]
    },
    {
      title: 'INTERMEDIATE JS',
      topics: [
        { name: 'Arrays & Methods', path: '/javascript/arrays' },
        { name: 'Objects & Methods', path: '/javascript/objects' },
        { name: 'DOM Manipulation', path: '/javascript/dom' },
        { name: 'Events Handling', path: '/javascript/events' },
        { name: 'ES6 Features', path: '/javascript/es6' },
        { name: 'Callback & Promises', path: '/javascript/promises' },
      ]
    },
    {
      title: 'ADVANCED JS',
      topics: [
        { name: 'Async/Await', path: '/javascript/async-await' },
        { name: 'Closure', path: '/javascript/closure' },
        { name: 'Hoisting', path: '/javascript/hoisting' },
        { name: 'Prototype & Inheritance', path: '/javascript/prototype' },
        { name: 'Error Handling', path: '/javascript/error-handling' },
      ]
    },
    {
      title: 'PROJECT & PRACTICE',
      topics: [
        { name: 'Mini Project - Calculator', path: '/javascript/project-calculator' },
        { name: 'To-Do App', path: '/javascript/project-todo' },
        { name: 'JavaScript Quiz', path: '/javascript/quiz' },
      ]
    }
  ];

  return (
    <>
      {/* Toggle button for mobile */}
      <div className="md:hidden fixed top-20 right-3 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-gray-800 p-1 rounded-md shadow-md focus:outline-none"
        >
          {isOpen ? <RxCross1 size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 bg-gray-800 text-white p-4 h-screen w-64 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 z-40 transition-transform duration-300 ease-in-out md:translate-x-0 md:block ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ maxHeight: 'calc(100vh - 36px)' }}
      >
        <h2 className="text-xl font-bold mb-4">JavaScript Course</h2>
        <ul>
          {chapters.map((chapter, index) => (
            <li key={index} className="mb-2">
              <button className="w-full text-left font-semibold p-2 bg-gray-700 rounded-md hover:bg-gray-600">
                {chapter.title}
              </button>
              <ul className="pl-4 mt-2">
                {chapter.topics.map((topic, tIndex) => (
                  <li key={tIndex} className="p-1 text-sm cursor-pointer">
                    <NavLink
                      to={topic.path}
                      className={({ isActive }) =>
                        `hover:underline flex items-center gap-2 ${
                          isActive ? 'font-bold underline text-white' : 'text-gray-300'
                        }`
                      }
                    >
                      <FiBookOpen /> {topic.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JsSidebar;
