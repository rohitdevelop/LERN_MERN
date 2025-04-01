import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function NavLinks() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul className="hidden md:flex items-center justify-center space-x-8 ">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Chapters</li>
        <li className="hover:text-gray-300 cursor-pointer">Qiez</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
      </ul>

      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? <RxCross1 /> : <GiHamburgerMenu />} 
      </button>
      <div className={`md:hidden fixed top-16 left-0 w-full bg-gray-900 p-6 transition-all duration-300 ${open ? 'block' :'hidden'} `}>

      <ul className="flex flex-col space-y-4 text-white">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Chapters</li>
        <li className="hover:text-gray-300 cursor-pointer">Quiz</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        </ul>
        </div>
    </div>
  );
}

export default NavLinks;
