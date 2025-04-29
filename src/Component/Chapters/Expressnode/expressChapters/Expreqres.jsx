import React from 'react'
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expreqres = () => {
  return (
    <>
      <ExprSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">

        <h1 className="text-3xl font-bold text-green-400">Request & Response in Express</h1>

        <h2 className="text-xl font-semibold text-red-400">🔸 Kya Hota Hai <code>req</code> aur <code>res</code>?</h2>
        <p>
          Jab user browser se request bhejta hai, toh Express ke paas do main cheezein hoti hain: 
          <code> req (request) </code> aur <code> res (response)</code>. 
          Inhi ke through data aata hai aur response jata hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400">🔹 Request Object (<code>req</code>)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><code>req.url</code> – Requested URL</li>
          <li><code>req.method</code> – GET, POST, etc.</li>
          <li><code>req.params</code> – Route parameters (e.g. /user/:id)</li>
          <li><code>req.query</code> – Query string (e.g. ?name=rohit)</li>
          <li><code>req.body</code> – Data from form / JSON (needs middleware like express.json())</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🔹 Response Object (<code>res</code>)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><code>res.send()</code> – Send response (text, HTML, JSON)</li>
          <li><code>res.json()</code> – Send JSON response</li>
          <li><code>res.status()</code> – Set HTTP status code</li>
          <li><code>res.redirect()</code> – Redirect to another URL</li>
        </ul>

        <h2 className="text-xl font-semibold text-red-400">🔹 Code Example</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          <pre>{`
app.get("/user/:id", (req, res) => {
  console.log(req.params); // URL params
  console.log(req.query);  // Query string
  res.send(\`Hello user with ID: \${req.params.id}\`);
});

app.post("/login", (req, res) => {
  console.log(req.body); // Data from form or JSON
  res.status(200).json({ message: "Login successful" });
});
          `}</pre>
        </div>

        <h2 className="text-xl font-semibold text-red-400">🔹 Hinglish Samjhaav</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><span className="text-green-300">req</span> = user kya bhej raha hai</li>
          <li><span className="text-green-300">res</span> = hum user ko kya bhej rahe hain</li>
          <li>Data query se aayega toh <code>req.query</code></li>
          <li>URL params se aayega toh <code>req.params</code></li>
          <li>Form ya JSON se aayega toh <code>req.body</code></li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/middleware"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/express/proxy"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Expreqres;
