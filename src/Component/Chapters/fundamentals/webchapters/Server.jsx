 import React from 'react'
 import Websidenav from "../Websidenav";

 const Server = () => {
   return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          🌐 How Websites Work
        </h1>
        <p className="mt-4 text-base text-white">
          Jab aap browser me kisi website ka address (jaise
          <span className="text-red-400"> www.google.com </span>) type karte ho,
          toh pehle wo domain name DNS ke through ek
          <span className="text-cyan-400"> IP address </span> me convert hota hai.
          Uske baad aapka browser ek request bhejta hai server ko, aur server
          <span className="text-red-400"> website ka content </span> wapas bhejta
          hai. Yeh content browser me load hoke aapko dikhta hai. 🧠
        </p>

        <h2 className="text-2xl font-semibold text-red-300 mt-6">
          📝 Step-by-step Overview:
        </h2>

        <ul className="list-disc list-inside space-y-4 text-base ml-4 mt-2 text-white">
          <li>
            <span className="text-cyan-400 font-semibold">
              📘 DNS (Domain Name System):
            </span>
            Ye ek phonebook ki tarah hota hai. Domain name (
            <span className="text-red-400">google.com</span>) ko IP address me
            convert karta hai jaise <span className="text-cyan-400">142.250.192.174</span>, jisse
            browser ko pata chalta hai kis server se connect karna hai.
          </li>

          <li>
            <span className="text-cyan-400 font-semibold">
              🏠 Domain & Hosting:
            </span>
            <span className="text-red-400"> Domain </span> hota hai website ka
            naam (jaise amazon.in), aur
            <span className="text-red-400"> Hosting </span> hoti hai jagah jahan
            website ke files store hoti hain — jaise ek ghar aur uska address.
          </li>

          <li>
            <span className="text-cyan-400 font-semibold">🔒 HTTP / HTTPS:</span>
            Ye ek protocol hota hai jo batata hai browser aur server kaise baat
            karenge. <span className="text-red-400"> HTTPS </span> secure version hota hai
            jisme data encrypted hota hai.
          </li>

          <li>
            <span className="text-cyan-400 font-semibold">
              🔄 Browser Request & Server Response:
            </span>
            Browser ek <span className="text-red-400"> Request </span> bhejta hai
            server ko — "Please mujhe google.com ka homepage do". Server uska
            <span className="text-red-400"> Response </span> deta hai HTML, CSS,
            JS files ke saath — jo browser render karta hai.
          </li>
        </ul>

        <p className="mt-4 text-base text-white">
          ⚡ In sab steps se milkar hi ek website aapke browser me dikhti hai —
          super fast aur smooth!
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-6">
          🔍 Detailed Breakdown in Hinlish:
        </h2>

        <ul className="list-disc list-inside text-base text-white space-y-4 ml-4">
          <li>
            <span className="text-red-400 font-semibold">📍 Domain Name</span>: Ye website ka address hota hai, jaise 
            <span className="text-cyan-400"> www.example.com</span>. Ye human-friendly hota hai, yaani aap easily yaad rakh sako.
          </li>

          <li>
            <span className="text-red-400 font-semibold">📗 DNS (Domain Name System)</span>: Socho DNS internet ka phonebook hai. Jab aap domain name type karte ho, DNS usse 
            <span className="text-cyan-400"> IP address </span> me convert karta hai — jahan website actually host hoti hai.
          </li>

          <li>
            <span className="text-red-400 font-semibold">💻 IP Address</span>: Ye ek unique number hota hai jaise 
            <span className="text-cyan-400"> 192.168.1.1</span>, jo batata hai ki server kahan hai. Browser isi IP pe request bhejta hai.
          </li>

          <li>
            <span className="text-red-400 font-semibold">🌍 Web Browser</span>: Aapka browser (Chrome, Firefox, Safari) IP address par 
            <span className="text-cyan-400"> request </span> bhejta hai specific page ke liye.
          </li>

          <li>
            <span className="text-red-400 font-semibold">🖥️ Web Server</span>: Server request receive karta hai, page dhundta hai (agar exist karta hai) aur browser ko 
            <span className="text-cyan-400"> response </span> bhejta hai.
          </li>

          <li>
            <span className="text-red-400 font-semibold">📦 Content Delivery</span>: Browser ko HTML, CSS, JS, images etc. milte hain aur wo sab browser me render hoke 
            <span className="text-cyan-400"> aapko dikhai dete hain</span>.
          </li>
        </ul>
      </div>
    </>
   )
 }
 
 export default Server
 