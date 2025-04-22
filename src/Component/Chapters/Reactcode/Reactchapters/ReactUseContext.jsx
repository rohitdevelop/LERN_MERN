import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactUseContext = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React useContext Hook 🌐</h1>

        <h2 className="text-2xl font-semibold text-red-400">📌 useContext kya hota hai?</h2>
        <p>
          <code>useContext()</code> React ka ek hook hai jo kisi bhi component tree ke andar data ko directly access karne deta hai bina props ko baar-baar pass kiye.  
          Jab hume ek value ko multiple nested components tak bhejna hota hai, to uske liye Context API use hoti hai.
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🛠 Syntax:</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`const value = useContext(MyContext);`}
        </pre>
        <p>
          👉 <code>MyContext</code> ek context object hai jo <code>React.createContext()</code> se banaya gaya hota hai.  
          <br />
          👉 Is value ko <code>&lt;MyContext.Provider&gt;</code> se provide kiya jaata hai.
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">💡 Example:</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`// 1. Context create karo
import React, { useContext } from "react";

const MyContext = React.createContext();

function Child() {
  const value = useContext(MyContext);
  return <h2>Value from Context: {value}</h2>;
}

function Parent() {
  return (
    <MyContext.Provider value={"Hello from Context"}>
      <Child />
    </MyContext.Provider>
  );
}
`}
        </pre>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🤔 useContext ka use kyun karein?</h2>
        <ul className="list-disc pl-6">
          <li>Props drilling se bachne ke liye</li>
          <li>Global values jaise theme, language, user-auth ke liye</li>
          <li>Code ko zyada clean aur manageable banane ke liye</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🎯 Tips:</h2>
        <ul className="list-disc pl-6">
          <li>useContext sirf context consumer components me hi use karo</li>
          <li>Agar context ke value me object hai, to usko carefully update karo</li>
          <li>Context ke sath state ka use karne ke liye <code>useState</code> ya <code>useReducer</code> use karo</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/states"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/useRef"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactUseContext;
