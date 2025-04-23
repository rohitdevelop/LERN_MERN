import React from "react";
import NodeSidebar from "../NodeSidebar";
import { Link } from "react-router-dom";

const NodeIntro = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            🟢 Node.js Introduction
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            <strong>Node.js</strong> ek open-source, cross-platform JavaScript
            runtime environment hai jo <strong>server-side</strong> development
            ke liye use hota hai. Yaani ki JavaScript ko ab sirf browser mein hi
            nahi, balki server pe bhi run kar sakte ho! 🚀
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            ⚙️ Kaise kaam karta hai Node.js?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Node.js ka core part hota hai{" "}
            <span className="text-cyan-400">
              "Event-driven, non-blocking I/O model"
            </span>
            . Matlab, yeh multiple users ke requests ko ek saath efficiently
            handle karta hai bina rukke. Isse performance high hoti hai 🔥
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🚀 Features of Node.js
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>✅ Super fast execution (thanks to V8 engine)</li>
            <li>✅ Asynchronous & Non-blocking</li>
            <li>✅ Built-in modules (fs, http, path, etc.)</li>
            <li>✅ NPM - World's largest software registry</li>
            <li>✅ Perfect for real-time apps like chat, streaming, etc.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🤔 Node.js ka use kahan hota hai?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Node.js ka use mostly <strong>Backend development</strong> ke liye
            hota hai:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
            <li>🔗 API creation (REST APIs, GraphQL)</li>
            <li>🧠 Database se connection (MongoDB, MySQL)</li>
            <li>🔒 Authentication & Authorization</li>
            <li>💬 Real-time chat apps</li>
            <li>🌐 Web servers banana</li>
          </ul>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📦 NPM kya hai?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            <strong>NPM (Node Package Manager)</strong> ek tool hai jiske
            through hum dusre developers ke banaye modules install kar sakte
            hain, jaise ki <code>express</code>, <code>mongoose</code>, etc.
            Bohot saare packages free mein available hote hain! 🧰
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🌍 Node.js + JavaScript = Full Stack Power 💪
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Tum JavaScript ko frontend mein React ke saath use karte ho, aur
            backend mein Node.js ke saath. Dono combine karke tum{" "}
            <span className="text-green-300 font-semibold">
              Full Stack Developer
            </span>{" "}
            ban sakte ho! 🔥
          </p>

          <div className="w-full flex items-center justify-between mt-8 px-4">
            <Link to={"/node/what-is-node"}>
              <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
                PREVIOUS
              </button>
            </Link>

            <Link to={"/node/node-exp"}>
              <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
                NEXT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeIntro;
