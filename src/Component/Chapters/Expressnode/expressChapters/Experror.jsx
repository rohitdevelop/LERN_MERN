import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Experror = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        
        {/* Title and introduction */}
        <h1 className="text-4xl font-bold text-cyan-400 flex items-center space-x-2">
          <span>🚨</span>
          <span>Error Handling in Express</span>
        </h1>
        <p className="text-lg text-red-200">
          Error handling is an essential part of any web application. In Express, you can set up custom error-handling middleware to manage errors 
          and respond to clients with appropriate status codes and messages.
        </p>

        {/* Basic Error Handling */}
        <h2 className="text-2xl font-semibold text-white mt-6">
          🔧 Basic Error Handling
        </h2>
        <p className="text-lg text-white">
          In Express, errors are passed through the middleware using the <code className="bg-gray-800 text-yellow-300 px-1 py-0.5 rounded-md">next(error)</code> method. 
          You can create custom error-handling middleware that will catch errors and send a response back to the client.
        </p>

        <h3 className="text-xl text-white mt-4">
          Example: Handling 404 Errors
        </h3>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// Handling 404 Errors in Express

const express = require('express');
const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 404 Error handling middleware
app.use((req, res, next) => {
  const error = new Error('Page Not Found');
  error.status = 404;
  next(error);
});
`}
        </pre>

        {/* Custom Error-Handling Middleware */}
        <h2 className="text-2xl font-semibold text-white mt-6">
          ⚙️ Custom Error-Handling Middleware
        </h2>
        <p className="text-lg text-white">
          You can define a custom error handler at the end of all routes. It takes four parameters: <code className="bg-gray-800 text-yellow-300 px-1 py-0.5 rounded-md">error, req, res, next</code>. 
          Here's an example of how to set it up:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// Custom Error Handling Middleware

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === 'development' ? error : {}  // Show error details only in development
  });
});
`}
        </pre>

        {/* Common HTTP Status Codes */}
        <h2 className="text-2xl font-semibold text-white mt-6">
          📜 Common HTTP Status Codes for Errors
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-white">
          <li><strong>400</strong> - Bad Request: The server cannot process the request due to invalid syntax.</li>
          <li><strong>401</strong> - Unauthorized: The client must authenticate itself to get the requested response.</li>
          <li><strong>403</strong> - Forbidden: The client does not have access to the requested resource.</li>
          <li><strong>404</strong> - Not Found: The server cannot find the requested resource.</li>
          <li><strong>500</strong> - Internal Server Error: The server encountered an unexpected condition.</li>
        </ul>

        {/* Debugging Errors */}
        <h2 className="text-2xl font-semibold text-white mt-6">
          🛠️ Debugging Errors
        </h2>
        <p className="text-lg text-white">
          To debug errors effectively, it's important to log error details during development. You can use <code className="bg-gray-800 text-yellow-300 px-1 py-0.5 rounded-md">console.log</code> 
          or third-party tools like <strong>Winston</strong> for logging errors in production environments.
        </p>

        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// Example of logging errors using console.log

app.use((error, req, res, next) => {
  console.log('Error occurred:', error);
  res.status(error.status || 500).send('Something went wrong');
});
`}
        </pre>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/rest-api"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/env"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Experror;
