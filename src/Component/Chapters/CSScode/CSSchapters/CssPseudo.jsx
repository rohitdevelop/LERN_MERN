import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const CssPseudo = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Pseudo-classes & Pseudo-elements</h1>

        <p>
          CSS me <span className="text-yellow-300 font-semibold">pseudo-classes</span> aur <span className="text-yellow-300 font-semibold">pseudo-elements</span> 
          ka use special states ya elements ke parts ko target karne ke liye hota hai.
        </p>

        <h2 className="text-2xl text-white mt-6">1. Pseudo-classes (e.g., <code>:hover</code>, <code>:first-child</code>)</h2>
        <p>
          Ye kisi element ki particular state ko style karne ke liye hoti hai.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><code>:hover</code> – jab mouse element ke upar ho</li>
          <li><code>:focus</code> – jab input ya button pe focus ho</li>
          <li><code>:nth-child(n)</code> – nth child element ko style karne ke liye</li>
        </ul>
        <pre className="bg-gray-800 p-4 rounded-xl mt-2"><code>{`button:hover {
  background-color: blue;
}`}</code></pre>

        <h2 className="text-2xl text-white mt-6">2. Pseudo-elements (e.g., <code>::before</code>, <code>::after</code>)</h2>
        <p>
          Ye kisi element ke andar virtual element create karte hain. Aap inka use design aur decoration ke liye kar sakte ho.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><code>::before</code> – content se pehle kuch add karna</li>
          <li><code>::after</code> – content ke baad kuch add karna</li>
        </ul>
        <pre className="bg-gray-800 p-4 rounded-xl mt-2"><code>{`h1::after {
  content: '🔥';
}`}</code></pre>

        <h2 className="text-xl mt-6 text-white">🔧 Live Example:</h2>
        <div className="bg-white p-6 rounded-xl text-black">
          <button className="hover:bg-blue-600 hover:text-white transition-all duration-300 px-4 py-2 rounded-md border">
            Hover Me
          </button>
          <p className="mt-4 relative before:content-['👉'] before:mr-2">
            Yeh ek pseudo-element ka example hai!
          </p>
        </div>

        <div className="w-full flex items-center justify-between mt-10 px-4">
          <Link to={"/css/positions"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/flexbox"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CssPseudo
