import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactEvents = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
 
        <h2 className="text-2xl font-semibold text-cyan-400">React Events</h2>
        <p className="text-white">
          React mein events ka use user interactions ko handle karne ke liye hota hai, jaise ki button click, mouse hover, keyboard events, etc. React event handling bilkul JavaScript ki tarah hota hai, bas thoda syntax React-specific hota hai.
        </p>

        <h3 className="text-xl font-semibold text-red-400 mt-4">Events Ka Use Kaise Karein</h3>
        <p className="text-white">
          React mein event handlers ko directly JSX attributes mein pass kiya jata hai. Jaise agar aapko button click hone par kuch karna hai, to aapko ek function ko onClick event ke through pass karte ho.
        </p>

        <h3 className="text-xl font-semibold text-red-400 mt-4">Simple Example</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          {`// Example of a button click event in React
function handleClick() {
  alert('Button clicked!');
}

function App() {
  return (
    <button onClick={handleClick}>Click Me!</button>
  );
}`}
        </pre>

        <p className="text-white mt-4">
          Upar wale example mein, `handleClick` function ko `onClick` event ke through call kiya gaya hai jab button pe click hota hai.
        </p>

        <h3 className="text-xl font-semibold text-red-400 mt-4">React Events Features</h3>
        <ul className="list-disc pl-6 text-white">
          <li>Events ko camelCase mein likhna hota hai, jaise `onClick`, `onMouseEnter`, etc.</li>
          <li>Event handler functions ko pass karte waqt parentheses ke bina likhna hota hai.</li>
          <li>Events ko prevent aur stop bhi kiya ja sakta hai using `event.preventDefault()` aur `event.stopPropagation()`.</li>
        </ul>

        <div className="text-center mt-8">
          <img 
           src="https://strapi.dhiwise.com/uploads/react_syntheticevent_OG_Image_37349ed0de.webp" 
           alt="React Events" 
            className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg" 
          />
              </div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/Props"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link> 

          <Link to={"/react/router"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactEvents;
