import React from 'react';
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";

const GitInfo = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto pb-72 md:pb-6 text-left space-y-6">
        
        {/* 🔴 Git Section */}
        <h1 className="text-3xl font-bold text-center text-red-400">💾 Git (Local Version Control System)</h1>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🔹 Version Control System (VCS):</h2>
          <p>
            Git ek <span className="text-cyan-400 font-semibold">Version Control System</span> hai — iska matlab hai ki yeh aapke code ke har change ko track karta hai.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🔁 Track Changes:</h2>
          <p>
            Jab aap code mein kuch changes karte ho, Git un changes ka record rakhta hai. Aap dekh sakte ho ki kis file mein kya badla, kab badla, aur kisne badla.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🕒 Revert to Older Versions:</h2>
          <p>
            Agar kuch galat ho jaye, toh Git ki madad se aap easily <span className="text-cyan-400 font-semibold">purane versions</span> mein wapas ja sakte ho.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">👨‍💻 Team Collaboration:</h2>
          <p>
            Git team ke saath kaam karne mein bhi madad karta hai. Har developer apna kaam alag branch mein kar sakta hai bina dusre ke code ko todhe.
          </p>
        </section>

        {/* 🔵 GitHub Section */}
        <h1 className="text-3xl font-bold text-center text-red-400 mt-10">🌐 GitHub (Remote Hosting Platform)</h1>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🌍 Kya Hai GitHub?</h2>
          <p>
            <span className="text-cyan-400 font-semibold">GitHub</span> ek online platform hai jahan hum apne Git repositories ko store karte hain. Ye remote hosting provide karta hai jisse multiple log ek project par remotely kaam kar sakein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🧠 Git & GitHub Kaise Kaam Karte Hain?</h2>
          <p className="text-cyan-400">
            🔸 <span className="font-bold">Git:</span> Local machine pe kaam karta hai. Jab aap commit karte ho, toh aapka code aapke system ke andar save hota hai. Har step track hota hai.
          </p>
          <p className="text-cyan-400">
            🔸 <span className="font-bold">GitHub:</span> Ek remote platform hai jahan aap apne local Git repository ko push karte ho, taaki dusre log bhi access kar sakein.
          </p>
          <p className="text-cyan-400">
            🔁 Dono milkar version control aur team collaboration bahut easy bana dete hain — aap code ko track kar sakte ho, changes review kar sakte ho, aur duniya ke kisi bhi kone se project par kaam kar sakte ho.
          </p>
        </section>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/INTERNET-NETWORK/layers"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
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

export default GitInfo;
