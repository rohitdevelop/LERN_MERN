import React from 'react';
import CssSidenav from '../CssSidenav';
import { Link } from "react-router-dom";

const CssDisplay = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Display</h1>

        <p>
          <span className="text-red-400 font-semibold">Display property</span> batata hai ki ek HTML element website pe kaise dikhai dega.
          Isse hum kisi element ko <span className="text-cyan-300">inline</span>, <span className="text-cyan-300">block</span>, <span className="text-cyan-300">flex</span>, ya <span className="text-cyan-300">grid</span> bana sakte hain.
        </p>

        <h2 className="text-2xl text-white mt-4">1. Display: Inline</h2>
        <p>
          Ye sirf utni jagah leta hai jitna uska content hota hai. Isme width, height, margin ya padding kaam nahi karta.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`div {
  display: inline;
}`}</code></pre>

        <h2 className="text-2xl text-white mt-4">2. Display: Block</h2>
        <p>
          Block element poori width le leta hai aur uske pehle aur baad ek new line aata hai.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`div {
  display: block;
}`}</code></pre>

        <h2 className="text-2xl text-white mt-4">3. Display: Inline-block</h2>
        <p>
          Inline jaisa hi hota hai, lekin isme <span className="text-cyan-300">width</span>, <span className="text-cyan-300">height</span>, <span className="text-cyan-300">padding</span> ya <span className="text-cyan-300">margin</span> use kar sakte ho.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`div {
  display: inline-block;
}`}</code></pre>

        <h2 className="text-2xl text-white mt-4">4. Display: None & Visibility: Hidden</h2>
        <p>
          <span className="text-yellow-300">display: none</span> element ko bilkul hi hata deta hai — jaise wo exist hi nahi karta.
        </p>
        <p>
          <span className="text-yellow-300">visibility: hidden</span> element ko chhupa deta hai lekin uski jagah reserve karta hai.
        </p>
        <pre className="bg-gray-800 p-4 rounded-xl"><code>{`div {
  display: none;
}

/* OR */

div {
  visibility: hidden;
}`}</code></pre>

        <h2 className="text-2xl text-white mt-4">Example Output:</h2>
        <div className="bg-white text-black p-4 rounded-xl space-y-2">
          <p style={{ display: "inline", backgroundColor: "lightblue" }}>Inline</p>
          <p style={{ display: "block", backgroundColor: "lightgreen" }}>Block</p>
          <p style={{ display: "inline-block", backgroundColor: "lightcoral", padding: "10px" }}>Inline-Block</p>
        </div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/size"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/forms"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CssDisplay;
