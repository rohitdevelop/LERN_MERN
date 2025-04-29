import React from 'react';
import { Link } from 'react-router-dom';
import MongoSidebar from '../MongoSidebar';

const MongoCRUD = () => {
  return (
    <>
      <MongoSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-3xl font-bold text-green-400">📚 MongoDB: CRUD Operations</h1>
        
        <p className="text-lg text-white">
          MongoDB mein data ko create, read, update, aur delete karna bahut hi simple hai. Yeh CRUD operations use kar ke hum apne documents ko manage kar sakte hain.
        </p>

        {/* Create Operation Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6">➕ 1. Create: Inserting Documents</h2>
        <p className="text-white">
          **Create** operation MongoDB mein documents ko insert karne ke liye use hota hai. Hum **insertOne()** ya **insertMany()** methods ka use kar sakte hain.
        </p>

        <ul className="list-disc list-inside space-y-2 text-white">
          <li>**insertOne()** ek document insert karta hai.</li>
          <li>**insertMany()** ek baar mein kai documents insert karne ke liye use hota hai.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Create Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.insertOne({` name: "John", age: 25, profession: "Developer" `})</code><br />
          <code>db.users.insertMany([{` name: "Alice", age: 22, profession: "Designer"` }, {` name: "Bob", age: 30, profession: "Manager" `}])</code>
        </div>

        {/* Read Operation Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">📖 2. Read: Finding Documents</h2>
        <p className="text-white">
          **Read** operation data ko query karne ke liye use hota hai. Hum **find()** method ka use karke documents ko search kar sakte hain.
        </p>

        <ul className="list-disc list-inside space-y-2 text-white">
          <li>**find()** method documents ko filter karne ke liye query accept karta hai.</li>
          <li>Hum **findOne()** method ka use kar ke ek single document fetch kar sakte hain.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Read Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.find({` profession: "Developer" `})</code><br />
          <code>db.users.findOne({` name: "John" `})</code>
        </div>

        {/* Update Operation Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">✏️ 3. Update: Modifying Documents</h2>
        <p className="text-white">
          **Update** operation ke liye hum **updateOne()** ya **updateMany()** methods ka use karte hain. Yeh methods existing documents ko update karte hain.
        </p>

        <ul className="list-disc list-inside space-y-2 text-white">
          <li>**updateOne()** ek document ko update karta hai.</li>
          <li>**updateMany()** ek saath kai documents ko update karta hai.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Update Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.updateOne({` name: "John" `}, {` $set: { age: 26 } `})</code><br />
          <code>db.users.updateMany({ `profession: "Developer" `}, {` $set: { status: "Active" }` })</code>
        </div>

        {/* Delete Operation Explanation */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-8">❌ 4. Delete: Removing Documents</h2>
        <p className="text-white">
          **Delete** operation ke liye hum **deleteOne()** ya **deleteMany()** methods ka use karte hain. Yeh methods documents ko delete karne ke liye use hoti hain.
        </p>

        <ul className="list-disc list-inside space-y-2 text-white">
          <li>**deleteOne()** ek document ko delete karta hai.</li>
          <li>**deleteMany()** ek saath kai documents ko delete karta hai.</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-4">🔧 Delete Example:</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-white">
          <p><span className="text-yellow-400">Example:</span></p>
          <code>db.users.deleteOne({ `name: "John" `})</code><br />
          <code>db.users.deleteMany({` profession: "Manager" `})</code>
        </div>

        {/* Summary */}
        <h2 className="text-xl font-bold text-green-400 mt-6">🚀 Summary:</h2>
        <p className="text-white">
          CRUD operations MongoDB mein data ko efficiently create, read, update, aur delete karne ke liye bahut zaroori hote hain. In methods ka use karke aap apne data ko easily manage kar sakte hain.
        </p>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/mongodb/find-filter"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongodb/indexing"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MongoCRUD;
