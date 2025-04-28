import React from 'react';
import NodeSidebar from '../NodeSidebar';
import { Link } from 'react-router-dom';

const RestApi = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            🌐 REST APIs in Node.js
          </h1>

          {/* What is a REST API? */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📌 REST API kya hai?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            REST (Representational State Transfer) ek architectural style hai, jo APIs ko define karta hai.
            REST API ek web service hoti hai jo HTTP methods (GET, POST, PUT, DELETE) ke through data ko client aur server ke beech transfer karti hai.
            Node.js me REST APIs banane ke liye hum Express.js ka use karte hain.
          </p>

          {/* How to build a simple REST API in Node.js */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🚀 Node.js me REST API kaise banayein?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Node.js me REST API banane ke liye sabse pehle hume Express module ko install karna padta hai. Fir hum routes define karte hain jisme GET, POST, PUT, DELETE methods use karte hain.
          </p>

          {/* Example of a simple REST API */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            Example: Simple REST API
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Hum ek basic REST API banayenge jisme GET aur POST requests handle ki jayengi. Is API me hum ek simple user data manage karenge.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// Step 1: Install express
// npm install express

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample data (users)
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

// GET request to fetch all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST request to add a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Get user data from request body
  users.push(newUser);
  res.status(201).json(newUser);
});

// Server listening on port
app.listen(port, () => {
  console.log(\`Server running on http://localhost:\${port}\`);
});
`}
            </pre>
          </div>

          <p className="text-base leading-relaxed mb-4">
            Is example me:
            <br />
            - Hum GET request ke through saare users fetch kar rahe hain (`/api/users` route)  
            - Hum POST request ke through ek naya user add kar rahe hain (`/api/users` route).
          </p>

          {/* Key HTTP Methods in REST API */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            HTTP Methods ka use REST API me
          </h2>
          <p className="text-base leading-relaxed mb-4">
            REST APIs me 4 main HTTP methods use hote hain:
            <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
              <li>✅ <span className="font-semibold">GET</span>: Data fetch karne ke liye.</li>
              <li>✅ <span className="font-semibold">POST</span>: New data create karne ke liye.</li>
              <li>✅ <span className="font-semibold">PUT</span>: Existing data ko update karne ke liye.</li>
              <li>✅ <span className="font-semibold">DELETE</span>: Data delete karne ke liye.</li>
            </ul>
          </p>

          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// PUT request to update a user
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => user.id == id ? updatedUser : user);
  res.json(updatedUser);
});

// DELETE request to remove a user
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id != id);
  res.status(204).send(); // No content response
});
`}
            </pre>
          </div>

          <p className="text-base leading-relaxed mb-4">
            Humne yaha `PUT` aur `DELETE` requests bhi implement ki hain:
            <br />
            - `PUT` request ke through hum user ko update kar rahe hain.
            <br />
            - `DELETE` request ke through hum user ko delete kar rahe hain.
          </p>

          {/* Best Practices for REST APIs */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🎯 Best Practices for REST APIs
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>✅ Hamesha proper HTTP status codes ka use karein (200, 201, 404, 500, etc.).</li>
            <li>✅ URLs ko meaningful aur intuitive rakhein.</li>
            <li>✅ REST API me authentication aur authorization ko implement karein.</li>
            <li>✅ Data ko validate karne ke liye validation libraries (jaise joi) ka use karein.</li>
            <li>✅ Proper error handling karein, taaki users ko clear message mile jab kuch galat ho.</li>
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/node/error"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/node/async"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RestApi;
