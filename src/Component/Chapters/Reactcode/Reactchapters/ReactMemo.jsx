import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactMemo = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React.memo 🧠</h1>

        <h2 className="text-2xl font-semibold text-red-400">📌 Kya hai React.memo?</h2>
        <p className="text-white">
          <strong>React.memo</strong> ek Higher Order Component (HOC) hai jo functional components ko optimize karta hai.
          Jab aap ek component ko <code>React.memo()</code> ke andar wrap karte ho, to wo component tabhi re-render hota hai 
          jab uske props change hote hain.
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🎯 Kab use kare React.memo?</h2>
        <ul className="list-disc text-white pl-6">
          <li>Jab aapka component baar-baar render ho raha ho bina kisi zarurat ke.</li>
          <li>Jab aapke component mein performance issue ho, ya slow render feel ho raha ho.</li>
          <li>Component sirf props pe depend karta ho (internal state na ho).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">💡 Example:</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`import React from "react";

// Ye ek simple functional component hai
const MyComponent = ({ name }) => {
  console.log("Rendering:", name);
  return <div>Hello, {name} 👋</div>;
};

// React.memo se wrap kiya gaya
export default React.memo(MyComponent);
`}
        </pre>
        <p className="text-white mt-4">
          Ab agar parent component baar-baar render ho raha hai, lekin <code>name</code> prop change nahi ho raha,
          to <strong>MyComponent</strong> dobara render nahi hoga. ⚡
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mt-6">🚫 Kab use na kare?</h2>
        <ul className="list-disc text-white pl-6">
          <li>Agar aapka component already simple hai ya lightweight hai.</li>
          <li>Agar har render mein props change hote hain.</li>
          <li>Agar aapko custom comparison logic chahiye, to <code>React.memo(Component, areEqual)</code> use kar sakte ho.</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/router"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/hooks"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactMemo;
