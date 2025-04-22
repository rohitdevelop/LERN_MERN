import React from 'react';
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';
import { FaObjectGroup, FaListUl } from "react-icons/fa";

const JsObjects = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">📘 JavaScript Objects & Arrays</h1>

        <p className="text-lg text-gray-300">
          JavaScript me <span className="text-green-400 font-semibold">Objects</span> aur <span className="text-blue-400 font-semibold">Arrays</span> dono hi **non-primitive** data types hain. Inka use tab hota hai jab humko ek se zyada value ko store karna hota hai.
        </p>

        {/* 👇 Object Explanation */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center space-x-3">
            <FaObjectGroup className="text-2xl text-green-400" />
            <h2 className="text-2xl font-bold text-white">🟢 Object</h2>
          </div>
          <p className="text-gray-300">
            Object me data **key-value pair** ke form me store hota hai. Jaise:
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white overflow-auto">
{`const person = {
  name: "Rohit",
  age: 19,
  isStudent: true
};`}
          </pre>
          <p className="text-gray-300">
            Isme <code className="text-green-400">name</code>, <code className="text-green-400">age</code>, aur <code className="text-green-400">isStudent</code> ye sab keys hain.
          </p>
        </div>

        {/* 👇 Array Explanation */}
        <div className="mt-10 space-y-2">
          <div className="flex items-center space-x-3">
            <FaListUl className="text-2xl text-blue-400" />
            <h2 className="text-2xl font-bold text-white">🔵 Array</h2>
          </div>
          <p className="text-gray-300">
            Array ek list hoti hai, jisme multiple values ko ek sath rakha jata hai using index.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white overflow-auto">
{`const fruits = ["apple", "banana", "mango"];`}
          </pre>
          <p className="text-gray-300">
            Isme har value ka apna index hota hai. Jaise <code className="text-blue-400">fruits[0]</code> will give "apple".
          </p>
        </div>

        {/* 👇 Difference Table */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-white mb-4">🔁 Object vs Array</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border border-white text-sm md:text-base">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-white px-4 py-2">Aspect</th>
                  <th className="border border-white px-4 py-2">Object</th>
                  <th className="border border-white px-4 py-2">Array</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white px-4 py-2">Structure</td>
                  <td className="border border-white px-4 py-2">Key-Value Pair</td>
                  <td className="border border-white px-4 py-2">Index Based</td>
                </tr>
                <tr>
                  <td className="border border-white px-4 py-2">Access</td>
                  <td className="border border-white px-4 py-2">object.key</td>
                  <td className="border border-white px-4 py-2">array[index]</td>
                </tr>
                <tr>
                  <td className="border border-white px-4 py-2">Use</td>
                  <td className="border border-white px-4 py-2">Different types of info</td>
                  <td className="border border-white px-4 py-2">Similar items (list)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full flex items-center justify-between mt-12 px-4">
          <Link to={"/javascript/operators"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/data-types"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JsObjects;
