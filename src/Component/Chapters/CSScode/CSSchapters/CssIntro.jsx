import React from 'react';
import { Link } from "react-router-dom";
import CssSidenav from '../CssSidenav';

const CssIntro = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">📚 Information & History</h1>
        
        <p className="mb-4">
          👋 Chalo CSS seekhne ki journey shuru karte hain! Main hoon <span className="text-cyan-400 font-semibold">Harry</span>, wahi banda jo aapko CodeWithHarry YouTube channel par milta hai.
          Ye tutorial ek resource hoga students ke liye jisse woh CSS achhi tarah samajh saken aur code ko reference ke liye use kar saken.
        </p>

        <p className="mb-4 text-cyan-400">🚀 Bina kisi deri ke, let’s dive into learning CSS!</p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">💡 What is CSS?</h2>
        <p className="mb-4">
          CSS ka full form hai <strong className="text-cyan-400">Cascading Style Sheets</strong>. Ye ek stylesheet language hai jo HTML page ke visual presentation ko define karta hai.
          HTML structure banata hai aur CSS us structure ko style deta hai. Agar aapne HTML abhi tak nahi seekha, toh pehle <em>HTML tutorial</em> complete kar lo.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">❓ Why the word "cascade"?</h2>
        <p className="mb-4">
          "Cascade" ka matlab hota hai — jab ek se zyada CSS rules kisi same element par apply ho rahe ho, toh kaun sa rule last mein apply hoga, wo decide karne ka system.
          Ye <span className="text-cyan-400">specificity</span> aur <span className="text-cyan-400">inheritance</span> ke basis par decide hota hai.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">🎨 Why use CSS?</h2>
        <p className="mb-4">
          CSS se hum HTML elements ko style kar sakte hain. Ye webpages ko visually appealing aur user-friendly banata hai.
        </p>

        <p className="mb-4">🖼️ Socho ek HTML page kaisa dikhta hai bina CSS ke:</p>
        <p className="mb-2 italic text-cyan-400">[cwh tutorial image – Before CSS]</p>

        <p className="mb-4">🎨 Aur aise dikhta hai CSS apply karne ke baad:</p>
        <p className="mb-2 italic text-cyan-400">[cwh tutorial image – After CSS]</p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">📖 Analogy to Understand CSS</h2>
        <p className="mb-4">
          Imagine karo ek book sirf plain text ke saath – boring lagta hai na? 📚 Ab socho wahi book colors, different fonts aur styles ke saath – wohi kaam CSS karta hai webpages ke liye!
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">⚙️ How does CSS work?</h2>
        <p className="mb-4">
          CSS HTML elements ko target karta hai (jaise element name, class ya ID ke through) aur fir unpe styles apply karta hai jaise ki color, font, spacing, etc.
        </p>

        <pre className="bg-white text-black p-4 rounded mb-4 shadow-md">
          <code>
{`selector {
  property: value;
}`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-red-500 mt-4 mb-2">🧪 Quick Follow-Up Task:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>🖱️ Right-click karo screen par aur select karo "Inspect" (Ctrl + Shift + C)</li>
          <li>🔍 Top-left arrow icon se kisi element ko select karo</li>
          <li>👀 Uske CSS rules ko dekho ya toggle karo</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">✨ Key Features of CSS</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>🌐 Webpages ka layout aur design manage karta hai</li>
          <li>🧩 HTML/XML ke saath use hota hai</li>
          <li>📱 Responsive design banane mein help karta hai</li>
          <li>🎭 Hover effects, transitions & animations support karta hai</li>
          <li>📦 Modular structure – ab versioning se zyada modules ka use hota hai</li>
          <li>♻️ Rules reuse kiye ja sakte hain across pages</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">📜 A Bit of History</h2>
        <p className="mb-4">
          CSS ko <strong className="text-cyan-400">Håkon Wium Lie</strong> ne banaya tha taaki websites visually better ban sakein.
          Jab internet naya tha, websites zyada tar researchers ke liye hoti thi aur design par dhyan nahi diya jata tha.
          Jaise jaise internet popular hua, demand badi attractive websites ki – aur CSS ka invention hua.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">🔗 Important References:</h2>
        <ul className="list-disc pl-6">
          <li>👶 Beginners ke liye: <em>Start with the HTML tutorial</em></li>
          <li>📖 Extra reading ke liye: CSS on Wikipedia</li>
          <li>👨‍💻 Advanced users ke liye: <strong>W3C CSS Specifications</strong></li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/GIT/GITHUB/details"}>
            <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:scale-105 transition-all duration-300 shadow-md">
              ⬅️ PREVIOUS
            </button>
          </Link>

          <Link to={"/HTML/html-into"}>
            <button className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl border-2 border-white hover:scale-105 transition-all duration-300 shadow-md">
              NEXT ➡️
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CssIntro;
