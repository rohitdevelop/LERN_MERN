import React from 'react';

const HomeInfo = () => {
  return (
    <div className="bg-white m-8 p-6 rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h1 className="text-black text-3xl font-bold">LEARN_MERN</h1>
        <h2 className="text-black text-2xl mt-2">Man Se</h2>
      </div>

      <p className="text-black text-lg mb-4">
        Is website mein aapko MERN stack seekhne ka moka milega. Chapter section mein jaake aap apni learning start kar sakte hain. Har chapter ke baad ek quiz zaroor khelna, taaki aapki learning aur strong ho. Chapter wise seekhne se aapko zyada fayda hoga.
      </p>

      <p className="text-black text-lg mb-4">
        Har chapter complete karne ke baad tasks bhi diye jayenge. Agar aap regularly practice karenge, toh aap jarur MERN stack seekh jayenge. Minimum 6 months lagenge agar aap <span className="text-purple-500 font-semibold">LEARN_MERN man se</span> jude rhe to. 
      </p>

      <h2 className="text-2xl font-semibold text-center mt-6 text-purple-600">BEST OF LUCK!</h2>

      {/* Additional Hinlish Content */}
      <div className="mt-6 text-black text-lg">
        <p>
          <strong>Tip:</strong> Agar aapko kahin bhi koi problem aaye, toh chapter ke end mein FAQs or discussion forum check karein. Humari community hamesha madad ke liye ready hai. Aapka journey shuru ho chuka hai, toh focus rakhein aur consistently seekhte rahein.
        </p>
        <p>
          Ek suggestion: Agar aapko kisi topic mein mushkil ho rahi hai, toh uss topic ko baar baar revise karein. Ye ek proven technique hai jo aapko deeply samajhne mein madad karegi.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
