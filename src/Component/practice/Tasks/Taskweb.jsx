import React from 'react';

const webTasks = [
  { title: "What is Internet?", description: "Internet kya hota hai? Ek simple paragraph me explain karo." },
  { title: "Difference between Internet and WWW", description: "Internet aur World Wide Web me kya antar hai? Table ke form me likho." },
  { title: "Basic Networking Terms", description: "DNS, IP Address, HTTP aur HTTPS ke chhote notes banao." },
  { title: "Client-Server Architecture", description: "Client aur Server kaise interact karte hain, ek simple diagram ke sath samjhao." },
  { title: "How a Website Loads", description: "Jab hum browser me URL dalte hain to kya process hoti hai? Explain karo simple steps me." },
];

const bookSuggestions = [
  "1. Computer Networking: A Top-Down Approach by James F. Kurose & Keith W. Ross",
  "2. Internet - Douglas E. Comer",
  "3. Web Server Management - Amar Gupta",
  "4. Database System Concepts - Abraham Silberschatz"
];

const Taskweb = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-gray-700 p-8 mt-11">
      <h1 className="text-4xl font-bold text-center text-white drop-shadow mb-10">Web Fundamentals Tasks</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {webTasks.map((task, index) => (
          <div 
            key={index} 
            className="w-full p-5 border-2 border-dashed border-purple-500 rounded-lg hover:scale-105 transition-transform duration-300 bg-gray-800"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{task.title}</h2>
            <p className="text-gray-300">{task.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-14">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-black mb-4">Note 📚</h2>
          <p className="text-black mb-6">
            Is module me abhi koi project nahi ban payega. Lekin mai kuch important books suggest kar raha hoon jo aapko concepts strong karne me madad karengi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {bookSuggestions.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Taskweb;
