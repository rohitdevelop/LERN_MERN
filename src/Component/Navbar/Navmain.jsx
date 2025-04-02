import React from "react";
import Navlogo from "./Navlogo";
import NavLinks from "./NavLinks";

const Navmain = () => {
  return (
    <nav className="bg-purple-800 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Navlogo />
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navmain;
