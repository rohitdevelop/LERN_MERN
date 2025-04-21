import React from "react";
import {
  FaLaptopCode,
  FaCodeBranch,
  FaSearch,
  FaRocket,
  FaUsers,
  FaBookReader,
} from "react-icons/fa";

const HomeCard = () => {
  const benefits = [
    {
      icon: <FaLaptopCode className="text-white" size={24} />,
      head: "Full-Stack Development Skills",
      info: "Aap frontend aur backend dono develop kar sakte ho, ban jao ek complete developer.",
    },
    {
      icon: <FaCodeBranch className="text-white" size={24} />,
      head: "Single Language (JavaScript Everywhere)",
      info: "Sirf ek language JavaScript se pura web app build karo, bina confusion ke.",
    },
    {
      icon: <FaSearch className="text-white" size={24} />,
      head: "High Demand & Career Opportunities",
      info: "MERN stack developers ki demand high hai – better jobs aur package ka chance.",
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      head: "Fast Development & Scalability",
      info: "React, Node.js se fast aur scalable websites banana asaan hai.",
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      head: "Strong Community & Open-Source Support",
      info: "MERN tools ke liye badi developer community hai – help milegi har step pe.",
    },
    {
      icon: <FaBookReader className="text-white" size={24} />,
      head: "Easy to Learn & Use",
      info: "Java, PHP jaise traditional languages se simple aur modern hai MERN stack.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-gray-900 p-6 sm:p-8 md:p-14 text-white md:rounded-2xl shadow-lg md:m-6">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
          Kyun Seekhna Chahiye MERN Stack? 🔥
        </h1>
        <p className="text-gray-300 text-sm md:text-lg">
          Dekho kya kya faayde milenge tumhe MERN developer ban ke!
        </p>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center sm:text-left">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-[#1f1f2e] border border-purple-600 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-purple-700/50 transition-all duration-300 hover:scale-[1.03] relative"
          >
            <div className="absolute inset-0 border-4 border-transparent rounded-xl animate-border"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 mb-2">
              {benefit.icon}
              <h3 className="text-purple-400 font-semibold text-base sm:text-lg text-center sm:text-left">
                {benefit.head}
              </h3>
            </div>

            <p className="text-gray-200 text-sm sm:text-[15px] leading-relaxed text-center sm:text-left">
              {benefit.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
