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
    dots: false, // Hide dots
    arrows: false, // Hide arrows
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards on large screens
    slidesToScroll: 1,
    swipeToSlide: true, // Enable finger swipe
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
        },
      },
      {
        breakpoint: 768, // Phones
        settings: {
          slidesToShow: 1, // Show 1 card on phones
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      text: "Web Development",
      img: "https://img.freepik.com/premium-photo/it-developer-holding-coffee-cup-with-looking-online-software-pc-gusher_31965-603280.jpg?semt=ais_hybrid&amp;w=740",
      description:
        "Build and design websites using front-end and back-end technologies.",
    },
    {
      id: 2,
      text: "Data Science",
      img: "https://cdn.intuji.com/2022/08/Software-development-digital-transformation_comp-scaled-1.jpeg",
      description:
        "Analyze data to extract insights and support decision-making using statistical methods.",
    },
    {
      id: 3,
      text: "AI/ML Engineer",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*1CgnizZ_-2zAeewuKUaqtg.png",
      description:
        "Design intelligent systems that can learn and make decisions from data automatically.",
    },
    {
      id: 4,
      text: "UI/UX Designer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqCl0taILXswAgVbH952_ORxQcwQxKtXcFyn4XKYoHFUNzRV6jk5_mTU&amp;s=10",
      description:
        "Create user-friendly and visually appealing interfaces for websites and apps.",
    },
    {
      id: 5,
      text: "Software Engineer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VI2-cdGRDDMTVnLZ-wNo2iOYrLCEQVIu8LB6wu6MlHECm7tKBYgD3zmH&amp;s=10",
      description:
        "Develop and maintain software applications to solve real-world problems.",
    },
    {
      id: 6,
      text: "Data Structures & Algorithms",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XjASlUuGlT4cJcZkjAGzDMhIHXa_N7S27s5cAo_sCQfzZc-lrK7qRfo&amp;s=10",
      description:
        "Learn efficient ways to store, organize, and process data to solve complex problems.",
    },
    {
      id: 7,
      text: "Full Stack Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLa3PjCDwsdAlGvRFnc5qpSyRBFYh54nYTBde2RsF3qJ5fuHPUM05KIpw&amp;s=10",
      description:
        "Work on both front-end and back-end of web applications to build complete solutions.",
    },
    {
      id: 8,
      text: "Cloud Computing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xgC_cUrK5cQNSUHLfCKAxlTXPATmSgk2J3tzG5f5sT0iz5f52z6AeWX-&amp;s=10",
      description:
        "Use internet-based services to store, manage, and process data remotely.",
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
        "Courses and challenges are crafted by industry professionals to ensure real-world relevance.",
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
        "Structured roadmap to help you crack interviews and become a full-stack MERN developer in any company.",
    },
    {
      id: 6,
      title: "Community Support",
      description:
        "Get help and share projects, and grow with like-minded learners in our active or grow developer community.",
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
              <div className="w-full min-h-screen bg-gradient-to-t from-black via-black to-purple-600 md:bg-gradient-to-tl md:from-purple-800 md:via-black md:to-purple-900 flex justify-center items-center px-4 py-8">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 text-white text-center md:text-left">
            {/* Text Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
                Welcome to
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 drop-shadow-md flex items-center justify-center md:justify-start gap-2">
                <SiCodeigniter /> LERN_MERN
              </h2>

              <h2 className="text-xl md:text-2xl font-extrabold drop-shadow-md">
                Shikho Man Se
                <span className="text-purple-500 ml-2">{displayText}</span>
                <span className="text-purple-500 animate-pulse">|</span>
              </h2>

              <p className="text-sm md:text-base text-gray-300 font-mono">
                Start your web development journey in simple language with
                real-world examples. Learn Internet, HTML, CSS, JavaScript,
                React, Node.js, and more — all in one place. Build real projects
                and grow from zero to hero with us.
              </p>

              {/* Email & Button */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full max-w-lg"
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
              <div className="w-full max-w-lg relative overflow-hidden shadow-lg rounded-xl mt-11 md:mt-3">
                <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-black md:bg-gradient-to-r md:from-gray-900 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-black md:bg-gradient-to-l md:from-gray-900 to-transparent z-10 pointer-events-none"></div>

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
            <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] md:flex justify-center items-center mt-8 md:mt-0b hidden">
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

        {/* ...............2.............. */}
        <div className="w-full min-h-screen bg-gradient-to-tr from-gray-800 via-black to-purple-500 md:bg-gradient-to-tr md:from-purple-800 md:via-black md:to-purple-900 flex flex-col justify-center items-center px-4 py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-white text-center drop-shadow-lg">
            Code Smarter with Real-World Practice
          </h1>

          <p className="text-gray-300 font-bold font-mono mb-12 text-center max-w-4xl px-4 leading-relaxed">
            At{" "}
            <span className="font-bold text-purple-300 inline-flex items-center justify-center gap-2">
              <SiCodeigniter /> LERN_MERN
            </span>
            , learning goes beyond theory — you build real-world projects that
            sharpen your skills. Whether you're just starting or aiming to
            master advanced concepts, we help you become job-ready with
            hands-on, project-based learning.
          </p>

          <div className="w-full h-auto flex-col justify-center items-center mx-56">
            <Slider {...settings}>
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="px-2 flex items-center justify-center"
                >
                  <div
                    className="w-90 sm:w-48 md:w-56 lg:w-64 xl:w-72  
          h-[24rem] sm:h-[20rem] md:h-[24rem] lg:h-[26rem] xl:h-[28rem] 
          bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700
          rounded-3xl shadow-2xl 
          flex flex-col hover:scale-105 
          transition-transform duration-300"
                  >
                    {/* Image Section */}
                    <div className="h-1/2 w-full">
                      <img
                        src={card.img}
                        className="w-full h-full object-cover rounded-t-3xl"
                        alt={card.text}
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col items-center justify-start h-1/2 p-4 text-center overflow-y-auto">
                      <p className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                        {card.text}
                      </p>
                      <p className="text-sm sm:text-base text-gray-400 font-mono">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-gray-800 via-black to-purple-900 w-full min-h-screen py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hover Cards Section */}
            <HoverEffect items={infoCards} />
          </div>

          {/* Statistics Section */}
          <div className="w-full rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center space-y-6 mt-8 mx-4 sm:mx-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              MERN Stack Journey Statistics
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center w-full">
              <div className="flex flex-col items-center space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  10,000+
                </h3>
                <p className="text-gray-400 font-semibold text-sm sm:text-base">
                  People Start
                </p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  1,500+
                </h3>
                <p className="text-gray-400 font-semibold text-sm sm:text-base">
                  People Succeed
                </p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  4 LPA+
                </h3>
                <p className="text-gray-400 font-semibold text-sm sm:text-base">
                  Average Package
                </p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  8,500+
                </h3>
                <p className="text-gray-400 font-semibold text-sm sm:text-base">
                  People Fail
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default HomeHero;
