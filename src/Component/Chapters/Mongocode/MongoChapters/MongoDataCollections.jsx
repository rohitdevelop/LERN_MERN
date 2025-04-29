import React from 'react';
import { Link } from 'react-router-dom';
import MongoSidebar from '../MongoSidebar';

const MongoDataCollections = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-3xl font-bold text-green-400">📂 MongoDB: Data, Collections, and Documents</h1>
        
        <p className="text-lg text-white">
          MongoDB mein data ko store karne ke liye hum do primary cheezein use karte hain: 
          <span className="text-yellow-300 font-semibold"> Database </span> aur 
          <span className="text-yellow-300 font-semibold"> Collections </span>. 
          In collections ke andar hum apne data ko documents ki form mein store karte hain.
        </p>

        {/* Data Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">📚 1. Data</h2>
        <p className="text-white">
          MongoDB mein data ko store karne ke liye sabse pehle ek database create karna padta hai. 
          Har MongoDB instance mein ek ya zyada databases ho sakte hain.
        </p>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Database ek container hai jo collections ko store karta hai</li>
          <li>Data ko efficiently organize karne ke liye, MongoDB collections aur documents ka use karta hai</li>
          <li>MongoDB mein ek database mein bohot sari collections ho sakti hain</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Data Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>use myDatabase</code> {/* Switching to a specific database */}
        </div>

        {/* Collections Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">📂 2. Collections</h2>
        <p className="text-white">
          MongoDB mein, collections ek group hoti hain documents ki, jo ek hi category mein belong karti hain.
        </p>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Collection ek tarah ka table hota hai SQL databases mein</li>
          <li>Ek collection ka structure dynamic hota hai. Har document ka apna unique structure ho sakta hai</li>
          <li>Collections ko specific data types ke liye use kiya jaata hai, for example, "users", "orders", "products" etc.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Collection Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>show collections</code> {/* Listing all collections */}
        </div>

        {/* Documents Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">📃 3. Documents</h2>
        <p className="text-white">
          MongoDB mein data ko store karne ka actual unit "document" hota hai. Documents ek JSON-like format mein store kiye jaate hain.
        </p>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Document ek record hota hai jo ek collection mein store hota hai</li>
          <li>Documents mein keys aur values hote hain, jaise key: value pairs</li>
          <li>Har document ka apna unique ID hota hai, jo by default "_id" ke naam se hota hai</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Document Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.insertOne({ `name: "Rohit", age: 19, profession: "Developer" `})</code><br />
          <code>db.users.find()</code> {/* Querying the documents */}
        </div>

        {/* Summary */}
        <h2 className="text-xl font-bold text-green-400 mt-6">🚀 Summary:</h2>
        <p className="text-white">
          MongoDB mein apne data ko organize karna asaan hai, aur collections aur documents ka structure bohot flexible hai.
          Collections mein aap apne related data ko store kar sakte ho aur har document apna unique record rakhta hai.
        </p>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/shell-atlas"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/documents"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoDataCollections;
