import React from "react";
import { useState } from "react";
import {
  FaLaptopCode,
  FaLightbulb,
  FaGraduationCap,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
// Company Logos
const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },

  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "paypal",
    logo: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/9a47085894be9870158c9ad4e23c1a24.png",
  },
  {
    name: "Deloitte",
    logo: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/622a116daf32436d38271cd6c49ee3af.png",
  },
  {
    name: "uber",
    logo: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/b5070669b92945ffb20fadc3ea552d16.png",
  },
  {
    name: "dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  },
  {
    name: "dell",
    logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
  },
];
 

const HomeInfo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is MERN Stack in Development?",
      answer:
        "MERN stands for MongoDB, Express, React & Node. These are the 4 key technologies that will be covered in the batch. MERN is the most popular stack for web development & choice for today’s web developers.",
    },
    {
      question: "Why should I learn Web Development?",
      answer:
        "Almost all tech companies do some kind of development, thus becoming a SKILLED Full Stack Web Developer opens up a lot of jobs for you.You will built projects that will give you a practical coding & development experience. These projects will be useful when you apply for internships & placements. Even if you apply for Software Engineering roles, development experience will give you an edge in the selection process.You can also use your development skills to do freelancing, contribute to open source or work on building your own tech startup.",
    },
    {
      question: "What is the roadmap of MERN Stack?",
      answer:
        "The MERN stack roadmap for web development involves mastering JavaScript fundamentals, then delving into each component: React for the front-end, Node.js and Express.js for the back-end, and MongoDB for the database. Begin with HTML, CSS, and JavaScript basics, then learn React, including JSX, components, props, and state. Next, explore Node.js and Express.js for server-side development and API creation. Finally, familiarize yourself with MongoDB and Mongoose for data storage and interaction. Throughout the process, practice with projects, utilize version control (Git), and consider testing and deployment strategies. ",
    },
    {
      question:
        "I don't know anything about Coding, is this batch good for me?",
      answer:
        "Yes, this course will cover all important concepts from basic till advanced. So, there is no need to know anything about coding beforehand.",
    },
    {
      question:
        "I just completed 12th and I want to start learning coding, can I take it?",
      answer:
        "Yes, you are eligible to enrol as we will cover everything from basics to advanced. It is always better to start as early as possible. It will give you a good head start and ample time to get practical experience. ",
    },
    {
      question: "Is the course in Hindi or English?",
      answer: "The course is taught in Hinglish (a mix of Hindi & English). ",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="border-t-2 border-white bg-gradient-to-tl from-purple-950 via-black to-purple-950 p-6 md:p-14 text-white shadow-lg w-full flex flex-col items-center">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Helped Students Achieve Their Dream Job At
        </h1>

        {/* Companies Grid */}
        <div className="w-[75vw] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 items-center justify-center mb-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="p-4 rounded-xl flex justify-center items-center shadow-lg bg-gray-800"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 sm:h-20 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* + Many More Text */}
        <p className="text-gray-400 font-mono text-center text-sm sm:text-base">
          + Many more companies
        </p>
          <div className="w-[75vw] rounded-2xl   text-white  shadow-lg p-6 sm:p-10 text-center">
        {/* Profile Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-p91wykF52aYIBzdmSb53lXSqmFNJjCi84UOkIk0KhLIjJRMsG9EyB1G&amp;s=10" // Replace with your image
          alt="Rohit Singh"
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-4 border-purple-500 mb-4 object-cover"
        />

        {/* Name Section */}
        <p className="text-sm text-gray-400">Created By</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-8">
          ROHIT SINGH
        </h1>

        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Experience */}
          <div className="flex flex-col items-center space-y-2">
            <FaLaptopCode className="text-amber-400 text-4xl sm:text-5xl" />
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-gray-300 text-sm">
              Built multiple React & Node projects.
            </p>
          </div>

          {/* Problem Solver */}
          <div className="flex flex-col items-center space-y-2">
            <FaLightbulb className="text-yellow-300 text-4xl sm:text-5xl" />
            <h3 className="text-lg font-semibold">Problem Solver</h3>
            <p className="text-gray-300 text-sm">
              Loves solving logic & code challenges.
            </p>
          </div>

          {/* Student */}
          <div className="flex flex-col items-center space-y-2">
            <FaGraduationCap className="text-green-400 text-4xl sm:text-5xl" />
            <h3 className="text-lg font-semibold">BCA Student</h3>
            <p className="text-gray-300 text-sm">
              Currently pursuing BCA at IGNOU.
            </p>
          </div>
        </div>
      </div>
      </div>

    

      {/* Infinite Feedback Slider */}

      <div className="w-screen bg-gradient-to-tl from-purple-950 via-black to-purple-950 ">
        <div className="w-full md:w-[100%] lg:w-[85%] mx-auto px-4 py-8">
          <h2 className="text-center text-3xl font-bold text-purple-400 mb-6">
            Frequently asked <span className="text-white">questions</span> :-
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300"
              >
                <div
                  className="flex justify-between items-center w-full cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FaMinus className="text-purple-400" />
                  ) : (
                    <FaPlus className="text-purple-400" />
                  )}
                </div>

                <div
                  className={`text-gray-300 text-sm mt-2 overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-2 font-mono">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full  text-white px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Start Your Coding <span className="text-purple-400">Journey</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
            Learn coding step-by-step with India's most loved mentor and build
            real-world projects that shape your future.
          </p>

          <a href="/chapters">
            <button className="mt-4 cursor-pointer px-6 py-3 sm:px-8 sm:py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-semibold shadow-md transition duration-300 ease-in-out">
              🚀 Start Now
            </button>
          </a>
        </div>
      </div>
      </div>

      {/* Info Paragraph */}
      
    </>
  );
};

export default HomeInfo;
