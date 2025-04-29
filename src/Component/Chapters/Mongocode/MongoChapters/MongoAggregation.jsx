import React from "react";
import { Link } from "react-router-dom";
import MongoSidebar from "../MongoSidebar";

const MongoAggregation = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
       
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-green-400">📚 MongoDB: Aggregation</h1>
        <p className="text-lg text-white">
          **Aggregation** MongoDB mein ek powerful operation hai jo data ko group karne, filter karne, aur transform karne ke liye use hota hai. Yeh queries ko perform karne ka ek advanced method hai jisme multiple stages hote hain.
        </p>

        {/* Aggregation Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">🔑 What is MongoDB Aggregation?</h2>
        <p className="text-white">
          MongoDB aggregation pipeline ek sequence of operations hai jo data ko process karne mein madad karta hai. Agar aapko data ko filter, group, sort, ya transform karna ho, to aggregation aapke liye perfect solution hai.
        </p>

        {/* Aggregation Stages */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">🛠️ Aggregation Stages</h2>
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 text-center">Stage</th>
              <th className="py-3 px-6 text-center">Description</th>
              <th className="py-3 px-6 text-center">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6 text-center">\$match</td>
              <td className="py-3 px-6 text-center">
                Yeh stage filtering ke liye use hota hai, jisme specific conditions apply ki jati hain.
              </td>
              <td className="py-3 px-6 text-center">
                <code>{`{ $match: { age: { $gte: 18 } } }`}</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 text-center">\$group</td>
              <td className="py-3 px-6 text-center">
                Yeh stage data ko group karne ke liye hota hai, jaise count, sum, etc.
              </td>
              <td className="py-3 px-6 text-center">
                <code>{`{ $group: { _id: "$city", total: { $sum: 1 } } }`}</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 text-center">\$sort</td>
              <td className="py-3 px-6 text-center">
                Yeh stage data ko ascending ya descending order mein sort karne ke liye hota hai.
              </td>
              <td className="py-3 px-6 text-center">
                <code>{`{ $sort: { age: -1 } }`}</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 text-center">\$project</td>
              <td className="py-3 px-6 text-center">
                Yeh stage specific fields ko include ya exclude karne ke liye hota hai.
              </td>
              <td className="py-3 px-6 text-center">
                <code>{`{ $project: { name: 1, age: 1 } }`}</code>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-white mt-6">
          Yeh stages aapko complex queries ko efficiently execute karne mein madad karte hain. Aap in stages ko chain kar ke data ko process kar sakte hain.
        </p>

        {/* Aggregation Example */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">💡 Aggregation Pipeline Example</h2>
        <p className="text-white">
          Agar aapko MongoDB mein users ke data ko age ke hisaab se group karna ho aur har group ka count chahiye ho, to aap aggregation pipeline ka use karenge:
        </p>
        <div >
  <pre>
{`db.users.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: "$age", count: { $sum: 1 } } }
])`}
  </pre>
</div>


        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/indexing"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/relationships"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoAggregation;
