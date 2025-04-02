import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Navmain from "../Navbar/Navmain";

const Subnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Web Fundamentals", path: "/introduction/web-development" },
    { name: "HTML", path: "/html" },
    { name: "CSS", path: "/css" },
    { name: "JavaScript", path: "/javascript" },
    { name: "React", path: "/react" },
    { name: "Node.js", path: "/node" },
    { name: "Express", path: "/express" },
    { name: "MongoDB", path: "/mongo" },
  ];
  return (
    <>
    <Navmain />
    <nav className="bg-black py-4 px-5 mt-16 text-white border-b fixed top-0 left-0 w-full z-40 border-gray-700">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          >
          {isOpen ?  <RxCross1 /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-around mt-3 text-lg">
        {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="hover:text-gray-400">
            {link.name}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation */}
      {isOpen && (
          <ul className="md:hidden fixed top-24 left-0 w-full bg-gray-900 p-4 rounded-lg flex flex-col items-center space-y-3 text-lg z-50">
          {navLinks.map((link, index) => (
              <Link
              key={index}
              to={link.path}
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
              >
              {link.name}
            </Link>
          ))}
        </ul>
      )}
    </nav>
      </>
  );
};

export default Subnav;
