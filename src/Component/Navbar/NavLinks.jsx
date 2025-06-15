import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function NavLinks() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chapters", path: "/chapters" },
    { name: "Practice", path: "/practice" },
    { name: "About", path: "/about" },
  ];

  const getLinkClasses = (path) =>
    `relative group py-1 cursor-pointer transition-colors duration-300 ${
      location.pathname === path ? "text-white" : "text-gray-300 hover:text-white"
    }`;

  const getUnderlineClasses = (path) =>
    `absolute bottom-0 left-1/2 h-0.5 bg-white transform -translate-x-1/2 transition-all duration-300
     ${location.pathname === path ? "w-full" : "w-0 group-hover:w-full"}`;

  return (
    <div className="flex items-center space-x-6">
      {/* Desktop Links */}
      <ul className="hidden md:flex items-center justify-center space-x-8">
        {navItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <li className={getLinkClasses(item.path)}>
              {item.name}
              <span className={getUnderlineClasses(item.path)}></span>
            </li>
          </Link>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/login"
          className="bg-white text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button className="md:hidden text-3xl text-white" onClick={() => setOpen(!open)}>
        {open ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-900 p-6 transition-all duration-300 z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-6 text-white text-lg" onClick={() => setOpen(false)}>
          {navItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <li className={getLinkClasses(item.path)}>
                {item.name}
                <span className={getUnderlineClasses(item.path)}></span>
              </li>
            </Link>
          ))}
          {/* Mobile Buttons */}
          <Link
            to="/login"
            className="bg-white text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition text-center"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition text-center"
          >
            Sign Up
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
