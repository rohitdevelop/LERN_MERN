import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactRender = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">🧠 React Render (ReactDOM)</h1>

        <p>
          React ka main kaam hota hai UI render karna – yaani HTML ko browser par dikhana. Aur React ye kaam karta hai ek special function ke through:
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-4">👉 ReactDOM.render()</h2>

        <p>
          Ye function do arguments leta hai:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Jo HTML content render karna hai (for example: <code>{`<p>Hello</p>`}</code>)</li>
          <li>Jis element ke andar render karna hai (usually <code>document.getElementById("root")</code>)</li>
        </ul>

        <p className="mt-4">
          Example:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
{`ReactDOM.render(<p>Hello</p>, document.getElementById('root'));`}
        </pre>

        <p className="mt-4">
          Ab sawal ye aata hai ki <code>document.getElementById("root")</code> kaha milega? Yeh actually <code>public/index.html</code> file ke andar hota hai:
        </p>

        <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
{`<div id="root"></div>`}
        </pre>

        <p className="mt-4">
          ReactDOM.render ke through, React <code>root</code> element ke andar sab kuch inject karta hai.
        </p>

        <div className="w-full max-w-full">
  <img 
    src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/react-render-html/id-root.png" 
    alt="React Render HTML"
    className="w-4xl h-auto"
  />
</div>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/jsx"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/Componnents"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactRender;
