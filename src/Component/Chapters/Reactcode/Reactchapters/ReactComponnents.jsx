import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactComponnents = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
 
        <h2 className="text-2xl font-semibold text-cyan-400">React Components</h2>
        <p>
          React components React app ke building blocks hote hain. Yeh aapko apne UI ko chhote, reusable aur modular parts mein todne ka mauka dete hain. Components do types ke ho sakte hain: Functional aur Class components. Aajkal mostly developers functional components use karte hain kyunki yeh simple hote hain aur hooks jaise `useState`, `useEffect` etc. use kar sakte hain.
        </p>
        
        <h3 className="text-xl font-semibold text-red-500 mt-4">Components ke Types</h3>
        <ul className="list-disc pl-6">
          <li><strong>Functional Components:</strong> Yeh simple hote hain aur mostly UI render karne ke liye use kiye jate hain. Yeh hooks jaise `useState`, `useEffect` use kar sakte hain.</li>
          <li><strong>Class Components:</strong> Yeh purane React components hote hain jo stateful the aur lifecycle methods use karte the. Ab inka use kam hota hai.</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-red-500 mt-4">Ek Simple Functional Component Kaise Banaye</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          {`function MyComponent() {
  return <h2>Hello, this is a functional component!</h2>;
}`}
        </pre>
        <p className="mt-4">
          Upar wale example mein, humne ek simple functional component banaya jiska naam `MyComponent` hai. Yeh sirf ek ` &lt;h2&gt;` element return karta hai jo kuch text display karta hai.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/render"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>
          
          <Link to={"/react/Props"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactComponnents;
