import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiBookOpen, FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Htmlsidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chapters = [
    {
      title: 'HTML BASICS',
      topics: [
        { name: 'What is HTML?', path: '/html/what-is-html' },
        { name: 'HTML Working', path: '/html/working' },
        { name: 'HTML Excution', path: '/html/Excution' },
        { name: 'HTML Page structure', path: '/html/structure' },
      ]
    },
    {
      title: 'TAGS & ELEMENTS...',
      topics: [
        { name: 'HTML Tags', path: '/html/tags' },
        { name: 'HTML Elements', path: '/html/element' },
        { name: 'HTML Atributes', path: '/html/atributes' },
        { name: 'Classes & ID', path: '/html/class-id' },
       ]
    },
    {
      title: 'BLOCK & INLINE',
      topics: [
        { name: 'HTML Block Elements', path: '/html/block-elements' },
         { name: 'HTML Enline Elements', path: '/html/inline-elements' },
      ]
    },
    {
      title: 'HTML MORE',
      topics: [
        { name: 'HTML Forms', path: '/html/forms' },
        { name: 'HTML Tables', path: '/html/tables' },
        { name: 'HTML Lists', path: '/html/lists' },
      ]
    },
    {
      title: 'LERN_MERN',
      topics: [
        { name: 'Videos', path: '/html/videos' },
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
          {isOpen ? <RxCross1 size={20}/> :<FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 bg-gray-800 text-white p-4 h-screen w-64 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 z-40 transition-transform duration-300 ease-in-out md:translate-x-0 md:block ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ maxHeight: 'calc(100vh - 36px)' }}
      >
        <h2 className="text-xl font-bold mb-4">HTML Fundamentals</h2>
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

export default Htmlsidenav;