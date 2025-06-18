import React from 'react';

// Sample Company Logos (Black & White)
const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Adobe_Corporate_Logo.png' },
  { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Infosys_logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Wipro_Primary_Logo_Color_RGB.svg' },
];


const HomeInfo = () => {
  return (
    <div className="bg-gradient-to-tl from-gray-700 via-black to-gray-800 p-6 md:p-14 text-white    shadow-lg w-full flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        Helped Students Achieve Their Dream Job At
      </h1>

      {/* Companies Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-6 items-center justify-center">
        {companies.map((company, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl flex justify-center items-center shadow-md hover:scale-105 transition-transform duration-300">
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 sm:h-12 object-contain grayscale"
            />
          </div>
        ))}
      </div>

      {/* + Many More Text */}
      <p className="text-gray-400 font-mono mt-4 text-center">+ Many more companies</p>

      {/* Info Paragraph */}
      <div className="text-sm md:text-lg leading-relaxed text-gray-300 space-y-6 mt-8 max-w-3xl text-center ">
        <h2 className="text-xl md:text-5xl font-extrabold text-white mb-2">
          Start Your Coding Journey
        </h2>
        <p>Learn coding step-by-step with India's most loved programming mentor.</p>
        <button>
          <li><a href="/chapters" className="px-6 mt-5 py-3 bg-white text-black rounded-2xl font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300">Start Now</a></li> 
        </button>
      </div>
    </div>
  );
};

export default HomeInfo;
