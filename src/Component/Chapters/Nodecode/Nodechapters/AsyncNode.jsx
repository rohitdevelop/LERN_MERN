import React from 'react';
import NodeSidebar from '../NodeSidebar';
import { Link } from 'react-router-dom';

const AsyncNode = () => {
  return (
    <>
      <NodeSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">

        <div className="pl-4 pr-2">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-400">
            🔄 Asynchronous JavaScript in Node.js
          </h1>

          {/* What is Asynchronous JavaScript? */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            📌 Asynchronous JavaScript kya hai?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Asynchronous JavaScript ka matlab hai ki code ek waqt me ek task ko execute kar raha hota hai, lekin dusra task concurrently execute ho sakta hai, bina pehle wale task ke complete hone ka wait kiye.
            Yeh isliye useful hai kyunki hum multiple tasks ko parallel execute kar sakte hain, jaise database queries, API calls, file reading, etc., bina ki execution ko block kiye.
          </p>

          <img 
            src="https://via.placeholder.com/600x300.png?text=Async+JavaScript+Concept" 
            alt="Asynchronous Concept" 
            className="w-full rounded-lg mb-6" 
          />

          {/* Example 1: Callbacks */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            🔁 Example 1: Callbacks
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Callbacks ek basic asynchronous technique hai. Jab ek task complete hota hai, to uske baad dusre task ko execute karne ke liye callback function call kiya jata hai.
            Callback function ek function hota hai jo kisi dusre function ko argument ke roop me pass hota hai aur usse async task complete hone par call kiya jata hai.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// Callback Example
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000); // Simulating API call with a delay
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
`}
            </pre>
          </div>

          <p className="text-base leading-relaxed mb-4">
            Is example mein `fetchData` function ek callback ko pass karta hai jo data fetch hone ke baad call hota hai. Yaha humne `setTimeout` ka use kiya hai taaki hum simulate kar sake ek async task.
          </p>

          {/* Example 2: Promises */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🏅 Example 2: Promises
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Promises ek aur approach hai asynchronous operations ko handle karne ki. Promise ek object hai jo future me kisi value ko represent karta hai.
            Jab async operation complete hota hai, to promise `resolve` ya `reject` hota hai. Agar resolve hota hai, to usme result hota hai, aur agar reject hota hai to error hoti hai.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// Promise Example
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if(success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data fetch failed.");
      }
    }, 2000);
  });
}

fetchData()
  .then(result => console.log(result))   // Handle success
  .catch(error => console.log(error));   // Handle error
`}
            </pre>
          </div>

          <p className="text-base leading-relaxed mb-4">
            Yaha `fetchData` ek Promise return karta hai. Agar operation successful hota hai, to `resolve` call hota hai, aur agar koi error hoti hai to `reject` call hota hai.
            `.then()` ka use result ko handle karne ke liye hota hai aur `.catch()` se error ko handle kiya jata hai.
          </p>

          {/* Example 3: Async/Await */}
          <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">
            ⏳ Example 3: Async/Await
          </h2>
          <p className="text-base leading-relaxed mb-4">
            `async/await` ek syntactic sugar hai jo promises ke sath kaam karta hai aur code ko much cleaner aur readable banata hai. `async` function ke andar aap `await` ka use kar sakte hain, jo kisi promise ko wait karta hai aur result ko return karta hai.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
            <pre>
{`// Async/Await Example
async function fetchData() {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched with async/await!");
    }, 2000);
  });
  console.log(result);
}

fetchData();
`}
            </pre>
          </div>

          <p className="text-base leading-relaxed mb-4">
            Is example mein, `async` function ko use karke hum asynchronous code ko synchronous ki tarah likh sakte hain. Humne `await` ka use karke promise ko wait kiya aur uska result handle kiya.
          </p>

          {/* Best Practices */}
          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-2">
            🎯 Best Practices for Asynchronous JavaScript
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
            <li>✅ Hamesha error handling ko implement karein, especially promises me `.catch()` ka use karein.</li>
            <li>✅ `async/await` ka use karein jab aapko clean aur readable code chahiye ho.</li>
            <li>✅ Multiple promises ko handle karne ke liye `Promise.all()` ka use karein.</li>
            <li>✅ Long-running async tasks ko manage karne ke liye background processing use karein (e.g., workers, queues).</li>
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/node/rest-api"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/node/video"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AsyncNode;
