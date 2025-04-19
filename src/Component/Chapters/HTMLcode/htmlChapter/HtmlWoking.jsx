import React from "react";
import Htmlsidenav from "../Htmlsidenav";
import { Link } from "react-router-dom";

const HtmlWoking = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          ⚙️ HTML Working
        </h1>

        {/* Frontend & Backend */}
        <p>
          Aapne kabhi na kabhi{" "}
          <span className="text-cyan-300 font-semibold">Frontend</span> aur{" "}
          <span className="text-red-400 font-semibold">Backend</span> ka naam
          zarur suna hoga.
          <span className="text-cyan-300">Frontend</span> vo part hota hai jo
          user ko dikhai deta hai — jaise buttons, images, tables. Yeh{" "}
          <span className="text-white font-semibold">
            HTML, CSS, aur JavaScript
          </span>{" "}
          se banaya jaata hai.
          <span className="text-red-400">Backend</span> vo part hota hai jo
          behind-the-scenes data handle karta hai — jaise data store karna,
          process karna. Iske liye languages jaise{" "}
          <span className="text-white font-semibold">Python, Ruby, Java</span>{" "}
          use hoti hain.
        </p>

        {/* How websites work */}
        <h2 className="text-white text-2xl font-semibold">
          🌐 How Do Websites Work?
        </h2>
        <p>
          Jab hum internet par kuch search karte hain, hum ek{" "}
          <span className="text-cyan-300">web browser</span> ka use karte hain.
          Yeh browser ek <span className="text-red-400">web server</span> se
          HTML documents le aata hai jahan yeh stored hote hain.
        </p>
        <p>
          Hum HTML code kisi bhi text editor mein likhte hain, usse{" "}
          <code className="bg-gray-800 px-2 py-1 rounded">.html</code> extension
          ke saath save karte hain. Browser is HTML file ko{" "}
          <span className="text-cyan-300">read</span> karta hai aur web page ko
          render karta hai.
        </p>

        {/* New Image */}
        <div className="w-full flex justify-center my-4">
          <img
            src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/how-html-works/how%20html%20homeworks.png"
            alt="Website working illustration"
            className="w-full md:w-2/3 rounded-lg shadow-lg"
          />
        </div>

        {/* Web Browser */}
        <h2 className="text-white text-2xl font-semibold">
          🧭 What is a Web Browser?
        </h2>
        <p>
          Web browser ek program hai jo{" "}
          <span className="text-cyan-300">HTML tags ko samajhta</span> hai aur
          unhe human-readable format mein show karta hai.
        </p>
        <p>
          Developer HTML mein likhte hain kyunki yeh browser ko instructions
          deta hai ki kya display karna hai. Aage hum seekhenge kaise{" "}
          <span className="text-red-400">VS Code</span> install karke apna khud
          ka HTML code likhna hai.
        </p>

        {/* HTML Document */}
        <h2 className="text-white text-2xl font-semibold">
          📄 What is an HTML Document?
        </h2>
        <p>
          Ek HTML document ek simple text file hoti hai jo{" "}
          <code className="bg-gray-800 px-2 py-1 rounded">.html</code> ya{" "}
          <code className="bg-gray-800 px-2 py-1 rounded">.htm</code> extension
          se save ki jaati hai.
        </p>
        <p>
          Isme text ke sath HTML tags hote hain jo{" "}
          <code className="text-cyan-300">&lt; &gt;</code> ke beech likhe jaate
          hain. In tags se browser ko instructions milti hain ki kya aur kaise
          dikhana hai.
        </p>

        {/* Rendered Page */}
        <h2 className="text-white text-2xl font-semibold">
          🖥️ What is a Rendered Page?
        </h2>
        <p>
          Rendered page vo output hoti hai jo browser screen par display karta
          hai jab wo HTML document ko render karta hai.
        </p>

        {/* Website Process */}
        <h2 className="text-white text-2xl font-semibold">
          🚀 How Does a Basic Website Work?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-cyan-300">Web Browser (client)</span> website
            request karta hai jaise www.codewithharry.com
          </li>
          <li>
            <span className="text-red-400">Web Server</span> HTML, CSS,
            JavaScript files ko bhejta hai
          </li>
          <li>
            <span className="text-white">Browser</span> un files ko parse karta
            hai aur ek beautiful website render karta hai
          </li>
        </ul>

        {/* Browser working */}
        <h2 className="text-white text-2xl font-semibold">
          🛠️ How Does a Browser Work?
        </h2>
        <p>
          Browser ek HTML document ko read karta hai aur usse{" "}
          <span className="text-cyan-300">parse</span> karke{" "}
          <span className="text-red-400">render</span> karta hai.
        </p>
        <p>Browser ka main kaam hota hai:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-cyan-300">Parsing:</span> HTML ko tokens mein
            convert karta hai, fir nodes banake DOM tree banata hai
          </li>
          <li>
            <span className="text-red-400">Rendering:</span> DOM tree ke nodes
            ko screen par display karta hai
          </li>
        </ul>
        <p>
          Abhi ke liye browser ke deep kaam ko chhodo, sirf HTML sikhne par
          focus rakho 💪
        </p>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/what-is-html"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/Excution"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlWoking;
