import React from "react";
import Hometext from "./Hometext";
import Homepic from "./Homepic";
import HomeCard from "./HomeCard";
import HomeInfo from "./HomeInfo";
import HomeFooter from "./HomeFooter";

function Home() {
  return (
    <>
    <div className="relative w-full flex items-center justify-center">
      <Homepic />
      <div className="absolute text-center text-white">
        <Hometext />
      </div>
    </div>
    <div className="">
    {/* 🚀 Benefits of Becoming a MERN Stack Developer */}
        <HomeCard />
        {/* 🎯 What You Learn in MERN Stack Development? */}
    </div>
    <HomeInfo />
    <HomeFooter />
    </>
  );
}

export default Home;
