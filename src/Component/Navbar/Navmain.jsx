import React from "react";
import Navlogo from "./Navlogo";
import NavLinks from "./NavLinks";

const Navmain = () => {
  return (
    <nav className="bg-purple-700/20 backdrop-blur-lg text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Navlogo />
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navmain;
