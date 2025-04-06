import React from 'react';
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";

const Protocols = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-0">

        <h1  className="text-4xl font-bold text-cyan-400 mb-4">📡 Protocols Kya Hote Hain?</h1>

        <p className="text-white">
          Protocols ek set of rules hote hain jo batate hain ki devices kaise aapas mein data share karein. Ye rules ensure karte hain ki data sahi format mein aur sahi jagah pe pahunche.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🌐 HTTP / HTTPS – Web Browsing</h2>
          <p>
            Jab aap browser mein koi website open karte ho, toh HTTP ya HTTPS use hota hai. <br />
            <span className="text-cyan-300">HTTP – HyperText Transfer Protocol</span> <br />
            <span className="text-cyan-300">HTTPS – Secure version of HTTP (data encrypted hota hai)</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">📁 FTP – File Transfer</h2>
          <p>
            FTP ka use hota hai remote server se files upload/download karne ke liye.
            <br />
            <span className="text-cyan-300">Full Form: File Transfer Protocol</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">📦 TCP/IP – Data Delivery</h2>
          <p>
            TCP/IP ensure karta hai ki data packets sahi order mein aur reliably ek jagah se doosri jagah pahunch jayein.
            <br />
            <span className="text-cyan-300">TCP – Reliable delivery</span> <br />
            <span className="text-cyan-300">IP – Addressing aur routing</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">📨 SMTP – Sending Email</h2>
          <p>
            Jab aap email bhejte ho, SMTP protocol use hota hai.
            <br />
            <span className="text-cyan-300">Full Form: Simple Mail Transfer Protocol</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">🌐 DNS – Domain Resolution</h2>
          <p>
            Jab aap www.google.com type karte ho, DNS use hota hai us domain ko IP address mein convert karne ke liye.
            <br />
            <span className="text-cyan-300">Full Form: Domain Name System</span>
          </p>
        </section>

        {/* Extra Useful Protocols */}
        <section>
          <h2 className="text-xl font-semibold text-red-400">🔐 SSL/TLS – Secure Communication</h2>
          <p>
            SSL/TLS protocols secure connection banate hain, jisse data encrypted rehta hai (mostly HTTPS ke andar hota hai).
            <br />
            <span className="text-cyan-300">TLS – Modern secure protocol</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">📡 DHCP – IP Address Assign Karna</h2>
          <p>
            Jab aap internet se connect hote ho, DHCP device ko automatic IP address assign karta hai.
            <br />
            <span className="text-cyan-300">Full Form: Dynamic Host Configuration Protocol</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400">📥 IMAP/POP3 – Email Receive Karna</h2>
          <p>
            Jab aap email receive karte ho (like Gmail app me), IMAP ya POP3 protocols use hote hain.
            <br />
            <span className="text-cyan-300">IMAP – Sync emails across devices</span> <br />
            <span className="text-cyan-300">POP3 – Download email to one device</span>
          </p>
        </section>

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

export default Protocols;
