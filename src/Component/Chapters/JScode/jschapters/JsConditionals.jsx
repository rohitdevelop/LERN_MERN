import React from 'react';
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsConditionals = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">🔀 JavaScript Conditional Statements</h1>

        <p className="text-lg text-gray-300">
          JavaScript me <span className="text-green-400 font-semibold">conditional statements</span> ka use decision lene ke liye hota hai. Jaise:
          <br />
          <span className="italic">"Agar condition true hai to ye kaam karo, warna dusra kaam karo."</span>
        </p>

        {/* 👇 If Statement */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-green-400 mb-2">✅ if Statement</h2>
          <p className="text-gray-300">Jab sirf ek condition check karni ho.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white overflow-auto">
{`let age = 18;
if (age >= 18) {
  console.log("You can vote ✅");
}`}
          </pre>
        </div>

        {/* 👇 if-else */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">🔁 if-else</h2>
          <p className="text-gray-300">Jab true ya false dono case me kuch karna ho.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white overflow-auto">
{`let isRainy = true;

if (isRainy) {
  console.log("Take an umbrella ☔");
} else {
  console.log("No umbrella needed ☀️");
}`}
          </pre>
        </div>

        {/* 👇 if-else if-else */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-pink-400 mb-2">📚 if - else if - else</h2>
          <p className="text-gray-300">Multiple conditions ke liye.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white overflow-auto">
{`let marks = 75;

if (marks >= 90) {
  console.log("Grade A+ 🏆");
} else if (marks >= 60) {
  console.log("Grade B 👍");
} else {
  console.log("Try harder next time 💪");
}`}
          </pre>
        </div>

        {/* 👇 Ternary Operator */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">🎭 Ternary Operator (short form)</h2>
          <p className="text-gray-300">Short version of if-else — ek line me kaam ho jata hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white overflow-auto">
{`let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult`}
          </pre>
        </div>

        {/* 👇 Switch Case */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-2">🔄 switch Statement</h2>
          <p className="text-gray-300">Multiple fixed values check karne ke liye best.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white overflow-auto">
{`let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Regular day");
}`}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-12 px-4">
          <Link to={"/javascript/functions"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/loops"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JsConditionals;
