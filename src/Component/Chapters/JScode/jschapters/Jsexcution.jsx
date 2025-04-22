import React from 'react';
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const Jsexcution = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">⚙️ JavaScript Execution Kaise Hota Hai?</h1>

        <p className="text-white font-medium">
          JavaScript ko samajhne ke liye sabse pehle hume yeh samajhna hoga ki <strong className="text-cyan-400">JS code execute kaise hota hai</strong>.
          Jab bhi hum JavaScript ka code likhte hain aur browser mein chalate hain, toh browser us code ko step by step padhta hai aur <strong className="text-red-400">execute</strong> karta hai.
        </p>

        <p className="text-white font-medium">
          JavaScript ek <strong className="text-yellow-400">single-threaded</strong> language hai. Iska matlab hai ki ek samay mein ek hi kaam hota hai. Saare code ko ek queue mein daala jaata hai aur ek ke baad ek execute kiya jaata hai.
        </p>

        <p className="text-white font-medium">
          Jab JavaScript run hota hai, tab browser ek <strong className="text-purple-400">Execution Context</strong> banata hai. Ye execution context teen cheezein create karta hai:
          <br />
          <strong className="text-cyan-300">1. Variable Environment</strong> – sabhi variables ko yahan rakha jaata hai.<br />
          <strong className="text-cyan-300">2. Scope Chain</strong> – function ke scope ke andar aur bahar ke variables ko track karta hai.<br />
          <strong className="text-cyan-300">3. 'this' keyword</strong> – current context ko point karta hai.
        </p>

        <p className="text-white font-medium">
          Execution 2 phases mein hota hai:
          <br />
          <strong className="text-green-400">✅ 1. Memory Creation Phase (Creation Phase):</strong><br />
          - Sabhi variables ko memory milti hai (initially <code className="bg-gray-700 px-1 rounded">undefined</code> set hota hai).<br />
          - Functions ko pura memory mil jaata hai.<br /><br />

          <strong className="text-green-400">✅ 2. Code Execution Phase:</strong><br />
          - Sabhi variables ko unki actual values assign ki jaati hai.<br />
          - Code line by line execute hota hai.
        </p>

        <p className="text-white font-medium">
          Jab bhi function call hota hai, ek <strong className="text-pink-400">naya execution context</strong> banta hai. Ye context ek stack mein daal diya jaata hai jisko <strong className="text-orange-400">Call Stack</strong> kehte hain.
        </p>

        <p className="text-white font-medium">
          Jab kaam complete ho jaata hai toh wo execution context stack se nikal jaata hai (pop ho jaata hai).
        </p>

        <p className="text-white font-medium">
          <strong className="text-yellow-300">Yahi hai JavaScript Execution ka basic flow!</strong> Ye samajhna zaroori hai jab aap advanced cheezein jaise hoisting, closures, ya asynchronous code padhenge.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/what-is-js"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/let-var-const"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Jsexcution;
