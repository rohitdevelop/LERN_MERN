import React from "react";
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";
import { Code } from "lucide-react";

const GitDetails = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1  className="text-4xl font-bold text-cyan-400 mb-4">
          📁 Git Details & Usage
        </h1>

        {/* Git Commands */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">
            🔧 Common Git Commands (Terminal Style):
          </h2>

          <pre className="bg-black font-mono p-4 rounded-lg shadow-md text-sm md:text-base overflow-x-auto">
  <code>
    <div><span className="text-green-400">$ git init</span> <span className="text-white">– New repo banane ke liye</span></div>
    <div><span className="text-green-400">$ git clone [URL]</span> <span className="text-white">– Kisi existing repo ko copy karne ke liye</span></div>
    <div><span className="text-green-400">$ git add .</span> <span className="text-white">– Saare changes stage karne ke liye</span></div>
    <div><span className="text-green-400">$ git commit -m "message"</span> <span className="text-white">– Changes save karne ke liye</span></div>
    <div><span className="text-green-400">$ git push</span> <span className="text-white">– Code GitHub pe bhejne ke liye</span></div>
    <div><span className="text-green-400">$ git pull</span> <span className="text-white">– Latest changes lane ke liye</span></div>
    <div><span className="text-green-400">$ git status</span> <span className="text-white">– Current status dekhne ke liye</span></div>
    <div><span className="text-green-400">$ git log</span> <span className="text-white">– Commit history dekhne ke liye</span></div>
  </code>
</pre>

        </section>

        {/* Pros & Cons */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">
            ✅ Pros & ❌ Cons of Git:
          </h2>
          <div className="space-y-2">
            <p>
              <span className="text-white font-semibold">✅ Pros:</span>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Offline work possible</li>
              <li>Secure and fast</li>
              <li>Branching & merging is easy</li>
              <li>Open-source and free</li>
            </ul>
            <p>
              <span className="text-white font-semibold">❌ Cons:</span>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Thoda complex for beginners</li>
              <li>Commands yaad rakhna padta hai</li>
              <li>
                Large projects mein conflict handling thoda tough ho sakta hai
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits of Learning Git */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">
            🎓 Why You Should Learn Git?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Team projects mein kaam karna easy ho jata hai</li>
            <li>Har change ka record milta hai – better tracking</li>
            <li>Industry standard tool hai for developers</li>
            <li>Resume aur job interviews mein plus point</li>
            <li>Open-source contribution ke liye must-have skill</li>
          </ul>
        </section>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/git/info"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>
          <Link to={"/video/lern-mern"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GitDetails;
