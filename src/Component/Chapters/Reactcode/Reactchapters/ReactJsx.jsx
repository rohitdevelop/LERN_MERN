import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactJsx = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">JSX in React</h1>

        <p className="text-white text-lg">
          JSX ka full form hai <span className="text-cyan-400 font-semibold">JavaScript XML</span>. Yeh ek syntax extension hai JavaScript ke liye, jisse hum HTML jaise code ko directly JavaScript mein likh sakte hain.
        </p>

        <h2 className="text-2xl font-bold text-cyan-400">📌 Why JSX?</h2>
        <ul className="text-white text-lg list-disc pl-6 space-y-2">
          <li>JSX se hum readable aur maintainable UI components bana sakte hain.</li>
          <li>Yeh JavaScript ke saath mix ho jata hai, toh hum dynamic values use kar sakte hain.</li>
          <li>JSX ko browser samajh nahi pata, isliye yeh Babel ke through JavaScript mein convert hota hai.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400">✅ JSX Example</h2>
        <p className="text-white text-lg">Ek simple JSX element ka example:</p>
        <pre>
{`const element = <h1>Hello Rohit!</h1>;`}
        </pre>

        <p className="text-white text-lg">
          Yeh JSX code compile hone ke baad kuch aise banta hai:
        </p>
        <pre>
{`const element = React.createElement("h1", null, "Hello Rohit!");`}
        </pre>

        <h2 className="text-2xl font-bold text-cyan-400">📌 Rules of JSX</h2>
        <ul className="text-white text-lg list-disc pl-6 space-y-2">
          <li>JSX elements ko ek hi parent element ke andar return karna hota hai.</li>
          <li>HTML attributes jaise `class` ko `className` likhna hota hai.</li>
         </ul>

        <h2 className="text-2xl font-bold text-cyan-400">✅ Example in a Component</h2>
        <pre>
{`function Welcome() {
  return <h1 className="text-cyan-400">Welcome to React, Rohit!</h1>;
}`}
        </pre>

        <p className="text-white text-lg">
          JSX React ka base hai — isse tum UI ko JavaScript ke andar easily design kar sakte ho.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/setup"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/render"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactJsx;
