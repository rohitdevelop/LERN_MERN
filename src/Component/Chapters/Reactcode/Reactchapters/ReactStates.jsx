import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactStates = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React useState Hook 🧠</h1>

        <h2 className="text-2xl font-semibold text-red-400">📌 useState kya hota hai?</h2>
        <p className="text-white">
          <code>useState()</code> React ka ek hook hai jo component ke andar state ko manage karne ke liye use hota hai.  
          Pehle class components me <code>this.state</code> use karte the, lekin functional components ke sath <code>useState</code> aasan aur short way hai state banane ka. 😎
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🛠 Syntax:</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`const [stateVariable, setStateFunction] = useState(initialValue);`}
        </pre>
        <p className="text-white">
          👉 <code>stateVariable</code> – current value of state  
          <br />
          👉 <code>setStateFunction</code> – function to update the state  
          <br />
          👉 <code>initialValue</code> – state ka starting value
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">💡 Example: Counter</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
`}
        </pre>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🤔 useState ka use kyun karein?</h2>
        <ul className="list-disc text-white pl-6">
          <li>State create aur update karne ka simple tareeka</li>
          <li>Functional component me bhi state ka use possible hota hai</li>
          <li>Interactive UI banane ke liye helpful hai</li>
          <li>Code zyada clean aur readable hota hai</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🎯 Tips:</h2>
        <ul className="list-disc text-white pl-6">
          <li>useState har re-render me independent state rakhta hai</li>
          <li>Array ya object ko update karne ke liye spread operator ka use karo</li>
        </ul>

        {/* 👉 useEffect Section */}
        <h1 className="text-3xl font-bold mt-12 mb-4 text-cyan-400">React useEffect Hook 🔁</h1>

        <h2 className="text-2xl font-semibold text-red-400">📌 useEffect kya hota hai?</h2>
        <p className="text-white">
          <code>useEffect()</code> ek aisa hook hai jo side effects handle karta hai. Jaise ki data fetch karna, DOM update karna, ya event listener lagana.  
          Ye component ke render hone ke baad chalta hai. ⚡
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🛠 Syntax:</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`useEffect(() => {
  // code to run after render
}, [dependencyArray]);`}
        </pre>
        <p className="text-white">
          👉 Ye function component render hone ke baad chalega  
          <br />
          👉 Agar <code>dependencyArray</code> empty hai to sirf ek baar chalega (componentDidMount jaise)  
          <br />
          👉 Agar dependencies di hain, to unke change hone par chalega
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">💡 Example: Console log on load</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`import React, { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return <h3>Hello World</h3>;
}

export default Example;
`}
        </pre>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">📌 useEffect kab use karein?</h2>
        <ul className="list-disc text-white pl-6">
          <li>Data fetch karne ke liye (API call)</li>
          <li>DOM update karna ho</li>
          <li>SetTimeout / SetInterval</li>
          <li>Event listener add/remove</li>
          <li>Browser title ya local storage access</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🎯 Tips:</h2>
        <ul className="list-disc text-white pl-6">
          <li>Memory leak se bachne ke liye cleanup function return karo</li>
          <li>Jab dependency array use karo tab samajh ke likho — warna infinite loop ho sakta hai</li>
        </ul>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/hooks"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/useContext"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactStates;
