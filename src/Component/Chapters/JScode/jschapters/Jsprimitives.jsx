import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const Jsprimitives = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">🧠 JavaScript Primitive Data Types</h1>

        <p className="text-white font-medium">
          JavaScript mein <span className="text-yellow-400 font-semibold">primitive data types</span> wo hote hain jo directly ek single value ko represent karte hain.
          Ye <strong className="text-green-400">immutable</strong> hote hain — matlab unki value ko change nahi kiya ja sakta.
        </p>

        {/* String */}
        <div>
          <h2 className="text-2xl font-semibold text-pink-400">📝 1. String</h2>
          <p>Textual data ko represent karta hai. Double, single ya backtick quotes mein likhte hain.</p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let name = "Rohit";
let msg = 'Hello';
let greet = \`Hi, \${name}!\`;`}
          </pre>
        </div>

        {/* Number */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-400">🔢 2. Number</h2>
          <p>Integer ya floating point numbers ke liye.</p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let age = 19;
let price = 99.99;`}
          </pre>
        </div>

        {/* Boolean */}
        <div>
          <h2 className="text-2xl font-semibold text-green-400">✅ 3. Boolean</h2>
          <p>Sirf do values ho sakti hain: <code>true</code> ya <code>false</code>.</p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let isOnline = true;
let isStudent = false;`}
          </pre>
        </div>

        {/* Undefined */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-300">🔍 4. Undefined</h2>
          <p>Agar kisi variable ko declare kiya gaya ho lekin value assign nahi ki ho to wo undefined hota hai.</p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let x;
console.log(x); // undefined`}
          </pre>
        </div>

        {/* Null */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-300">🚫 5. Null</h2>
          <p>Ye intentionally empty ya "no value" dikhane ke liye use hota hai.</p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let data = null;`}
          </pre>
        </div>

        {/* Symbol */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-400">🔮 6. Symbol (ES6)</h2>
          <p>Unique value generate karta hai — mostly advanced use-cases mein kaam aata hai.</p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // false`}
          </pre>
        </div>

        {/* BigInt */}
        <div>
          <h2 className="text-2xl font-semibold text-red-400">📏 7. BigInt</h2>
          <p>Bahut bade numbers ke liye (jo Number type se bahar ho).</p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint`}
          </pre>
        </div>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-cyan-300 mt-6">📋 Summary Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-white border border-gray-700 text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="border px-2 py-1">Type</th>
                <th className="border px-2 py-1">Example</th>
                <th className="border px-2 py-1">typeof Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="border px-2 py-1">String</td>
                <td className="border px-2 py-1">"Hello"</td>
                <td className="border px-2 py-1">string</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Number</td>
                <td className="border px-2 py-1">100</td>
                <td className="border px-2 py-1">number</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border px-2 py-1">Boolean</td>
                <td className="border px-2 py-1">true</td>
                <td className="border px-2 py-1">boolean</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Undefined</td>
                <td className="border px-2 py-1">let x;</td>
                <td className="border px-2 py-1">undefined</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border px-2 py-1">Null</td>
                <td className="border px-2 py-1">null</td>
                <td className="border px-2 py-1">object (🛑 Bug)</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Symbol</td>
                <td className="border px-2 py-1">Symbol("id")</td>
                <td className="border px-2 py-1">symbol</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border px-2 py-1">BigInt</td>
                <td className="border px-2 py-1">123n</td>
                <td className="border px-2 py-1">bigint</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/let-var-const"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/operators"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Jsprimitives;
