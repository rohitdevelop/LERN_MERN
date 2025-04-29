import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expejs = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-cyan-400">Using EJS with Express</h1>

        <h2 className="text-xl font-semibold text-red-400">🔹 EJS Kya Hai?</h2>
        <p>
          EJS (Embedded JavaScript) ek template engine hai jo HTML mein JavaScript embed karne ki facility deta hai.
          Isse hum dynamic content generate kar sakte hain server side par.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 EJS Install Kaise Kare?</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>npm install ejs</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Basic Setup in Express</h2>
        <p>
          Server ko batana padta hai ki view engine EJS hoga aur views folder kaha hai:
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
const express = require("express");
const app = express();

// set view engine
app.set("view engine", "ejs");

// views folder automatically 'views/' consider hota hai
app.get("/", (req, res) => {
  res.render("home", { username: "Rohit" });
});

app.listen(3000, () => {
  console.log("Server started");
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 EJS File Example (views/home.ejs)</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
</head>
<body style="background-color: black; color: white;">
  <h1>Welcome <%= username %>!</h1>
</body>
</html>
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">📁 Folder Structure</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
project-folder/
├── views/
│   └── home.ejs
├── node_modules/
├── package.json
└── server.js
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Hinglish Summary:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><code>ejs</code> se hum HTML files ko dynamic bana sakte hain</li>
          <li><code>res.render()</code> se Express EJS file ko render karta hai</li>
          <li><code>%= username %</code> → dynamic data insert karta hai</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">✨ Real Use</h2>
        <p>
          Jab tum login, dashboard, or dynamic user profiles banate ho — tab EJS kaafi useful hota hai.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/static-files"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/router"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expejs;
