import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { FaArrowRight } from "react-icons/fa";

const lern = ["Internet", "Frontend", "Backend"];

const Hometext = () => {
  const [lernIndex, setLernIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mail, setmail] = useState(""); // ✅ Use empty string initially
  const navigate = useNavigate(); // ✅ Hook to navigate

  function checkmail() {
    if (mail.trim() === "") {
      alert("First enter your mail");
    } else {
      alert(`Thanks for login ${mail}`);
      navigate("/chapters"); // ✅ Navigate to chapters only if mail is valid
    }
  }

  useEffect(() => {
    const currentStack = lern[lernIndex];
    let timeout;

    if (!isDeleting && charIndex < currentStack.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentStack.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setLernIndex((prev) => (prev + 1) % lern.length);
        }
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lernIndex]);

  return (
    <div className="w-full p-5 md:pr-[35rem] md:py-20 text-white flex justify-center md:justify-start items-center">
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-md">
          Welcome to
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600 drop-shadow-md">
          LERN_MERN
        </h2>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">
          Man Se Shikho
          <span className="text-purple-500 ml-2">{currentText}</span>
          <span className="text-purple-500 animate-pulse">|</span>
        </h2>

        <p className="mt-6 text-md md:text-lg leading-relaxed text-gray-100">
          HTML, CSS, JS, React, Node – sab kuch ek jagah. Easy language mein,
          real examples ke saath.
        </p>
        <p className="mt-2 text-sm text-gray-300">
          Zero se hero bano coding mein 💻 — apna journey aaj se shuru karo!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
          <input
            type="email"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
            placeholder="Apna email daalo yaha..."
            className="mt-6 w-full max-w-md px-4 py-3 rounded-xl bg-transparent text-white placeholder-gray-400 outline-none ring-2 ring-purple-500"
          />

          <button
            onClick={checkmail}
            className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-full text-lg flex items-center gap-2 shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 hover:shadow-purple-500/50 duration-300"
          >
            Let's Start <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hometext;
