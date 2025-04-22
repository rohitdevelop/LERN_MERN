import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsLoops = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">🧠 JavaScript Loops</h1>

        <p className="text-lg text-gray-300">
          Loops JavaScript me ek aise tareeke hain jisse hum ek hi kaam ko multiple baar perform kar sakte hain. Jab tak condition true hoti hai, loop repeat hota hai.
        </p>

        {/* ✅ 1. for loop */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">✅ 1. For Loop</h2>
          <p className="text-gray-300">Ye sabse commonly used loop hai jab hume fixed number of times code run karna hota hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4`}
          </pre>
        </div>

        {/* 🔁 2. While Loop */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">🔁 2. While Loop</h2>
          <p className="text-gray-300">Isme condition pe based hota hai. Jab tak condition true hoti hai, tab tak loop run hota hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4`}
          </pre>
        </div>

        {/* 🔂 3. Do-While Loop */}
        <div>
          <h2 className="text-2xl font-bold text-pink-400">🔂 3. Do-While Loop</h2>
          <p className="text-gray-300">Ye loop kam se kam ek baar run hota hai, chahe condition false hi kyu na ho.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4`}
          </pre>
        </div>

        {/* 🔄 4. For...in Loop */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400">🔄 4. For...in Loop</h2>
          <p className="text-gray-300">Object ke properties ko iterate karne ke liye use hota hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`const person = { name: "Rohit", age: 19 };
for (let key in person) {
  console.log(key, person[key]);
}
// Output: name Rohit, age 19`}
          </pre>
        </div>

        {/* 🎯 5. For...of Loop */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">🎯 5. For...of Loop</h2>
          <p className="text-gray-300">Array elements ko iterate karne ke liye use hota hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`const arr = [1, 2, 3, 4, 5];
for (let num of arr) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5`}
          </pre>
        </div>

        {/* 🔄 6. forEach() Method */}
        <div>
          <h2 className="text-2xl font-bold text-red-400">🔄 6. forEach() Method</h2>
          <p className="text-gray-300">Array ke elements par ek function execute karne ka ek method hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`const arr = [1, 2, 3, 4, 5];
arr.forEach(function(num) {
  console.log(num);
});
// Output: 1, 2, 3, 4, 5`}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-12 px-4">
          <Link to={"/javascript/conditionals"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/events"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JsLoops;
