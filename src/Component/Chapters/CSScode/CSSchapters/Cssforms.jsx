import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const Cssforms = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Form Styling</h1>

        <p>
          Jab hum <span className="text-yellow-300">forms</span> banate hain jaise ki login ya signup forms, toh hume input boxes, labels, buttons ko style karna padta hai taaki wo attractive aur user-friendly lagen.
        </p>

        <h2 className="text-2xl mt-4 text-white">1. Input Fields Styling</h2>
        <p>
          Hum input fields ka size, border, padding, font, aur background customize kar sakte hain.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`input[type="text"], input[type="email"], input[type="password"] {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">2. Button Styling</h2>
        <p>
          Form ke buttons jaise "Submit" ya "Reset" ko hum attractive bana sakte hain with colors, hover effects, etc.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`button {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: darkviolet;
}`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">3. Label Styling</h2>
        <p>
          Labels form ke inputs ko describe karte hain. Inhe hum spacing aur font se better bana sakte hain.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">4. Focus Effect</h2>
        <p>
          Jab user kisi input pe click karta hai, toh uska border ya shadow change karke usko highlight kar sakte ho.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`input:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 5px #7c3aed;
}`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">Form Example</h2>
        <div className="bg-white text-black p-4 rounded-xl space-y-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" className="w-full p-2 border border-gray-400 rounded-md" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" className="w-full p-2 border border-gray-400 rounded-md" />

          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition">Submit</button>
        </div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/display"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/positions"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cssforms;
