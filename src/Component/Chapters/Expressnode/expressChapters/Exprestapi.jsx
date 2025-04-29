import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Exprestapi = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        
        {/* Heading with Emojis and Cyan color */}
        <h1 className="text-4xl font-bold text-cyan-400 flex items-center space-x-2">
          <span>🌐</span>
          <span>REST API in Express</span>
        </h1>

        {/* Description about REST APIs */}
        <p className="text-lg text-red-200">
          REST APIs (Representational State Transfer) are used to enable communication between clients and servers. 
          They follow standard HTTP methods, which makes them simple and scalable. 
          Express makes it easy to define RESTful routes using its built-in methods like `app.get()`, `app.post()`, etc.
        </p>

        <h2 className="text-2xl font-semibold text-red-300">
          🔹 Key Concepts of REST APIs:
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-red-200">
          <li>GET - Fetching data from the server (e.g., get user data)</li>
          <li>POST - Sending data to the server (e.g., create new user)</li>
          <li>PUT - Updating existing data on the server (e.g., update user info)</li>
          <li>DELETE - Removing data from the server (e.g., delete user)</li>
        </ul>

        {/* REST API in Action */}
        <h2 className="text-2xl font-semibold text-white mt-6">
          ✨ Example: Simple REST API using Express
        </h2>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// Example of a basic Express server with REST API routes

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.send('List of users');
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).send('User created');
});

app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User \${userId} updated\`);
});

app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User \${userId} deleted\`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        </pre>

        {/* REST API Best Practices */}
        <h2 className="text-2xl font-semibold text-white mt-6">
          🔑 Best Practices for REST APIs
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-white">
          <li>Use meaningful and consistent URL paths (e.g., `/api/users`, `/api/products`).</li>
          <li>Use HTTP status codes correctly (e.g., 200 for success, 404 for not found, 500 for server error).</li>
          <li>Always include clear, concise responses with appropriate status codes.</li>
          <li>Implement pagination for large datasets to avoid overloading clients with too much data.</li>
          <li>Use `GET` requests for fetching data and `POST`, `PUT`, or `DELETE` for data modifications.</li>
        </ul>

        {/* Error Handling Example */}
        <h2 className="text-2xl font-semibold text-red-300 mt-6">
          🚨 Error Handling in Express
        </h2>
        <p className="text-lg text-white">
          Handling errors in REST APIs is important to provide feedback to clients. In Express, you can handle errors 
          with custom error-handling middleware.
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// Example of Error Handling in Express

app.use((req, res, next) => {
  const error = new Error('Page Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === 'development' ? error : {}
  });
});`}
        </pre>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/integration"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/error-handling"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Exprestapi;
