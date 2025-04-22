import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactPerformance = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React Performance Optimization 🏎️</h1>

        <h2 className="text-2xl font-semibold text-yellow-300">⚡ Performance ka Importance</h2>
        <p>
          React apps jab bade hote hain, toh unki performance kaafi critical ho jati hai. Agar app slow hai, toh user experience bhi poor hoga. **Performance optimization** ka main aim yeh hai ki app jaldi load ho, smooth experience mile aur unnecessary rendering avoid ho.
        </p>

        <h2 className="text-xl font-semibold text-red-400 mt-6">🔥 React Performance Optimization Techniques</h2>
        
        <h3 className="text-lg font-semibold text-green-400 mt-4">1. Use of React.memo</h3>
        <p>
          React.memo ek higher-order component hai jo unnecessary re-renders ko prevent karta hai. Jab component ka props same hota hai, toh React usse dobara render nahi karta. Yeh mainly **functional components** ke liye use hota hai.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
{`const MyComponent = React.memo((props) => {
  // Component code
  return <div>{props.name}</div>;
});
`}
        </pre>

        <h3 className="text-lg font-semibold text-blue-400 mt-4">2. Avoid Inline Functions in JSX</h3>
        <p>
          JSX mein inline functions likhne se har render ke saath nayi function reference create hoti hai, jisse re-renders unnecessary ho sakte hain. Iske liye, tumhe functions ko **outside JSX** define karna chahiye.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
{`// Bad: Inline function in JSX
<button onClick={() => handleClick()}>Click Me</button>

// Good: Define function outside JSX
const handleClick = () => { console.log("Clicked!"); };
<button onClick={handleClick}>Click Me</button>
`}
        </pre>

        <h3 className="text-lg font-semibold text-purple-400 mt-4">3. Lazy Loading with React.lazy</h3>
        <p>
          **React.lazy** ko use karke tum large components ko **on-demand load** kar sakte ho. Yeh tumhare app ki initial load time ko reduce karne mein madad karta hai. Agar koi component zarurat padne par hi render hota hai, toh overall performance improve hoti hai.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
{`const MyComponent = React.lazy(() => import('./MyComponent'));

<React.Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</React.Suspense>
`}
        </pre>

        <h3 className="text-lg font-semibold text-pink-400 mt-4">4. useMemo and useCallback</h3>
        <p>
          **useMemo** and **useCallback** hooks ko use karke tum expensive calculations aur function re-creations ko prevent kar sakte ho. 
          - **useMemo** ko tum expensive calculations ko cache karne ke liye use karte ho.
          - **useCallback** ko tum function references ko cache karne ke liye use karte ho, taaki unnecessary re-renders avoid ho sake.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
{`const memoizedValue = useMemo(() => expensiveCalculation(input), [input]);
const memoizedCallback = useCallback(() => { handleAction(); }, [dependency]);
`}
        </pre>

        <h3 className="text-lg font-semibold text-orange-400 mt-4">5. Virtualization</h3>
        <p>
          Agar tumhare paas large lists ya tables hain, toh tum **virtualization** techniques use kar sakte ho. Yeh technique **only visible items** ko render karte hue unnecessary DOM nodes ko avoid karti hai, jisse performance boost hota hai. Libraries like **react-window** or **react-virtualized** iske liye kaafi popular hain.
        </p>

        <h2 className="text-xl font-semibold text-lime-400 mt-6">⚙️ Best Practices for React Optimization</h2>
        <ul className="list-disc pl-6">
          <li>Components ko **small** rakhne ki koshish karo</li>
          <li>Jab possible ho toh **PureComponent** ya **React.memo** use karo</li>
          <li>**Code splitting** ka use karo taaki large bundles ko efficiently load kiya ja sake</li>
          <li>React DevTools ka use karo to track re-renders and performance issues</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-400 mt-6">📈 Monitoring Performance</h3>
        <p>
          Tum React ke **Profiler** API ka use karke performance ko track kar sakte ho. Isse tumhe pata chalega ki kis component ka render time zyada hai aur kaha optimization ki zarurat hai.
        </p>
        
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/redux"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/error-boundaries"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactPerformance;
