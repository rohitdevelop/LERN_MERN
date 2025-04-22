import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsEvents = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">📘 JavaScript Events</h1>

        {/* Events Explanation */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">✅ What are JavaScript Events?</h2>
          <p className="text-gray-300">
            JavaScript events wo actions hote hain jo browser me hoti hain, jaise ki kisi user ka button click karna, form submit karna, ya mouse move karna.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">Event Types</h3>
          <ul className="list-disc pl-8 text-gray-300">
            <li><strong>Click</strong> - Jab user kisi element ko click karta hai</li>
            <li><strong>Mouseover</strong> - Jab user mouse ko kisi element ke upar le jata hai</li>
            <li><strong>Submit</strong> - Jab form submit hota hai</li>
            <li><strong>Change</strong> - Jab input value change hoti hai</li>
            <li><strong>Keyup/Keydown</strong> - Jab user keyboard press karta hai</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">Example of Event Handling</h3>
          <p className="text-gray-300">
            Hum event listeners ka use kar ke, user ke actions ko handle kar sakte hain.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example: Button Click Event
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button Clicked!');
});`}
          </pre>

          <p className="text-gray-300">
            Is example mein jab user "myButton" button ko click karega, tab ek alert box show hoga.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/loops"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/dom"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JsEvents;
