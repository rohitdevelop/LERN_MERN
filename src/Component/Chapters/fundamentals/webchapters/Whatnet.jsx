import React from 'react';
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";

const Whatnet = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">🌐What is the Network?</h1>

        <section>
          <h2 className="text-xl font-semibold text-red-400">📌 Basic Definition:</h2>
          <p>
            Jab do ya do se zyada devices (jaise computers, mobiles, printers) aapas mein connect hote hain data ya resource share karne ke liye, use hum network kehte hain.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🧩 Types of Network:</h2>
          <ul className="list-disc pl-6">
            <li><span className="text-cyan-300">LAN (Local Area Network):</span> Chhoti jagah jaise school, office ke andar ka network.</li>
            <li><span className="text-cyan-300">WAN (Wide Area Network):</span> Door-door tak faila hua network, jaise internet.</li>
            <li><span className="text-cyan-300">MAN (Metropolitan Area Network):</span> Ek city ke andar ka network.</li>
          </ul>
        </section>

        <h2 className="text-2xl font-bold text-cyan-400 mt-8">💡how the Network works?</h2>

        <section>
          <h3 className="text-lg font-semibold text-red-400">1. 🔗 Connection Establishment:</h3>
          <p>
            Devices ek doosre se wire (Ethernet) ya wirelessly (Wi-Fi, Bluetooth) connect hote hain.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">2. 📡 Data Sharing:</h3>
          <p>
            Ek device doosri device ko file, printer, internet ya message send kar sakti hai network ke through.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">3. 🧭 IP Addressing:</h3>
          <p>
            Har device ko ek IP address assign hota hai, jo uski identity hoti hai network ke andar.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">4. 🚦 Data Routing:</h3>
          <p>
            Routers aur switches data packets ko sahi device tak pahunchate hain based on IP address.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">5. ⚙️ Protocols:</h3>
          <p>
            Devices kuch predefined rules follow karte hain jaise TCP/IP, taaki data sahi se bheja aur receive ho.
          </p>
        </section>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/INTERNET-NETWORK/internet"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/INTERNET-NETWORK/layers"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Whatnet;
