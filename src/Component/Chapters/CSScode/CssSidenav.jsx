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
        { name: 'Why CSS is Needed?', path: '/css/why-needed' },
        { name: 'Types of CSS', path: '/css/types' },
        { name: 'CSS Syntax', path: '/css/syntax' },
        { name: 'Selectors & Properties', path: '/css/selectors' },
        { name: 'Colors & Units', path: '/css/colors-units' },
        { name: 'CSS Box Model', path: '/css/box-model' },
      ]
    },
    {
      title: 'CSS INTERMEDIATE',
      topics: [
        { name: 'Text & Font Styling', path: '/css/text-font' },
        { name: 'Backgrounds & Borders', path: '/css/background-border' },
        { name: 'CSS Display Property', path: '/css/display' },
        { name: 'Margin & Padding', path: '/css/margin-padding' },
        { name: 'Pseudo Classes & Elements', path: '/css/pseudo' },
      ]
    },
    {
      title: 'CSS ADVANCED',
      topics: [
        { name: 'Flexbox', path: '/css/flexbox' },
        { name: 'Grid Layout', path: '/css/grid' },
        { name: 'Media Queries', path: '/css/media-queries' },
        { name: 'Positioning', path: '/css/positioning' },
        { name: 'Z-Index & Stacking', path: '/css/z-index' },
        { name: 'Transitions & Animations', path: '/css/animations' },
        { name: 'Responsive Design', path: '/css/responsive' },
      ]
    },
    {
      title: 'PROJECT & PRACTICE',
      topics: [
        { name: 'Mini Project - Card UI', path: '/css/project-card' },
        { name: 'Build a Portfolio Page', path: '/css/project-portfolio' },
        { name: 'CSS Quiz', path: '/css/quiz' },
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
