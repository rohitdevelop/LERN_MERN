import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactUseMemo = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React useMemo & useCallback 🔁</h1>

        {/* useMemo Explanation */}
        <h2 className="text-2xl font-semibold text-red-400">🧠 useMemo kya karta hai?</h2>
        <p>
          <code>useMemo()</code> ek React Hook hai jo kisi bhi <strong>expensive calculation</strong> ko sirf tab dobara run karta hai jab dependencies change hoti hain.
        </p>
        <p>
          Ye performance improve karne ke liye use hota hai — jaise agar tumhare paas koi slow function hai, toh usko unnecessary baar-baar chalane se bacha sakte ho.
        </p>

        <h3 className="text-xl font-semibold mt-4">📌 Syntax:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`const memoizedValue = useMemo(() => {
  return heavyFunction(a, b);
}, [a, b]);`}
        </pre>

        <h3 className="text-xl font-semibold mt-4">🔍 Example: Expensive Calculation</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // slow task
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Result: {result}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
}`}
        </pre>
        <p>📌 Yahan pe <code>useMemo</code> ensure karta hai ki jab tak <code>count</code> nahi badlega, calculation dobara nahi chalegi.</p>

        {/* useCallback Explanation */}
        <h2 className="text-2xl font-semibold text-red-400 mt-8">🪝 useCallback kya karta hai?</h2>
        <p>
          <code>useCallback()</code> ek React Hook hai jo ek memoized function return karta hai. Agar function ko props ke through kisi child component me bhejna ho, aur tum chahte ho ki wo function re-create na ho har render pe, tab useCallback use karo.
        </p>

        <h3 className="text-xl font-semibold mt-4">📌 Syntax:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);`}
        </pre>

        <h3 className="text-xl font-semibold mt-4">🔍 Example: Prevent unnecessary re-renders</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </>
  );
}`}
        </pre>
        <p>👆 Yahan <code>handleClick</code> function har render pe dubara create nahi hota, thanks to <code>useCallback</code>.</p>

        <h2 className="text-2xl font-semibold text-green-400 mt-8">⚖️ Difference Between useMemo & useCallback</h2>
        <ul className="list-disc pl-6">
          <li><code>useMemo</code> returns a **memoized value**</li>
          <li><code>useCallback</code> returns a **memoized function**</li>
          <li>Dono ka use performance optimization ke liye hota hai</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-400 mt-8">🧪 Kab use karein?</h2>
        <ul className="list-disc pl-6">
          <li>Heavy/expensive calculation hai → <strong>useMemo</strong></li>
          <li>Child ko function props me de rahe ho → <strong>useCallback</strong></li>
          <li>Frequent unnecessary re-renders ho rahe hain → dono use karke optimize karo</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/useRef"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/context-api"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactUseMemo;
