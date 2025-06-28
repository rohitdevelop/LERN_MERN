import React from "react";

const Chatbot = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 pt-24 px-4 flex flex-col items-center">
            <div className="w-full max-w-5xl h-[80vh] sm:h-[700px] bg-black/30 shadow-xl rounded-2xl overflow-hidden border border-gray-600 backdrop-blur-md">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/fZBzCKeWQntstAtNVb-AF"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Chatbot"
          allow="clipboard-write"
        ></iframe>
      </div>
     </div>
  );
};

export default Chatbot;
