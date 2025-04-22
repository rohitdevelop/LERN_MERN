import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactHooks = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React Hooks 🎣</h1>

        <h2 className="text-2xl font-semibold text-red-400">📌 React Hooks kya hote hain?</h2>
        <p className="text-white">
          Hooks React 16.8 ke baad introduce kiye gaye the. Ye aapko **functional components** ke andar hi state aur lifecycle methods jaisa kaam karne ka option dete hain. Pehle yeh sirf class components mein hi possible hota tha.
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🎯 Common Hooks:</h2>
        <ul className="list-disc text-white pl-6">
          <li><strong>useState()</strong> - Component ke andar state banana aur update karna 🧠</li>
          <li><strong>useEffect()</strong> - Side effects handle karne ke liye (API calls, event listeners, etc.) ⚙️</li>
          <li><strong>useContext()</strong> - Context API ka use karne ke liye 👥</li>
          <li><strong>useRef()</strong> - DOM element ya koi bhi value ko refer karne ke liye 🔍</li>
          <li><strong>useMemo()</strong> - Expensive calculations ko memoize karne ke liye 🧮</li>
          <li><strong>useCallback()</strong> - Function memoization ke liye ⚡</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">💡 Example: useState</h2>
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

        <p className="text-white mt-4">
          Is example mein humne <code>useState</code> ka use kiya hai ek simple counter banane ke liye.
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🤔 Hooks ka use kyun kare?</h2>
        <ul className="list-disc text-white pl-6">
          <li>Class components likhne ki zarurat nahi padti</li>
          <li>Code chhota aur readable hota hai</li>
          <li>Stateful logic ko reuse kar sakte ho</li>
          <li>Functional programming ka benefit milta hai</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/Memo"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/states"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactHooks;
