import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expserver = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        
        <h1 className="text-3xl font-bold text-cyan-400">Basic Express Server</h1>

        <h2 className="text-xl font-semibold text-red-400">🔹 Express Server Kya Hota Hai?</h2>
        <p>
          Express.js ke through hum ek server bana sakte hain jo client ke request ko handle karta hai aur response deta hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Ek Simple Server Create Karna</h2>
        <p>
          Yeh sabse basic server code hai jo browser pe "Hello Express" print karega jab hum URL visit karein.
        </p>

        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Code Samjho Hinglish Mein:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><code>require("express")</code> – Express ko import kiya</li>
          <li><code>express()</code> – Ek app banayi</li>
          <li><code>app.get("/", ...)</code> – Jab "/" route pe request aaye to response bhejna</li>
          <li><code>res.send()</code> – Response mein kya bhejna hai</li>
          <li><code>app.listen(3000)</code> – Server ko port 3000 pe chalu karna</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🔹 Server Run Kaise Karein?</h2>
        <p>Terminal mein yeh command likho:</p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>node index.js</pre>
        </div>
        <p>
          Ab browser kholke visit karo 👉 <code>http://localhost:3000</code><br />
          Tumhe output milega: <strong>Hello Express</strong>
        </p>

        <h2 className="text-xl font-semibold text-red-400">🎉 Congrats!</h2>
        <p>
          Tumne successfully apna pehla Express server bana liya hai. Ab agla step hai — static files serve karna.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/install"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/static-files"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expserver;
