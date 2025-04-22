import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactIntro = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">
          📘 What is React?
        </h1>

        <p className="text-white text-lg">
          ⚛️ <span className="text-cyan-400 font-semibold">ReactJS</span> ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai. Yeh component-based hoti hai, jiska matlab hum code ko chhote-chhote reusable parts mein divide kar sakte hain.
        </p>

        <h2 className="text-2xl font-bold text-cyan-400 mt-4">🚀 Kaise banaye React App?</h2>
        <p className="text-white text-lg">
          📂 Apne terminal ko open karo jahan app banana hai. Phir yeh command run karo:
        </p>
        <pre>npx create-react-app my-react-app</pre>
        <p className="text-white text-lg">
          Agar app current directory mein banana chahte ho, toh yeh command use karo:
        </p>
        <pre>npx create-react-app .</pre>
        <p className="text-white text-lg">
          ⚠️ Folder name mein space ya capital letters na ho, warna npm error de sakta hai.
        </p>

        <p className="text-white text-lg">
          📁 App create hone ke baad folder ke andar jaane ke liye:
        </p>
        <pre>cd directory-name</pre>

        <p className="text-white text-lg">
          🟢 Phir app ko start karne ke liye:
        </p>
        <pre>npm start</pre>

        <h2 className="text-2xl font-bold text-cyan-400 mt-4">👋 Hello World in React</h2>
        <p className="text-white text-lg">
          Yeh code sabse simple React app ka example hai:
        </p>
        <pre>
{`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);`}
        </pre>
        <p className="text-white text-lg">
          🧠 Hum bas ek <span className="text-cyan-400">&lt;h1&gt;</span> tag ko render kar rahe hain root element mein. Yeh <span className="text-cyan-400">root</span> id wala div hota hai jahan saara React content load hota hai.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/what-is-react"}>
            <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
               PREVIOUS
            </button>
          </Link>

          <Link to={"/react/setup"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT 
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactIntro;
