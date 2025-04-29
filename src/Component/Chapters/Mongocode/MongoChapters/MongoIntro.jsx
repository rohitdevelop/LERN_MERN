import React from "react";
import { Link } from "react-router-dom";
import MongoSidebar from "../MongoSidebar";

const MongoIntro = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          📘 Introduction to MongoDB
        </h1>

        <p className="text-white text-lg">
          Hello doston! 😄 Aaj hum baat karenge{" "}
          <strong className="text-cyan-400">MongoDB</strong> ke baare mein. Ye
          ek popular NoSQL database hai jisme data ko hum JSON ke format
          (document form) mein store karte hain. SQL ki tarah table/row nahi
          hota, yahan collection/document hota hai. Easy hai, fast hai aur
          modern web apps ke liye best hai! 💥
        </p>

        <h2 className="text-xl font-bold text-red-500 mt-6">
          🔧 MongoDB Setup (Step by Step)
        </h2>

        <ol className="list-decimal list-inside text-white space-y-2">
          <li>
            <strong>MongoDB Install</strong>:
            <br />
            Visit{" "}
            <a
              href="https://www.mongodb.com/try/download/community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline"
            >
              mongodb.com/download
            </a>{" "}
            and install "MongoDB Community Edition".
          </li>
          <li>
            <strong>MongoDB Compass Install</strong>:
            <br />
            Compass ek GUI tool hai MongoDB ke liye. Usse data ko visual form
            mein dekh sakte ho. Isse bhi install karo.
          </li>
        </ol>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-red-500 mb-2">
            🖥️ Installation Screenshot
          </h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231218135411/Steps-to-install-MongoDB_2.png"
            alt="MongoDB Install Screenshot"
            className="w-96 h-auto   rounded-xl shadow-xl border-2 border-cyan-500"
          />
        </div>

        <h2 className="text-xl font-bold text-red-500 mt-6">
          📁 MongoDB Key Concepts
        </h2>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>
            <strong className="text-cyan-400">Database</strong>: Jaise folder
            hota hai — uske andar collections hote hain.
          </li>
          <li>
            <strong className="text-cyan-400">Collection</strong>: Tables jaisa
            structure.
          </li>
          <li>
            <strong className="text-cyan-400">Document</strong>: JSON object
            format mein data. (No rows/columns)
          </li>
        </ul>

        <div className="mt-4">
          <img
            src="https://studyopedia.com/wp-content/uploads/2021/06/MongoDB-example.png"  
            alt="MongoDB Collection Document"
            className="w-[50vw] h-auto rounded-xl shadow-xl border-2 border-cyan-500"
          />
        </div>

        <h2 className="text-xl font-bold text-red-500 mt-6">
          🔍 Example Document
        </h2>
        <pre>
          {`{
  "name": "Rohit Singh",
  "age": 19,
  "course": "MERN Stack"
}`}
        </pre>

        <h2 className="text-xl font-bold text-red-500 mt-6">
          🎯 Real-Life Use Case
        </h2>
        <p className="text-white">
          Jab aap ek MERN Stack app banate ho (like Todo, Contact Form, Blog) —
          MongoDB backend data ko store karta hai. Ye schema-less hota hai,
          matlab har document alag-alag fields bhi rakh sakta hai.
        </p>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongo/what-is-mongo"}>
            <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/sql-vs-nosql"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoIntro;
