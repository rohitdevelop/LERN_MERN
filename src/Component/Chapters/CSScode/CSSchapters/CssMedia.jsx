import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const CssMedia = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">CSS Media Queries</h1>

        <p>
          Media Queries ka use hum responsive design banane ke liye karte hain. Inka kaam hota hai ki different screen sizes (mobile, tablet, desktop) ke according styling apply karna.
        </p>

        <h2 className="text-xl mt-4 text-white">📦 Syntax:</h2>
        <pre className="bg-gray-800 p-4 rounded-xl mt-2"><code>{`@media (condition) {
  /* CSS rules */
}`}</code></pre>

        <p className="text-sm mt-2 text-gray-300">Example: <code>@media (max-width: 600px) ..... </code></p>

        <h2 className="text-xl mt-6 text-white">📏 Common Breakpoints:</h2>
        <ul className="list-disc list-inside ml-4">
          <li><code>max-width: 600px</code> → Mobile</li>
          <li><code>min-width: 601px and max-width: 900px</code> → Tablet</li>
          <li><code>min-width: 901px</code> → Desktop</li>
        </ul>

        <h2 className="text-xl mt-6 text-white">🎯 Example:</h2>
        <pre className="bg-gray-800 p-4 rounded-xl text-sm mt-2"><code>{`
.box {
  width: 400px;
  background-color: green;
}

@media (max-width: 600px) {
  .box {
    width: 100%;
    background-color: red;
  }
}
        `}</code></pre>

        <p className="text-sm text-gray-300 mt-2">Jab screen chhoti ho (max 600px), box ki width 100% ho jaayegi aur color red ho jaayega.</p>

        <h2 className="text-xl mt-6 text-white">💡 Use Cases:</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Mobile friendly websites</li>
          <li>Hide/show elements based on screen</li>
          <li>Change font-size/layout on small screens</li>
          <li>Make grids or flex layouts responsive</li>
        </ul>

        <h2 className="text-xl mt-6 text-white">🔁 Combine Media Queries:</h2>
        <p>Multiple queries ko combine bhi kar sakte ho:</p>
        <pre className="bg-gray-800 p-4 rounded-xl mt-2 text-sm"><code>{`
@media (min-width: 600px) and (max-width: 900px) {
  /* Tablet styling */
}
        `}</code></pre>

        <div className="w-full flex items-center justify-between mt-10 px-4">
          <Link to={"/css/animations"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/responsive"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CssMedia
