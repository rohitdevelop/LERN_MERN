import React from "react";
import NodeSidebar from "../NodeSidebar";
import { Link } from "react-router-dom";

const EjsVsJsx = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            📜 EJS vs JSX — Difference & Use Cases
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            Dono EJS aur JSX templating ke liye use hote hain, lekin inke concepts aur use-case alag hain. Chalo simple language me samjhte hain. 🚀
          </p>

          {/* What is EJS */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            💠 EJS (Embedded JavaScript Templates) kya hota hai?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            EJS ek server-side templating language hai jo HTML ke andar JavaScript ko embed karne deti hai.
            Server me render hota hai aur browser ko final HTML milti hai.
          </p>

          {/* What is JSX */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            💠 JSX (JavaScript XML) kya hota hai?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            JSX ek syntax extension hai JavaScript ke liye jo React me use hota hai. Yeh JavaScript aur HTML ka mix hota hai.
            Browser ke samne direct nahi jaata; pehle compile hota hai JavaScript me (React.createElement ke form me).
          </p>

          {/* Comparison Table */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📊 EJS vs JSX — Quick Comparison
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border border-gray-700">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-3 border border-gray-700">Feature</th>
                  <th className="p-3 border border-gray-700">EJS</th>
                  <th className="p-3 border border-gray-700">JSX</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-700">Type</td>
                  <td className="p-3 border border-gray-700">Server-side Templating</td>
                  <td className="p-3 border border-gray-700">Client-side Rendering (React)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-700">Syntax</td>
                  <td className="p-3 border border-gray-700">HTML ke andar JS embed</td>
                  <td className="p-3 border border-gray-700">JS ke andar HTML like code likhte hain</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-700">Rendering</td>
                  <td className="p-3 border border-gray-700">Server me render hota hai</td>
                  <td className="p-3 border border-gray-700">Browser me render hota hai</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-700">Use Case</td>
                  <td className="p-3 border border-gray-700">Traditional Websites, Server-side HTML pages</td>
                  <td className="p-3 border border-gray-700">Single Page Applications (SPA) using React</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-700">Dependency</td>
                  <td className="p-3 border border-gray-700">Node.js Environment</td>
                  <td className="p-3 border border-gray-700">React Library Required</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* When to use what */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🤔 Kab EJS aur kab JSX use kare?
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>✅ Agar tum simple websites bana rahe ho jisme server pages bhejta hai → <span className="text-green-300 font-semibold">EJS</span> use karo.</li>
            <li>✅ Agar tum dynamic, fast, reactive UI banana chahte ho jisme zyada client side interactions ho → <span className="text-green-300 font-semibold">JSX (React)</span> use karo.</li>
          </ul>

          {/* Summary */}
          <div className="text-lg mt-8 font-semibold text-green-300">
            🚀 Summary: EJS backend pe aur JSX frontend pe king hai! Dono ke use-case alag hain, aur dono ka apna importance hai. 🔥
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/node/setup"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/node/server"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EjsVsJsx;
