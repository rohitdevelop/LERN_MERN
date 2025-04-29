import React from 'react';
import { Link } from 'react-router-dom';
import MongoSidebar from '../MongoSidebar';

const MongoFindFilter = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-3xl font-bold text-green-400">🔍 MongoDB: Find & Filter Documents</h1>
        
        <p className="text-lg text-white">
          MongoDB mein data ko efficiently search karne ke liye **find()** function ka use kiya jaata hai. Yeh function documents ko search karke filter karne mein madad karta hai.
          Hum filter conditions laga kar specific documents ko easily fetch kar sakte hain.
        </p>

        {/* Find Method Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">🔎 1. MongoDB Find Method</h2>
        <p className="text-white">
          **find()** method MongoDB mein documents ko search karne ke liye use hota hai. Yeh method ek query accept karta hai jo ki search condition ko define karta hai.
        </p>

        <ul className="list-disc list-inside space-y-2 text-white">
          <li>find() method sabhi documents ko return karta hai jo condition ko match karte hain.</li>
          <li>Isme hum optional parameters de sakte hain jaise **limit**, **skip**, aur **projection** jo result ko customize karte hain.</li>
          <li>Example ke liye, agar humein specific age ya profession wale users ko find karna ho, toh hum **find()** method ka use kar sakte hain.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Find Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.find({ `age: 19 `})</code><br />
          <code>db.users.find({` profession: "Developer" `})</code>
        </div>

        {/* Filter with Conditions Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">🛠️ 2. MongoDB Filter Conditions</h2>
        <p className="text-white">
          MongoDB mein **filter** conditions lagana bahut asaan hai. Hum **find()** ke andar specific conditions pass kar sakte hain jo ki documents ko match karenge.
        </p>

        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Hum logical operators like **$gt**, **$lt**, **$eq**, **$ne**, **$in**, **$nin** etc. use karke conditions ko filter kar sakte hain.</li>
          <li>Agar humein range based queries chahiye ho, jaise age greater than 20, toh hum **$gt** (greater than) ya **$lt** (less than) use kar sakte hain.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Filter Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.find({ `age: { $gt: 18 }` })</code><br />
          <code>db.users.find({ `profession: "Developer", age: { $lt: 25 } `})</code>
        </div>

        {/* Summary */}
        <h2 className="text-xl font-bold text-green-400 mt-6">🚀 Summary:</h2>
        <p className="text-white">
          **find()** method MongoDB mein documents ko search karne ke liye use hota hai aur **filter conditions** ke saath hum data ko efficiently retrieve kar sakte hain.
          Iska use kar ke hum kisi specific query ko execute kar sakte hain jaise age, profession, or other conditions ke basis pe data ko filter karna.
        </p>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/documents"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/crud"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoFindFilter;
