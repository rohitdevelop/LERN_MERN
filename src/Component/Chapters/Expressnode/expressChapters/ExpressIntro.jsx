import React from "react";
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const ExpressIntro = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-cyan-400">Express.js Introduction</h1>

<h2 className="text-2xl text-red-400">
🔹 What is Express.js? 
  </h2>      
        <p className="text-lg">
          Express ek **web application framework** hai jo Node.js ke upar bana hua hai. Yeh lightweight aur fast hai. 
          Iska use hum **web server banane** ke liye karte hain — jisme routes, API, middleware sab kuch easily handle hota hai.
        </p>

        <h2 className="text-2xl text-red-400">
🔹 Why we use Express.js? 
  </h2>  
        <p className="text-lg">
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Simple syntax aur structure hai.</li>
            <li>Request-Response easily handle hota hai.</li>
            <li>Routing aur Middleware support deta hai.</li>
            <li>Backend APIs banana bahut easy ho jaata hai.</li>
            <li>Fast performance ke liye optimized hai.</li>
          </ul>
        </p>

        <h2 className="text-2xl text-red-400">
🔹 Here a some examples 
  </h2>         <p className="text-lg">
          Maan lo tum ek website bana rahe ho jaha <code>/about</code> aur <code>/contact</code> jaise pages hote hain. 
          Express.js se tum aise URLs ke liye easily server responses likh sakte ho:
        </p>

        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <pre>{`
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
          `}</pre>
        </div>

        <p className="text-lg">
          Jaise hi user <code>localhost:3000/about</code> par jaayega, usse "This is About Page" response milega. Simple, right?
        </p>

        <p className="text-lg">
          <strong className="text-yellow-400">🔹 Summary:</strong><br />
          Express.js ek powerful tool hai jo Node.js ke backend development ko easy aur fast bana deta hai. 
          Yeh ek must-learn framework hai full-stack developers ke liye.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/What-is-express"}>
            <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/install"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExpressIntro;
