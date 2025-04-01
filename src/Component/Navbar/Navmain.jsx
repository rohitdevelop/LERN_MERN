import React from "react";
import Navlogo from "./Navlogo";
import NavLinks from "./NavLinks";

const Navmain = () => {
  return (
    <nav className="bg-red-800 p-4">
      <div className="max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <Navlogo />

        {/* Navigation Links (Responsive) */}
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navmain;


// mx-auto