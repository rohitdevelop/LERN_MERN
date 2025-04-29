import React from 'react'
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expintegration = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-green-400">Integration in Express</h1>

        <h2 className="text-xl font-semibold text-red-400">🔸 Kya Hota Hai Integration?</h2>
        <p>
          Express ko hum external services jaise database, authentication providers, aur APIs ke saath integrate karte hain.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Use Cases</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Database Integration (MongoDB, MySQL)</li>
          <li>Authentication Integration (JWT, OAuth)</li>
          <li>External APIs (Payment Gateways, etc.)</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🔹 Code Example for MongoDB</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
          `}</pre>
        </div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/proxy"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/rest-api"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expintegration;
