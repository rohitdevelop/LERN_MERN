import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const CssFlex = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Flexbox</h1>

        <p>
          Flexbox ek one-dimensional layout system hai jo aapko horizontally ya vertically items ko arrange karne me madad karta hai. Ye responsive layouts ke liye bahut useful hai.
        </p>

        <h2 className="text-2xl text-white mt-6">📦 Basic Syntax</h2>
        <pre className="bg-gray-800 p-4 rounded-xl mt-2"><code>{`display: flex;
justify-content: center;
align-items: center;`}</code></pre>

        <h2 className="text-xl mt-6 text-white">⚙️ Important Properties:</h2>
        <ul className="list-disc list-inside ml-4">
          <li><span className="text-yellow-300">display: flex;</span> – Flexbox ko activate karta hai</li>
          <li><span className="text-yellow-300">flex-direction</span> – Row ya column me items arrange karega</li>
          <li><span className="text-yellow-300">justify-content</span> – Main axis pe alignment (left, center, space-between, etc.)</li>
          <li><span className="text-yellow-300">align-items</span> – Cross axis pe alignment (top, center, bottom, etc.)</li>
          <li><span className="text-yellow-300">flex-wrap</span> – Agar jagah kam ho to wrap kare ya nahi</li>
        </ul>

        <h2 className="text-xl mt-6 text-white">🎯 Live Flexbox Example:</h2>
        <div className="bg-white p-4 rounded-xl text-black">
          <div className="flex justify-between items-center gap-4 p-4 bg-gray-200 rounded-md flex-wrap">
            <div className="bg-purple-500 text-white p-4 rounded-md">Item 1</div>
            <div className="bg-blue-500 text-white p-4 rounded-md">Item 2</div>
            <div className="bg-green-500 text-white p-4 rounded-md">Item 3</div>
          </div>
        </div>

        <h2 className="text-xl mt-6 text-white">🧠 Use Cases:</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Navbar banane ke liye</li>
          <li>Card layouts ke liye</li>
          <li>Vertically center content</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-10 px-4">
          <Link to={"/css/pseudo"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/grid"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CssFlex
