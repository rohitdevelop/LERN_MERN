import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const Cssgrid = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Grid</h1>

        <p>
          CSS Grid ek 2D layout system hai jo aapko rows aur columns dono direction me items ko easily arrange karne deta hai. Ye modern layouts banane ke liye ek powerful tool hai.
        </p>

        <h2 className="text-2xl text-white mt-6">📦 Basic Syntax</h2>
        <pre className="bg-gray-800 p-4 rounded-xl mt-2"><code>{`display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;`}</code></pre>

        <h2 className="text-xl mt-6 text-white">⚙️ Important Properties:</h2>
        <ul className="list-disc list-inside ml-4">
          <li><span className="text-yellow-300">display: grid;</span> – Grid layout ko activate karta hai</li>
          <li><span className="text-yellow-300">grid-template-columns</span> – Columns define karta hai</li>
          <li><span className="text-yellow-300">grid-template-rows</span> – Rows define karta hai</li>
          <li><span className="text-yellow-300">gap</span> – Items ke beech space deta hai</li>
          <li><span className="text-yellow-300">grid-column, grid-row</span> – Kisi item ka position set karte hain</li>
        </ul>

        <h2 className="text-xl mt-6 text-white">🎯 Live Grid Example:</h2>
        <div className="bg-white p-4 rounded-xl text-black">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-purple-500 text-white p-4 rounded-md text-center">1</div>
            <div className="bg-blue-500 text-white p-4 rounded-md text-center">2</div>
            <div className="bg-green-500 text-white p-4 rounded-md text-center">3</div>
            <div className="bg-red-500 text-white p-4 rounded-md text-center">4</div>
            <div className="bg-yellow-500 text-white p-4 rounded-md text-center">5</div>
            <div className="bg-pink-500 text-white p-4 rounded-md text-center">6</div>
          </div>
        </div>

        <h2 className="text-xl mt-6 text-white">🧠 Use Cases:</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Dashboard layouts</li>
          <li>Photo galleries</li>
          <li>Split screen designs</li>
          <li>Magazine-style layouts</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-10 px-4">
          <Link to={"/css/flexbox"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/animations"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cssgrid
