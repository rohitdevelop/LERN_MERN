import React from "react";
import HomeHero from "./HomeHero";
import HomeCard from "./HomeCard";
import HomeInfo from "./HomeInfo";
import HomeFooter from "./HomeFooter";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <HomeHero />
      <HomeInfo />
      <HomeFooter />
    </div>
  );
}

export default Home;
