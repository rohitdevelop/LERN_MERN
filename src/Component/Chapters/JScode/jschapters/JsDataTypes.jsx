import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsDataTypes = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">📘 Data Types in JavaScript</h1>

        {/* Primitive Types Explanation */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">✅ Primitive Data Types</h2>
          <p className="text-gray-300">Primitive types wo hote hain jo simple values ko represent karte hain. Ye direct values hoti hain aur inka size fixed hota hai.</p>

          <ul className="list-disc pl-8 text-gray-300">
            <li><strong>String</strong> - Textual data, example: `"Hello World!"`</li>
            <li><strong>Number</strong> - Numbers, example: `5`, `10.5`</li>
            <li><strong>Boolean</strong> - True or False, example: `true`, `false`</li>
            <li><strong>Null</strong> - Represents no value or empty value</li>
            <li><strong>Undefined</strong> - Variable declared but not assigned a value</li>
            <li><strong>Symbol</strong> - Unique and immutable data type</li>
            <li><strong>BigInt</strong> - For very large integers</li>
          </ul>

          <p className="text-gray-300 mt-4">Example:</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`let str = "Hello";    // String
let num = 100;        // Number
let isValid = true;   // Boolean`}
          </pre>
        </div>

        {/* Non-Primitive Types Explanation */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">✅ Non-Primitive Data Types</h2>
          <p className="text-gray-300">Non-primitive types ko reference types bhi kehte hain, kyunki ye kisi value ka reference hold karte hain. Inka size variable hota hai aur inko modify kiya ja sakta hai.</p>

          <ul className="list-disc pl-8 text-gray-300">
            <li><strong>Object</strong> - Collection of key-value pairs, example: fullname: "Rohit", age: 19</li>
            <li><strong>Array</strong> - List of values, example: `[1, 2, 3, 4, 5]`</li>
            <li><strong>Function</strong> - Reusable block of code</li>
          </ul>

          <p className="text-gray-300 mt-4">Example:</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`let person = { name: "Rohit", age: 19 };    // Object
let arr = [1, 2, 3, 4];                    // Array`}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/objects"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/functions"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JsDataTypes;
