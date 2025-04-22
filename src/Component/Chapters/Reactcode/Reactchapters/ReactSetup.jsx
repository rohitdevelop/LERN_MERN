import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactSetup = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">⚙️ React Setup</h1>

        <h2 className="text-2xl font-bold text-cyan-400">🛠️ 1. React using Create React App (CRA)</h2>
        <p className="text-white text-lg">
          CRA ek official tool hai React apps banane ke liye. Yeh React app banata hai ek ready-made setup ke saath jisme Webpack, Babel sab kuch configured hota hai.
        </p>
        <p className="text-white text-lg">
          ➤ Terminal mein yeh command run karo:
        </p>
        <pre>npx create-react-app my-app</pre>
        <p className="text-white text-lg">
          ➤ Folder ke andar jao:
        </p>
        <pre>cd my-app</pre>
        <p className="text-white text-lg">
          ➤ App start karo:
        </p>
        <pre>npm start</pre>

        <h2 className="text-2xl font-bold text-cyan-400">⚡ 2. React using Vite</h2>
        <p className="text-white text-lg">
          Vite ek super fast build tool hai jo React apps ko lightning speed pe run karta hai. Yeh modern browser features ka use karta hai aur development experience kaafi smooth banata hai.
        </p>
        <p className="text-white text-lg">
          ➤ Pehle Vite ka React template install karo:
        </p>
        <pre>npm create vite@latest my-vite-app --template react</pre>
        <p className="text-white text-lg">
          ➤ Folder ke andar jao:
        </p>
        <pre>cd my-vite-app</pre>
        <p className="text-white text-lg">
          ➤ Dependencies install karo:
        </p>
        <pre>npm install</pre>
        <p className="text-white text-lg">
          ➤ App run karo:
        </p>
        <pre>npm run dev</pre>

        <h2 className="text-2xl font-bold text-cyan-400">🤔 CRA vs Vite</h2>
        <ul className="text-white text-lg list-disc pl-6 space-y-2">
          <li><span className="text-cyan-400 font-semibold">Speed:</span> Vite is much faster in dev mode than CRA.</li>
          <li><span className="text-cyan-400 font-semibold">Bundle:</span> CRA uses Webpack, Vite uses modern ESBuild + Rollup.</li>
          <li><span className="text-cyan-400 font-semibold">Output:</span> Both give production-ready apps, lekin Vite ka output optimized hota hai.</li>
          <li><span className="text-cyan-400 font-semibold">Ease:</span> CRA is simpler for beginners, Vite is better for performance & modern devs.</li>
        </ul>

        <p className="text-white text-lg">
          ✅ Agar tum fast dev experience chahte ho — toh <span className="text-cyan-400 font-semibold">Vite</span> best hai.  
          Lekin agar tum beginner ho — toh <span className="text-cyan-400 font-semibold">CRA</span> se start karna simple hoga.
        </p>

        <h2 className="text-2xl font-bold text-cyan-400">🎉 All the best for your React journey!</h2>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/what-is-react"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
               PREVIOUS
            </button>
          </Link>

          <Link to={"/react/jsx"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT 
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactSetup;
