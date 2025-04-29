import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Exprouter = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-cyan-400">Express Routers</h1>

        <h2 className="text-xl font-semibold text-red-400">🔹 Router Kya Hota Hai?</h2>
        <p>
          Express Router ek mini application hai jo middleware aur route handle karta hai.
          Ye help karta hai aapke code ko modular aur organized banane mein, specially jab aapka app bada ho jata hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Router Kyun Use Karte Hai?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Code ko separate karna easy ho jata hai</li>
          <li>Maintainability badh jaati hai</li>
          <li>Har feature/module ke routes alag file mein define kar sakte ho</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🔹 Basic Router Example</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
// routes/userRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/:id", (req, res) => {
  res.send("User ID: " + req.params.id);
});

module.exports = router;
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 App.js ya server.js me use kaise kare?</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
// server.js
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes); // All user related routes start with /users

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">📁 Folder Structure</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
project-folder/
├── routes/
│   └── userRoutes.js
├── server.js
├── package.json
└── node_modules/
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Hinglish Summary</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><span className="text-cyan-300">Router</span> ek chhota express app hota hai — jo sirf routing handle karta hai</li>
          <li>Iska use large apps mein hota hai jaha multiple endpoints hote hain</li>
          <li>Modular code likhne ke liye router use karna **best practice** hai</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">✨ Real-Life Example</h2>
        <p>
          Imagine karo ek e-commerce app jismein:
          <ul className="list-disc ml-6">
            <li><code>/users</code> ke liye ek router</li>
            <li><code>/products</code> ke liye doosra router</li>
            <li><code>/orders</code> ke liye teesra router</li>
          </ul>
          Ye sab cheezein separate folders/files mein organized hoti hain using routers.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/ejs"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/middleware"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Exprouter;
