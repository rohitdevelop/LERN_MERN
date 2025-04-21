import React from 'react';
import { BookOpen, Terminal, Globe, LayoutDashboard, Code, Server, Database } from 'lucide-react';

const HomeInfo = () => {
  const chapters = [
    {
      icon: <Globe className="text-white" size={24} />,
      title: 'Web Fundamentals',
      desc: 'Internet kaise kaam karta hai, HTTP, DNS – sab samjho.',
    },
    {
      icon: <LayoutDashboard className="text-white" size={24} />,
      title: 'HTML+CSS',
      desc: 'Webpage styling ke sath banana seekho SEO tips.',
    },
    {
      icon: <Terminal className="text-white" size={24} />,
      title: 'JavaScript',
      desc: 'Website mein life lao – logic aur interactivity build karo.',
    },
    {
      icon: <BookOpen className="text-white" size={24} />,
      title: 'React',
      desc: 'Projects banake React frontend master bano.',
    },
    {
      icon: <Server className="text-white" size={24} />,
      title: 'Node.js + Express',
      desc: 'Backend build karo with Node.js and Express, REST APIs ke sath.',
    },
    {
      icon: <Database className="text-white" size={24} />,
      title: 'MongoDB',
      desc: 'Data ko store aur manage karo NoSQL database MongoDB ke sath.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-gray-900 p-6 md:p-14 text-white md:rounded-2xl shadow-lg md:m-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-400">LEARN_MERN</h1>
        <h2 className="text-xl md:text-2xl mt-1 font-semibold text-white">Man Se 💻</h2>
      </div>

      {/* Chapters Grid */}
      <div className="mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          🔍 Your Learning Path – Step by Step
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-8">
        {chapters.map((chapter, index) => (
            <div
              key={index}
              className="relative bg-purple-700/20 border border-purple-600 rounded-xl p-4 md:p-6 hover:scale-[1.03] hover:shadow-purple-800 transition-all duration-300 min-h-[7rem]"
            >
              <div className="absolute inset-0 border-4 border-transparent rounded-xl animate-border"></div>
              <div className="relative z-10 flex items-center gap-3 mb-2 md:mb-4">
                <div className="bg-purple-600 p-2 rounded-full shadow-md">
                  {chapter.icon}
                </div>
                <h4 className="text-base md:text-xl font-semibold text-white">{chapter.title}</h4>
              </div>
              <p className="text-sm md:text-base text-gray-300">{chapter.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Paragraph */}
      <div className="text-sm md:text-lg leading-relaxed text-gray-300 space-y-6 mt-4">
        <p>
          Is website mein aapko MERN stack seekhne ka moka milega. Chapter section mein jaake aap apni learning start kar sakte hain. Har chapter ke baad ek quiz zaroor khelna, taaki aapki learning aur strong ho.
          Har chapter ke baad aapko tasks milenge – daily practice se hi growth hogi aapki. Agar aap lagatar practice karenge, toh sirf <span className="text-purple-400 font-bold">6 months</span> mein aap ek confident developer ban sakte ho.
          <strong> Tip:</strong> Agar kahin confusion ho, toh FAQs aur Discussion Forum zaroor check karo. Samajh mein na aaye? Toh dobara padho – baar baar padhne se hi clarity aati hai!
        </p>
      </div>

      {/* Best of Luck */}
      <h2 className="text-xl md:text-2xl font-semibold text-center mt-10 text-purple-500">
        BEST OF LUCK! 🚀
      </h2>
    </div>
  );
};

export default HomeInfo;
