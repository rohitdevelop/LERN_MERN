import React from "react";
import { Link } from "react-router-dom";
import MongoSidebar from "../MongoSidebar";

const MongoIndexing = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-green-400">📚 MongoDB: Indexing</h1>
        <p className="text-lg text-white">
          MongoDB mein **indexing** ek important concept hai jo queries ki speed ko improve karta hai. Jab hum indexing ka use karte hain, hum apne queries ko fast bana sakte hain, jo especially large datasets mein zaroori hota hai.
        </p>

        {/* Indexing Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">🔑 What is MongoDB Indexing?</h2>
        <p className="text-white">
          Indexes MongoDB ko efficiently data search karne mein madad karte hain. Without indexes, MongoDB ko entire collection scan karni padti hai, jo bahut slow hota hai. Indexes ek structure hota hai jo collection ke documents ke upar fast searching ko enable karta hai.
        </p>

        {/* Types of Indexes */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">🗂 Types of Indexes in MongoDB</h2>
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 text-center">Index Type</th>
              <th className="py-3 px-6 text-center">Description</th>
              <th className="py-3 px-6 text-center">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6 text-center">Single Field Index</td>
              <td className="py-3 px-6 text-center">
                Yeh index ek single field ke upar hota hai. Most common type of index.
              </td>
              <td className="py-3 px-6 text-center">
                <code>db.users.createIndex({` name: 1 `})</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 text-center">Compound Index</td>
              <td className="py-3 px-6 text-center">
                Yeh index multiple fields ke combination pe create hota hai.
              </td>
              <td className="py-3 px-6 text-center">
                <code>db.users.createIndex({` name: 1, age: -1` })</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 text-center">Text Index</td>
              <td className="py-3 px-6 text-center">
                Yeh index text-based searches ke liye hota hai. Multiple words ko search karne mein help karta hai.
              </td>
              <td className="py-3 px-6 text-center">
                <code>db.articles.createIndex({` content: "text" `})</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 text-center">Geospatial Index</td>
              <td className="py-3 px-6 text-center">
                Yeh index geographical data (latitude, longitude) ke liye hota hai.
              </td>
              <td className="py-3 px-6 text-center">
                <code>db.locations.createIndex({` location: "2dsphere"` })</code>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-white mt-6">
          Yeh indexes MongoDB ki search capabilities ko kaafi optimize karte hain. Indexes query performance ko improve karne mein madad karte hain, especially jab aap large collections ke saath kaam kar rahe ho.
        </p>

        {/* How Indexing Works */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">⚙️ How Indexing Works</h2>
        <p className="text-white">
          Jab aap index create karte hain, MongoDB ek data structure banata hai (jese B-tree ya hash) jo specific field pe search ko fast banata hai. Indexing ka main purpose query execution ko fast karna hai.
        </p>
        <p className="text-white mt-2">
          Indexing ke baad, jab aap query run karte ho, MongoDB direct index structure se search results fetch karta hai, jo bahut fast hota hai, instead of scanning the whole collection.
        </p>

        {/* Indexing Commands */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">🔧 Indexing Commands</h2>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Create Index:</span></p>
          <code>db.collection.createIndex({ `field: 1 `})</code><br />
          <p><span className="text-yellow-400">List Indexes:</span></p>
          <code>db.collection.getIndexes()</code><br />
          <p><span className="text-yellow-400">Drop Index:</span></p>
          <code>db.collection.dropIndex({` field: 1 `})</code><br />
        </div>

        {/* Indexing Advantages and Limitations */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">📊 Advantages & Limitations of Indexing</h2>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>**Advantages**: Speeds up query performance, especially for large datasets.</li>
          <li>**Limitations**: Index creation and maintenance require extra disk space. Also, adding too many indexes can slow down write operations (insert/update). </li>
        </ul>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/crud"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/aggregation"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoIndexing;
