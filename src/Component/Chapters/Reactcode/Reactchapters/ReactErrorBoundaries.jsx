import React from 'react';
import ReactSidebar from "../ReactSidebar";
import { Link } from "react-router-dom";

const ReactErrorBoundaries = () => {
  return (
    <>
      <ReactSidebar />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">React Error Boundaries 🚨</h1>

        <h2 className="text-2xl font-semibold text-yellow-300">⚡ Error Boundaries ka Importance</h2>
        <p>
          **Error Boundaries** ek special technique hai jo React me **runtime errors** ko handle karne ke liye use hoti hai. Jab bhi koi error React component ke render phase mein aati hai, toh Error Boundaries us error ko catch karke, app crash hone se rokne ka kaam karti hain. Isse users ko ek clean error message ya fallback UI dikhayi jati hai, instead of app crash hone ke.
        </p>

        <h2 className="text-xl font-semibold text-red-400 mt-6">🔥 Error Boundaries ka Kaam Kaise Karta Hai?</h2>
        <p>
          **Error Boundaries** React me ek special component hota hai, jo apne children components me agar koi error aata hai toh usko handle kar leta hai. Yeh component **`componentDidCatch()`** lifecycle method ko use karta hai, jo error ko catch karke fallback UI dikhata hai.
        </p>

        <h3 className="text-lg font-semibold text-green-400 mt-4">1. Error Boundary ka Basic Structure</h3>
        <p>
          Error Boundaries ko implement karne ke liye tumhe ek **class component** banana padta hai, jisme **`componentDidCatch()`** method ko implement karte ho. Yeh method do parameters leta hai: error aur error info.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorInfo: errorInfo
    });
    // You can log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
`}
        </pre>

        <h3 className="text-lg font-semibold text-blue-400 mt-4">2. Using Error Boundaries in App</h3>
        <p>
          Tum apne **Error Boundary component** ko apne app ke parent component me wrap kar sakte ho. Agar kisi child component me error aati hai, toh woh error boundary ko handle karega.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
{`<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
`}
        </pre>

        <h2 className="text-xl font-semibold text-orange-400 mt-6">🔥 Error Boundaries ka Use Kab Karna Chahiye?</h2>
        <ul className="list-disc pl-6">
          <li>Jab tum complex components bana rahe ho, jisme external APIs ya third-party libraries use ho rahe ho.</li>
          <li>Jab tumhe user ko ek clean error message ya fallback UI dikhana ho.</li>
          <li>Jab tumhare components asynchronously render hote ho, toh errors ko handle karna zaroori hota hai.</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-400 mt-6">⚙️ Error Boundaries ki Limitations</h3>
        <p>
          Error Boundaries sirf **rendering errors** ko catch karte hain. Agar event handlers ya asynchronous code me koi error aata hai, toh woh error boundary se bahar ho sakta hai. Isliye tumhe **try-catch** blocks ka use karke event handlers aur promises ke errors bhi handle karne chahiye.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/react/performance"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/react/video"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactErrorBoundaries;
