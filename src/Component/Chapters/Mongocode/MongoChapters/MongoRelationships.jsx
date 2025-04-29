import React from "react";
import { Link } from "react-router-dom";
import MongoSidebar from "../MongoSidebar";

const MongoRelationships = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-green-400">📚 MongoDB: Relationships</h1>
        <p className="text-lg text-white">
          MongoDB mein **relationships** ko handle karne ke liye different approaches hoti hain. Relationships ka matlab hai ki kaise ek document doosre document se related hota hai.
        </p>

        {/* Types of Relationships */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">🔑 Types of Relationships in MongoDB</h2>
        <p className="text-white">
          MongoDB mein generally 2 types ki relationships hoti hain: 
          <strong>One-to-Many</strong> aur <strong>Many-to-Many</strong>.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-4">1. One-to-Many Relationship</h3>
        <p className="text-white">
          Is relationship mein ek document ka multiple related documents hote hain. Example ke liye, ek blog post ka multiple comments ho sakte hain.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-white mt-4">
          <code>
            {"// One blog post can have many comments\n"}<br />
            {"db.posts.insert({ title: 'MongoDB Basics', comments: [{ text: 'Great post!' }, { text: 'Very informative!' }] })"}
          </code>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8">2. Many-to-Many Relationship</h3>
        <p className="text-white">
          Is relationship mein multiple documents doosre multiple documents se related hote hain. Jaise, ek student ke paas multiple courses ho sakte hain, aur ek course ke andar multiple students ho sakte hain.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-white mt-4">
          <code>
            {"// Many students can take many courses\n"}<br />
            {"db.students.insert({ name: 'John', courses: ['Math', 'Science'] })\n"}<br />
            {"db.courses.insert({ courseName: 'Math', students: ['John', 'Jane'] })"}
          </code>
        </div>

        {/* Advantages of Embedding vs Referencing */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">⚖️ Embedding vs Referencing</h2>
        <p className="text-white">
          MongoDB mein **embedding** aur **referencing** 2 approaches hain, jo relationships ko model karte waqt use ki jaati hain.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-4">Embedding</h3>
        <p className="text-white">
          Embedding mein related documents ek hi document ke andar store hote hain. Yeh simple queries ke liye ideal hai, lekin data duplication ho sakta hai.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-4">Referencing</h3>
        <p className="text-white">
          Referencing mein related documents alag collections mein hote hain, aur unhe reference ke through link kiya jata hai. Yeh zyada complex queries ke liye useful hai.
        </p>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/aggregation"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/video"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoRelationships;
