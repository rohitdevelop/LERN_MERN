import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactProps = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
 
        <h2 className="text-2xl font-semibold text-cyan-300">React Props</h2>
        <p>
          React props, yaani "properties", ek tarah ka mechanism hai jo data ko ek component se doosre component tak pass karne ka kaam karta hai. Props ko ek component ke andar pass kiya jata hai, aur woh component us data ko use karke apne UI ko render karta hai.
        </p>

        <h3 className="text-xl font-semibold text-red-500 mt-4">Props Ka Use</h3>
        <p>
          React components apne parent component se props ko receive karte hain. Yani jab aap ek parent component banate ho, to usme child component ko props ke through data pass karte ho. 
        </p>

        <h3 className="text-xl font-semibold text-red-400 mt-4">Ek Simple Example</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          {`// Parent Component
function ParentComponent() {
  return <ChildComponent name="Rohit" />;
}

// Child Component
function ChildComponent(props) {
  return <h2>Hello, {props.name}</h2>;
}`}
        </pre>
        <p className="mt-4">
          Upar wale example mein, `ParentComponent` mein humne `ChildComponent` ko ek prop `name` pass kiya hai. Child component is prop ko receive karke `Hello, Rohit` display karega.
        </p>

        <h3 className="text-xl font-semibold text-red-400 mt-4">Props ke Features:</h3>
        <ul className="list-disc pl-6">
          <li>Props ko directly modify nahi kiya ja sakta (they are read-only).</li>
          <li>Props ko kisi bhi component ko dynamic data pass karne ke liye use kiya ja sakta hai.</li>
          <li>Props ko function component aur class component dono mein pass kiya ja sakta hai.</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/Componnents"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link> 
          
          <Link to={"/react/events"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactProps;
