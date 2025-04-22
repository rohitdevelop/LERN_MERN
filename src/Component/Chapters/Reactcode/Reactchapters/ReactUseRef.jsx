import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactUseRef = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React useRef Hook 📌</h1>

        <h2 className="text-2xl font-semibold text-red-400">🔍 useRef kya hota hai?</h2>
        <p>
          <code>useRef()</code> React ka ek hook hai jo ek aisi value return karta hai jo puri component lifecycle me constant rehti hai.
          Iska use hum do main cheezon ke liye karte hain:
        </p>
        <ul className="list-disc pl-6">
          <li>DOM elements ko directly access karne ke liye (like focus input)</li>
          <li>Kisi bhi mutable value ko store karne ke liye bina re-render trigger kiye</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🛠 Syntax:</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`const refContainer = useRef(initialValue);`}
        </pre>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">💡 Example 1: Accessing DOM element</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}`}
        </pre>
        <p>👆 Is example me humne <code>input</code> element ko directly focus kiya bina re-render karein.</p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">💡 Example 2: Store value without re-render</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`import React, { useRef, useState, useEffect } from "react";

function Timer() {
  const count = useRef(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      count.current += 1;
      console.log("Count:", count.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Open console to see the timer</h2>
      <button onClick={() => setRender(!render)}>Re-render</button>
    </>
  );
}`}
        </pre>
        <p>
          🔁 Even after clicking re-render, count value change hone ke baad component re-render nahi karta — that’s the power of <code>useRef</code>!
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🎯 Tips:</h2>
        <ul className="list-disc pl-6">
          <li><code>ref.current</code> se hi value access aur update hoti hai</li>
          <li>DOM access ke liye useRef safer hai instead of direct JS methods</li>
          <li>Kisi bhi value ko persist karne ke liye use karo jo render pe reset nahi honi chahiye</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/useContext"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/useMemo"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactUseRef;
