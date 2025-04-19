import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const HtmlClassId = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-cyan-400">Class and ID in HTML 🔑</h1>

        <p className="text-white">
          HTML mein `class` aur `id` attributes bahut important hote hain. Ye elements ko identify karne aur unka styling ya functionality control karne mein madad karte hain. 💡
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Class Attribute kya hota hai? 📚</h2>
        <p className="text-white">
          `class` attribute ka use elements ko ek ya zyada categories mein group karne ke liye kiya jata hai. Jab aap ek ya zyada elements ko same styling dena chahte hain, tab `class` ka use hota hai. 🙌
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          &lt;div class="container"&gt;Content&lt;/div&gt;
        </pre>
        <p className="text-white">
          Yahan `class="container"` attribute ka use kiya gaya hai, jisse humne `div` element ko `container` class assign kiya hai. Ye sabhi elements ko ek hi style dene mein madad karta hai.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">ID Attribute kya hota hai? 🆔</h2>
        <p className="text-white">
          `id` attribute ka use ek unique identifier banane ke liye hota hai. Ye har element ka unique name hota hai jo usse identify karne mein madad karta hai. Ek page par har `id` sirf ek baar use ho sakta hai. 🎯
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          &lt;div id="header"&gt;Header Content&lt;/div&gt;
        </pre>
        <p className="text-white">
          Yahan `id="header"` attribute ka use kiya gaya hai. Isse humne `div` element ko unique `header` id diya hai, jisse hum is element ko easily target kar sakte hain CSS ya JavaScript ke through.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Class aur ID mein Difference 📊</h2>
        <p className="text-white">
          `class` aur `id` dono attributes ka use elements ko identify karne ke liye kiya jata hai, lekin dono mein kuch key differences hote hain:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li><strong>Class:</strong> Multiple elements ko same class assign kiya ja sakta hai, aur ye group styling ke liye use hota hai. Example: &lt;div class="box"&gt;Content&lt;/div&gt;</li>
          <li><strong>ID:</strong> Har element ko unique `id` diya jata hai, aur ye element ko specific target karne ke liye use hota hai. Example: &lt;div id="header"&gt;Content&lt;/div&gt;</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Best Practices 🛠️</h2>
        <ul className="list-disc pl-6 text-white">
          <li>Class ka use elements ko group karne ke liye karein jab aap same styling chahte hain. 👯</li>
          <li>ID ka use kisi specific element ko uniquely identify karne ke liye karein. 🎯</li>
          <li>Ek page par ek hi `id` ka use ho sakta hai, lekin `class` ko multiple elements mein use kiya ja sakta hai. 🧑‍🤝‍🧑</li>
          <li>Class aur ID ko logically name karein, jaise `btn-primary`, `header`, `footer`, etc. 📛</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/atributes"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/block-elements"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlClassId;
