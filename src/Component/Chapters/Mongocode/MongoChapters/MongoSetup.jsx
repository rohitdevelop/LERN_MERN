import React from 'react';
import { Link } from 'react-router-dom';
import MongoSidebar from '../MongoSidebar';

const Mongosetup = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-cyan-400">⚙️ MongoDB Setup Guide (Server + Compass)</h1>

        <p className="text-white text-lg">
          MongoDB ko local system pe use karne ke liye humein 2 cheezein install karni hoti hain:
          <span className="text-yellow-400"> MongoDB Server</span> (for databases) aur
          <span className="text-yellow-400"> MongoDB Compass</span> (for GUI-based access).
        </p>

        <h2 className="text-2xl font-bold text-red-500 mt-6">📥 Step 1: Install MongoDB Server</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>
            Visit official site: <a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">mongodb.com/try/download/community</a>
          </li>
          <li>Select Version: <span className="text-green-300">Windows</span>, Package: MSI</li>
          <li>Run setup → Keep default options → Install as a <strong>Service</strong></li>
          <li>Once done, MongoDB will run automatically in background</li>
        </ul>
        <img 
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--zgte2peb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vpraz61ea8jja17gx5l3.png"  
        alt="MongoDB Install Screenshot"
        className="w-[50vw] h-auto   rounded-xl shadow-xl border-2 border-cyan-500"
      />
        
        
        <h2 className="text-2xl font-bold text-red-500 mt-6">🔍 Step 2: Install MongoDB Compass (GUI)</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>
            Go to: <a href="https://www.mongodb.com/try/download/compass" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">mongodb.com/try/download/compass</a>
          </li>
          <li>Download Compass based on your OS</li>
          <li>Install and open the app</li>
          <li>Default connection string hota hai: <code className="bg-gray-800 px-2 py-1 rounded">mongodb://localhost:27017</code></li>
          <li>Click on "Connect" and you’re in! 🥳</li>
        </ul>
        <img src="https://mongodbtutorial.org/wp-content/uploads/2020/07/install-mongodb-on-windows-step-4.png"  
          alt="MongoDB Install Screenshot"
          className="w-[50vw] h-auto   rounded-xl shadow-xl border-2 border-cyan-500"
        />
        <h2 className="text-2xl font-bold text-red-500 mt-6">💡 Extra Tips</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>Agar system restart ho toh MongoDB service background mein chalu hoti hai</li>
          <li>Compass se aap collections, databases, documents sab GUI mein dekh sakte ho</li>
          <li>Command line se kaam karne ke liye: use <code className="bg-gray-800 px-2 py-1 rounded">mongo</code> or <code className="bg-gray-800 px-2 py-1 rounded">mongosh</code></li>
        </ul>
        <img 
           src="https://dbschema.com/img/blog/mongodb/mongo-compass.png" 
          alt="MongoDB Install Screenshot"
          className="w-[50vw] h-auto   rounded-xl shadow-xl border-2 border-cyan-500"
        />
        <h2 className="text-xl font-bold text-cyan-400 mt-6">✅ Setup Done! Ab aap MongoDB se kaam karne ke liye ready ho! 🎉</h2>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/sql-vs-nosql"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/shell-atlas"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mongosetup;
