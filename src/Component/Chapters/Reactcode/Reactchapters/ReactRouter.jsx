import React from "react";
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactRouter = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
 
        <h1 className="text-3xl font-bold text-cyan-400">React Router 🚦</h1>
        <p className="text-white">
          React Router ek library hai jo React applications mein navigation handle karti hai. Iska use hum different pages ke beech navigation ke liye karte hain bina page ko reload kiye. Yani ki ek single page application (SPA) bana sakte hain jisme hum different views ko render kar sakte hain. 🚀
        </p>

        <h3 className="text-xl font-semibold text-white mt-4">React Router Setup ⚙️</h3>
        <p className="text-white">
          React Router ko use karne ke liye sabse pehle aapko React Router DOM install karna padta hai:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          {`npm install react-router-dom`}
        </pre>
        <p className="text-white mt-4">
          Uske baad aapko apne `App.js` file mein routing setup karni hoti hai, jaise:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          {`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
          
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}`}
        </pre>

        <h3 className="text-xl font-semibold text-white mt-4">Key Concepts of React Router 🔑</h3>
        <ul className="list-disc pl-6 text-white">
          <li><strong>BrowserRouter 🌐</strong>: Ye component router ko wrap karta hai jo URLs ke changes ko track karta hai.</li>
          <li><strong>Route 🛣️</strong>: Ye specific path ko match karta hai aur jab woh path match hota hai, tab associated component ko render karta hai.</li>
          <li><strong>Switch 🔄</strong>: Ye ensure karta hai ki ek time par sirf ek route render ho, jo match karta ho.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-4">React Router Example 📝</h3>
        <p className="text-white">
          Yahan ek simple example diya gaya hai:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          {`import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Home() {
  return <h2>Home Page </h2>;
}

function About() {
  return <h2>About Page </h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}`}
        </pre>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/events"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS 
            </button>
          </Link>

          <Link to={"/react/Memo"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT 
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactRouter;
