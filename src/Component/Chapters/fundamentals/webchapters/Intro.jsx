import React from 'react';
import Websidenav from '../Websidenav';

const Intro = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto">
        <h1 className="text-4xl font-bold text-amber-400 mb-4">Introduction to Web Applications and Networks</h1>
        
        <h2 className="text-2xl font-semibold text-blue-300 mt-4">What is a Web Application?</h2>
        <p className="mt-2">A web application is a software program that runs on a web browser. Unlike traditional applications that need to be installed on a computer, web applications are accessible through the internet. Examples include Gmail, Facebook, and online banking websites.</p>
        
        <h2 className="text-2xl font-semibold text-blue-300 mt-4">What is WWW (World Wide Web)?</h2>
        <p className="mt-2">The World Wide Web (WWW) is a collection of websites and web pages that are accessible through the internet. It uses web browsers like Chrome and Firefox to display content. The WWW is built on technologies like HTML, CSS, and JavaScript.</p>
        
        <h2 className="text-2xl font-semibold text-blue-300 mt-4">Types of Networks</h2>
        
        <h3 className="text-xl font-medium text-green-300 mt-3">LAN (Local Area Network)</h3>
        <p className="mt-2">A LAN is a network that connects computers within a limited area, such as a home, office, or school. Example: A Wi-Fi network in a café or an office network.</p>
        
        <h3 className="text-xl font-medium text-green-300 mt-3">MAN (Metropolitan Area Network)</h3>
        <p className="mt-2">A MAN is a larger network that covers a city or a large campus. It is bigger than a LAN but smaller than a WAN. Example: Cable TV networks or city-wide Wi-Fi.</p>
        
        <h3 className="text-xl font-medium text-green-300 mt-3">WAN (Wide Area Network)</h3>
        <p className="mt-2">A WAN is a network that covers a large geographical area, often worldwide. The internet itself is the biggest example of a WAN. Other examples include banking networks and corporate networks that connect offices across the world.</p>
        
        <h2 className="text-2xl font-semibold text-blue-300 mt-4">Examples of Networks</h2>
        <ul className="list-disc list-inside mt-2">
          <li>LAN Example: A school computer lab where all computers are connected.</li>
          <li>MAN Example: A university campus with multiple buildings connected through fiber optics.</li>
          <li>WAN Example: The internet, where millions of devices communicate worldwide.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-blue-300 mt-4">Conclusion</h2>
        <p className="mt-2">Understanding web applications and networks is essential for web development. The internet is built on different types of networks, and web applications rely on these networks to function efficiently.</p>
      </div>
    </>
  );
};

export default Intro;
