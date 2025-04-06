import React from "react";
import Websidenav from "../Websidenav";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <Websidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-0">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          🌐 What is Web Development?
        </h1>
        <p className="text-lg leading-relaxed">
          <span className="text-red-400 font-semibold">Web Development</span> ka
          matlab hota hai internet par chalne wali{" "}
          <span className="text-cyan-400">websites ya applications</span> banana
          — jaise ki 🛒 e-commerce websites (Amazon), 👥 social media
          (Facebook), ya 🧑‍💻 portfolio websites.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400">
          📚 What do we learn in Web Development?
        </h2>
        <ul className="list-disc list-inside space-y-1 text-base ml-4">
          <li>
            🎨 <span className="text-red-400">UI/UX Design</span> – User
            Interface (jo user dekhta hai) & User Experience (jo feel karta hai)
          </li>
          <li>
            ⚙️ <span className="text-red-400">Interactivity</span> – Buttons,
            forms, animations etc. using JavaScript
          </li>
          <li>
            🗄️ <span className="text-red-400">Managing Data</span> – Login, user
            info, form data with backend/database
          </li>
          <li>
            📱 <span className="text-red-400">Responsiveness</span> – Website
            should look good on all devices (mobile, tablet, desktop)
          </li>
        </ul>

        <h1 className="text-3xl font-bold text-cyan-400 mt-8">
          🛠️ Creating Websites or Web Apps
        </h1>
        <p className="text-lg leading-relaxed">
          <span className="text-red-400 font-semibold">Websites</span> are
          mainly informational – jaise portfolio, blogs. 📄 <br />
          <span className="text-red-400 font-semibold">Web Apps</span> are
          interactive – jaise Gmail, Facebook, YouTube. 📲
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8">
          ⚔️ Frontend vs Backend
        </h2>
        <ul className="list-disc list-inside space-y-2 text-base ml-4">
          <li>
            🎨 <span className="text-red-400 font-semibold">Frontend</span>: Ye
            wo part hota hai jo{" "}
            <span className="text-cyan-400 font-semibold">
              user ko dikhai deta hai
            </span>
            . Isme design, colors, fonts, buttons, forms sab aata hai. Tech:{" "}
            <span className="text-cyan-400">HTML, CSS, JavaScript, React</span>.
          </li>

          <li>
            🛍️ <span className="text-red-400 font-semibold">Example</span>:
            Amazon par product list, images, "Add to Cart" — ye sab frontend
            hai.
          </li>

          <li>
            🔐 <span className="text-red-400 font-semibold">Backend</span>: Ye
            wo part hota hai jo{" "}
            <span className="text-cyan-400 font-semibold">
              server ke andar chhupa hota hai
            </span>
            . Ye data handle karta hai, login verify karta hai. Tech:{" "}
            <span className="text-cyan-400">
              Node.js, Express, MongoDB, MySQL, APIs
            </span>
            .
          </li>

          <li>
            🔍 <span className="text-red-400 font-semibold">Example</span>: Jab
            aap login karte ho aur server aapka password check karta hai — ye
            backend ka kaam hai.
          </li>

          <li>
            🧭 <span className="text-red-400 font-semibold">Frontend</span> =
            Client Side,{" "}
            <span className="text-red-400 font-semibold">Backend</span> = Server
            Side.
          </li>

          <li>
            🤝 Dono milkar ek complete app banate hain:{" "}
            <span className="text-cyan-400">Frontend</span> user se interact
            karta hai, <span className="text-cyan-400">Backend</span> logic aur
            data handle karta hai.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-6">
          🆚 Static vs Dynamic Websites
        </h2>
        <table className="w-full mt-4 text-sm border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 border border-gray-700">🔍 Feature</th>
              <th className="p-2 border border-gray-700">🧱 Static Website</th>
              <th className="p-2 border border-gray-700">⚙️ Dynamic Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-700">📋 Content</td>
              <td className="p-2 border border-gray-700">Same for everyone</td>
              <td className="p-2 border border-gray-700">
                Changes with user/data
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-700">🧪 Tech Used</td>
              <td className="p-2 border border-gray-700">HTML, CSS</td>
              <td className="p-2 border border-gray-700">
                HTML, CSS, JS + Backend
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-700">🖼️ Examples</td>
              <td className="p-2 border border-gray-700">Portfolio, Blog</td>
              <td className="p-2 border border-gray-700">Facebook, Amazon</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-6 text-base">
          As a{" "}
          <span className="text-cyan-400 font-semibold">Web Developer</span>,
          you will learn to make websites that are:
        </p>
        <ul className="list-disc list-inside space-y-1 text-base ml-4">
          <li>💡 Beautiful and user-friendly</li>
          <li>🧠 Interactive and functional</li>
          <li>📱 Responsive on all devices</li>
          <li>🔗 Connected with real-time databases</li>
        </ul>

        <p className="mt-4 text-red-400 font-semibold text-lg">
          🚀 Get ready to build amazing projects and become a full-stack web
          developer!
        </p>
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md">
            PREVIOUS
          </button>

          <Link to={"/introduction/how-websites-work"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Intro;
