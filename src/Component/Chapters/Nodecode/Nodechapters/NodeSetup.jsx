import React from 'react'
import NodeSidebar from '../NodeSidebar'
import { Link } from 'react-router-dom';

const NodeSetup = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <div className="pl-4 pr-2">

          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-cyan-400">
            🛠️ Node.js Setup and Basic Structure
          </h1>

          {/* Download and Install Node.js */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🔥 How to Download and Install Node.js
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>
              🌐 Pehle Node.js ki official website pe jao: 
              <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="text-cyan-400 underline"> https://nodejs.org </a>
            </li>
            <li>⬇️ Latest LTS (Long Term Support) version download karo.</li>
            <li>🖥️ Installer open karo aur simple Next - Next karte jao (default settings theek rehti hain).</li>
            <li>✅ Install hone ke baad terminal/cmd open karke check karo: <span className="bg-gray-700 px-2 py-1 rounded">node -v</span> aur <span className="bg-gray-700 px-2 py-1 rounded">npm -v</span></li>
          </ul>

          {/* Node Basic Setup */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🎯 How to Setup a Node.js Project
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>🛖 Sabse pehle ek naya folder banao project ke liye.</li>
            <li>💻 Terminal open karo uss folder ke andar aur run karo:
              <span className="bg-gray-700 px-2 py-1 rounded ml-2">npm init -y</span>
            </li>
            <li>📝 Ye command ek <strong>package.json</strong> file create kar degi (project details ke saath).</li>
            <li>📄 Fir ek naya file banao jaise <strong>index.js</strong> ya <strong>app.js</strong>.</li>
            <li>🚀 Ab tum Node.js ka server ya scripts likhna start kar sakte ho.</li>
          </ul>

          {/* Basic Folder Structure */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            📂 Basic Node.js Project Structure
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Jab project thoda bada hota hai, to ye basic structure follow karna chahiye:
          </p>
         
            <pre className="text-white text-sm leading-relaxed">
{`
my-node-project/
├── node_modules/       (automatic, jab npm install karte ho)
├── public/             (static files - images, css)
├── src/                (source files)
│   ├── controllers/    (logic handle karne wale files)
│   ├── routes/         (URLs define karne wale files)
│   ├── models/         (database models, if needed)
│   ├── app.js          (main server file)
├── package.json        (project info & dependencies)
├── .gitignore          (optional - files to ignore in git)
`}
            </pre>
         

          <p className="text-lg">
            👉 Ye structure project ko clean, organized aur scalable banata hai. Bade projects ke liye must hai. 🔥
          </p>

          {/* Buttons */}
          <div className="w-full flex items-center justify-between mt-8 px-4">
            <Link to={"/node/node-exp"}>
              <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
                PREVIOUS
              </button>
            </Link>

            <Link to={"/node/ejs"}>
              <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
                NEXT
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default NodeSetup;
