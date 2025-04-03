import React from "react";
import "./App.css";
import Navmain from "./Component/Navbar/Navmain";
import Home from "./Component/Home/Home";
import Subnav from "./Component/Chapters/Subnav";
import { Route, Routes } from "react-router-dom";
import Intro from "./Component/Chapters/fundamentals/webchapters/Intro";
const App = () => {
  return (
    <div>
      <Navmain />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Chapters" element={<Subnav />}></Route>
        <Route path="/introduction/web-development" element={<Intro />}></Route>
      </Routes>
    </div>
  );
};

export default App;
