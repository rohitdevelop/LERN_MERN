import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const CssSelector = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold mb-4">📚 CSS Selectors</h1>

        <p className="mb-4">
          CSS Selectors wo tools hain jo humare HTML elements ko select karne mein madad karte hain, jisse hum unhe style de sakte hain. 
          CSS selectors ke different types hain, jaise:
        </p>

        {/* 1. Universal Selector */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">1️⃣ Universal Selector (<code>*</code>)</h2>
        <p className="mb-4">
          Ye selector har element ko select karta hai. Agar aap chahte ho ki har element ko ek common style mile, to aap is selector ka use kar sakte ho.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`* {
  color: red;
}`} 
          </code>
        </pre>
        <p>👉 Is example mein, har element ka text color red ho jayega.</p>

        {/* 2. Type Selector */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">2️⃣ Type Selector (e.g., <code>h1</code>, <code>p</code>)</h2>
        <p className="mb-4">
          Ye selector specific HTML elements ko target karta hai, jaise <code>h1</code>, <code>p</code>, etc.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`h1 {
  font-size: 24px;
}`} 
          </code>
        </pre>
        <p>👉 Is example mein, sirf <code>h1</code> elements ka font size 24px hoga.</p>

        {/* 3. Class Selector */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">3️⃣ Class Selector (<code>.class-name</code>)</h2>
        <p className="mb-4">
          Class selector se hum un elements ko target karte hain jinke paas ek specific class hoti hai. 
          Aap ek hi class ko multiple elements mein use kar sakte ho.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`.heading {
  color: blue;
}`} 
          </code>
        </pre>
        <p>👉 Is example mein, jo bhi element <code>heading</code> class ko use karega, uska text color blue ho jayega.</p>

        {/* 4. ID Selector */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">4️⃣ ID Selector (<code>#id-name</code>)</h2>
        <p className="mb-4">
          ID selector se hum ek specific element ko target karte hain jiska ek unique ID hota hai.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`#main-header {
  background-color: gray;
}`} 
          </code>
        </pre>
        <p>👉 Is example mein, sirf wo element jiska ID <code>main-header</code> hoga, uska background color gray hoga.</p>

        {/* 5. Attribute Selector */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">5️⃣ Attribute Selector</h2>
        <p className="mb-4">
          Ye selector elements ko unke attributes ke base par target karta hai. Jaise agar koi element kisi specific attribute value ke sath hai.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`input[type="text"] {
  border: 1px solid black;
}`} 
          </code>
        </pre>
        <p>👉 Is example mein, sirf wo <code>input</code> elements jinmein type attribute "text" hai, unka border black hoga.</p>

        {/* 6. Pseudo-classes */}
        <h2 className="text-2xl text-red-400 font-semibold mt-6">6️⃣ Pseudo-classes (<code>:hover</code>, <code>:focus</code>)</h2>
        <p className="mb-4">
          Pseudo-classes elements ke special states ko target karte hain. Jaise, jab koi element hover hota hai ya focus hota hai.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
{`a:hover {
  color: green;
}`} 
          </code>
        </pre>
        <p>👉 Is example mein, jab koi <code>a</code> element par mouse hover karega, uska color green ho jayega.</p>

        {/* Summary */}
        <h2 className="text-xl font-semibold text-cyan-300 mt-6">✅ Summary</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>CSS Selectors elements ko select karne ke liye use hote hain.</li>
          <li>Different types of selectors hain jaise Universal, Type, Class, ID, Attribute, and Pseudo-classes.</li>
          <li>Selectors ka use karte waqt specificity ko dhyaan mein rakhein.</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/use-add"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/box-model"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CssSelector;
