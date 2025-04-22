import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsHoisting = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">📘 JavaScript Hoisting</h1>

        {/* Hoisting Explanation */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">✅ What is Hoisting?</h2>
          <p className="text-gray-300">
            Hoisting JavaScript ka ek behavior hai jisme variable aur function declarations ko unke scope ke top par le aaya jaata hai. Matlab, aap variables aur functions ko unke actual declaration ke pehle bhi access kar sakte hain.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">How Does Hoisting Work?</h3>
          <p className="text-gray-300">
            JavaScript mein, declarations (not initializations) hoisted hote hain. Iska matlab hai ki aap code ke kisi bhi part mein un variables ya functions ko use kar sakte hain, chahe unhe declare karna baad mein ho.
          </p>
          <p className="text-gray-300">
            Example ke liye, agar aap ek variable declare karte hain baad mein, to usse aap code ke starting mein use kar sakte hain.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">Hoisting with Variables</h3>
          <p className="text-gray-300">
            Variables jo `var` se declare kiye jaate hain, unka hoisting behavior thoda alag hota hai. Agar aap variable ko `let` ya `const` se declare karte hain, to wo hoisted nahi hote (hoisting ho jaata hai, lekin unka scope blocked hota hai).
          </p>

          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example with var
console.log(x); // undefined
var x = 5;
console.log(x); // 5`}

          </pre>
          <p className="text-gray-300">
            Is example mein, pehla `console.log(x)` undefined print karega kyunki `var x` declaration hoisted ho gaya tha, par initialization nahi.
          </p>

          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example with let
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;`}
          </pre>
          <p className="text-gray-300">
            `let` ke saath aapko error milega agar aap us variable ko uske initialization ke pehle access karte hain. Iska matlab hai ki `let` ko hoisting to milti hai, lekin wo temporal dead zone (TDZ) mein hota hai.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">Hoisting with Functions</h3>
          <p className="text-gray-300">
            Functions ko bhi hoisting ka benefit milta hai. Agar aap function declaration ka use karte hain, to usse aap function ke declare hone se pehle bhi call kar sakte hain.
          </p>

          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example with function declaration
greet(); // "Hello, World!"

function greet() {
  console.log("Hello, World!");
}`}
          </pre>
          <p className="text-gray-300">
            Function declarations puri tarah hoisted hote hain, aur isliye hum function ko uske declaration ke pehle bhi call kar sakte hain.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">Function Expressions and Hoisting</h3>
          <p className="text-gray-300">
            Function expressions ko hoisting nahi milti. Agar aap function ko variable ke through define karte hain, to wo hoisted nahi hota.
          </p>

          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example with function expression
hello(); // TypeError: hello is not a function

var hello = function() {
  console.log("Hi!");
};`}
          </pre>
          <p className="text-gray-300">
            Is case mein, function expression ke saath hum pehle `hello()` call karenge to ek error milega kyunki function assignment hoist nahi hota.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/promises"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/video"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JsHoisting;
