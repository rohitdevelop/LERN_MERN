import React from 'react';
import NodeSidebar from '../NodeSidebar';
import { Link } from 'react-router-dom';

const ExportImport = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            🔄 Export and Import in Node.js — Step by Step
          </h1>

          {/* What is Export/Import */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📌 Export aur Import kya hota hai?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Node.js me agar hum apne code (functions, variables, classes) ko doosri file me use karna chahein, 
            to hume <span className="text-green-300 font-semibold">Export</span> aur <span className="text-green-300 font-semibold">Import</span> karna padta hai.
            <br />
            <br />
            <span className="text-yellow-300 font-semibold">Export:</span> Code ko bahar bhejna (make it available).<br />
            <span className="text-yellow-300 font-semibold">Import:</span> Kisi doosre file ka code apni file me lena.
          </p>

          {/* How to Export */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🚀 Kaise Export karein?
          </h2>
          <p className="text-base leading-relaxed mb-2">
            Hum <span className="text-green-300">module.exports</span> use karte hain kuch export karne ke liye.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export
module.exports = { add, subtract };
`}
            </pre>
          </div>

          {/* How to Import */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📥 Kaise Import karein?
          </h2>
          <p className="text-base leading-relaxed mb-2">
            Hum <span className="text-green-300">require()</span> use karte hain kisi file ka data apni file me lene ke liye.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// app.js
const math = require('./math');

console.log(math.add(5, 3));        // Output: 8
console.log(math.subtract(10, 4));  // Output: 6
`}
            </pre>
          </div>

          {/* Single Export */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            ✍️ Ek hi Function ya Variable Export karna
          </h2>
          <p className="text-base leading-relaxed mb-2">
            Agar sirf ek function export karna ho, to directly kar sakte ho:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// greet.js
module.exports = function(name) {
  return \`Hello, \${name}!\`;
}

// Import
const greet = require('./greet');
console.log(greet('Rohit')); // Output: Hello, Rohit!
`}
            </pre>
          </div>

          {/* Summary */}
          <div className="text-lg mt-8 font-semibold text-green-300">
            🎯 Summary:
          </div>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>✅ <span className="text-yellow-300">module.exports</span> se cheeze export karte hain.</li>
            <li>✅ <span className="text-yellow-300">require()</span> se cheeze import karte hain.</li>
            <li>✅ Yeh tarika CommonJS module system ka part hai (jo Node.js me default hai).</li>
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/node/modules"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/node/error"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExportImport;
