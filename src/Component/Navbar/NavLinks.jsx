import { Blocks } from "lucide-react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
function NavLinks() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ul className="hidden md:flex items-center justify-center space-x-8 ">
        <Link to={"/"}>
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
        </Link>
        <Link to={"/chapters"}>
          <li className="hover:text-gray-300 cursor-pointer">Chapters</li>{" "}
          {/* Fixed case */}
        </Link>
        <Link to={"/quiz"}>
          <li className="hover:text-gray-300 cursor-pointer">Quiz</li>{" "}
          {/* Fixed typo */}
        </Link>
        <Link to={"/about"}>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
        </Link>
      </ul>

      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-900 p-6 transition-all duration-300 ${
          open ? "block" : "hidden"
        } `}
      >
        <ul
          className="flex flex-col space-y-4 text-white"
          onClick={() => setOpen(false)}
        >
          <Link to={"/"}>
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
          </Link>
          <Link to={"/chapters"}>
            <li className="hover:text-gray-300 cursor-pointer">Chapters</li>{" "}
            {/* Fixed case */}
          </Link>
          <Link to={"/quiz"}>
            <li className="hover:text-gray-300 cursor-pointer">Quiz</li>{" "}
            {/* Fixed typo */}
          </Link>
          <Link to={"/about"}>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
