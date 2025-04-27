import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Icons for React, Node.js, and Database

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-black to-purple-300 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600 mb-6">
          About This Website
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300">
          Welcome to our learning platform! Yahan aapko MERN stack (MongoDB, Express.js, React, Node.js) ke baare mein seekhne ko milega. Hum aapko sikhayenge ki kaise powerful aur full-stack web applications banaye jaate hain.
          Humare materials GeeksforGeeks (GFG) se liye gaye hain, jo ki programming knowledge ka ek trusted source hai.
        </p>

        <div className="flex justify-center gap-12 mb-14">
          <div className="text-center">
            <FaReact className="text-6xl mb-4 text-teal-400 hover:text-teal-500 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-indigo-400">React</h3>
            <p className="text-gray-300">
              React ko use karke aap dynamic frontends bana sakte hain, jisme hooks aur state management jaise modern features hote hain.
            </p>
          </div>
          <div className="text-center">
            <FaNodeJs className="text-6xl mb-4 text-green-500 hover:text-green-600 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-teal-400">Node.js</h3>
            <p className="text-gray-300">
              Node.js ka use karke aap fast aur scalable backends bana sakte hain, Express.js ke saath.
            </p>
          </div>
          <div className="text-center">
            <FaDatabase className="text-6xl mb-4 text-yellow-400 hover:text-yellow-500 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-indigo-400">MongoDB</h3>
            <p className="text-gray-300">
              MongoDB jaise NoSQL databases samajhna important hai, jo flexible applications banane ke liye perfect hote hain.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600 mb-6">
            Why Learn MERN Stack?
          </h3>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            MERN stack aaj ke time mein sabse zyada powerful aur in-demand full-stack technology hai. Agar aap is stack ko seekh jaate hain, toh aap dynamic, efficient, aur responsive web applications easily bana sakte hain.
            Humare website pe aapko GeeksforGeeks ke reliable resources milenge jo aapko har technology samajhne mein madad karenge.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Agar aap apna pehla web app bana rahe hain ya apne skills ko upgrade karna chahte hain, toh aapko sab kuch yahin mil jayega. Aaj hi seekhna shuru karein aur MERN stack ke saath full-stack developer banne ka safar shuru karein!
          </p>
        </div>

        <div className="bg-gradient-to-b from-black to-gray-500 text-white p-8 rounded-lg shadow-2xl mt-12">
          <h3 className="text-3xl font-semibold text-center mb-6">About Me</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Hello! Main hoon <strong>Rohit Singh</strong>, ek passionate developer jo programming ke duniya mein apni skills ko constantly improve kar raha hoon.
            Mujhe web development ka bahut shauk hai, aur maine apne journey ki shuruat <strong>GeeksforGeeks</strong> se ki thi. Ab main full-stack web development seekh raha hoon, jisme MERN stack ko deep se samajhne ki koshish kar raha hoon.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Main ne apne skills ko improve karne ke liye React, Node.js, MongoDB, aur Express.js jaise technologies ko explore kiya hai, aur apni website pe share kar raha hoon.
            Meri website par aapko aise resources milenge jo aapko har level pe help karenge. Yeh sab kuch maine apne efforts se seekha hai aur main chahta hoon ki aap bhi apne goals ko achieve karein!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
