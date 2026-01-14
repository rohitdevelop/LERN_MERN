import React from "react";
import HomeHero from "./HomeHero";
import HomeInfo from "./HomeInfo";
import HomeFooter from "./HomeFooter";
// import HeroBackground from '../ui/HeroBackground'
function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gray-100 flex flex-col">
      {/* <HeroBackground> */}
      <HomeHero />
      {/* </HeroBackground> */}
        
      <HomeInfo />
      <HomeFooter />
    </div>
  );
}

export default Home;
