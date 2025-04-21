import React from 'react'
import { Link } from "react-router-dom";
import CssSidenav from '../CssSidenav';

const CssResposive = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">Responsive Web Design</h1>

        <p>
          Responsive Web Design ka matlab hai ki website har device par achhi dikhe — chahe wo mobile ho, tablet ya desktop. Iska main goal hai user experience ko har screen size par best banana.
        </p>

        <h2 className="text-xl mt-6 text-white">🎯 Kaise banate hain Responsive Design?</h2>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Media Queries:</strong> Alag-alag screen sizes ke liye alag CSS rules apply karna</li>
          <li><strong>Fluid Layouts:</strong> Width ko fixed px ki jagah <code>%</code> ya <code>vw</code> mein dena</li>
          <li><strong>Flexible Images:</strong> Images ko container ke according scale karna</li>
          <li><strong>Mobile First Approach:</strong> Pehle mobile ke liye style likhna, phir bade screens ke liye</li>
        </ul>

        <h2 className="text-xl mt-6 text-white">🧪 Example:</h2>
        <pre className="bg-gray-800 p-4 rounded-xl text-sm mt-2"><code>{`
.container {
  width: 100%;
  padding: 20px;
}

img {
  max-width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .container {
    padding: 50px;
  }
}
        `}</code></pre>

        <p className="text-sm text-gray-300 mt-2">
          Upar wale example mein image screen ke hisaab se adjust hoti hai, aur container ka padding bada screen par increase ho jaata hai.
        </p>

        <h2 className="text-xl mt-6 text-white">📱 Tools & Frameworks for Responsive Design:</h2>
        <ul className="list-disc list-inside ml-4">
          <li>✅ Tailwind CSS</li>
          <li>✅ Bootstrap</li>
          <li>✅ CSS Grid & Flexbox</li>
          <li>✅ Chrome DevTools (for testing responsiveness)</li>
        </ul>

        <h2 className="text-xl mt-6 text-white">💡 Tips:</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Minimum font size 14px for mobile readability</li>
          <li>Buttons ko touch-friendly banao (height & padding zyada rakho)</li>
          <li>Images ke liye <code>max-width: 100%</code> use karo</li>
          <li>Use rem/em instead of px wherever possible</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-10 px-4">
          <Link to={"/css/media-queries"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/video"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CssResposive
