import React from 'react';
import NodeSidebar from '../NodeSidebar';
import { Link } from 'react-router-dom';

const ErrorHandling = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            ⚠️ Error Handling in Node.js
          </h1>

          {/* What is Error Handling */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📌 Error Handling ka matlab kya hai?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Jab hum code likhte hain, to errors aana normal hai. Node.js me error handling ka matlab hai,
            hum apne code me kisi bhi error ko handle kar sakein, taki humare program ka flow smoothly chale.
            Agar error aata hai, to usse crash hone ki bajaye, hum usse manage kar sakein.
          </p>

          {/* How to handle errors */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🚀 Error Handling kaise karein?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Node.js me error handling ke liye do major methods hote hain:
            <br />
            <span className="text-green-300 font-semibold">1. Try-Catch Block</span> <br />
            <span className="text-green-300 font-semibold">2. Custom Error Handling</span>
          </p>

          {/* Try-Catch Example */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            1️⃣ Try-Catch Block
          </h2>
          <p className="text-base leading-relaxed mb-2">
            <span className="text-yellow-300 font-semibold">Try-Catch</span> block ko hum errors ko handle karne ke liye use karte hain.
            Jab bhi koi error aati hai, `catch` block me wo error capture hoti hai aur hum usse handle kar sakte hain.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// simple example using try-catch

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);  // Display error message
  }
}

console.log(divide(10, 0));  // Output: Division by zero is not allowed!
`}
            </pre>
          </div>

          <p className="text-base leading-relaxed mb-4">
            Is example me agar hum 0 se divide karne ki koshish karte hain, to `throw new Error` se hum custom error throw karte hain,
            jo `catch` block me handle hota hai.
          </p>

          {/* Custom Error Handling */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            2️⃣ Custom Error Handling
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Aap apna custom error object bhi bana sakte hain. Aap `new Error()` ke saath custom message ya additional properties de sakte hain.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// Custom error handling example

class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

function fetchData() {
  try {
    let data = null;
    if (!data) {
      throw new CustomError("Data not found!", 404);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(\`Custom Error: \${error.message}, Code: \${error.code}\`);
    } else {
      console.log(error.message);
    }
  }
}

fetchData();  // Output: Custom Error: Data not found!, Code: 404
`}
            </pre>
          </div>

          <p className="text-base leading-relaxed mb-4">
            Yaha humne apna custom error class banaya hai, jo specific error message aur code return karta hai.
            `instanceof` use karke hum custom errors ko identify karte hain.
          </p>

          {/* Best Practices for Error Handling */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🎯 Best Practices for Error Handling
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>✅ Hamesha try-catch block ka use karein jab asynchronous operations ho rahe ho.</li>
            <li>✅ Error messages ko user-friendly aur clear rakhein.</li>
            <li>✅ Error handling ke liye custom error classes banayein, taaki aap better error handling kar sakein.</li>
            <li>✅ Production me error logs ko track karein, par users ko unnecessary details mat dikhayein.</li>
            <li>✅ Kabhi bhi error ko ignore na karein, har error ko handle karna important hai.</li>
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/node/Export"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/node/rest-api"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorHandling;
