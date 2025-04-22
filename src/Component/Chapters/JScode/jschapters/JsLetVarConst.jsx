import React from 'react';
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsLetVarConst = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">🔐 `let`, `var`, aur `const` ka difference</h1>

        <p className="text-white font-medium">
          JavaScript mein variables declare karne ke liye hum <strong className="text-yellow-300">var</strong>, <strong className="text-green-300">let</strong>, aur <strong className="text-red-400">const</strong> ka use karte hain. Lekin in teeno mein kaafi differences hain jo samajhna important hai.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400">1️⃣ var</h2>
        <p className="text-white">
          - <strong className="text-yellow-300">Function Scoped</strong> hota hai.<br />
          - Re-declare bhi ho sakta hai.<br />
          - Hoisting karta hai, lekin value <code className="bg-gray-700 px-1 rounded">undefined</code> hoti hai.<br />
          - Global scope mein pollution create karta hai.
        </p>

        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`var a = 10;
var a = 20;  // Valid
console.log(a); // Output: 20`}
        </pre>

        <h2 className="text-2xl font-semibold text-green-400">2️⃣ let</h2>
        <p className="text-white">
          - <strong className="text-green-300">Block Scoped</strong> hota hai.<br />
          - Re-declare nahi ho sakta same scope mein.<br />
          - Hoisting hota hai, but <strong className="text-yellow-400">Temporal Dead Zone</strong> ke wajah se use nahi kar sakte declaration se pehle.
        </p>

        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let x = 10;
let x = 20;  // ❌ Error: Identifier 'x' has already been declared`}
        </pre>

        <h2 className="text-2xl font-semibold text-red-400">3️⃣ const</h2>
        <p className="text-white">
          - <strong className="text-red-300">Block Scoped</strong> hota hai.<br />
          - Value assign karte waqt hi deni hoti hai.<br />
          - Re-assign ya re-declare nahi ho sakta.<br />
          - Objects aur arrays ke case mein values update ho sakti hain (reference same hona chahiye).
        </p>

        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`const PI = 3.14;
PI = 3.1416;  // ❌ Error: Assignment to constant variable.

const user = { name: "Rohit" };
user.name = "Singh"; // ✅ Valid, object ki value update ho rahi hai`}
        </pre>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-6">🔍 Summary (Table Format)</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-white border border-gray-700 text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="border px-2 py-1">Feature</th>
                <th className="border px-2 py-1">var</th>
                <th className="border px-2 py-1">let</th>
                <th className="border px-2 py-1">const</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="border px-2 py-1">Scope</td>
                <td className="border px-2 py-1">Function</td>
                <td className="border px-2 py-1">Block</td>
                <td className="border px-2 py-1">Block</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Hoisting</td>
                <td className="border px-2 py-1">Yes (undefined)</td>
                <td className="border px-2 py-1">Yes (TDZ)</td>
                <td className="border px-2 py-1">Yes (TDZ)</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border px-2 py-1">Re-declare</td>
                <td className="border px-2 py-1">Yes</td>
                <td className="border px-2 py-1">No</td>
                <td className="border px-2 py-1">No</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Re-assign</td>
                <td className="border px-2 py-1">Yes</td>
                <td className="border px-2 py-1">Yes</td>
                <td className="border px-2 py-1">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-white mt-4">
          <strong className="text-yellow-300">👉 Tips:</strong><br />
          🔹 Hamesha <code className="bg-gray-700 px-1 rounded">let</code> aur <code className="bg-gray-700 px-1 rounded">const</code> ka use karo modern JavaScript mein.<br />
          🔹 <code className="bg-gray-700 px-1 rounded">const</code> default raho jab tak aapko reassign karna na ho.<br />
          🔹 <code className="bg-gray-700 px-1 rounded">var</code> avoid karo kyunki wo predictable nahi hota.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/excution"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/primitives"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JsLetVarConst;
