import React from 'react';
import { Link } from "react-router-dom";
 import JsSidebar from '../JsSidebar';

const JsIntro = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">📘 Introduction to JavaScript</h1>

        <p className="mb-4">
          🧠 JavaScript yaani <span className="text-cyan-400 font-semibold">JS</span> ek powerful programming language hai jo web pages ko interactive banata hai. 
          Jaise CSS styling deta hai, waise hi JavaScript behavior deta hai — jaise buttons pe click, form validation, animations, aur bhi bahut kuch!
        </p>

        <p className="mb-4 text-cyan-400">🚀 Let’s begin our journey to become a JS ninja!</p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🧾 What is JavaScript?</h2>
        <p className="mb-4">
          JavaScript ek <strong className="text-cyan-400">client-side scripting language</strong> hai jo browser par chalti hai. Isse aap web page ke elements ke saath interact kar sakte ho — jaise ki kisi button ko click karna, image ko change karna, ya alert box dikhana.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">🎯 Why Learn JavaScript?</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>🖱️ User interaction handle karta hai (jaise click, scroll, form input)</li>
          <li>🔁 Dynamic content show karne mein madad karta hai</li>
          <li>🌍 Frontend se lekar backend tak use ho sakta hai (Node.js ke through)</li>
          <li>📲 Responsive web apps create karne mein essential hai</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">📚 Examples of JS in Action</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>📩 Form submit hone se pehle validate karna</li>
          <li>🧮 Calculator create karna</li>
          <li>🎮 Games develop karna</li>
          <li>🧑‍💻 Dynamic content update karna bina page reload ke</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">💻 Basic Syntax</h2>
        <pre className="bg-white text-black p-4 rounded mb-4 shadow-md">
          <code>
{`// Alert box
alert("Hello JavaScript!");

// Console log
console.log("JS is running!");

// Variable
let name = "Rohit";
`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-red-500 mt-4 mb-2">🧪 Quick Task:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>🧑‍💻 Open karo browser console (Right click → Inspect → Console)</li>
          <li>📝 Type karo: <code className="text-cyan-400">console.log("Hello from JS")</code></li>
          <li>📢 Dekho output console mein!</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">📖 A Little History</h2>
        <p className="mb-4">
          JavaScript ko <strong className="text-cyan-400">Brendan Eich</strong> ne 1995 mein banaya tha sirf 10 din mein! Pehle iska naam tha <em>LiveScript</em>, lekin Java ke craze ke chalte iska naam JavaScript rakh diya gaya.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">🔗 Important References:</h2>
        <ul className="list-disc pl-6">
          <li>📘 MDN JavaScript Guide</li>
          <li>📺 CodeWithHarry JavaScript Playlist</li>
          <li>📖 ECMAScript Documentation (Advanced Users)</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/HTML/html-into"}>
            <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:scale-105 transition-all duration-300 shadow-md">
              ⬅️ PREVIOUS
            </button>
          </Link>

          <Link to={"/JAVASCRIPT/js-basics"}>
            <button className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl border-2 border-white hover:scale-105 transition-all duration-300 shadow-md">
              NEXT ➡️
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JsIntro;
