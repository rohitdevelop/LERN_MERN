import React from 'react';
import { Link } from 'react-router-dom';
import MongoSidebar from '../MongoSidebar';

const MongoShellAtlas = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-green-400">🌐 MongoDB Shell (mongosh) + Atlas Setup</h1>

        <p className="text-lg text-white">
          MongoDB ke saath kaam karne ke do tarike hote hain:
          <span className="text-yellow-300 font-semibold"> Local Shell (mongosh)</span> aur 
          <span className="text-yellow-300 font-semibold"> Cloud Database (MongoDB Atlas)</span>. Dono important hain aur real-world mein kaam aate hain.
        </p>

        {/* Shell Section */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">💻 1. MongoDB Shell (mongosh)</h2>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>mongosh ek command-line interface hai MongoDB ke liye</li>
          <li>Agar aapne MongoDB Community Server install kiya tha, toh mongosh by default install ho gaya hoga</li>
          <li>Terminal ya CMD khol ke bas type karo: <code className="bg-gray-800 px-2 py-1 rounded">mongosh</code></li>
          <li>Ye local MongoDB instance se connect kar dega (default port 27017)</li>
          <li>Ab aap database commands likh sakte ho shell mein</li>
        </ul>

        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>show dbs</code><br />
          <code>use mydb</code><br />
          <code>db.users.insertOne({ `name: "Rohit", age: 19 `})</code><br />
          <code>db.users.find()</code>
        </div>

        {/* Atlas Section */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">☁️ 2. MongoDB Atlas (Cloud)</h2>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Atlas ek cloud-based MongoDB database service hai</li>
          <li>No need to install anything locally for database server</li>
          <li>Atlas allows free tier clusters for learning</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Atlas Setup Steps:</h3>
        <ol className="list-decimal list-inside text-white space-y-2">
          <li>Visit <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">mongodb.com/cloud/atlas</a></li>
          <li>Create a free account and verify email</li>
          <li>Create a new project → Click "Build a Database"</li>
          <li>Choose Free Tier → Select any Cloud Provider (AWS is default)</li>
          <li>Choose Region (closest to you) → Click Create Cluster</li>
          <li>Set Username & Password for your DB access</li>
          <li>Allow Access From Anywhere (0.0.0.0/0)</li>
          <li>Click on "Connect" → Choose "Connect using MongoDB Compass" or "mongosh"</li>
          <li>Copy the connection string: <br />
            <code className="bg-gray-800 px-2 py-1 rounded">
              mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.mongodb.net/
            </code>
          </li>
          <li>Use Compass or mongosh to connect!</li>
        </ol>

        <h2 className="text-xl font-bold text-green-400 mt-6">🚀 Aapka MongoDB Ready Hai!</h2>
        <p className="text-white">Ab aap chahe to local shell ya cloud Atlas use kar ke MongoDB se kaam kar sakte ho. Dono kaam aate hain projects mein.</p>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/setup"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/deta-Collections"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoShellAtlas;
