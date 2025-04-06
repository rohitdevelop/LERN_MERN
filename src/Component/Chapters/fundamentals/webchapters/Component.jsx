import React from "react";
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";
import {
  FaMousePointer,
  FaCogs,
  FaPaintBrush,
  FaNetworkWired,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";

const Components = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-72 md:pb-0">
        <h1 className="text-3xl font-bold text-center text-cyan-400">
          🧩 Browser Ke Main Components
        </h1>

        <section className="space-y-4 mt-6">
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-400">
              <FaMousePointer /> 1. User Interface (UI)
            </h2>
            <p>
              Ye wo part hota hai jise user directly dekh aur use kar sakta hai
              — jaise address bar, back button, refresh button, etc.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-400">
              <FaCogs /> 2. Browser Engine
            </h2>
            <p>
              Ye UI aur rendering engine ke beech ka connection manage karta
              hai. Commands ko pass karta hai rendering engine tak.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-400">
              <FaPaintBrush /> 3. Rendering Engine
            </h2>
            <p>
              Ye HTML aur CSS ko read karta hai aur website ko visually browser
              mein render karta hai.
              <br />
              Example: Chrome & Edge use karte hain{" "}
              <span className="text-cyan-300">Blink</span>, Safari use karta hai{" "}
              <span className="text-cyan-300">WebKit</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-400">
              <FaNetworkWired /> 4. Networking
            </h2>
            <p>
              Networking component HTTP/HTTPS requests ko handle karta hai —
              server se data mangta hai aur response leta hai.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-400">
              <FaJsSquare /> 5. JavaScript Engine
            </h2>
            <p>
              Ye component JavaScript code ko run karta hai.
              <br />
              Jaise: Chrome mein{" "}
              <span className="text-cyan-300">V8 Engine</span>, Firefox mein{" "}
              <span className="text-cyan-300">SpiderMonkey</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-400">
              <FaDatabase /> 6. Data Storage
            </h2>
            <p>
              Ye browser ka wo part hai jahan data temporarily ya permanently
              store hota hai.
              <br />
              Jaise:{" "}
              <span className="text-cyan-300">
                cookies, localStorage, sessionStorage, cache
              </span>{" "}
              etc.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-400">
              🧠 7. Rendering Process
            </h2>
            <p>
              Jab browser kisi website ko render karta hai, toh yeh step-by-step
              process follow hota hai:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="text-cyan-300">🔹 Parse HTML → DOM Tree:</span>{" "}
                HTML ko read karke ek DOM (Document Object Model) banaya jata
                hai.
              </li>
              <li>
                <span className="text-cyan-300">
                  🔹 Parse CSS → CSSOM Tree:
                </span>{" "}
                CSS ko parse karke ek CSSOM (CSS Object Model) banaya jata hai.
              </li>
              <li>
                <span className="text-cyan-300">
                  🔹 DOM + CSSOM → Render Tree:
                </span>{" "}
                In dono ko mila ke ek Render Tree banti hai jo visible elements
                ko define karti hai.
              </li>
              <li>
                <span className="text-cyan-300">🔹 Layout:</span> Har element ka
                exact position aur size calculate hota hai.
              </li>
              <li>
                <span className="text-cyan-300">🔹 Painting:</span> Colors,
                borders, shadows, text sab draw kiya jata hai screen par.
              </li>
              <li>
                <span className="text-cyan-300">🔹 Compositing:</span> Alag
                layers ko combine karke final visible page banaya jata hai.
              </li>
            </ul>
          </div>
        </section>

        <div className="w-full flex items-center justify-between mt-10 px-4">
          <Link to={"/introduction/browsers"}>
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
};

export default Components;
