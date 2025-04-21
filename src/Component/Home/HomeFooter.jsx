import React from 'react';
import {
  Mail, Phone, Facebook, Twitter, Linkedin, Globe, BookOpenCheck
} from 'lucide-react';

const HomeFooter = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 px-6 mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-10 border-b border-purple-800">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-4">LEARN_MERN</h2>
          <p className="text-gray-300">
            Ek aisa platform jahan aap structured way mein MERN stack development seekh sakte ho — hands-on projects, quizzes aur daily practice ke sath.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-purple-400">🏠 Home</a></li>
            <li><a href="/chapters" className="hover:text-purple-400">📚 Chapters</a></li>
            <li><a href="/practice" className="hover:text-purple-400">🧠 Practice</a></li>
            <li><a href="/about" className="hover:text-purple-400">ℹ️ About</a></li>
          </ul>
        </div>

        {/* Community & Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Community & Support</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="https://forum.freecodecamp.org" target="_blank" className="hover:text-purple-400 flex items-center gap-2">
                <Globe size={18} /> freeCodeCamp Forum
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com" target="_blank" className="hover:text-purple-400 flex items-center gap-2">
                <BookOpenCheck size={18} /> Stack Overflow
              </a>
            </li>
            <li>
              <a href="https://dev.to" target="_blank" className="hover:text-purple-400 flex items-center gap-2">
                <BookOpenCheck size={18} /> Dev.to
              </a>
            </li>
            <li>
              <a href="mailto:contact@learnmern.com" className="hover:text-purple-400 flex items-center gap-2">
                <Mail size={18} /> contact@learnmern.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-purple-400 flex items-center gap-2">
                <Phone size={18} /> +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-6 text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-purple-400"><Facebook size={20} /></a>
          <a href="#" className="hover:text-purple-400"><Twitter size={20} /></a>
          <a href="#" className="hover:text-purple-400"><Linkedin size={20} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} <span className="text-purple-400 font-semibold">LEARN_MERN</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default HomeFooter;
