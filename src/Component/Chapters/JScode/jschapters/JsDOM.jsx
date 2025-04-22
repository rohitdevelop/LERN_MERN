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

          <h3 className="text-xl font-semibold text-gray-200 mt-4">DOM Selection Methods</h3>
          <p className="text-gray-300">
            JavaScript mein hum DOM elements ko select karne ke liye kuch methods ka use karte hain. Yeh methods humein specific element ko select karne mein madad karte hain:
          </p>
          <ul className="list-disc pl-8 text-gray-300">
            <li><strong>document.getElementById()</strong>: Is method se hum kisi element ko uske unique ID ke through select kar sakte hain.</li>
            <li><strong>document.querySelector()</strong>: Yeh method humein CSS selectors ke through element select karne ki suvidha deta hai, aur pehla matching element return karta hai.</li>
            <li><strong>document.querySelectorAll()</strong>: Yeh method bhi CSS selectors ka use karta hai, lekin yeh saare matching elements ko ek NodeList ke roop mein return karta hai.</li>
            <li><strong>document.getElementsByClassName()</strong>: Is method se hum kisi element ko uske class ke through select kar sakte hain. Yeh saare matching elements ko ek HTMLCollection ke roop mein return karta hai.</li>
            <li><strong>document.getElementsByTagName()</strong>: Is method se hum kisi element ko uske tag name ke through select kar sakte hain. Yeh bhi saare matching elements ko ek HTMLCollection ke roop mein return karta hai.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">Examples of DOM Selection</h3>
          
          <h4 className="text-lg font-semibold text-gray-200 mt-4">1. Using `getElementById()`</h4>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example: Select element by ID
const element = document.getElementById('myElement');
console.log(element); // Logs the element with ID 'myElement'`}
          </pre>

          <h4 className="text-lg font-semibold text-gray-200 mt-4">2. Using `querySelector()`</h4>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example: Select first element by CSS selector
const firstElement = document.querySelector('.myClass');
console.log(firstElement); // Logs the first element with class 'myClass'`}
          </pre>

          <h4 className="text-lg font-semibold text-gray-200 mt-4">3. Using `querySelectorAll()`</h4>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example: Select all elements by CSS selector
const allElements = document.querySelectorAll('.myClass');
console.log(allElements); // Logs a NodeList of all elements with class 'myClass'`}
          </pre>

          <h4 className="text-lg font-semibold text-gray-200 mt-4">4. Using `getElementsByClassName()`</h4>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example: Select elements by class name
const elements = document.getElementsByClassName('myClass');
console.log(elements); // Logs an HTMLCollection of all elements with class 'myClass'`}
          </pre>

          <h4 className="text-lg font-semibold text-gray-200 mt-4">5. Using `getElementsByTagName()`</h4>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example: Select elements by tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // Logs an HTMLCollection of all <p> elements`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">Event Listener with DOM Selection</h3>
          <p className="text-gray-300">
            Ab hum DOM selection aur event handling ko combine karte hain. Example ke liye, agar hum ek button click event handle karna chahte hain, to hum `getElementById()` ya `querySelector()` se button ko select kar sakte hain.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example: Using querySelector for Event Listener
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  alert('Button clicked using querySelector!');
});`}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/events"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/es6"}>
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
