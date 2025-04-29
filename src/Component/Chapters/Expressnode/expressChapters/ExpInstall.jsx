import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const ExpInstall = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        
        <h1 className="text-3xl font-bold text-cyan-400">Express.js Installation</h1>

        <h2 className="text-xl font-semibold text-red-400">🔹 Step 1: Node.js Install Karo</h2>
        <p>
          Express use karne ke liye sabse pehle tumhare system mein Node.js install hona chahiye. 
          Visit karo 👉 <a className="text-blue-400 underline" href="https://nodejs.org" target="_blank">https://nodejs.org</a> and download LTS version.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Step 2: Ek New Project Folder Banao</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>
{`mkdir express-app
cd express-app`}
          </pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Step 3: npm init karo</h2>
        <p>
          Isse ek <code>package.json</code> file banegi jo project ka config manage karegi.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>npm init -y</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Step 4: Express Install Karo</h2>
        <p>
          Ab express ko install karo as a dependency.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>npm install express</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Step 5: Basic Express Server banao</h2>
        <p>
          Ab ek file banao jaise <code>index.js</code> aur basic express server ka code likho.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Step 6: Server Run Karo</h2>
        <p>
          Command prompt ya terminal mein run karo:
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>node index.js</pre>
        </div>
        <p>
          Ab browser mein jao 👉 <code>http://localhost:3000</code><br />
          Tumhe "Hello Express!" dikhai dega 🎉
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/What-is-express"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/server"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExpInstall;
