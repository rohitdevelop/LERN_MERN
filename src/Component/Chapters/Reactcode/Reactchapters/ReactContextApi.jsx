import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactContextApi = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React Context API 📦</h1>

        <h2 className="text-2xl font-semibold text-yellow-300">🔍 What is Context API?</h2>
        <p>
          React Context API ek built-in feature hai jo tumhe data ko components ke beech share karne deta hai <strong>bina props drilling</strong> ke.
        </p>
        <p>
          Jab tumhe kisi data (jaise theme, user info, language etc.) ko kai deeply nested components tak bhejna ho, tab Context API ka use hota hai.
        </p>

        <h2 className="text-2xl font-semibold text-green-400 mt-6">📌 Props Drilling Problem:</h2>
        <p>
          Jab ek component ka data tumhe 3-4 level neeche bhejna padta hai toh har level pe usse props me pass karna padta hai. Ye complex ban jata hai aur har jagah change karna padta hai.
        </p>
        <p><strong>Solution:</strong> Context API - ek global data store jaisa act karta hai!</p>

        <h2 className="text-xl font-semibold text-red-400 mt-6">🛠 How to Use Context API:</h2>
        <ol className="list-decimal pl-6">
          <li>Create a context using <code>createContext()</code></li>
          <li>Wrap your component tree with the <code>Provider</code></li>
          <li>Use <code>useContext()</code> to consume the context</li>
        </ol>

        <h3 className="text-xl font-semibold mt-4">💡 Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`// 1. Create Context
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

// 2. Create Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Rohit");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Use Context in any Component
const Profile = () => {
  const { user } = useContext(UserContext);
  return <h2>Hello, {user}!</h2>;
};

// 4. Wrap your App
function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

export default App;`}
        </pre>

        <h2 className="text-xl font-semibold text-blue-400 mt-6">✨ Benefits:</h2>
        <ul className="list-disc pl-6">
          <li>No need for props drilling</li>
          <li>Data accessible from anywhere in the tree</li>
          <li>Simple to use with <code>useContext()</code></li>
        </ul>

        <h2 className="text-xl font-semibold text-pink-400 mt-6">🧠 Tip:</h2>
        <p>
          Jab tumhare app me data bohot baar change hota hai (like auth or theme toggling), tab Context API best hota hai. But agar app bahut bada hai and data bahut dynamic hai — tab <strong>Redux</strong> zyada powerful tool hota hai.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/useMemo"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/redux"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactContextApi;
