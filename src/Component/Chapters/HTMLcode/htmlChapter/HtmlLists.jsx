import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const HtmlLists = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-500 font-semibold">HTML Lists in Detail 📋</h1>

        <p className="text-white">
          HTML lists ka use hum data ko organized way mein display karne ke liye karte hain. Humare paas do main types hote hain: <strong>Ordered Lists</strong> aur <strong>Unordered Lists</strong>. Chaliye inhe samajhte hain. 📝
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Unordered Lists (bullets) 🔹</h2>
        <p className="text-white">
          Unordered lists mein items ko bullet points ke saath dikhaya jaata hai. Ismein hum <strong>&lt;ul&gt;</strong> (unordered list) tag ka use karte hain aur har list item ko <strong>&lt;li&gt;</strong> (list item) tag ke andar rakhte hain.
        </p>

        <pre  >
        
            {`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`}
          
        </pre>

        <p className="text-white">
          Is example mein, humne HTML, CSS, aur JavaScript ko ek unordered list mein dikhaya hai. Har item ko <strong>&lt;li&gt;</strong> tag ke andar rakha gaya hai.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Ordered Lists (numbers) 1️⃣</h2>
        <p className="text-white">
          Ordered lists mein items ko numbered format mein display kiya jaata hai. Hum <strong>&lt;ol&gt;</strong> (ordered list) tag ka use karte hain aur har item ko <strong>&lt;li&gt;</strong> tag ke andar rakha jaata hai.
        </p>

        <pre >
        
            {`<ol>
  <li>Step 1: Setup Environment</li>
  <li>Step 2: Install Node.js</li>
  <li>Step 3: Create Project</li>
</ol>`}
         
        </pre>

        <p className="text-white">
          Upar diye gaye example mein, humne ek ordered list banayi hai jisme hum step-by-step process ko dikhate hain.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Nested Lists (Lists within Lists) 🏠</h2>
        <p className="text-white">
          Agar hume ek list ke andar doosri list rakhni ho, toh hum nested lists ka use karte hain. Yeh humare content ko aur structured banata hai.
        </p>

        <pre >
        
            {`<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
    </ul>
  </li>
</ul>`}
          
        </pre>

        <p className="text-white">
          Is example mein humne ek unordered list banayi hai jisme nested unordered list bhi hai. Humne "Frontend" aur "Backend" ke topics ko alag-alag sub-lists ke through dikhaya hai.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">List Attributes ⚙️</h2>
        <p className="text-white">
          HTML lists ke kuch important attributes bhi hote hain:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li><strong>type:</strong> Ordered lists mein <strong>type</strong> attribute se hum numbering style set kar sakte hain (e.g., <strong>type="a"</strong> for lowercase letters).</li>
          <li><strong>start:</strong> Ordered lists mein <strong>start</strong> attribute se hum list ki numbering ko custom starting point se start kar sakte hain.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Key Takeaways 🔑</h2>
        <ul className="list-disc pl-6 text-white">
          <li>HTML lists se hum items ko ordered (numbers) ya unordered (bullets) format mein display kar sakte hain. 📋</li>
          <li>Nested lists ka use hume ek list ke andar doosri list rakhne ki suvidha deta hai. 🔄</li>
          <li>List attributes jaise <strong>type</strong> aur <strong>start</strong> list ko customize karne mein madad karte hain. ⚙️</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/tables"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/videos"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlLists;
