import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const HtmlElements = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-cyan-400"> 📜HTML Elements</h1>
        <p className="text-white">
          Beginners ko <strong>HTML elements</strong>, nested elements, aur tags ke beech ka farq samajhna thoda mushkil ho sakta hai.
          Chaliye, hum har ek concept ko step-by-step samajhte hain. 🤔
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-red-500">HTML Element Kya Hai? 📝</h2>
        <p className="text-white">
          Ek HTML element ek complete set hota hai jo start tag (ya opening tag), content, aur end tag (ya closing tag) se bana hota hai. 🔑
          <br />
          <strong>HTML Element = Start Tag + Content + End Tag</strong> 📝
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>&lt;h1&gt;Yeh hamara pehla heading hai&lt;/h1&gt;</code>
        </pre>
        <p className="text-white">
          Yahan, <code>&lt;h1&gt;</code> hai <strong>start tag</strong>, "Yeh hamara pehla heading hai" hai <strong>content</strong>,
          aur <code>&lt;/h1&gt;</code> hai <strong>end tag</strong>. In sab ko mila ke yeh ek HTML element banata hai. 🔥
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Nested HTML Element Kya Hai? 👶</h2>
        <p className="text-white">
          Jab ek element dusre element ke andar hota hai, toh use hum <strong>nested HTML element</strong> kehte hain. 🪴
          Jo element bahar hota hai use <strong>parent</strong> aur jo element andar hota hai use <strong>child</strong> kaha jata hai. 🌱
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>&lt;h1&gt;&lt;b&gt;Yeh hamara pehla heading hai&lt;/b&gt;&lt;/h1&gt;</code>
        </pre>
        <p className="text-white">
          Yahan, <code>&lt;b&gt;</code> element (child) hai jo <code>&lt;h1&gt;</code> element (parent) ke andar nested hai. 🌸
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Empty HTML Element Kya Hai? 🚫</h2>
        <p className="text-white">
          Ek empty HTML element woh hota hai jisme closing tag ya content nahi hota. Inhe hum <strong>self-closing elements</strong> ya <strong>void elements</strong> bhi kehte hain. ⚡
          <br />
          <strong className='text-cyan-400'>Empty HTML Element = Tags with No Content</strong> ⛔
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>&lt;br /&gt;</code>
        </pre>
        <p className="text-white">
          Yahan, <code>&lt;br /&gt;</code> tag line break ke liye use hota hai aur isko closing tag ki zaroorat nahi hoti. 🚶‍♂️
          Dusra example <code>&lt;hr /&gt;</code> tag hai, jo horizontal rule banata hai. ⚔️
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">HTML Tags vs. Elements ⚙️</h2>
        <ul className="list-disc pl-6 text-white">
          <li>
            <strong>HTML Tags:</strong> Woh markers hote hain jo element ke start aur end ko define karte hain. Example: <code>&lt;p&gt;</code> aur <code>&lt;/p&gt;</code>. 🛠️
          </li>
          <li>
            <strong>HTML Elements:</strong> Yeh complete set hota hai jo opening tag, content aur closing tag se bana hota hai. Example:<code>&lt;p&gt;paragraph h&lt;/p&gt;</code>.📖
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Key Takeaways 🔑</h2>
        <ul className="list-disc pl-6 text-white">
          <li>Tags boundaries set karte hain, jabki elements tags aur content dono include karte hain. 🛠️</li>
          <li>Tags aksar pair mein hote hain, jabki elements nested ho sakte hain. 🔁</li>
          <li>Self-closing elements jaise <code>&lt;br /&gt;</code> bhi elements hote hain, chahe unmein content ya closing tag na ho. 🏷️</li>
          <li>Nested elements ko hum "parent" ya "child" keh sakte hain, lekin tags ko nahi. 👨‍👧</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/tags"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/atributes"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlElements;
