import React from 'react';

const webTasks = [
  { title: "What is Internet?", description: "Internet kya hota hai? Ek simple paragraph me explain karo." },
  { title: "Difference between Internet and WWW", description: "Internet aur World Wide Web me kya antar hai? Table ke form me likho." },
  { title: "Basic Networking Terms", description: "DNS, IP Address, HTTP aur HTTPS ke chhote notes banao." },
  { title: "Client-Server Architecture", description: "Client aur Server kaise interact karte hain, ek simple diagram ke sath samjhao." },
  { title: "How a Website Loads", description: "Jab hum browser me URL dalte hain to kya process hoti hai? Explain karo simple steps me." },
  { title: "What is the DNS", description: "Jab hum browser me google.com likhte hain, DNS ka kya role hota hai?" },
];

const bookSuggestions = [
  "1. Computer Networking: A Top-Down Approach by James F. Kurose & Keith W. Ross",
  "2. Internet - Douglas E. Comer",
  "3. Web Server Management - Amar Gupta",
  "4. Database System Concepts - Abraham Silberschatz"
];

const Taskweb = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-purple-900 via-black to-purple-900 p-8 pt-32 flex flex-col items-center">
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {webTasks.map((task, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-purple-500 p-6 rounded-2xl shadow-lg hover:rounded-none cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">{task.title}</h2>
            <p className="text-gray-300">{task.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl w-full mt-16 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-purple-300 mb-4">Note 📚</h2>
        <p className="text-gray-300 mb-6">
          Is module me abhi koi project nahi ban payega. Lekin mai kuch important books suggest kar raha hoon jo aapko concepts strong karne me madad karengi:
        </p>
        <ul className="list-disc list-inside space-y-3 text-white text-left">
          {bookSuggestions.map((book, index) => (
            <li key={index} className="hover:text-purple-400 transition">{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Taskweb;
