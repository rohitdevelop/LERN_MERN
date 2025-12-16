import React from "react";

const QuizeLoder = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 px-4 py-6 sm:px-8">
      
      {/* Card Skeleton */}
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full max-w-2xl animate-pulse">
        
        {/* Question Counter */}
        <div className="h-6 w-2/3 mx-auto bg-purple-300/30 rounded mb-6"></div>

        {/* Question Text */}
        <div className="h-5 w-full bg-white/20 rounded mb-4"></div>
        <div className="h-5 w-4/5 bg-white/20 rounded mx-auto mb-6"></div>

        {/* Options */}
        <div className="space-y-4">
          <div className="h-12 w-full bg-white/10 rounded-lg"></div>
          <div className="h-12 w-full bg-white/10 rounded-lg"></div>
          <div className="h-12 w-full bg-white/10 rounded-lg"></div>
          <div className="h-12 w-full bg-white/10 rounded-lg"></div>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <div className="h-12 w-40 bg-purple-500/30 rounded-lg"></div>
        </div>
      </div>
 
    </div>
  );
};

export default QuizeLoder;
