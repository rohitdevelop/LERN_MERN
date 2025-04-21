import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const Csspositions = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Position Property</h1>

        <p>
          CSS me <span className="text-yellow-300 font-semibold">position property</span> decide karti hai ki ek element page pe kahaan dikhai dega aur kaise move karega. 
          Ye layout aur placement ke liye bahut important hoti hai.
        </p>

        <h2 className="text-2xl mt-4 text-white">1. Static (Default)</h2>
        <p>
          Default position hoti hai. Element normal flow me hota hai aur top, left, right, bottom kaam nahi karte.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`position: static;`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">2. Relative</h2>
        <p>
          Ye element ko uski original jagah ke hisaab se move karta hai. Uski original space ab bhi occupy hoti hai.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`position: relative;
top: 20px;
left: 10px;`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">3. Absolute</h2>
        <p>
          Element apne nearest positioned (relative, absolute, fixed) ancestor ke hisaab se place hota hai. Agar aisa koi ancestor nahi hai toh body ke hisaab se set hoga.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`position: absolute;
top: 0;
right: 0;`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">4. Fixed</h2>
        <p>
          Ye element window ke respect me fixed rehta hai, scroll karne par bhi woh wahi rehta hai.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`position: fixed;
bottom: 10px;
right: 10px;`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">5. Sticky</h2>
        <p>
          Ye static aur fixed ka mix hai. Jab tak scrolling start nahi hoti tab tak static behave karta hai, fir sticky ho jata hai.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`position: sticky;
top: 0;`}</code></pre>

        <h2 className="text-2xl mt-4 text-white">Position Example</h2>
        <div className="bg-white text-black p-4 rounded-xl space-y-4 relative h-40 overflow-hidden">
          <div className="bg-blue-500 text-white px-4 py-2 rounded absolute top-0 left-0">Absolute Box</div>
          <div className="bg-green-500 text-white px-4 py-2 rounded relative top-8 left-8">Relative Box</div>
          <div className="bg-yellow-500 text-black px-4 py-2 rounded static">Static Box</div>
        </div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/forms"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/pseudo"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Csspositions
