import React from 'react';
import { Link } from 'react-router-dom';

const Websidenav = () => {
 

  const chapters = [
    {
      title: 'Introduction',
      topics: [
        { name: 'What is Web Development?', path: '/introduction/web-development' },
        { name: 'How Websites Work', path: '/introduction/how-websites-work' },
        { name: 'Client vs Server', path: '/introduction/client-vs-server' }
      ]
    },
    {
      title: 'HTML Basics',
      topics: [
        { name: 'HTML Structure', path: '/html/html-structure' },
        { name: 'Common Tags', path: '/html/common-tags' },
        { name: 'Forms and Inputs', path: '/html/forms-inputs' }
      ]
    },
    {
      title: 'CSS Fundamentals',
      topics: [
        { name: 'Selectors & Specificity', path: '/css/selectors-specificity' },
        { name: 'Box Model', path: '/css/box-model' },
        { name: 'Flexbox & Grid', path: '/css/flexbox-grid' }
      ]
    },
    {
      title: 'JavaScript Essentials',
      topics: [
        { name: 'Variables & Data Types', path: '/javascript/variables-data-types' },
        { name: 'Functions & Scope', path: '/javascript/functions-scope' },
        { name: 'DOM Manipulation', path: '/javascript/dom-manipulation' }
      ]
    },
    {
      title: 'JavaScript Essentials',
      topics: [
        { name: 'Variables & Data Types', path: '/javascript/variables-data-types' },
        { name: 'Functions & Scope', path: '/javascript/functions-scope' },
        { name: 'DOM Manipulation', path: '/javascript/dom-manipulation' }
      ]
    },
    {
      title: 'JavaScript Essentials',
      topics: [
        { name: 'Variables & Data Types', path: '/javascript/variables-data-types' },
        { name: 'Functions & Scope', path: '/javascript/functions-scope' },
        { name: 'DOM Manipulation', path: '/javascript/dom-manipulation' }
      ]
    }
  ];

  return (
    <div className="w-64 hidden md:block h-screen top-16 bg-gray-800 text-white p-4 fixed left-0 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700" style={{ maxHeight: 'calc(100vh - 36px)', overflowY: 'scroll' }}>
      <h2 className="text-xl font-bold mb-4">Web Fundamentals</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} className="mb-2">
            <button 
              className="w-full text-left font-semibold p-2 bg-gray-700 rounded-md hover:bg-gray-600"
            >
              {chapter.title}
            </button>
            <ul className="pl-4 mt-2">
              {chapter.topics.map((topic, tIndex) => (
                <li key={tIndex} className="p-1 text-sm hover:text-gray-300 cursor-pointer">
                  <Link to={topic.path} className="hover:underline">{topic.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Websidenav;