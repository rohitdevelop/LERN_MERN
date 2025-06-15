import React from "react";
import HomeHero from "./HomeHero";
import HomeCard from "./HomeCard";
import HomeInfo from "./HomeInfo";
import HomeFooter from "./HomeFooter";

function Home() {
  return (
    <>
      {/* Top Section with Gradient Background */}
      <div className="relative w-full h-[90vh]">
        <HomeHero />
        {/* If you want to overlay text on the image in the future, use this div */}
        <div className="absolute inset-0 flex justify-center items-center text-center text-white">
          {/* You can add heading or buttons here if needed */}
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-20 py-12 bg-gray-100">
        {/* 🚀 Benefits of Becoming a MERN Stack Developer */}
        <HomeCard />
        {/* 🎯 What You Learn in MERN Stack Development? */}
      </div>

      {/* Info Section */}
      <HomeInfo />

      {/* Footer */}
      <HomeFooter />
    </>
  );
}

export default Home;
