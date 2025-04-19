import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const HtmlAtributes = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-cyan-400">HTML Attributes 🔑</h1>
        
        <p className="text-white">
          HTML attributes HTML elements ke baare mein additional information dete hain. Attribute hamesha element ke opening tag mein specified hota hai, aur uska value equals sign se assign kiya jata hai. 🖋️
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">HTML Attribute kya hota hai? 📜</h2>
        <p className="text-white">
          HTML attribute ek HTML element ka modifier hota hai jo additional information ya func"tionality provide karta hai. 🌟 
          Ye typically ek naam aur value se bana hota hai. Example: class="example", id="header", etc. 🏷️
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          &lt;div class="container"&gt;Content&lt;/div&gt; 
        </pre>
        <p className="text-white">
          Yahan,class="container" attribute hai jahan class attribute ka naam hai aur "container" value hai. 🏠
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">HTML Attributes ke Types 💡</h2>
        <p className="text-white">
          HTML mein kai tarah ke attributes hote hain, har ek ka apna alag purpose hota hai:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li>
            <strong>Global Attributes:</strong> Yeh attributes kisi bhi HTML element par use kiye ja sakte hain. Jaise class, id, aur style. 🌍
          </li>
          <li>
            <strong>Specific Attributes:</strong> Yeh kuch specific elements ke liye hote hain. Jaise src&lt;img&gt; ke liye aur href &lt;a&gt; ke liye. 🖼️🖱️
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Common HTML Attributes 🛠️</h2>
        <ul className="list-disc pl-6 text-white">
          <li>
            <strong>id:</strong> Element ka unique identifier. Example: &lt;div id="header"&gt; 🎯
          </li>
          <li>
            <strong>class:</strong> Element ke liye ek ya zyada class names specify karta hai. Example:&lt;p class="text-center"&gt; 🎨
          </li>
          <li>
            <strong>src:</strong> Image ya media file ka source specify karta hai. Example: &lt;img src="image.jpg"&gt; 📸
          </li>
          <li>
            <strong>href:</strong> Link ke liye URL specify karta hai. Example: &lt;a href="https://www.example.com"&gt; 🔗
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Attributes kaise use karein? 📝</h2>
        <p className="text-white">
          Attributes HTML element ke opening tag ke andar placed hote hain. General syntax hai: &lt;element attribute="value"&gt;. Example dekhiye:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md">
          &lt;img src="logo.png" alt="Company Logo"&gt;
        </pre>
        <p className="text-white">
          Yahan src attribute hai jo image source specify karta hai, aur alt ek aur attribute hai jo alternative text provide karta hai agar image load nahi hoti. 🖼️
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Key Takeaways 🔑</h2>
        <ul className="list-disc pl-6 text-white">
          <li>Attributes HTML elements ke baare mein additional information provide karte hain ya unhe modify karte hain. 🛠️</li>
          <li>Har attribute ka ek naam aur value hota hai. 🎯</li>
          <li>Attributes global ho sakte hain (kisi bhi element par use kiye ja sakte hain) ya specific (kuch elements ke liye). 🌐</li>
          <li>Common attributes mein id, class, src, aur href shamil hain. 🖥️</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/element"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/class-id"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlAtributes;
