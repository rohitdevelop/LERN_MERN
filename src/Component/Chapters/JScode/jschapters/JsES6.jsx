import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsES6 = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">📘 JavaScript ES6</h1>

        {/* ES6 Features Explanation */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">✅ What is ES6?</h2>
          <p className="text-gray-300">
            ES6 (ECMAScript 2015) JavaScript ka next version hai, jisme kai naye features aur syntax improvements aaye hain. Yeh code ko more readable aur maintainable banata hai. Aaiye kuch important ES6 features dekhte hain:
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">1. Let and Const</h3>
          <p className="text-gray-300">
            Pehle hum variables ko declare karte the `var` se. Lekin ES6 me humare paas `let` aur `const` aaye hain jo block-scoped hote hain.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
let a = 10; // Mutable
const b = 20; // Immutable`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">2. Arrow Functions</h3>
          <p className="text-gray-300">
            Arrow functions short syntax mein functions ko define karte hain. Ye `this` keyword ko lexical scope mein capture karte hain.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
const add = (a, b) => a + b;`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">3. Template Literals</h3>
          <p className="text-gray-300">
            Template literals string interpolation ko asaan banate hain. Hum variables ko direct strings mein insert kar sakte hain `${}` ke through.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
let name = 'John';
let greeting = \`Hello, \${name}!\`;`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">4. Destructuring</h3>
          <p className="text-gray-300">
            Destructuring se hum objects ya arrays se values ko easily extract kar sakte hain.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
let person = { name: 'John', age: 30 };
let { name, age } = person;`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">5. Classes</h3>
          <p className="text-gray-300">
            ES6 ne object-oriented programming ko JavaScript mein implement karne ke liye `class` ka syntax introduce kiya.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const john = new Person('John', 30);`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">6. Spread and Rest Operator</h3>
          <p className="text-gray-300">
            Spread operator (`...`) arrays aur objects ko expand karne ke liye use hota hai, jabki rest operator (`...`) arguments ko collect karta hai.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Spread Example:
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

// Rest Example:
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}`}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/dom"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/promises"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JsES6;
