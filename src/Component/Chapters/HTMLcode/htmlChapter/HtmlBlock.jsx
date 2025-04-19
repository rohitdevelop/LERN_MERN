import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const HtmlBlock = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1  className="text-3xl font-bold text-cyan-400">Block Elements in HTML 📋</h1>

        <p className="text-white">
          HTML mein block elements wo elements hote hain jo apne parent container ki full width lete hain aur ek nayi line pe aate hain. Ye elements apne aap ko vertically align karte hain. 🧑‍💻
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Block Elements kya hote hain? 📑</h2>
        <p className="text-white">
          Block elements woh hote hain jo apni full width lete hain aur apne surrounding elements ke liye space bana kar ek naye line mein shift ho jate hain. 😎
        </p>
        <p className="text-white">
          Example ke liye: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>, aur <code>&lt;footer&gt;</code> block elements hain. 🖋️
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Block Elements ka Example 📝</h2>
        <p className="text-white">
          Maan lijiye humne block elements ka use kiya hai ek page layout mein:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>&lt;div&gt;This is a block element&lt;/div&gt;</code>
        </pre>
        <p className="text-white">
          Yahan <code>&lt;div&gt;</code> ek block element hai, jo apne surrounding content ko ek naye line pe shift karta hai aur apne parent container ki full width le leta hai. 🌐
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Inline Elements vs Block Elements 📊</h2>
        <p className="text-white">
          Inline elements aur block elements mein difference hai. Block elements puri width lete hain aur apne content ko vertically arrange karte hain, jabki inline elements apne surrounding text ke saath ek hi line mein hote hain. 🔄
        </p>
        <ul className="list-disc pl-6 text-white">
          <li><strong>Block Elements:</strong> Example:&lt;div&gt;,&lt;p&gt;,&lt;section&gt;.</li>
          <li><strong>Inline Elements:</strong> Example:&lt;span&gt;,&lt;a&gt;,&lt;img&gt;.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Common Block Elements 💡</h2>
        <ul className="list-disc pl-6 text-white">
  <li><strong>div:</strong> Yeh ek general-purpose container hai, jo content ko organize karne ke liye use hota hai. &lt;div&gt;Content&lt;/div&gt;.</li>
  <li><strong>p:</strong> Yeh paragraph ko define karta hai. Example: &lt;p&gt;This is a paragraph&lt;/p&gt;.</li>
  <li><strong>header / footer:</strong> Yeh page ke header ya footer ko define karta hai. Example: &lt;header&gt;Header content&lt;/header&gt;.</li>
</ul>


        <h2 className="text-2xl font-semibold mt-6 text-red-500">Block Elements kaise kaam karte hain? 🧩</h2>
        <p className="text-white">
          Jab block elements ko HTML ya CSS mein define kiya jata hai, to wo apni full width lete hain aur apne surrounding content ko ek nayi line mein shift karte hain. Block elements ka size bhi container ke hisaab se adjust hota hai. ⚙️
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>&lt;div&gt;This is a block element.&lt;/div&gt;</code>
        </pre>
        <p className="text-white">
          Yahan <code>&lt;div&gt;</code> ek block element hai, jo apne content ko ek naye line mein dikhata hai aur apni full width use karta hai.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Key Takeaways 🔑</h2>
        <ul className="list-disc pl-6 text-white">
  <li><strong>Block elements</strong> apni full width lete hain aur ek naye line mein shift ho jate hain. 📐</li>
  <li>Common block elements mein <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong>, <strong>&lt;header&gt;</strong>, aur <strong>&lt;footer&gt;</strong> shamil hain. 📦</li>
  <li><strong>Inline elements</strong> aur <strong>block elements</strong> ka main difference unka display behaviour hai. 🔄</li>
</ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/class-id"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/inline-elements"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlBlock;
