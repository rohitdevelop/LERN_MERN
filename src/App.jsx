import React from "react";
import "./App.css";
import Navmain from "./Component/Navbar/Navmain";
import Home from "./Component/Home/Home";
import Subnav from "./Component/Chapters/Subnav";
import { Route, Routes } from "react-router-dom";
import Intro from "./Component/Chapters/fundamentals/webchapters/Intro";
import Web1 from "./Component/Chapters/fundamentals/webchapters/web1";
import Web2 from "./Component/Chapters/fundamentals/webchapters/web2";
 const App = () => {
  return (
    <div>
      <Navmain />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chapters" element={<Subnav />}></Route>
        <Route path="/introduction/web-development" element={<Intro />}></Route>
        <Route path="/introduction/how-websites-work" element={<Web1 />}></Route>
        <Route path="/introduction/client-vs-server" element={<Web2 />}></Route>
      </Routes>
    </div>
  );
};

export default App;
