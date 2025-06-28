// src/Chatbot.jsx
import React from "react";

const Chatbot = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 pt-24 p-4 flex flex-col items-center">
     <div className="w-full text-center flex items-center justify-center max-w-5xl h-[700px] shadow-lg rounded-lg overflow-hidden border border-gray-500">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/fZBzCKeWQntstAtNVb-AF"
          width="70%"
          height="98%"
          style={{ border: "none" }}
          title="Chatbot"
          allow="clipboard-write"
        ></iframe>
      </div>
    </div>
  );
};

export default Chatbot;
