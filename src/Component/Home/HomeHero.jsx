import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import HoverEffect from "../ui/HoverEffect";

const HomeHero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mail, setMail] = useState("");

  const navigate = useNavigate();

  const texts = ["Internet", "Frontend", "Backend"];

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

  const CompaniesLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://companieslogo.com/img/orig/INFY.D-7896b1a8.png?t=1720244492",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Emblem.png",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const cards = [
    {
      id: 1,
      text: "Web Development",
      img: "https://placehold.co/300x200?text=Web+Dev",
    },
    {
      id: 2,
      text: "Data Science",
      img: "https://placehold.co/300x200?text=Data+Science",
    },
    {
      id: 3,
      text: "AI/ML Engineer",
      img: "https://placehold.co/300x200?text=AI+ML+Engineer",
    },
    {
      id: 4,
      text: "UI/UX Designer",
      img: "https://placehold.co/300x200?text=UI+UX+Designer",
    },
    {
      id: 5,
      text: "Software Engineer",
      img: "https://placehold.co/300x200?text=Software+Engineer",
    },
    {
      id: 6,
      text: "Data Structures & Algorithms",
      img: "https://placehold.co/300x200?text=DSA",
    },
    {
      id: 7,
      text: "Full Stack Developer",
      img: "https://placehold.co/300x200?text=Full+Stack",
    },
    {
      id: 8,
      text: "Cloud Computing",
      img: "https://placehold.co/300x200?text=Cloud+Computing",
    },
  ];

  const infoCards = [
    {
      id: 1,
      title: "Real-World Projects",
      description:
        "Build practical, job-ready projects that prepare you for real industry work, not just theory.",
    },
    {
      id: 2,
      title: "Hands-On Learning",
      description:
        "Learn by doing. Every concept comes with coding exercises to build your confidence and skills.",
    },
    {
      id: 3,
      title: "Expert-Led Courses",
      description:
        "Courses and challenges crafted by industry professionals to ensure real-world relevance.",
    },
    {
      id: 4,
      title: "Beginner to Advanced",
      description:
        "Whether you're a complete beginner or brushing up advanced topics, LERN_MERN has you covered.",
    },
    {
      id: 5,
      title: "Career-Focused Path",
      description:
        "Structured roadmap to help you crack interviews and become a full-stack MERN developer.",
    },
    {
      id: 6,
      title: "Community Support",
      description:
        "Get help, share projects, and grow with like-minded learners in our active developer community.",
    },
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
    <>
      <div className="w-full min-h-screen bg-gradient-to-tl from-purple-800 via-black to-purple-900 flex justify-center items-center px-4 py-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 text-white">
          {/* Text Section */}
          <div className="flex flex-col items-c text-left space-y-6 w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold  drop-shadow-md">
              Welcome to
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 drop-shadow-md flex items-center gap-2">
              <SiCodeigniter /> LERN_MERN
            </h2>

            <h2 className="text-xl md:text-2xl font-extrabold drop-shadow-md">
              Shikho Man Se
              <span className="text-purple-500 ml-2">{displayText}</span>
              <span className="text-purple-500 animate-pulse">|</span>
            </h2>

            <p className="text-sm md:text-base text-gray-300 font-mono">
              Start your web development journey in simple language with
              real-world examples. Learn Internet, HTML, CSS, JavaScript, React,
              Node.js, and more — all in one place. Build real projects and grow
              from zero to hero with us.
            </p>

            {/* Email & Button */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full max-w-lg"
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

            {/* Carousel */}
            <div className="w-full max-w-lg relative overflow-hidden shadow-lg rounded-xl">
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
          </div>

          {/* GIF Section */}
          <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] flex justify-center items-center">
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWc4ZnRtMmNodjhjNzVzc25xNzg3eTk5d2JjY2x1N2RwdWR6enY5aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L1R1tvI9svkIWwpVYr/200.gif"
              alt="Learning Gif"
              className="w-full h-auto max-w-2xl rounded-2xl 
               shadow-[0_10px_30px_rgba(168,85,247,0.7)] 
               hover:shadow-[0_15px_50px_rgba(168,85,247,0.9)] 
               transition-all duration-300 ease-in-out 
               "
            />
          </div>
        </div>
      </div>
      {/* ............................. */}
      <div className="w-full min-h-screen bg-gradient-to-tr from-purple-800 via-black to-purple-900 flex flex-col justify-center items-center px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-white text-center drop-shadow-lg">
          Code Smarter with Real-World Practice
        </h1>

        <p className=" text-gray-300 font-bold font-mono mb-12 text-center max-w-4xl px-4 leading-relaxed">
          At{" "}
          <span className="font-bold text-purple-300 inline-flex items-center justify-center gap-2">
            <SiCodeigniter /> LERN_MERN
          </span>
          , learning goes beyond theory — you build real-world projects that
          sharpen your skills. Whether you're just starting or aiming to master
          advanced concepts, we help you become job-ready with hands-on,
          project-based learning.
        </p>

        <div className="w-full px-4 md:px-6 lg:px-8">
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="px-2">
                <div className="h-[22rem] sm:h-[24rem] md:h-[26rem] lg:h-[28rem] w-64 sm:w-72 md:w-80 bg-white rounded-3xl shadow-2xl flex flex-col hover:scale-105 transition-transform duration-300">
                  <img
                    src={card.img}
                    className="w-full h-1/2 object-cover rounded-t-3xl"
                    alt={card.text}
                  />
                  <div className="flex items-center justify-center h-1/2 p-4">
                    <p className="text-center text-lg sm:text-xl md:text-2xl font-bold text-purple-700">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <HoverEffect items={infoCards} />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
