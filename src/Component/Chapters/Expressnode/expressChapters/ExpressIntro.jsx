import React from 'react';
import ExprSidebar from '../ExprSidebar';
import { Link } from 'react-router-dom';

const ExpressIntro = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        <div className="w-full md:w-[90%]">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-cyan-400">
            ⚡ Express.js Introduction
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            <strong>Express.js</strong> ek <span className="text-red-400 font-semibold">minimal aur flexible Node.js web application framework</span> hai. Iska use fast aur scalable backend banane ke liye hota hai. 🎯
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            Express basically ek tarike ka <span className="text-cyan-300">wrapper hai Node.js ke upar</span>, jo hume request handle karne, routes define karne, aur APIs create karne mein madad karta hai — easily aur efficiently! 🧠
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-red-400">📦 Kya milta hai Express se?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Routing system – easy banata hai different pages & APIs banana</li>
            <li>Middleware support – request aur response ke beech processing kar sakte ho</li>
            <li>Server creation without boilerplate code</li>
            <li>Support for different template engines like EJS, Pug</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-cyan-400">🌐 Real-World Use Case:</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Tumne jo bhi online form submit kiya hai ya login/logout kiya hai kisi app mein, uska backend Express.js se bana ho sakta hai! ⚙️
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-red-400">💥 Express + Node = Superpower</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Jab tum Express ko Node ke saath combine karte ho, tab tum complete backend develop kar sakte ho – chahe woh REST API ho, CRUD app ho ya real-time chat app! 🔥
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            To agar tum <span className="text-cyan-400 font-semibold">full-stack</span> banna chahte ho, Express.js is a must-learn! 🏆
          </p>

          <div className="w-full flex items-center justify-between mt-8 px-4">
            <Link to={"/nodejs/node-intro"}>
              <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:scale-105 transition-all duration-300 shadow-md">
                ⬅️ PREVIOUS
              </button>
            </Link>

            <Link to={"/express/first-app"}>
              <button className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl border-2 border-white hover:scale-105 transition-all duration-300 shadow-md">
                NEXT ➡️
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpressIntro;
