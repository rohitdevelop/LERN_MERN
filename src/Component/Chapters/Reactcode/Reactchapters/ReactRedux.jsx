import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactRedux = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React Redux 🧠</h1>

        <h2 className="text-2xl font-semibold text-yellow-300">🔍 What is Redux?</h2>
        <p>
          Redux ek **state management library** hai jo React (ya kisi bhi JS framework) ke saath use hoti hai. Jab tumhare app mein **multiple components ek hi data ko use karte ho**, ya data deeply nested components tak bhejna padta hai, tab Redux ka use hota hai.
        </p>

        <h2 className="text-xl font-semibold text-red-400 mt-6">🧩 Problem: </h2>
        <p>
          Bade apps mein data flow ko manage karna mushkil ho jata hai — har component ko props dena ya Context API use karna bhi kabhi kabhi messy ho jata hai.
        </p>
        <p>
          Redux tumhare app ke liye ek **central data store** banata hai — jaha saare global states store hote hain.
        </p>

        <h2 className="text-xl font-semibold text-green-400 mt-6">💡 Redux Ka Kaam:</h2>
        <ul className="list-disc pl-6">
          <li>Store - saari global state rakhta hai</li>
          <li>Actions - describe karte hain kya change hoga</li>
          <li>Reducers - batate hain kaise change hoga</li>
          <li>Dispatch - changes ko trigger karta hai</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-400 mt-6">🛠 Simple Redux Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`// 1. Install Redux and React-Redux
npm install redux react-redux

// 2. Create Action
export const increment = () => ({ type: "INCREMENT" });

// 3. Create Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

// 4. Create Store
import { createStore } from "redux";
const store = createStore(counterReducer);

// 5. Wrap App with Provider
import { Provider } from "react-redux";
<Provider store={store}>
  <App />
</Provider>

// 6. Use Redux State & Dispatch in Components
import { useSelector, useDispatch } from "react-redux";
const count = useSelector((state) => state);
const dispatch = useDispatch();
<button onClick={() => dispatch(increment())}>+</button>`}
        </pre>

        <h2 className="text-xl font-semibold text-pink-400 mt-6">✨ Redux vs Context API:</h2>
        <ul className="list-disc pl-6">
          <li>Redux zyada scalable hai bade apps ke liye</li>
          <li>Context API chhote ya medium apps ke liye enough hai</li>
          <li>Redux mein states predictable aur debug-friendly hote hain (Redux DevTools ke saath)</li>
        </ul>

        <h2 className="text-xl font-semibold text-lime-400 mt-6">🔥 Real-Life Use Case:</h2>
        <p>
          Suppose tum ek shopping app bana rahe ho jisme cart items, user login info, theme preference jaise data sab components use karte hain. In sab ko handle karne ke liye Redux perfect choice hai.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/context-api"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/performance"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactRedux;
