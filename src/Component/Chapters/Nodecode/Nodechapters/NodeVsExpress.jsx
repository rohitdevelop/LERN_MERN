import React from "react";
import NodeSidebar from "../NodeSidebar";
import { Link } from "react-router-dom";

const NodeVsExpress = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-cyan-400">
            🆚 Node.js vs Express.js
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            <strong>Node.js</strong> ek JavaScript runtime environment hai, jabki <strong>Express.js</strong> ek framework hai jo Node.js ke upar bana hai. Dono ka purpose alag hai, but dono milke backend development ko super easy aur powerful bana dete hain. 🚀
          </p>

          {/* Difference Section */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🔥 Difference between Node.js and Express.js
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>
              🟢 <strong>Node.js:</strong> Runtime environment jisme JavaScript server pe run hota hai.
            </li>
            <li>
              🟣 <strong>Express.js:</strong> Node.js ka lightweight framework jo request/response handle karne ke kaam aata hai.
            </li>
            <li>
              🟢 Node.js se tum server manually create karte ho (bohot saari cheeze manually likhni padti hain).
            </li>
            <li>
              🟣 Express.js bohot saare pre-built methods aur tools deta hai (routing, middleware), time save hota hai.
            </li>
          </ul>

          {/* Benefits Section */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🎯 Benefits of Node.js & Express.js
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>✅ Node.js is ultra fast because of V8 engine.</li>
            <li>✅ Express.js coding ko short aur simple banata hai.</li>
            <li>✅ Dono asynchronous (non-blocking) architecture use karte hain.</li>
            <li>✅ Community support bohot strong hai (NPM packages, modules ready available hote hain).</li>
            <li>✅ Express ke through REST API banana asaan aur organized hota hai.</li>
          </ul>

          {/* Use Cases Section */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            ⚡ Use Cases
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Dono ka use karke tum amazing applications bana sakte ho:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>🌐 Dynamic web applications (React frontend ke sath backend)</li>
            <li>🔗 RESTful APIs create karna (data share karne ke liye)</li>
            <li>💬 Real-time chat applications (Socket.io ke sath)</li>
            <li>🛒 E-commerce websites ka backend</li>
            <li>📦 Hosting static assets (images, CSS files) easily</li>
          </ul>

          {/* Final Summary */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🧠 In short
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            <span className="text-green-300 font-semibold">Node.js</span> gives you the power to run JavaScript on server-side, aur  
            <span className="text-purple-400 font-semibold"> Express.js</span> gives you the shortcut aur tools taaki server banane ka process smooth aur fast ho jaye! 🔥
          </p>

          {/* Buttons */}
          <div className="w-full flex items-center justify-between mt-8 px-4">
            <Link to={"/node/what-is-node"}>
              <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
                PREVIOUS
              </button>
            </Link>

            <Link to={"/node/setup"}>
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

export default NodeVsExpress;
