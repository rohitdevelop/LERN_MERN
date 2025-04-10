import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiBookOpen, FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const CssSidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chapters = [
    {
      title: 'INTRODUCTION',
      topics: [
        { name: 'What is CSS?', path: '/css/what-is-css' },
        { name: 'How CSS Works?', path: '/css/works' },
        { name: 'CSS Syntax', path: '/css/syntax' },
        { name: 'Whys to use/add', path: '/css/use-add' },
        { name: 'CSS Selectors', path: '/css/selectors' },
       ]
    },
    {
      title: 'CSS PROPERTIES',
      topics: [
        { name: 'CSS box model', path: '/css/box-model' },
        { name: 'CSS size', path: '/css/size' },
        { name: 'CSS Display Property', path: '/css/display' },
        { name: 'CSS form', path: '/css/forms' },
        { name: 'CSS Positions', path: '/css/positions' },
        { name: 'Pseudo Classes & Elements', path: '/css/pseudo' },
      ]
    },
    {
      title: 'CSS ADVANCED',
      topics: [
        { name: 'Flexbox', path: '/css/flexbox' },
        { name: 'Grid Layout', path: '/css/grid' },
        { name: 'Transitions & Animations', path: '/css/animations' },
        { name: 'Media Queries', path: '/css/media-queries' },
        { name: 'Responsive Design', path: '/css/responsive' },
      ]
    },
    {
      title: 'LERN_MERN',
      topics: [
        { name: 'Video', path: '/css/video' },
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
        <h2 className="text-xl font-bold mb-4">CSS Course</h2>
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

export default CssSidenav;
