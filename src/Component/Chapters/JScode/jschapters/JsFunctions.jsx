import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsFunctions = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">🧠 JavaScript Functions</h1>

        <p className="text-lg text-gray-300">
          Function ek reusable block of code hota hai jo kisi specific kaam ko perform karta hai. Hum usse baar-baar call kar sakte hain without likhna again and again.
        </p>

        {/* ✅ 1. Function Declaration */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">✅ 1. Function Declaration</h2>
          <p className="text-gray-300">Ye sabse basic function hai jo `function` keyword se banta hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`function greet() {
  console.log("Hello Rohit!");
}
greet(); // Output: Hello Rohit!`}
          </pre>
        </div>

        {/* 🔁 2. Function Expression */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">🔁 2. Function Expression</h2>
          <p className="text-gray-300">Function ko ek variable me store karna.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`const greet = function() {
  console.log("Hi from expression!");
}
greet();`}
          </pre>
        </div>

        {/* 💥 3. Arrow Function */}
        <div>
          <h2 className="text-2xl font-bold text-pink-400">💥 3. Arrow Function</h2>
          <p className="text-gray-300">Short syntax hoti hai ES6 me. Ye `this` ko differently handle karta hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`const greet = () => {
  console.log("Hello from arrow function!");
}
greet();`}
          </pre>
        </div>

        {/* 🎯 4. Function with Parameters */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">🎯 4. Function with Parameters</h2>
          <p className="text-gray-300">Function me values pass karne ke liye.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`function add(a, b) {
  console.log(a + b);
}
add(5, 3); // Output: 8`}
          </pre>
        </div>

        {/* 🔄 5. Function with Return */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400">🔄 5. Function with Return</h2>
          <p className="text-gray-300">Kisi result ko return karne ke liye.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 5);
console.log(result); // 20`}
          </pre>
        </div>

        {/* 🔂 6. Anonymous Function */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400">🔂 6. Anonymous Function</h2>
          <p className="text-gray-300">Function jiska naam nahi hota, mostly callback ke form me use hota hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);`}
          </pre>
        </div>

        {/* 🎯 7. Callback Function */}
        <div>
          <h2 className="text-2xl font-bold text-red-400">🧩 7. Callback Function</h2>
          <p className="text-gray-300">Function jo kisi aur function ko argument ke roop me pass hota hai.</p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let user = "Rohit";
  callback(user);
}

processUser(greet);`}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-12 px-4">
          <Link to={"/javascript/data-types"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/conditionals"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JsFunctions;
