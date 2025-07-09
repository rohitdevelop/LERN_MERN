import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function NavLinks() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLetter, setUserLetter] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (user && token) {
      setIsLoggedIn(true);
      setUserLetter(user.name.charAt(0).toUpperCase());
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

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
      <div className="hidden md:flex space-x-4 items-center">
        {!isLoggedIn ? (
          <>
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
          </>
        ) : (
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
              {userLetter}
            </div>
            <FiLogOut
              onClick={handleLogout}
              className="text-white text-xl cursor-pointer hover:text-red-400"
              title="Logout"
            />
          </div>
        )}
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

          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                {userLetter}
              </div>
              <FiLogOut
                onClick={handleLogout}
                className="text-white text-xl cursor-pointer hover:text-red-400"
                title="Logout"
              />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
