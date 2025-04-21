import React from 'react';
import { Link } from "react-router-dom";
import CssSidenav from '../CssSidenav';

const CssIntro = () => {
  return (
    <>
      <CssSidenav />
      <main className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-4xl font-bold text-cyan-500 mb-4">💡 What is CSS?</h1>
        <p className="mb-4">
          CSS ka full form hai <strong className="text-cyan-400">Cascading Style Sheets</strong>. Ye ek stylesheet language hai jo HTML page ke visual presentation ko define karta hai.
          HTML structure banata hai aur CSS us structure ko style deta hai. Agar aapne HTML abhi tak nahi seekha, toh pehle <em>HTML tutorial</em> complete kar lo.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🚀 Setting up the Environment</h2>
        <p className="mb-2">Visual Studio Code (VS Code) ko install karo:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Google mein "Visual Studio Code download" search karo.</li>
          <li>Download karne ke baad, apne operating system ke liye instructions follow karo.</li>
        </ul>

        <div className="w-full max-w-xl mx-auto my-4">
          <video autoPlay loop muted controls className="w-full rounded">
            <source src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-prerequisite/download-vscode.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🔧 Installing Live Server</h2>
        <p className="mb-4">
          Live Server extension install karo taki page automatically reload ho jaaye jab aap changes karenge.
        </p>
        <div className="w-full max-w-xl mx-auto my-4">
          <video autoPlay loop muted controls className="w-full rounded">
            <source src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-your-first-website/2023-09-07 22-52-08.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">📄 Creating an HTML Page</h2>
        <p className="mb-4">
          Agar aapko HTML achhe se samajh nahi aata, toh pehle HTML tutorial complete karo. Agar aap HTML ke basic concepts jaante ho, toh aap VS Code mein <code>index.html</code> file create kar sakte ho.
        </p>
        <pre className="bg-white text-black p-4 rounded mb-4 shadow-md overflow-x-auto">
          <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First CSS Website</title>
</head>
<body>
    I'm learning CSS with my favorite CodeWithRohit.
</body>
</html>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🎨 Adding CSS to HTML</h2>
        <p className="mb-4">
          Ab CSS add karenge jisse hum apne page ko style kar sakein. Apne HTML file ke <code>&lt;head&gt;</code> tag mein ye code add karo:
        </p>
        <pre className="bg-white text-black p-4 rounded mb-4 shadow-md overflow-x-auto">
          <code>
{`<style>
  body {
    text-align: center;
    color: white;
    background-color: red;
  }
</style>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">🌟 You’re Ready to Go!</h2>
        <p className="mb-4">
          Ab aapne apni pehli CSS website bana li hai! Is journey ke dauran, aap aur bhi CSS properties seekhenge aur apne website ko aur behtar banaenge.
        </p>

        <h2 className="text-xl font-semibold text-red-500 mt-6 mb-2">🔗 Next Steps</h2>
        <p className="mb-4">
          Aap CSS ki deeper concepts ko explore kar sakte ho jaise ki layout techniques, animations, transitions, aur responsive design.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/what-is-css"}>
            <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/works"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default CssIntro;
