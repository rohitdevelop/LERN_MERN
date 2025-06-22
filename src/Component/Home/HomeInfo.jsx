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
    <div className="bg-gradient-to-tl border-t-2 border-white from-purple-900 via-black to-gray-800 p-6 md:p-14 text-white shadow-lg w-full flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        Helped Students Achieve Their Dream Job At
      </h1>

      {/* Companies Grid */}
     <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 items-center justify-center mb-12 ">
  {companies.map((company, index) => (
    <div
      key={index}
      className="p-4 rounded-xl flex justify-center items-center shadow-lg   bg-gray-800"
    >
      <img
        src={company.logo}
        alt={company.name}
        className="h-8 sm:h-20 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-30"
      />
    </div>
  ))}
</div>


      {/* + Many More Text */}
      <p className="text-gray-400 font-mono mb-12 text-center">
        + Many more companies
      </p>

      {/* Infinite Feedback Slider */}
      <div className="relative w-full overflow-hidden py-10 mb-12">
        {/* Left Shadow */}
        <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-black to-transparent z-10" />
        {/* Right Shadow */}
        <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-gray-800 to-transparent z-10" />

        {/* Infinite Scroll Container */}
       <div className="flex w-max animate-slide space-x-6">
  {[...feedbacks, ...feedbacks].map((feedback, index) => (
    <div
      key={index}
className="w-44 h-80 sm:w-56 sm:h-44 md:w-72 md:h-72 bg-gray-800 px-4 sm:px-6 md:px-8 py-4 rounded-xl shadow-lg flex-shrink-0 text-gray-200 hover:scale-105 transition-transform duration-300 overflow-hidden"
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
     <div className="text-sm md:text-lg leading-relaxed text-gray-300 space-y-6 mt-12 max-w-3xl text-center px-4">
  <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
    Start Your Coding <span className="text-purple-500">Journey</span>
  </h2>
  <p className="text-gray-400 max-w-xl mx-auto">
    Learn coding step-by-step with India's most loved programming mentor and build real-world projects that shape your future.
  </p>
  <a href="/chapters">
    <button className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl font-semibold shadow-lg hover:scale-105 hover:from-purple-700 hover:to-purple-900 transition-transform duration-300">
      🚀 Start Now
    </button>
  </a>
</div>

    </div>
  );
};

export default HomeInfo;
