import React from "react";
import HomeHero from "./HomeHero";
import HomeInfo from "./HomeInfo";
import HomeFooter from "./HomeFooter";

function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gray-100 flex flex-col">
      <HomeHero />
      <HomeInfo />
       <HomeFooter />
    </div>
  );
}

export default Home;
