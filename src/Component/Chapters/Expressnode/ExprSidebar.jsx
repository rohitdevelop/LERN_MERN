import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiBookOpen, FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const ExprSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chapters = [
    {
      title: 'EXPRESS INTRODUCTION',
      topics: [
        { name: 'What is Express.js?', path: '/express/What-is-express' },
        { name: 'Why Use Express?', path: '/express/why' },
        { name: 'Installing Express', path: '/express/install' },
        { name: 'Creating First App', path: '/express/first-app' },
      ]
    },
    {
      title: 'CORE CONCEPTS',
      topics: [
        { name: 'Routing Basics', path: '/express/routing' },
        { name: 'Middleware Functions', path: '/express/middleware' },
        { name: 'Handling Requests & Responses', path: '/express/req-res' },
        { name: 'Static Files', path: '/express/static-files' },
        { name: 'Template Engines (EJS)', path: '/express/ejs' },
      ]
    },
    {
      title: 'ADVANCED TOPICS',
      topics: [
        { name: 'REST APIs', path: '/express/rest-api' },
        { name: 'Connecting to MongoDB', path: '/express/mongodb' },
        { name: 'Error Handling', path: '/express/error-handling' },
        { name: 'Environment Variables', path: '/express/env' },
        { name: 'Express Router', path: '/express/router' },
      ]
    },
    {
      title: 'PROJECT & PRACTICE',
      topics: [
        { name: 'Mini Project - Todo API', path: '/express/todo-project' },
        { name: 'Authentication with JWT', path: '/express/jwt-auth' },
        { name: 'Express Quiz', path: '/express/quiz' },
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
          {isOpen ? <RxCross1 size={20}/> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 bg-gray-800 text-white p-4 h-screen w-64 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 z-40 transition-transform duration-300 ease-in-out md:translate-x-0 md:block ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ maxHeight: 'calc(100vh - 36px)' }}
      >
        <h2 className="text-xl font-bold mb-4">Express.js Course</h2>
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
                          isActive ? 'font-bold underline text-white ' : 'text-gray-300'
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

export default ExprSidebar;
