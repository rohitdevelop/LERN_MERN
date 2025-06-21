import React from "react";

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
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.svg",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "paypal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/PayPal_2024.svg",
  },
  {
    name: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Deloitte-logo-black.svg",
  },
  {
    name: "uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Uber_logo_2018.svg",
  },
  {
    name: "dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  },
];

// Feedbacks
const feedbacks = [
  {
    name: "Rohit Singh",
    feedback:
      "This platform really changed my coding journey! I gained confidence and landed my first internship because of the structured guidance.",
  },
  {
    name: "Anjali Sharma",
    feedback:
      "Simple, easy to follow tutorials, and lots of hands-on practice. Loved the community support and real-world projects.",
  },
  {
    name: "Mohit Kumar",
    feedback:
      "The mentors were always available for help. I built my first portfolio project and cracked multiple interviews.",
  },
  {
    name: "Priya Verma",
    feedback:
      "Step-by-step approach makes it very beginner-friendly. The resources are practical and industry-relevant.",
  },
];

const HomeInfo = () => {
  return (
    <div className="bg-gradient-to-tl from-gray-700 via-black to-gray-800 p-6 md:p-14 text-white shadow-lg w-full flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        Helped Students Achieve Their Dream Job At
      </h1>

      {/* Companies Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-6 items-center justify-center mb-12">
        {companies.map((company, index) => (
          <div
            key={index}
            className="p-4 rounded-xl flex justify-center items-center shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* + Many More Text */}
      <p className="text-gray-400 font-mono mb-12 text-center">
        + Many more companies
      </p>

      {/* Infinite Feedback Slider */}
      <div className="relative w-full overflow-hidden bg-gray-900 py-10 rounded-xl mb-12">
        {/* Left Shadow */}
        <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
        {/* Right Shadow */}
        <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />

        {/* Infinite Scroll Container */}
       <div className="flex w-max animate-slide space-x-6">
  {[...feedbacks, ...feedbacks].map((feedback, index) => (
    <div
      key={index}
      className="min-w-[350px] sm:min-w-[400px] bg-gray-800 px-8 py-4 rounded-xl shadow-lg flex-shrink-0 text-gray-200 hover:scale-105 transition-transform duration-300"
    >
      <div className="flex flex-col space-y-3">
        <h3 className="font-bold text-xl text-white">{feedback.name}</h3>
        <p className="text-gray-400 font-mono">{feedback.feedback}</p>
        {/* Star Rating */}
        <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Info Paragraph */}
      <div className="text-sm md:text-lg leading-relaxed text-gray-300 space-y-6 mt-8 max-w-3xl text-center">
        <h2 className="text-xl md:text-5xl font-extrabold text-white mb-2">
          Start Your Coding Journey
        </h2>
        <p>
          Learn coding step-by-step with India's most loved programming mentor.
        </p>
        <a href="/chapters">
          <button className="px-6 mt-5 py-3 bg-white text-black rounded-2xl font-semibold shadow-lg hover:bg-purple-700 hover:text-white hover:scale-105 transition-transform duration-300">
            Start Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeInfo;
