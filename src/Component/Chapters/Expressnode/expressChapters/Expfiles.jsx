import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expfiles = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-cyan-400">Serving Static Files in Express</h1>

        <h2 className="text-xl font-semibold text-red-400">🔹 Static Files Kya Hote Hain?</h2>
        <p>
          Static files jaise HTML, CSS, JS, images etc. wo files hoti hain jo directly browser ko bheji ja sakti hain — bina processing ke.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Express Se Static Files Kaise Serve Karte Hain?</h2>
        <p>
          Express mein <code>express.static()</code> method ka use karke hum kisi folder ko static bana sakte hain.
        </p>

        <h2 className="text-xl font-semibold text-red-400">📁 Folder Structure Example</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
project-folder/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── server.js
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Server Code</h2>
        <p>
          Yeh code `public` folder ko static banata hai:
        </p>

        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
const express = require("express");
const app = express();

// static folder
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Samajho Hinglish Mein:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><code>express.static("public")</code> – public folder ko accessible bana diya</li>
          <li>Browser se <code>localhost:3000/index.html</code> se file serve ho jaayegi</li>
          <li>Ab HTML, CSS, JS sab easily access ho jaayenge from public folder</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🎯 Real Life Use</h2>
        <p>
          Jab tum frontend files ko Express backend ke sath host karte ho, tab static folder kaafi useful hota hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400">✅ Tips:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Static folder ka naam kuch bhi ho sakta hai — e.g. <code>assets</code>, <code>public</code></li>
          <li>Multiple static folders bhi define kiye ja sakte hain</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/server"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/ejs"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expfiles;
