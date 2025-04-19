import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const HtmlInline = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-cyan-400">Inline Elements in HTML 🖥️</h1>

        <p className="text-white">
          HTML mein inline elements wo elements hote hain jo ek hi line mein display hote hain aur apne surrounding elements ke saath share karte hain space. 🧑‍💻
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Inline Elements kya hote hain? 📜</h2>
        <p className="text-white">
          Inline elements aise elements hote hain jo apne container ke width ko nahi badhate. Ye ek doosre ke side mein horizontally align hote hain, jisme space efficiently use hota hai. 👨‍💻
        </p>
        <p className="text-white">
          Example ke liye: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, aur <code>&lt;img&gt;</code> inline elements hain. 🖋️
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Inline Elements ka Example 📝</h2>
        <p className="text-white">
          Maan lijiye humne ek paragraph mein inline elements ka use kiya hai:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>&lt;p&gt;This is an &lt;strong&gt;inline&lt;/strong&gt; element in a paragraph.&lt;/p&gt;</code>
        </pre>
        <p className="text-white">
          Yahan <code>&lt;strong&gt;</code> ek inline element hai, jo paragraph ke andar bold text ko highlight karta hai. 👀
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Inline vs Block Elements 📊</h2>
        <p className="text-white">
          Inline elements ka block elements se comparison karte hain. Block elements puri width lete hain aur naye line par aate hain. Jabki inline elements apne surrounding text ke saath ek hi line mein rehte hain. 🔄
        </p>
        <ul className="list-disc pl-6 text-white">
  <li><strong>Block Elements:</strong> Example: &lt;div&gt;, &lt;section&gt;, &lt;p&gt;.</li>
  <li><strong>Inline Elements:</strong> Example: &lt;span&gt;, &lt;a&gt;, &lt;img&gt;.</li>
</ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Common Inline Elements 💡</h2>
        <ul className="list-disc pl-6 text-white">
  <li><strong>span:</strong> Text ya elements ko style karne ke liye use hota hai. &lt;span&gt;Text&lt;/span&gt;.</li>
  <li><strong>a:</strong> Links ko banane ke liye use hota hai. Example: &lt;a href="link"&gt;Click me&lt;/a&gt;.</li>
  <li><strong>img:</strong> Image ko display karne ke liye use hota hai. &lt;img src="image.jpg" alt="Description"&gt;.</li>
</ul>


        <h2 className="text-2xl font-semibold mt-6 text-red-500">Inline Elements kaise kaam karte hain? 🧩</h2>
        <p className="text-white">
          Jab inline elements ko CSS ya HTML mein define kiya jata hai, to wo apne surrounding content ke saath adjust hote hain, bina naye line ke. Inline elements ka size bhi apne content ke hisaab se adjust hota hai. ⚙️
        </p>
        <p>Example:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code>
        </pre>
        <p className="text-white">
          Yahan <code>&lt;a&gt;</code> element ek link hai jo inline hai, matlab ye kisi bhi paragraph ya text ke saath ek hi line mein dikhega.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Key Takeaways 🔑</h2>
        <ul className="list-disc pl-6 text-white">
          <li>Inline elements ko ek hi line mein display kiya jata hai, aur ye surrounding elements ke saath space share karte hain. 📐</li>
          <li>Common inline elements mein <strong>&lt;a&gt;</strong>, <strong>&lt;span&gt;</strong>, aur <strong>&lt;img&gt;</strong> shamil hain. 🖼️</li>
          <li>Block elements apni width ko pura use karte hain, jabki inline elements apni content width ke according space lete hain. 📊</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/block-elements"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/forms"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlInline;
