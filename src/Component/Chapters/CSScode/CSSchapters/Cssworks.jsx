import React from 'react';
import { Link } from "react-router-dom";
import CssSidenav from '../CssSidenav';

const CssWorks = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-4xl font-bold text-cyan-500 mb-4">⚙️ How CSS Works?</h1>
        <p className="mb-4">
          Humne apna pehla CSS style likha, lekin abhi bhi kaafi cheezein clear nahi hui hongi. Ab samajhte hain ki CSS browser ke andar kaise kaam karta hai, DOM model ke through.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">📑 CSS Work Flow Steps</h2>
        <ul className="list-decimal pl-6 space-y-2">
          <li>User browser mein URL type karta hai aur enter dabata hai.</li>
          <li>Browser ek request server ko bhejta hai (fetch request).</li>
          <li>Server se HTML file browser mein load hoti hai.</li>
          <li>HTML convert hota hai ek <strong className="text-cyan-400">DOM (Document Object Model)</strong> mein. Har HTML tag ek node ban jaata hai.</li>
          <li>Browser sabhi linked files (jaise CSS, images, fonts) ko fetch karta hai.</li>
          <li>Browser CSS ko parse karta hai aur usse tags ke according group karta hai.</li>
          <li>Har CSS rule apne respective node (HTML tag) se attach ho jaata hai. Ye step <strong className="text-cyan-400">Render Tree</strong> kehlaata hai.</li>
          <li>Render Tree ko screen par structure ke form mein dikhaya jaata hai – is process ko <strong className="text-cyan-400">Painting</strong> kehte hain.</li>
        </ul>

        <p className="mb-4">
          Ye poora process help karta hai ek styled aur attractive website screen par display karne mein.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🎥 Helpful Video</h2>
        <p className="mb-4">
          Agar aapko aur ache se samajhna hai, toh video dekh sakte ho: <strong className="text-cyan-400">"How CSS Works"</strong>
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🌳 What is DOM?</h2>
        <p className="mb-4">
          DOM ek tree-structure hai jo page ke sabhi HTML elements ka representation hota hai. Har element (jaise paragraph, heading, image, button) ek node ke roop mein dikhaya jaata hai.
        </p>
        <p className="mb-4">
          DOM ek <strong className="text-cyan-400">blueprint</strong> ki tarah hota hai jisse browser samajh paata hai ki page ko kaise dikhana hai.
        </p>
        <p className="mb-4">
          Har tag ek node ban jaata hai, aur un nodes ke beech parent-child relationship hota hai. DOM basically ek <strong className="text-cyan-400">API</strong> hai jisse browser HTML documents ke sath interact karta hai.
        </p>
        <div className="w-full flex justify-center my-6">
  <img 
    src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/how-css-works/1htmlcss_dom.png" 
    alt="DOM Diagram" 
    className="w-full max-w-4xl h-auto rounded-lg border-2 border-gray-700 shadow-md"
  />
</div>
        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🖼️ Painting the Page</h2>
        <p className="mb-4">
          Jab render tree ready hota hai, tab browser page ko paint karta hai, yaani screen par display karta hai. Ye hi aapki styled website hoti hai jo aapko screen par dikhayi deti hai.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">🔗 Helpful References</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Recommended: <strong className="text-cyan-400">"How HTML Works"</strong> padho.</li>
          <li>Explore: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="underline text-cyan-400">MDN Web Docs (CSS)</a></li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/intro"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/syntax"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CssWorks;
