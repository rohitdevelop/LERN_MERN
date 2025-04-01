import React from "react";
import Navlogo from "./Navlogo";
import NavLinks from "./NavLinks";

const Navmain = () => {
  return (
    <nav className="bg-purple-800 p-4 ">
      <div className="max-w-7xl flex items-center justify-between">
 
        <Navlogo />

        
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navmain;


// mx-auto