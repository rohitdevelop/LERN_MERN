import React from 'react'
import Websidenav from '../Websidenav'
import { Link } from 'react-router-dom'
import { FaChrome, FaFirefoxBrowser, FaSafari, FaEdge, FaOpera, FaLinux } from 'react-icons/fa'

const BrowserInfo = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-72 md:pb-0">

        <h1 className="text-3xl font-bold text-center text-cyan-400">🌐 Browsers & How They Work</h1>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🔹 a) Web Browser Kya Hota Hai?</h2>
          <p>
            Web browser ek software hota hai jiska use hum websites access karne ke liye karte hain.
            Jab aap kisi website ka URL type karte ho (jaise <span className="text-cyan-300">www.google.com</span>), browser us website ke server se data lekar aapko dikhata hai.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🧠 Browser Kaam Kaise Karta Hai?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="text-cyan-300">URL Resolve:</span> User URL enter karta hai (e.g. google.com)</li>
            <li><span className="text-cyan-300">DNS Lookup:</span> Domain ko IP address mein convert kiya jata hai</li>
            <li><span className="text-cyan-300">HTTP Request:</span> Browser server ko request bhejta hai</li>
            <li><span className="text-cyan-300">Server Response:</span> Server HTML, CSS, JS bhejta hai</li>
            <li><span className="text-cyan-300">Rendering Engine:</span> Browser content ko parse karke webpage display karta hai</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🌍 Popular Web Browsers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white text-lg mt-4">
            <div className="flex items-center gap-2">
              <FaChrome className="text-blue-400 text-2xl" /> Google Chrome
            </div>
            <div className="flex items-center gap-2">
              <FaFirefoxBrowser className="text-orange-500 text-2xl" /> Mozilla Firefox
            </div>
            <div className="flex items-center gap-2">
              <FaSafari className="text-sky-300 text-2xl" /> Safari (Apple Devices)
            </div>
            <div className="flex items-center gap-2">
              <FaEdge className="text-blue-500 text-2xl" /> Microsoft Edge
            </div>
            <div className="flex items-center gap-2">
              <FaOpera className="text-red-500 text-2xl" /> Opera Browser
            </div>
            <div className="flex items-center gap-2">
              <FaLinux className="text-yellow-400 text-2xl" /> Linux-based Browsers
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">💡 Additional Features in Browsers</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Private/Incognito Mode</li>
            <li>Bookmarking</li>
            <li>Extensions / Add-ons</li>
            <li>Developer Tools (Inspect element, Console)</li>
            <li>Cross-platform syncing (Google, Firefox accounts)</li>
          </ul>
        </section>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/introduction/protocols"}>
            <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/introduction/how-websites-work"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BrowserInfo;
