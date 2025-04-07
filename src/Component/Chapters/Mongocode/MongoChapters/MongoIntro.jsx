import React from 'react';
import { Link } from 'react-router-dom';
 import MongoSidebar from '../MongoSidebar';

const MongoIntro = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <div className="w-full md:w-[90%]">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
            🍃 MongoDB Introduction
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            <strong className="text-cyan-400">MongoDB</strong> ek <span className="text-red-400 font-semibold">NoSQL database</span> hai jo <strong>document-oriented</strong> model use karta hai. Traditional SQL databases jaise MySQL ya PostgreSQL ke jagah yeh zyada flexible hota hai, kyunki yeh JSON-like documents mein data store karta hai. 🔥
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            Yeh <strong>high performance, high availability</strong> aur <strong>easy scalability</strong> ke liye jaana jaata hai. Iska sabse bada plus point hai – schema-less data structure, matlab tum easily flexible structure ke sath data store kar sakte ho. 📂
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">🧠 MongoDB Key Concepts:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-cyan-400">Document</strong> – JSON format mein data ka ek record</li>
            <li><strong className="text-cyan-400">Collection</strong> – Documents ka group (SQL ke table ki tarah)</li>
            <li><strong className="text-cyan-400">Database</strong> – Multiple collections ka group</li>
            <li><strong className="text-cyan-400">Mongo Shell / Compass</strong> – Interface for interacting with MongoDB</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">✨ MongoDB Kyu Use Kare?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Schema-less (Flexible Data)</li>
            <li>Fast Read/Write Performance ⚡</li>
            <li>Great for handling Big Data 📊</li>
            <li>Best fit for real-time apps (chat, IoT, etc.)</li>
            <li>Easy to integrate with Node.js & Express</li>
          </ul>

          <p className="text-lg mt-6 leading-relaxed">
            Agar tum MERN stack developer banna chahte ho, toh <span className="text-cyan-400 font-bold">MongoDB</span> is a <span className="text-red-400 font-semibold">must-learn</span> technology. 💡
          </p>

          <div className="w-full flex items-center justify-between mt-10 px-4">
            <Link to={"/express/rest-api"}>
              <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:scale-105 transition-all duration-300 shadow-md">
                ⬅️ PREVIOUS
              </button>
            </Link>

            <Link to={"/express/mongodb-crud"}>
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

export default MongoIntro;
