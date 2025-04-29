import React from 'react';
import { Link } from 'react-router-dom';
import MongoSidebar from '../MongoSidebar';

const MongoDocuments = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-3xl font-bold text-green-400">📄 MongoDB: Documents & JSON</h1>
        
        <p className="text-lg text-white">
          MongoDB mein data ko store karne ka primary unit **"document"** hota hai, jo ek **JSON-like format** mein hota hai.
          Har document ek record hota hai aur har record ka apna unique structure ho sakta hai.
        </p>

        {/* Documents Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">📃 1. MongoDB Documents</h2>
        <p className="text-white">
          MongoDB mein **documents** ek tarah se JSON objects hote hain. Ye records ya data ko store karte hain aur har document ka apna structure ho sakta hai. MongoDB mein data ko store karte waqt, har document ko ek **unique "_id"** field assign hota hai.
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Documents MongoDB mein JSON-like format mein store hote hain, jisme key-value pairs hote hain.</li>
          <li>Har document ka apna structure ho sakta hai, yani har document alag ho sakta hai, lekin sab ek hi collection mein rahte hain.</li>
          <li>Documents ke andar different types of data store kiya ja sakta hai, jaise string, number, array, date, etc.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Document Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.insertOne({ `name: "Rohit", age: 19, profession: "Developer"` })</code><br />
          <code>db.users.find()</code> {/* Querying the documents */}
        </div>

        {/* JSON Format Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">📝 2. JSON Format</h2>
        <p className="text-white">
          MongoDB mein documents **JSON-like format** mein store hote hain. JSON (JavaScript Object Notation) ek lightweight data-interchange format hai, jo human-readable hai.
        </p>

        <ul className="list-disc list-inside space-y-2 text-white">
          <li>JSON ek **key-value pair** ka format hota hai. Key string hoti hai aur value kisi bhi type ki ho sakti hai, jaise number, string, array, etc.</li>
          <li>MongoDB mein documents ko JSON format mein store kiya jaata hai, isliye har document ko ek object samjha jaata hai.</li>
          <li>MongoDB ka document ek **BSON** (Binary JSON) format mein hota hai, jo ki standard JSON ka extended version hai aur binary data ko bhi store kar sakta hai.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 JSON Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>{`"name": "Rohit", "age": 19, "profession": "Developer"`}</code><br />
          <code>{`"_id": 1, "skills": ["JavaScript", "React", "MongoDB"]`}</code>
        </div>

        {/* Summary */}
        <h2 className="text-xl font-bold text-green-400 mt-6">🚀 Summary:</h2>
        <p className="text-white">
          MongoDB mein data ko **documents** ke roop mein store kiya jaata hai, jo ek flexible aur JSON-like format mein hote hain.
          Har document ka apna unique structure ho sakta hai, aur yeh human-readable hote hain. JSON format MongoDB mein commonly use hota hai.
        </p>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/deta-Collections"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/find-filter"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoDocuments;
