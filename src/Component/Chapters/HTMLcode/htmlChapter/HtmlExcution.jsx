import React from 'react';
import { Link } from "react-router-dom";
import Htmlsidenav from "../Htmlsidenav";

const HtmlExcution = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-500">🚀 HTML Execution</h1>
        <p className="text-lg text-white">
          Tumhari journey shuru hoti hai yahan se — <strong>apni pehli website</strong> banane ki! 👨‍💻👩‍💻 <br />
          Aur tradition ke mutabiq, hum start karenge ek <span className="text-yellow-300 font-semibold">"Hello, World!"</span> message ke saath.
        </p>

        {/* Why Hello World */}
        <h2 className="text-2xl font-semibold text-cyan-400">🤔 Why "Hello, World!"?</h2>
        <p className="text-white">
          Programming duniya mein jab koi nayi language sikhta hai, toh sabse pehle woh ek simple program likhta hai — "Hello, World!" 👋 <br />
          Yeh ek tradition hai, aur isse syntax aur basic structure samajh mein aata hai. Same goes for HTML bhi!
        </p>

        {/* VS Code Setup */}
        <h2 className="text-2xl font-semibold text-cyan-400">🛠️ VS Code Setup</h2>
        <p className="text-white">
          Sabse pehle <strong>Visual Studio Code</strong> open karo. Fir ek naya folder banao, jaise ki <code className="text-yellow-300">html-tutorial</code> naam se. Us folder ko VS Code mein open karo.
        </p>
        <img
          src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-document-structure/vs-code-open.png"
           alt="VS Code Open Folder"
          className="md:w-2xl md:h-auto rounded-lg shadow-lg my-4"
        />
        {/* Create File */}
        <h2 className="text-2xl font-semibold text-cyan-400">📄 New File Banao</h2>
        <p className="text-white">
          VS Code ke sidebar mein jaake <strong>"New File"</strong> button dabao aur naam likho: <code className="text-yellow-300">index.html</code> 📝
        </p>

        {/* Paste HTML Code */}
        <h2 className="text-2xl font-semibold text-cyan-400">🔤 HTML Code Paste Karo</h2>
        <p className="text-white">Ab neeche diya gaya HTML code copy karke apne file mein paste karo:</p>
        <pre className="bg-gray-800 rounded-md text-sm overflow-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello World
</body>
</html>`}
        </pre>

        {/* Go Live */}
        <h2 className="text-2xl font-semibold text-cyan-400">🌐 Go Live karo</h2>
        <p className="text-white">
          Ab bottom-right corner mein <strong>"Go Live"</strong> button dikh raha hoga (agar <code>Live Server</code> extension install hai toh). <br />
          Us par click karo aur tumhara <strong>Hello, World!</strong> browser mein dikhne lagega! 🌍✨
        </p>
        <img
          src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-document-structure/vs-code-go-live.png" 
           alt="Live Server Go Live"
          className="md:w-2xl md:h-auto rounded-lg shadow-lg my-4"
        />
        {/* Live Preview Extension */}
        <h2 className="text-2xl font-semibold text-cyan-400">🧪 Live Preview Extension</h2>
        <p className="text-white">
          Ek aur helpful extension hai — <code>HTML Preview</code>. Yeh tumhare HTML page ka preview directly VS Code ke andar hi dikhata hai, bina browser open kiye! 🧙‍♂️
        </p>
        <img
          src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-document-structure/hello-world-html.png"
           alt="HTML Preview Extension"
          className="md:w-2xl md:h-auto rounded-lg shadow-lg my-4"
        />
        <p className="text-white">
          Ab tum easily dekh sakte ho ki tumhara HTML ka page kaise dikhega, real-time! ⚡🧡
        </p>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/working"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
               PREVIOUS
            </button>
          </Link>

          <Link to={"/html/structure"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT 
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlExcution;
