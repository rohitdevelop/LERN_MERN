import React from 'react';
import NodeSidebar from '../NodeSidebar';
import { Link } from 'react-router-dom';

const NodeModules = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            📦 Node.js Modules — Step by Step
          </h1>

          {/* What is Module */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📌 Module kya hota hai?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Module ka matlab hai — ek chhota part of code jo kisi specific kaam ke liye likha gaya ho. 
            <br />
            Node.js me har file ek module hoti hai. 🧩
            <br />
            Modules hamare code ko <span className="text-green-300 font-semibold">reusable</span> aur <span className="text-green-300 font-semibold">manageable</span> banate hain.
          </p>

          {/* Types of Modules */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🔥 Types of Modules
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>✅ <span className="text-yellow-300 font-semibold">Built-in Modules</span> (jo Node.js ke sath aate hain, jaise fs, path, http)</li>
            <li>✅ <span className="text-yellow-300 font-semibold">Third-party Modules</span> (jo npm se install karte hain, jaise express, mongoose)</li>
            <li>✅ <span className="text-yellow-300 font-semibold">Custom Modules</span> (jo hum khud banate hain)</li>
          </ul>

          {/* Built-in Modules */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🛠 Built-in Modules Example
          </h2>
          <p className="text-base leading-relaxed mb-2">
            Jaise hum <span className="text-green-300 font-semibold">fs</span> module use karte hain files handle karne ke liye:
          </p>
          
            <pre>
{`const fs = require('fs');

fs.writeFileSync('rohit.txt', 'Hello Rohit!');`}
            </pre>
          

          {/* Custom Module */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            ✍️ Custom Module kaise banaye?
          </h2>
          <p className="text-base leading-relaxed mb-2">
            1️⃣ Pehle ek alag file banao, jaise <code className="text-green-300">math.js</code>
          </p>
          
            <pre>
{`// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;`}
            </pre>
    

          <p className="text-base leading-relaxed mb-2">
            2️⃣ Fir use apni main file me import karo:
          </p>
          
            <pre>
{`// app.js
const add = require('./math');

console.log(add(2, 3));  // Output: 5`}
            </pre>
         

          {/* Summary */}
          <div className="text-lg mt-8 font-semibold text-green-300">
            🚀 Summary: Node.js me modules code ko divide, reuse, aur manage karne ka best tariqa hain! 💻
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/node/server"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/node/Export"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NodeModules;
