import React from 'react'
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expproxy = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-green-400">Proxy Server in Express</h1>

        <h2 className="text-xl font-semibold text-red-400">🔸 Kya Hota Hai Proxy Server?</h2>
        <p>
          Proxy server humare requests ko ek server se doosre server tak forward karta hai. Yeh especially cross-origin requests ya external APIs ke liye useful hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Use Cases</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>API Gateway (Microservices architecture)</li>
          <li>External API calls ko securely forward karna</li>
          <li>CORS problems ko handle karna</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🔹 Code Example</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
app.use('/api', createProxyMiddleware({ target: 'https://externalapi.com', changeOrigin: true }));
          `}</pre>
        </div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/req-res"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/integration"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expproxy;
