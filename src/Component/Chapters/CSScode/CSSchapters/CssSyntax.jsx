import React from 'react';
import CssSidenav from '../CssSidenav';
import { Link } from "react-router-dom";

const CssSyntax = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">📝 CSS Syntax Explained</h1>

        <p className="mb-4">
          CSS syntax ka structure kaafi simple hai. Har CSS rule do main parts mein divided hota hai: <strong className="text-yellow-300">Selector</strong> and <strong className="text-yellow-300">Declaration Block</strong>.
        </p>

        <h2 className="text-2xl text-cyan-300 font-semibold">🎯 Selector</h2>
        <p className="mb-4">
          Selector batata hai ki CSS kis HTML element pe apply hoga. Jaise <code className="text-green-400">h1</code>, <code className="text-green-400">p</code>, <code className="text-green-400">div</code>, etc.
        </p>

        <h2 className="text-2xl text-cyan-300 font-semibold">⚙️ Declaration Block</h2>
        <p className="mb-4">
          Declaration block mein woh properties likhi hoti hain jo aap element pe apply karna chahte ho. Har property ke baad colon (<code>:</code>) aata hai, uske baad value, aur end mein semicolon (<code>;</code>) lagta hai.
        </p>

        <pre className="bg-white text-black p-4 rounded shadow-md overflow-auto">
          <code>
{`h1 {
  color: red;
  text-align: center;
}`}
          </code>
        </pre>

        <p className="mb-4">
          👆 Is example mein:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><span className="text-cyan-400">h1</span> = Selector</li>
          <li><span className="text-cyan-400">color: red;</span> = Declaration (property + value)</li>
          <li><span className="text-cyan-400">text-align: center;</span> = Dusri declaration</li>
        </ul>

        <h2 className="text-2xl text-red-400 font-semibold">🛠 CSS Syntax Format</h2>
        <pre className="bg-white text-black p-4 rounded shadow-md overflow-auto">
          <code>
{`selector {
  property: value;
  property: value;
}`}
          </code>
        </pre>

        <p className="mb-4">
          Aap multiple declarations ek hi selector ke liye likh sakte ho. CSS kaafi readable aur easy-to-maintain hota hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400 mt-6 mb-2">🎉 That’s it for CSS Syntax!</h2>
        <p className="mb-4">
          Ab aap basic CSS syntax samajh chuke ho. Agle lesson mein hum dekhenge CSS ka use kaise karte hain HTML files ke sath.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/works"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/use-add"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CssSyntax;
