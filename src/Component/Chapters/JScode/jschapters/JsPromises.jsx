import React from 'react'
import { Link } from "react-router-dom";
import JsSidebar from '../JsSidebar';

const JsPromises = () => {
  return (
    <>
      <JsSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">📘 JavaScript Promises</h1>

        {/* Promises Explanation */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">✅ What is a Promise?</h2>
          <p className="text-gray-300">
            Promise JavaScript ka ek feature hai jo asynchronous operations ko handle karta hai. Jab hum kisi task ko asynchronously execute karte hain (e.g., API call), promise ka use hota hai result ko manage karne ke liye. Ek promise ya to resolved hota hai (success) ya rejected (failure).
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">1. Basic Promise Syntax</h3>
          <p className="text-gray-300">
            Promise ko create karte waqt hum ek function pass karte hain jo `resolve` ya `reject` ko call karta hai jab task complete hota hai.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example of a Promise:
let promise = new Promise((resolve, reject) => {
  let success = true; // Try changing this to false
  if(success) {
    resolve('Task completed successfully');
  } else {
    reject('Task failed');
  }
});

promise
  .then(result => console.log(result))   // .then is called when promise is resolved
  .catch(error => console.log(error));   // .catch is called when promise is rejected`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">2. The `.then()` Method</h3>
          <p className="text-gray-300">
            `.then()` method promise ke resolve hone par execute hota hai. Ye ek callback function ko accept karta hai jisme result pass hota hai.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
promise
  .then(result => {
    console.log(result); // 'Task completed successfully'
  })
  .catch(error => {
    console.log(error);  // Error handling
  });`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">3. The `async`/`await` Syntax</h3>
          <p className="text-gray-300">
            `async` aur `await` JavaScript me promises ko handle karne ka ek simplified method hai. `async` function promise return karta hai, aur `await` expression promise ke resolution ka wait karta hai.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data'); 
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

fetchData();`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">4. Error Handling with `.catch()` and `try/catch`</h3>
          <p className="text-gray-300">
            `.catch()` method ko hum promise ke rejection ko handle karne ke liye use karte hain. Agar `async`/`await` ka use kar rahe hain, to `try/catch` block ka use kiya jata hai errors ko handle karne ke liye.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example:
let promiseWithError = new Promise((resolve, reject) => {
  reject('Something went wrong!');
});

promiseWithError
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Error: 'Something went wrong!'

async function asyncExample() {
  try {
    let result = await fetch('https://api.example.com/incorrect');
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.log('Caught error in async function:', error);  // Handling error
  }
}

asyncExample();`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-200 mt-4">5. Chaining Promises</h3>
          <p className="text-gray-300">
            Promises ko chain kiya ja sakta hai jisse hum sequential tasks ko handle kar sakte hain. `.then()` ka use karte hue hum multiple steps perform kar sakte hain.
          </p>
          <pre className="bg-black p-4 rounded-xl text-sm text-white">
{`// Example of chaining promises:
let task = new Promise((resolve, reject) => {
  resolve('First task complete');
});

task
  .then(result => {
    console.log(result); // First task complete
    return 'Second task complete';
  })
  .then(result => {
    console.log(result); // Second task complete
  })
  .catch(error => console.log(error)); // Catch errors in any of the steps`}
          </pre>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/javascript/es6"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/javascript/hoisting"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JsPromises;
