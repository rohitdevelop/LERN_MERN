import React from "react";
import { Link } from "react-router-dom";
import Htmlsidenav from "../Htmlsidenav";

const HtmlStructure = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          📄 HTML Page Structure
        </h1>
        <p className="text-lg text-white">
          Ek HTML document ka structure nested tags se banta hai. Har
          tag&lt;...&gt; angle brackets ke andar hota hai, aur ye ek container
          ki tarah kaam karta hai — ya toh content ko hold karta hai ya phir aur
          HTML tags ko.
        </p>
        <p> 👇 Dekho basic HTML structure kuch aisa hota hai:</p>
       
          <pre className="bg-gray-800 text-red-400 p-4 rounded-xl overflow-x-auto">
            {`<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <!-- Yahan page ka main content hota hai -->
</body>
</html>`}
          </pre>
     
        <h2 className="text-2xl font-semibold text-cyan-300 mt-6">
          🔍 Important Tags
        </h2>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>
            <span className="text-red-400">&lt;!DOCTYPE html&gt;</span> – HTML5
            ka version batata hai.
          </li>
          <li>
            <span className="text-red-400">&lt;html&gt;</span> – Sab content ka
            root element hota hai.
          </li>
          <li>
            <span className="text-red-400">&lt;head&gt;</span> – Metadata aur
            links yaha hote hain (CSS, JS etc).
          </li>
          <li>
            <span className="text-red-400">&lt;title&gt;</span> – Browser ke tab
            mein dikhne wala title.
          </li>
          <li>
            <span className="text-red-400">&lt;body&gt;</span> – Sab visible
            content (text, image, video) yaha hota hai.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6">
          🖼️ Visualization
        </h2>
        <p className="text-white">
          Ek HTML structure kuch aise dikh sakta hai diagram ke form mein:
        </p>
        <img
          src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-page-structure/html-tag-structure-image.png"
          alt="HTML Tag Structure"
          className="w-auto h-96 rounded-xl border-2 border-white shadow-md"
        />

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6">
          🌐 Browser Output
        </h2>
        <p className="text-white mb-4">Normal html code</p>
        
          <pre className="bg-gray-800 text-red-400 p-4 rounded-xl overflow-x-auto">
            {`<!DOCTYPE html>
<html>
<head>
<title>Document</title>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
</body>
</html>`}
          </pre>
         
        <p className="text-white mb-4">
          Normal html code Browser pr kuch aise dhikega
        </p>
        <img
          src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-page-structure/html-headings.png"
          alt="HTML Output Example"
          className="w-2xl h-auto rounded-xl border-2 border-white shadow-md"
        />
        <p className="text-white mt-4">
          Isme title browser ke tab mein show hota hai, aur body ka content page
          pe dikhta hai. 😎
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/Excution"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/tags"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlStructure;
