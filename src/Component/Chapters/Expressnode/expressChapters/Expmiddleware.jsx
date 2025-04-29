import React from 'react';
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expmiddleware = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-green-400">Express Middleware</h1>

        <h2 className="text-xl font-semibold text-red-400">🔹 Middleware Kya Hota Hai?</h2>
        <p>
          Middleware ek function hota hai jo request aur response ke beech mein kaam karta hai.
          Ye request ko process karta hai ya response bhejne se pehle kuch kaam karta hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Syntax:</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
app.use((req, res, next) => {
  console.log("This is a middleware");
  next(); // next() lagana zaruri hai warna request stuck ho jayegi
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Types of Middleware</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><span className="text-yellow-300">Application-level middleware</span> - app.use se lagta hai</li>
          <li><span className="text-yellow-300">Router-level middleware</span> - sirf specific router pe lagta hai</li>
          <li><span className="text-yellow-300">Built-in middleware</span> - express.json(), express.static()</li>
          <li><span className="text-yellow-300">Error-handling middleware</span> - error handle karne ke liye</li>
          <li><span className="text-yellow-300">Third-party middleware</span> - like morgan, body-parser, cors</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🔹 Real-World Example</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
// logger middleware
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Error Handling Middleware</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Hinglish Summary</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><span className="text-green-300">Middleware</span> ek middle-man hai request aur response ke beech</li>
          <li>Iska kaam hota hai modify karna, validate karna, log karna ya block karna</li>
          <li>Agar <code>next()</code> nahi lagaya toh aapka request wahin ruk jaayega</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/router"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/req-res"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expmiddleware;
