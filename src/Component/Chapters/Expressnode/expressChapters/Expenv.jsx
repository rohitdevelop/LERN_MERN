import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expenv = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        
        {/* Title and introduction */}
        <h1 className="text-4xl font-bold text-cyan-400 flex items-center space-x-2">
          <span>🌍</span>
          <span>Environment Variables in Express</span>
        </h1>
        <p className="text-lg text-white">
          Environment variables are essential for storing configuration settings and secrets in a secure and scalable way. In Express, we can use a `.env` file 
          to define these variables and access them in our application.
        </p>

        {/* What is .env? */}
        <h2 className="text-2xl font-semibold text-white mt-6">🔑 What is .env?</h2>
        <p className="text-lg text-white">
          The `.env` file is a configuration file where you can store sensitive data such as API keys, database connection strings, and other settings that you don't 
          want to hardcode in your application.
        </p>

        {/* Setting up .env */}
        <h3 className="text-xl text-white mt-4">🛠️ Setting up .env in Express</h3>
        <p className="text-lg text-white">
          To use environment variables in Express, we need to install the <strong>dotenv</strong> package and create a `.env` file in the root of your project.
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// Install dotenv package
npm install dotenv
`}
        </pre>
        <p className="text-lg text-white mt-2">
          In your `.env` file, you can define your variables:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// .env
PORT=5000
DB_URI=mongodb://localhost:27017/mydatabase
SECRET_KEY=mysecretkey
`}
        </pre>
        <p className="text-lg text-white mt-2">
          To load these variables in your Express app, require and configure dotenv at the top of your `app.js` or `server.js`:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// app.js or server.js
require('dotenv').config();

const express = require('express');
const app = express();

console.log(process.env.PORT); // Logs the PORT value from .env
`}
        </pre>

        {/* Deployment of Backend and Frontend */}
        <h2 className="text-2xl font-semibold text-white mt-6">🚀 Deployment of Backend & Frontend</h2>
        <p className="text-lg text-white">
          Deploying your Express backend and React frontend involves multiple steps. Here's a step-by-step guide on how to deploy them together under one URL.
        </p>

        {/* Backend Deployment */}
        <h3 className="text-xl text-white mt-4">🔧 Step 1: Deploying the Backend</h3>
        <p className="text-lg text-white">
          For the backend, we will use <strong>Heroku</strong> as an example. You can use other platforms like Render, DigitalOcean, or AWS if needed.
        </p>
        <ol className="list-decimal ml-6 space-y-2 text-white">
          <li>First, create a <strong>Heroku</strong> account and install the <strong>Heroku CLI</strong>.</li>
          <li>Login using the command: <code className="bg-gray-800 text-yellow-300 px-1 py-0.5 rounded-md">heroku login</code></li>
          <li>Navigate to your project directory and initialize a git repository if you haven’t already:</li>
          <pre className="bg-gray-800 p-4 rounded-lg text-white">
            {`git init
heroku create my-express-app
`}
          </pre>
          <li>Push your code to Heroku:</li>
          <pre className="bg-gray-800 p-4 rounded-lg text-white">
            {`git add .
git commit -m "Initial commit"
git push heroku master
`}
          </pre>
          <li>Your app will be deployed to a URL like <strong>https://my-express-app.herokuapp.com</strong>. Make sure to configure environment variables using the Heroku dashboard or CLI.</li>
        </ol>

        {/* Frontend Deployment */}
        <h3 className="text-xl text-white mt-4">🎨 Step 2: Deploying the Frontend</h3>
        <p className="text-lg text-white">
          For the React frontend, we'll deploy to <strong>Vercel</strong> or <strong>Netlify</strong>. Both platforms make it easy to deploy React apps.
        </p>
        <ol className="list-decimal ml-6 space-y-2 text-white">
          <li>First, create an account on <strong>Vercel</strong> or <strong>Netlify</strong> and connect your GitHub repository.</li>
          <li>In your React app directory, run:</li>
          <pre className="bg-gray-800 p-4 rounded-lg text-white">
            {`npm run build
`}
          </pre>
          <li>Upload the `build/` directory to your chosen platform and follow the instructions for connecting your GitHub repository.</li>
          <li>After deployment, your React app will be live at a URL like <strong>https://my-react-app.vercel.app</strong>.</li>
        </ol>

        {/* Linking Backend and Frontend */}
        <h3 className="text-xl text-white mt-4">🔗 Step 3: Linking Backend and Frontend</h3>
        <p className="text-lg text-white">
          To link the frontend and backend, make sure your React app is making API calls to the correct backend URL. In production, you can use the backend's URL or a proxy.
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg text-white">
          {`// In your React app (frontend)
const response = await fetch('https://my-express-app.herokuapp.com/api/some-endpoint');
`}
        </pre>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/error-handling"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/video"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expenv;
