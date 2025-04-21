import React from 'react';
import CssSidenav from '../CssSidenav';
import { Link } from "react-router-dom";

const CssUseAdd = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">📚 CSS ko Use Karne ke Tarike</h1>

        <p className="mb-4">CSS ko hum teen tariko se use kar sakte hain:</p>

        {/* 1. Inline CSS */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">1️⃣ Inline CSS</h2>
        <p className="mb-4">
          Ismein CSS directly HTML tag ke andar <code>style</code> attribute ke through likhi jaati hai.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`<h1 style="color: red; text-align: center;">Hello World</h1>`}
          </code>
        </pre>
        <p>👉 Ye tab useful hai jab aap kisi ek hi element ko quick style dena chahte ho.</p>

        {/* 2. Internal CSS */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">2️⃣ Internal CSS</h2>
        <p className="mb-4">
          Ismein aap CSS ko <code>&lt;style&gt;</code> tag ke andar likhte ho, jo <code>&lt;head&gt;</code> section mein hota hai.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>`}
          </code>
        </pre>
        <p>👉 Ye tab use hota hai jab aap ek hi file ke multiple elements ko style dena chahte ho.</p>

        {/* 3. External CSS */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">3️⃣ External CSS</h2>
        <p className="mb-4">
          Ismein CSS ko ek separate file (like <code>style.css</code>) mein likha jaata hai aur HTML file mein link kiya jaata hai.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`<head>
  <link rel="stylesheet" href="style.css" />
</head>`}
          </code>
        </pre>
        <div className="w-full max-w-xl mx-auto my-4">
          <video autoPlay loop muted controls className="w-full rounded">
            <source  src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/ways-to-add-css/add%20external%20css%20demo.mp4"  type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
         <p>👉 Ye best practice hai large websites ke liye kyunki aap same CSS file ko multiple pages mein reuse kar sakte ho.</p>

        {/* Priority */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-8">🔺 CSS Priority (Specificity)</h2>
        <p className="mb-4">
          Jab ek hi element pe multiple styles apply hote hain, tab priority decide hoti hai:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>💪 <strong>Inline CSS</strong> has the highest priority</li>
          <li>🎯 Phir aata hai <strong>Internal CSS</strong></li>
          <li>🔗 Aur last mein <strong>External CSS</strong></li>
          <li>🔥 Agar <code>!important</code> use hota hai, toh wo sabse zyada priority le leta hai</li>
        </ul>

        <pre className="bg-white text-black p-4 rounded-md overflow-auto mt-4">
          <code>
{`<style>
  h1 {
    color: blue !important;
  }
</style>

<h1 style="color: red;">Welcome</h1>`}
          </code>
        </pre>
        <p className="mt-2">👆 Is case mein heading ka color <span className="text-green-300">blue</span> hoga because of <code>!important</code>.</p>

        <h2 className="text-xl font-semibold text-red-400 mt-6">✅ Summary</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>3 Tarike: Inline, Internal, External</li>
          <li>Best practice: Hamesha External CSS ko prefer karo</li>
          <li>Specificity important hoti hai jab multiple rules clash karte hain</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/syntax"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/selectors"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CssUseAdd;
