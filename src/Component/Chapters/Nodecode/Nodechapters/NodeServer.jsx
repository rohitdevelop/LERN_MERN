import React from "react";
import NodeSidebar from "../NodeSidebar";
import { Link } from "react-router-dom";

const NodeServer = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            🟢 Node.js Server Kaise Banaye?
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            Node.js me ek basic server banana kaafi simple hai! 🚀 Server ek aisi
            jagah hoti hai jo client ke request ko receive karta hai aur response
            bhejta hai.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📦 Server banane ke liye kya chahiye?
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>✅ Node.js installed hona chahiye system me</li>
            <li>✅ Ek file (jaise <code>server.js</code>) create karni hogi</li>
            <li>✅ Node ka built-in <span className="text-green-300 font-semibold">http module</span> use karenge</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🛠️ Server ka Basic Code
          </h2>
             <pre>
{`
const http = require('http');

// Server create karna
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! This is my first Node server 🚀');
});

// Server ko listen karwana kisi port pe (jaise 3000)
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
`}
            </pre>
          

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🔍 Code Samajhte Hain:
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>🧩 <code>http</code> module ko <span className="text-green-300 font-semibold">require</span> kiya (import ki tarah)</li>
            <li>🧩 <code>createServer()</code> se ek server banaya</li>
            <li>🧩 <code>req</code> - client ka request object hota hai</li>
            <li>🧩 <code>res</code> - server ka response object hota hai</li>
            <li>🧩 <code>res.writeHead()</code> - response ke headers set karta hai</li>
            <li>🧩 <code>res.end()</code> - response bhejta aur connection close karta hai</li>
            <li>🧩 <code>server.listen(3000)</code> - server ko port 3000 pe chalu karta hai</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            📢 Server ko run kaise kare?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            1️⃣ Terminal me jaake apni file ka naam likho:
            <br />
            <code className="bg-gray-800 text-green-300 p-1 rounded">node server.js</code>
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            2️⃣ Fir browser me jaake open karo:
            <br />
            <span className="text-green-400 font-bold">http://localhost:3000/</span>
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📈 Real-world Use Case
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
            <li>🔵 Web server banana jo websites serve kare</li>
            <li>🔵 APIs banakar mobile apps ko data dena</li>
            <li>🔵 Realtime data like chat applications</li>
          </ul>

          <div className="text-lg mt-8 font-semibold text-green-300">
            🚀 Yahi basic server ka magic tha Node.js me! Ab tum aage jaake Express.js seekh kar server banana aur easy aur powerful kar sakte ho! 🔥
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/node/ejs"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/node/modules"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NodeServer;
