import React from 'react';
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";

const Whatinter = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left">
        
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">🌐 What is the Internet?</h1>

        <section>
          <h2 className="text-xl font-semibold text-red-400">📌 Ek Network of Networks:</h2>
          <p>
            Internet ko hum "network of networks" kehte hain kyunki ye duniya bhar ke chhote-bade networks ko jodta hai.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🌍 Global Reach:</h2>
          <p>
            Ye computers, servers aur devices ko globally connect karta hai, jisse long distance communication possible hoti hai.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🔗 Standardized Protocols:</h2>
          <p>
            Internet TCP/IP jaise standard protocols ka use karta hai, jo define karte hain data kaise send, receive aur format hota hai.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🎯 Diverse Applications:</h2>
          <p>
            Internet ke zariye hum web browsing, email, file sharing, social media, gaming aur bahut kuch kar sakte hain.
          </p>
        </section>

        <h2 className="text-2xl font-bold text-cyan-400 mt-8">💡How the Internet works?</h2>

        <section>
          <h3 className="text-lg font-semibold text-red-400">1. 📦 Data Transmission:</h3>
          <p>
            Jab aap data (jaise website request) bhejte ho, toh woh chhoti packets mein tod diya jata hai.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">2. 🧭 Addressing:</h3>
          <p>
            Har packet ko ek unique IP address milta hai, jisse uska source aur destination pata chalta hai.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">3. 🚦 Routing:</h3>
          <p>
            Routers aur switches in packets ko IP address ke basis pe aage forward karte hain.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">4. 🔄 TCP/IP Protocol:</h3>
          <p>
            TCP/IP ensure karta hai ki saare packets sahi order mein, bina kisi loss ke destination tak pahunchein.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">5. 🔗 Interconnection:</h3>
          <p>
            Internet ek decentralized system hai — koi ek authority ise control nahi karti. Har network common rules follow karta hai.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-red-400">6. 🎯 Delivery:</h3>
          <p>
            Packets alag-alag networks se hote hue destination tak pahuchte hain, jahan ye original data mein dobara jod diye jaate hain.
          </p>
        </section>

        <div className="w-full flex items-center justify-between mt-8 px-4">
        <Link to={"/introduction/client-vs-server"}>
          <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
            PREVIOUS
          </button>
          </Link>
          <Link to={"/INTERNET-NETWORK/network"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Whatinter;
