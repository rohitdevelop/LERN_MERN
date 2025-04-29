import React from 'react';
import { Link } from 'react-router-dom';
import MongoSidebar from '../MongoSidebar';

const MongoSQLvsNoSQL = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-cyan-400">📊 SQL vs NoSQL: Difference Explained</h1>

        <p className="text-white text-lg">
          Jab hum database choose karte hain, toh humein do options milte hain:
          <strong className="text-cyan-400"> SQL (Structured Query Language) </strong> aur 
          <strong className="text-cyan-400"> NoSQL (Not Only SQL)</strong>. Dono ka apna use-case hota hai. Aayiye compare karte hain inhe! 🔍
        </p>

        <h2 className="text-xl font-bold text-red-500 mt-6">🧾 SQL Databases</h2>
        <p className="text-white">
          SQL databases relational hote hain — matlab data ko tables ke form mein store karte hain. Jaise Excel sheet.
          Har row ek record, aur har column ek field hota hai.
        </p>

        <h2 className="text-xl font-bold text-red-500 mt-6">📦 NoSQL Databases</h2>
        <p className="text-white">
          NoSQL databases non-relational hote hain. Yahan data ko documents, key-value, graph, ya wide-column format mein store karte hain.
          MongoDB ek document-based NoSQL database hai jisme JSON jaisa structure hota hai.
        </p>

        <h2 className="text-xl font-bold text-red-500 mt-6">📚 SQL vs NoSQL Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-white border border-white rounded-xl">
            <thead>
              <tr className="bg-gray-800 text-cyan-300">
                <th className="px-4 py-2 border border-white">Feature</th>
                <th className="px-4 py-2 border border-white">SQL</th>
                <th className="px-4 py-2 border border-white">NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border border-white">Data Model</td>
                <td className="px-4 py-2 border border-white">Table-based</td>
                <td className="px-4 py-2 border border-white">Document / Key-Value</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border border-white">Schema</td>
                <td className="px-4 py-2 border border-white">Fixed (Structured)</td>
                <td className="px-4 py-2 border border-white">Flexible (Unstructured)</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border border-white">Scalability</td>
                <td className="px-4 py-2 border border-white">Vertical</td>
                <td className="px-4 py-2 border border-white">Horizontal</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="px-4 py-2 border border-white">Examples</td>
                <td className="px-4 py-2 border border-white">MySQL, PostgreSQL</td>
                <td className="px-4 py-2 border border-white">MongoDB, Firebase</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="px-4 py-2 border border-white">Best Use</td>
                <td className="px-4 py-2 border border-white">Complex queries, Transactions</td>
                <td className="px-4 py-2 border border-white">Large data, Fast dev, JSON</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-red-500 mt-6">🚀 Real-World Example</h2>
        <p className="text-white">
          🏦 Agar aap ek bank bana rahe ho jahan transactions track karni ho, SQL best hoga.  
          🛒 Lekin agar aap ek eCommerce website ya blog bana rahe ho jisme fast data access chahiye — MongoDB is perfect! 🧠
        </p>

        <h2 className="text-xl font-bold text-red-500 mt-6">💡 Summary</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li><strong className="text-cyan-400">SQL</strong> = Structured, Tables, Rigid schema, Strong ACID support</li>
          <li><strong className="text-cyan-400">NoSQL</strong> = Flexible, JSON documents, Easy to scale, Modern apps ke liye best</li>
        </ul>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongo/what-is-mongo"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/setup"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoSQLvsNoSQL;
