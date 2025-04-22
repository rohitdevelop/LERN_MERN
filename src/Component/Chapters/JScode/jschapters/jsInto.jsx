import React from 'react';
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsIntro = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-cyan-500 mb-4">📘 Introduction to JavaScript</h1>

        <p className="text-white font-medium">
  Aaj main ye JavaScript tutorial bana raha hoon taaki aapko ek aisa resource mil sake jo aapko <strong>JavaScript seekhne mein madad</strong> kare. Aap is tutorial ko <strong>reference ke liye bhi use</strong> kar sakte ho jab aapko kisi concept ya code ko dobara dekhna ho.
  <br /><br />
  Socho ek website ek ghar jaise hai. <strong>HTML</strong> us ghar ki <strong>eent aur diwar</strong> hai, jo usko structure deti hai. <strong>CSS</strong> us ghar ki <strong>painting aur decoration</strong> hai — jo usse sundar banati hai. 
  <strong>JavaScript ke bina</strong> us ghar mein <strong>light ya paani kuch bhi nahi hoga</strong> — kuch kaam nahi karega.
  <br /><br />
  <strong>JavaScript ek website ko interactive banata hai.</strong> Ye aisa hai jaise ghar mein <strong>electricity lagana</strong> — jisse aap <strong>buttons click karke doors khol</strong> sakte ho, <strong>lights on kar</strong> sakte ho ya <strong>music play</strong> kar sakte ho.
  <br /><br />
  JavaScript ke bina ek website sirf <strong>dekhne layak hoti hai</strong> — lekin kuch <strong>kar nahi sakte</strong>.
</p>

        <p className="text-white">
          JavaScript frontend mein use hota hai, lekin aaj kal backend mein bhi use hota hai — Node.js ke through.
        </p>

        <p className="text-red-400 font-semibold text-xl">🧠 What is Programming?</p>

        <p className="text-white">
          Programming ek tarika hai computer se baat karne ka. Jaise hum insano se Hindi, English ya Bengali mein baat karte hain, waise computers ko instructions dene ke liye programming languages chahiye hoti hain.
        </p>

        <p className="text-cyan-400">
          Programming ka matlab hota hai ek program banana — yaani ek set of instructions dena jisse computer samjhe ki usse kya karna hai.
        </p>

        <p className="text-white">
          Ismein designing, likhna, test karna, debug karna aur maintain karna sab aata hai. Programming se hum aise software banate hain jo computer ya kisi device par run ho sakte hain.
        </p>

        <p className="text-red-400 font-semibold text-xl">📜 What is ECMAScript?</p>

        <p className="text-white">
          ECMAScript ek standard hai jiske base par JavaScript bana hai. Ye ensure karta hai ki duniya bhar ke JavaScript docs ek hi language ki baat kar rahe hain.
        </p>

        <p className="text-cyan-400">💡 ECMAScript Versions:</p>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>ECMAScript 1 (ES1) pehli baar release hua tha 1997 mein.</li>
          <li>ECMAScript 2015 (ES6) ek major update tha JavaScript ke liye.</li>
          <li>Latest version — ECMAScript 2022 (ES13).</li>
        </ul>

        <p className="text-red-400 font-semibold text-xl">🧾 What is JavaScript?</p>

        <ul className="list-disc list-inside text-white space-y-1">
          <li>JavaScript ek lightweight, object-oriented programming language hai.</li>
          <li>Ye ek scripting language hai jo web pages ko interactive banati hai.</li>
          <li>JavaScript file ka extension ".js" hota hai.</li>
          <li>Aaj ke time mein ye server-side development mein bhi use ho raha hai.</li>
        </ul>

        <p className="text-cyan-400">🚀 JavaScript Frontend Frameworks:</p>
        <ul className="list-disc list-inside text-white">
          <li>React</li>
          <li>Angular</li>
          <li>Vue</li>
        </ul>

        <p className="text-cyan-400">⚙️ JavaScript Backend Frameworks:</p>
        <ul className="list-disc list-inside text-white">
          <li>Node.js</li>
          <li>Express</li>
        </ul>

        <p className="text-white font-semibold">
          Is tutorial mein hum JavaScript ko deeply aur step-by-step seekhenge! 🔥
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/what-is-js"}>
            <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/excution"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>

      </div>
    </>
  );
};

export default JsIntro;
