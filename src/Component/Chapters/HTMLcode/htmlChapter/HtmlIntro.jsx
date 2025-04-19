import React from "react";
import { Link } from "react-router-dom";
import Htmlsidenav from "../Htmlsidenav";

const HtmlIntro = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6"> 

        {/* Headings and Content */}
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">📌 HTML Introduction</h1>
        <p>
          Aaj hum HTML ke baare mein seekhenge — HTML ka full form hai <span className="text-cyan-400">HyperText Markup Language</span>.
          Ye web pages banane ke liye use hota hai. HTML ek structure deta hai har website ko.
        </p>

        <h2 className="text-white text-2xl font-semibold">📅 Learning Plan</h2>
        <p>
          - High School students: ~25 din<br />
          - Graduates: ~20 din<br />
          - College Students: ~10-20 din<br />
          Har kisi ke liye suitable plan hai based on unka level.
        </p>

        <h2 className="text-cyan-400 text-2xl font-semibold">👨‍💻 What is HTML?</h2>
        <p>
          HTML ko Tim Berners-Lee ne 1991 mein banaya tha. Ye ek markup language hai jo webpages ka structure define karta hai — jaise headings, paragraphs, links, images, etc.
        </p>

        <h2 className="text-red-400 text-2xl font-semibold">⚙️ Features of HTML</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Platform independent hota hai</li>
          <li>Images, videos, audio easily add kiya ja sakta hai</li>
          <li>Yeh markup language hai, programming language nahi</li>
          <li>CSS & JS ke saath integrate karke dynamic websites banate hain</li>
        </ul>

        <h2 className="text-white text-2xl font-semibold">🔗 Why the term HyperText Markup Language?</h2>
        <p>
          <span className="text-cyan-300">HyperText</span> matlab linking between documents<br />
          <span className="text-red-400">Markup</span> matlab content ko tag ke through decorate karna.<br />
          Example: <span className="bg-gray-800 text-white px-2 py-1 rounded">&lt;h1&gt;Heading&lt;/h1&gt;</span>
        </p>

        <h2 className="text-cyan-300 text-2xl font-semibold">🧠 Exercise</h2>
        <p>
          Kisi bhi website pe jao → right-click → "View Page Source" → HTML code dikhega. Yeh woh code hai jo server se aapke browser ko aata hai.
        </p>

        <h2 className="text-red-500 text-2xl font-semibold">🚗 HTML, CSS & JS Analogy</h2>
<p>
  Ek car socho:<br />
  <span className="text-white">HTML = Structure (Car ka skeleton)</span><br />
  <span className="text-cyan-400">CSS = Design (Car ka color, look & feel)</span><br />
  <span className="text-red-400">JavaScript = Functionality (Car ka engine & controls)</span>
</p>

{/* Analogy Image */}
<div className="w-full flex justify-center my-4">

  <img 
 src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-home/html-car-example.png"    alt="HTML CSS JS Analogy" 
    className="w-full md:w-2/3 rounded-lg shadow-lg"
  />
</div>


        <h2 className="text-white text-2xl font-semibold">📜 History of HTML</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>1989 – Tim Berners-Lee ne WWW banaya</li>
          <li>1991 – HTML ka first version</li>
          <li>1999 – HTML 4.0 standard bana</li>
          <li>Abhi – HTML5 latest stable version hai</li>
        </ul>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/what-is-html"}>
            <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/working"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlIntro;
