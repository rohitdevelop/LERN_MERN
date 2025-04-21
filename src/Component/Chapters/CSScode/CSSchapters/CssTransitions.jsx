import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const CssTransitions = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Transitions</h1>

        <p>
          CSS Transitions ka use smooth animations banane ke liye hota hai jab kisi property ka value change ho. Ye automatically animation apply karta hai bina kisi JavaScript ke.
        </p>

        <h2 className="text-xl mt-4 text-white">🛠 Syntax:</h2>
        <pre className="bg-gray-800 p-4 rounded-xl mt-2"><code>{`transition: property duration timing-function delay;`}</code></pre>

        <p className="mt-2 text-sm text-gray-300">Example: <code>transition: all 0.3s ease-in-out;</code></p>

        <h2 className="text-xl mt-6 text-white">⚙️ Common Properties:</h2>
        <ul className="list-disc list-inside ml-4">
          <li><span className="text-yellow-300">transition-property:</span> Konsi CSS property transition hogi (e.g., <code>background-color</code>, <code>transform</code>)</li>
          <li><span className="text-yellow-300">transition-duration:</span> Transition ka time (e.g., <code>0.5s</code>)</li>
          <li><span className="text-yellow-300">transition-timing-function:</span> Animation ka flow (e.g., <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>)</li>
          <li><span className="text-yellow-300">transition-delay:</span> Transition start hone se pehle kitni delay ho</li>
        </ul>

        <h2 className="text-xl mt-6 text-white">🎯 Example:</h2>
        <div className="bg-white p-4 rounded-xl text-black w-fit">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-500 ease-in-out cursor-pointer">
            Hover Me
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-2">Above button par hover karte hi background-color smoothly change ho raha hai.</p>

        <h2 className="text-xl mt-6 text-white">💡 Use Cases:</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Hover effects on buttons and cards</li>
          <li>Dropdowns ya side menus</li>
          <li>Form input focus animations</li>
          <li>Toggle switches & loaders</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-10 px-4">
          <Link to={"/css/grid"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/media-queries"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CssTransitions
