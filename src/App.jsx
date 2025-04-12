import React from "react";
import "./App.css";
import Navmain from "./Component/Navbar/Navmain";
import Router from "./Router";
import Quizmain from "./Component/Quiz/Quizmain";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navmain />
      <Router />
      <Routes>
        <Route path="/practice" element={<Quizmain />} />
      </Routes>
    </div>
  );
};

export default App;
