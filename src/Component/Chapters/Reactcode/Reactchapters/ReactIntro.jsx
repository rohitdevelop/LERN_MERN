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

        <p className="text-lg mb-4">
          React ek{" "}
          <span className="text-red-400 font-semibold">JavaScript library</span>{" "}
          hai jo mainly
          <span className="text-cyan-400"> UI (User Interface)</span> banane ke
          liye use hoti hai. Isse hum{" "}
          <span className="text-white font-semibold">reusable components</span>{" "}
          ke through large applications easily build kar sakte hain.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-2">
          ⚙️ Key Features:
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-white">Component-Based Architecture</span> –
            Code ko chhote-chhote reusable pieces mein todna.
          </li>
          <li>
            <span className="text-white">Virtual DOM</span> – Fast rendering ke
            liye memory mein ek copy maintain hoti hai.
          </li>
          <li>
            <span className="text-white">JSX</span> – JavaScript ke andar HTML
            likhne ka tariqa.
          </li>
          <li>
            <span className="text-white">One-way Data Flow</span> – Data parent
            se child mein jata hai, isse flow easy hota hai.
          </li>
          <li>
            <span className="text-white">Hooks</span> – Functional components ke
            andar state aur lifecycle handle karne ke liye.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-2">
          📈 Why Use React?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Speed – Virtual DOM ki wajah se faster performance.</li>
          <li>
            Reusable Components – Code reuse karne se development easy hota hai.
          </li>
          <li>
            Community Support – Bahut bada developer community aur ecosystem.
          </li>
          <li>SEO Friendly – Server-side rendering ke through better SEO.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-2">
          📦 Developed By:
        </h2>
        <p className="text-lg">
          React ko{" "}
          <span className="text-red-400 font-semibold">Meta (Facebook)</span> ne
          banaya tha aur ye open-source hai. Pehli baar 2013 mein release hua
          tha.
        </p>

        <p className="mt-6 text-cyan-400 font-medium">
          🔗 In short: "React makes it easier to build powerful, scalable, and
          dynamic web apps!"
        </p>

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

export default ReactIntro;
