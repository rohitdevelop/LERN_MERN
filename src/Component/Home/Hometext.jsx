import React from "react";
import { Link } from "react-router-dom";

const Hometext = () => {
Link
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold">LERN_MERN</h1>
      <h2 className="text-xl md:text-2xl mt-2">MAN SE</h2>
      <Link to={'/chapters'}>
      <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
        Let's Start
      </button>
      </Link>
    </div>
  );
};

export default Hometext;
