import React from "react";
import "./App.css";
import Navmain from "./Component/Navbar/Navmain";
import Home from "./Component/Home/Home";
import Subnav from "./Component/Chapters/Subnav";
import { Route, Routes } from "react-router-dom";
import Intro from "./Component/Chapters/fundamentals/webchapters/Intro";
import Internet from "./Component/Chapters/fundamentals/webchapters/Internet";
import Server from "./Component/Chapters/fundamentals/webchapters/Server";
import Whatinter from "./Component/Chapters/fundamentals/webchapters/Whatinter";
import Whatnet from "./Component/Chapters/fundamentals/webchapters/Whatnet";
// import Web1 from "./Component/Chapters/fundamentals/webchapters/web1.jsx";
// import Web2 from "./Component/Chapters/fundamentals/webchapters/web2.jsx";
const App = () => {
  return (
    <div>
      <Navmain />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chapters" element={<Subnav />}></Route>
        <Route path="/introduction/web-development" element={<Intro />}></Route>

        <Route path="/introduction/how-websites-work" element={<Server />}></Route>
            <Route path="/introduction/client-vs-server" element={<Internet />}></Route>
            <Route path="/INTERNET-NETWORK/internet" element={<Whatinter />}></Route>
            <Route path="/INTERNET-NETWORK/network" element={<Whatnet />}></Route>
      </Routes>
    </div>
  );
};

export default App;
