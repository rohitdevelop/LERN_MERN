import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import Marquee from "react-fast-marquee";

const HomeHero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mail, setMail] = useState("");

  const navigate = useNavigate();

  const texts = ["Internet", "Frontend", "Backend"];

  // Typing Effect
  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 100);
    } else if (charIndex === currentText.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === -1) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  // Companies logos
  const CompaniesLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://companieslogo.com/img/orig/INFY.D-7896b1a8.png?t=1720244492",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Emblem.png",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mail.trim() === "") {
      alert("Please enter your email.");
    } else {
      alert(`Thanks for logging in, ${mail}`);
      navigate("/chapters");
    }
  };

  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-tl from-purple-800 via-black to-purple-900 flex justify-center items-center text-center px-4 py-8">
      <div className="w-full max-w-3xl text-white flex flex-col items-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
          Welcome to
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 drop-shadow-md flex items-center gap-2">
          <SiCodeigniter /> LERN_MERN
        </h2>

        <h2 className="text-xl md:text-2xl font-semibold drop-shadow-md">
          Shikho Man Se
          <span className="text-purple-500 ml-2">{displayText}</span>
          <span className="text-purple-500 animate-pulse">|</span>
        </h2>

        <p className="text-sm md:text-base text-gray-300 px-4">
          Start your web development journey in simple language with real-world
          examples. Learn Internet, HTML, CSS, JavaScript, React, Node.js, and
          more — all in one place. Build real projects and grow from zero to
          hero with us.
        </p>

        {/* Carousel */}
        <div className="w-full max-w-lg  relative overflow-hidden shadow-lg rounded-xl">
          <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {CompaniesLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                className="h-10 mx-6"
              />
            ))}
          </Marquee>
        </div>

        {/* Email & Button */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg"
        >
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Enter your email..."
            className="w-full px-4 py-3 rounded-xl bg-transparent text-white placeholder-gray-400 outline-none ring-2 ring-purple-500"
          />

        <button
  type="submit"
  className="w-48 px-4 py-3 cursor-pointer bg-purple-600 text-white rounded-full text-base flex items-center justify-center gap-2 shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 hover:shadow-purple-500/50 duration-300"
>
  Let’s Start <FaArrowRight />
</button>

        </form>
      </div>
    </div>
  );
};

export default HomeHero;
