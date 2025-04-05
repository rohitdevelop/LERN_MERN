import React from "react";
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";

const Internet = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          Client vs Server 🖥️🔁🌐
        </h1>

        <p className="mt-4 text-base">
          Web development me{" "}
          <span className="text-red-400 font-semibold">
            Client-Server Model
          </span>{" "}
          ka matlab hota hai: Client (jaise browser) server se kuch resources
          (web pages, images, etc.) ke liye request bhejta hai, aur server uska
          response deta hai. 📡📨
        </p>

        {/* Client-Side Section */}
        <h2 className="text-2xl font-semibold text-red-300 mt-6">
          Client-Side 🧑‍💻
        </h2>

        <p className="text-base mt-2">
          <span className="text-cyan-400 font-semibold">Definition:</span>{" "}
          Client-side wo part hota hai jo user ke device (laptop, mobile,
          tablet) par chalta hai. 📱💻
        </p>

        <p className="text-base mt-2">
          <span className="text-cyan-400 font-semibold">Role:</span> User ko
          content dikhana, uski interaction handle karna (button click, form
          fill), aur kuch data process karna (JavaScript se) client-side ka kaam
          hota hai. 🎨🧠
        </p>

        <p className="text-base mt-2">
          <span className="text-cyan-400 font-semibold">Examples:</span>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
          <li>Web browsers - Chrome, Firefox, Safari 🌐</li>
          <li>Languages - HTML, CSS, JavaScript 🧾🎨📜</li>
          <li>Front-end Frameworks - React, Vue, Angular ⚛️🌿🅰️</li>
        </ul>

        {/* Server-Side Section */}
        <h2 className="text-2xl font-semibold text-red-300 mt-6">
          Server-Side 🗄️
        </h2>

        <p className="text-base mt-2">
          <span className="text-cyan-400 font-semibold">Definition:</span>{" "}
          Server-side wo part hota hai jo remote server (ek alag computer) pe
          chalta hai. ☁️🧠
        </p>

        <p className="text-base mt-2">
          <span className="text-cyan-400 font-semibold">Role:</span> Data ko
          store aur manage karna, logic run karna (jaise login check 🔐), aur
          resources dena client ko — yeh sab server ka kaam hota hai.
        </p>

        <p className="text-base mt-2">
          <span className="text-cyan-400 font-semibold">Examples:</span>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
          <li>Web Servers - Apache, Nginx 🌐🧰</li>
          <li>Languages - Node.js, PHP, Python 🟩🐘🐍</li>
          <li>Databases - MySQL, MongoDB, PostgreSQL 💾📊</li>
        </ul>

        {/* How they interact */}
        <h2 className="text-2xl font-semibold text-cyan-400 mt-6">
          Client-Server Kaise Interact Karte Hai? 🔄📲
        </h2>

        <ol className="list-decimal list-inside ml-4 space-y-2 mt-2 text-white">
          <li>
            <span className="text-red-400 font-semibold">Client Request:</span>{" "}
            Browser server ko request bhejta hai — "Mujhe homepage chahiye." 📤
          </li>
          <li>
            <span className="text-red-400 font-semibold">Server Response:</span>{" "}
            Server HTML, CSS, JS ya data bhejta hai wapas. 📥
          </li>
          <li>
            <span className="text-red-400 font-semibold">
              Client Rendering:
            </span>{" "}
            Browser us data ko screen pe render karta hai. 🖼️
          </li>
          <li>
            <span className="text-red-400 font-semibold">
              Ongoing Communication:
            </span>{" "}
            Jab tak user interact karta hai, client aur server ke beech
            baar-baar request/response hoti rehti hai. 🔁
          </li>
        </ol>

        <div className="bg-gray-800 p-6 rounded-xl mt-4 w-full md:w-[90%] mx-auto text-center space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-10">
            <div className="bg-cyan-600 text-white px-4 py-2 rounded-lg w-full md:w-1/3">
              <p className="font-bold">Client (Browser) 🌍</p>
              <p className="text-sm mt-1">User side — sends request 📤</p>
            </div>

            <div className="text-white text-xl font-bold">⇄</div>

            <div className="bg-red-500 text-white px-4 py-2 rounded-lg w-full md:w-1/3">
              <p className="font-bold">Server (Backend, DB) 🖥️</p>
              <p className="text-sm mt-1">Server side — sends response 📥</p>
            </div>
          </div>

          <p className="text-sm text-gray-300 mt-4">
            Client request karta hai:{" "}
            <span className="text-cyan-300">"Page chahiye" 📄</span> <br />
            Server response deta hai:{" "}
            <span className="text-red-300">"Yeh lo HTML, CSS, JS" 💡</span>
          </p>
        </div>

        <p className="mt-4 text-base text-white">
          Aise hi client aur server ke beech baar-baar communication hoti rehti
          hai — jo internet ko dynamic aur interactive banata hai. 🔥🌐
        </p>
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/introduction/how-websites-work"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>
          <Link to={"/INTERNET-NETWORK/internet"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Internet;
