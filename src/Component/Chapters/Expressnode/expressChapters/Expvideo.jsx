import React from 'react'
import ExprSidebar from "../ExprSidebar";
import { Link } from "react-router-dom";

const Expvideo = () => {
  return (
    <>
    <ExprSidebar />
    <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 text-white p-6 overflow-y-auto space-y-6 pb-24 md:pb-6">
  



        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/express/env"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/mongo/What-is-mongo"}>
            <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-md">
              MONGODB
            </button>
          </Link>
        </div>
      </div>
  </>
  )
}

export default Expvideo
 
 