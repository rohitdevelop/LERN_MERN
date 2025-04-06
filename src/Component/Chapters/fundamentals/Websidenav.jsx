import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiBookOpen } from "react-icons/fi";

const Websidenav = () => {
  const chapters = [
    {
      title: 'INTRODUCTION',
      topics: [
        { name: 'What is Web Dev?', path: '/introduction/web-development' },
        { name: 'How Websites Work', path: '/introduction/how-websites-work' },
        { name: 'Client vs Server', path: '/introduction/client-vs-server' }
      ]
    },
    {
      title: 'INTERNET/NETWORK',
      topics: [
        { name: 'What is Internet', path: '/INTERNET-NETWORK/internet' },
        { name: 'What is Network', path: '/INTERNET-NETWORK/network' },
        { name: 'Internet Layers', path: '/INTERNET-NETWORK/layers' },
        { name: 'Protocols', path: '/INTERNET-NETWORK/protocols' }
      ]
    },
    {
      title: 'GIT/GITHUB',
      topics: [
        { name: 'Git/Github intro?', path: '/GIT/GITHUB/informaition' },
        { name: 'Commands', path: '/GIT/GITHUB/details' },
      ]
    },
    {
      title: 'Video',
      topics: [
        { name: 'LERN_MERN', path: '/Video/LERN_MERN' },
      ]
    }
  ];

  return (
    <div className="w-64 hidden md:block h-screen top-16 bg-gray-800 text-white p-4 fixed left-0 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700" style={{ maxHeight: 'calc(100vh - 36px)', overflowY: 'scroll' }}>
      <h2 className="text-xl font-bold mb-4">Web Fundamentals</h2>
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
                      `hover:underline   flex items-center gap-2 ${
                        isActive ? 'font-bold underline text-white ' : 'text-gray-300'
                      }`
                    }
                  >
                   <FiBookOpen/> {topic.name}
                  </NavLink>
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
