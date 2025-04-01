import React from 'react';

const HomeFooter = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About LEARN_MERN</h3>
            <p>
              LEARN_MERN is a platform that helps you master MERN stack development through a structured and hands-on approach. 
              We provide chapter-wise learning along with quizzes and tasks to help you become a full-stack developer.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/chapters" className="hover:text-gray-400">Chapters</a></li>
              <li><a href="/quiz" className="hover:text-gray-400">Quiz</a></li>
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:contact@learnmern.com" className="hover:text-gray-400">contact@learnmern.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+1 (234) 567-890</a></p>
            <div className="mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-400 mx-2">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-900 py-4 mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} LEARN_MERN. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomeFooter;
