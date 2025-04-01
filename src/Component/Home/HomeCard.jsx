import React from "react";

const HomeCard = () => {
  const benifits = [
    {
      head: "Full-Stack Development Skills",
      info: "Aap frontend aur backend dono develop kar sakte ho, making you a complete developer.",
    },
    {
      head: "Single Language (JavaScript Everywhere)",
      info: "Frontend aur backend ke liye alag alag languages seekhne ki zaroorat nahi. JavaScript har jagah kaam karta hai.",
    },
    {
      head: "High Demand & Career Opportunities",
      info: "Companies MERN stack developers ko prefer karti hain fast aur scalable web apps ke liye.",
    },
    {
      head: "Fast Development & Scalability",
      info: "React, Node.js, aur MongoDB se development bahut fast ho jata hai aur large-scale applications handle karte hain.",
    },
    {
      head: "Strong Community & Open-Source Support",
      info: "MERN technologies open-source hain aur unka ek huge developer community hai jo hamesha madad karta hai.",
    },
    {
      head: "Easier to Learn & Implement",
      info: "Traditional backend languages (PHP, Java) ke mukable MERN modern aur easy-to-learn concepts use karta hai.",
    },
  ];

  const Lerns = [
    {
      head: "1. Frontend (React.js)",
      info: "JSX & Components, Props & State Management, Hooks (useState, useEffect, useContext), Routing with React Router, Redux for State Management.",
    },
    {
      head: "2. Backend (Node.js & Express.js)",
      info: "Node.js server setup, Express.js for API creation, Middleware & Authentication (JWT, OAuth), RESTful APIs & CRUD Operations.",
    },
    {
      head: "3. Database (MongoDB & Mongoose)",
      info: "NoSQL Database Concept, Mongoose ORM, CRUD Operations in MongoDB, Schema Design & Relationships.",
    },
    {
      head: "4. Full-Stack Integration",
      info: "Frontend ko backend se connect karna, API Calls using Fetch/Axios, Authentication & Authorization, Deployment of MERN Applications.",
    },
    {
      head: "5. Advanced Topics",
      info: "WebSockets & Real-time Communication, Performance Optimization, CI/CD & DevOps Basics.",
    },
    {
      head: "6. Deployment & Hosting",
      info: "Frontend ko Vercel/Netlify par deploy karna, Backend ko Render/Heroku par deploy karna, Database (MongoDB Atlas) ko connect karna.",
    },
  ];

  return (
    <>
      {/* Benefits Section */}
      <div className="bg-black p-8 text-center rounded-2xl m-8 ">
        <h1 className="text-3xl text-white font-bold mb-4">
          Benefits of Becoming a MERN Stack Developer
        </h1>
        <p className="text-white mb-6">
          MERN stack shikne se apko kya kya fayed hoga!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {benifits.map((benifit, index) => (
            <div
              key={index}
              className="bg-purple-400 p-6 rounded-lg shadow-md border border-white transition-transform transform hover:scale-105"
            >
              <h1 className="text-lg font-semibold text-gray-900">{benifit.head}</h1>
              <p className="text-white mt-2">{benifit.info}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Section */}
      <div className="bg-black p-8 text-center rounded-2xl m-8">
        <h1 className="text-3xl text-white font-bold mb-4">
          What You Learn in MERN Stack Development?
        </h1>
        <p className="text-white mb-6">
          MERN stack development mein aapko yeh sab seekhna hoga!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {Lerns.map((Lern, index) => (
            <div
              key={index}
              className="bg-purple-400 p-6 rounded-lg shadow-md border border-white transition-transform transform hover:scale-105"
            >
              <h1 className="text-lg font-semibold text-gray-900">{Lern.head}</h1>
              <p className="text-white mt-2">{Lern.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCard;
