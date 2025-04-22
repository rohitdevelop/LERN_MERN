import React from 'react';
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';
import { FaHashtag, FaFont, FaBolt, FaQuestion, FaBan, FaBoxes } from "react-icons/fa";

const Jsprimitives = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">📘 JavaScript Primitive Data Types</h1>
        
        <p className="text-lg text-gray-300">Yeh wo basic types hote hain jo JavaScript me directly store hote hain, bina kisi complex structure ke. Let’s understand one-by-one 👇</p>

        <div className="space-y-4 mt-6">

          <div className="flex items-center space-x-4">
            <FaHashtag className="text-2xl text-green-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Number</h2>
              <p className="text-gray-300">Koi bhi numeric value jaise 10, 3.14, -200 etc. Yeh sab Number type hain.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaFont className="text-2xl text-blue-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">String</h2>
              <p className="text-gray-300">Textual data like "hello", 'world'. Single ya double quotes ke andar likhte hain.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaBolt className="text-2xl text-yellow-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Boolean</h2>
              <p className="text-gray-300">True ya false. Mostly conditions me use hota hai.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaQuestion className="text-2xl text-pink-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Undefined</h2>
              <p className="text-gray-300">Jab variable declare hota hai but koi value assign nahi hoti, tab wo undefined hota hai.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaBan className="text-2xl text-red-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Null</h2>
              <p className="text-gray-300">Yeh intentionally empty value hoti hai. Jab hum manually kisi variable ko "khaali" karna chahte hain.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaBoxes className="text-2xl text-purple-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Symbol (ES6)</h2>
              <p className="text-gray-300">Yeh unique value hoti hai mostly object properties ko unique banane ke liye.</p>
            </div>
          </div>

        </div>

        <div className="w-full flex items-center justify-between mt-12 px-4">
          <Link to={"/javascript/primitives"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/objects"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Jsprimitives;
