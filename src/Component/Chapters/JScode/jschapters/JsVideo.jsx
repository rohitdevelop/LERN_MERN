import React from 'react'
import { Link } from "react-router-dom";
 import JsSidebar from '../JsSidebar';
const JsVideo = () => {
  return (
    <>
    <JsSidebar />
    <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
      <h1 className="text-3xl font-bold text-red-500 mb-4">📘 best og luck</h1>

      



      <div className="w-full flex items-center justify-between mt-8 px-4">
               <Link to={"/javascript/hoisting"}>
                 <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
                   PREVIOUS
                 </button>
               </Link>
     
               <Link to={"/react/what-is-react"}>
                 <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-md">
                   REACT
                 </button>
        </Link>
      </div>
    </div>
  </>
  )
}

export default JsVideo
