import React from 'react';
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";

const InternetLayers = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">📶 TCP/IP Model ke 4 Layers</h1>

        <p className="text-white">
          TCP/IP model internet ka backbone hai. Ye model 4 main layers mein data transmission ko manage karta hai. Har layer ka apna ek specific role hota hai.
        </p>

        {/* 1. Application Layer */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">1️⃣ Application Layer</h2>
          <p>
            Ye layer user ke sabse close hoti hai. Is layer pe websites, emails, chatting apps aur sabhi applications run karte hain.
          </p>
          <p className="text-cyan-300">Example: Web browsers (Chrome), Email apps (Gmail), WhatsApp etc.</p>
        </section>

        {/* 2. Transport Layer */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">2️⃣ Transport Layer</h2>
          <p>
            Ye layer data delivery ka dhyan rakhti hai. Yahan TCP (Transmission Control Protocol) aur UDP (User Datagram Protocol) ka use hota hai.
          </p>
          <p className="text-cyan-300">
            TCP – Reliable aur ordered data delivery <br />
            UDP – Fast, lekin thoda unreliable
          </p>
        </section>

        {/* 3. Internet Layer */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">3️⃣ Internet Layer</h2>
          <p>
            Ye layer IP address assign karti hai aur data packets ko sahi raste se destination tak pahunchane ka kaam karti hai.
          </p>
          <p className="text-cyan-300">Example: IP addressing, Routing, Packets forward karna</p>
        </section>

        {/* 4. Network Access Layer */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">4️⃣ Network Access Layer</h2>
          <p>
            Ye layer physical connection handle karti hai jaise wires, cables, Wi-Fi, aur NIC cards. Yahan data actual network se travel karta hai.
          </p>
          <p className="text-cyan-300">Example: Ethernet, Wi-Fi signals, hardware devices</p>
        </section>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/INTERNET-NETWORK/network"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/INTERNET-NETWORK/protocols"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InternetLayers;
 
