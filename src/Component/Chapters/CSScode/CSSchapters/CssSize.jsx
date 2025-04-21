import React from 'react'
import CssSidenav from '../CssSidenav'
import { Link } from "react-router-dom";

const CssSize = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-400 font-bold mb-4">📏 CSS Size Units - Absolute & Relative</h1>

        <p className="mb-4">
          CSS mein size units ka use elements ke size ko control karne ke liye kiya jata hai. 
          Yeh units kuch fixed hote hain, aur kuch relative, jo screen size ya parent element ke size ke hisaab se adjust hote hain.
        </p>

        <h2 className="text-2xl text-yellow-300 font-semibold mt-6">1️⃣ Absolute Units</h2>
        <p className="mb-4">
          **Absolute units** ek fixed measurement hote hain. Inka size screen ya container ke size ke hisaab se change nahi hota.
        </p>
        
        <ul className="space-y-2 text-lg">
          <li><strong>cm (centimetres):</strong> 1 cm = 37.8px</li>
          <li><strong>mm (millimetres):</strong> 1 mm = 3.78px</li>
          <li><strong>in (inches):</strong> 1 in = 96px = 2.54cm</li>
          <li><strong>pt (points):</strong> 1pt = 1/72th of 1 inch</li>
          <li><strong>pc (picas):</strong> 1pc = 1/6th of 1 inch</li>
          <li><strong>px (pixels):</strong> 1px = 1/96th of 1 inch</li>
        </ul>
        
        <p className="mb-4">
          Generally, hum **pixels (px)** ka use karte hain jab hum kisi element ki dimensions set karte hain, kyunki yeh fixed size hota hai.
        </p>

        <h2 className="text-2xl text-yellow-300 font-semibold mt-6">2️⃣ Relative Units</h2>
        <p className="mb-4">
          **Relative units** ka size parent element ya viewport ke size ke hisaab se adjust hota hai. Yeh units responsive design mein kaafi helpful hote hain.
        </p>

        <ul className="space-y-2 text-lg">
          <li><strong>em:</strong> Yeh parent element ke font size ke relative hota hai. Example: Agar parent ka font size 16px hai, toh 1em = 16px hoga.</li>
          <li><strong>ex:</strong> Yeh existing font ke X-height ke relative hota hai.</li>
          <li><strong>ch:</strong> Yeh character “0” ke width/radius ke relative hota hai.</li>
          <li><strong>rem:</strong> Yeh root element ke font size ke relative hota hai. Example: Agar root ka font size 16px hai, toh 1rem = 16px.</li>
          <li><strong>vw (viewport width):</strong> Yeh 1% of the viewport width ke relative hota hai.</li>
          <li><strong>vh (viewport height):</strong> Yeh 1% of the viewport height ke relative hota hai.</li>
          <li><strong>% (percentage):</strong> Yeh parent element ke size ke relative hota hai.</li>
        </ul>

        <h2 className="text-2xl text-yellow-300 font-semibold mt-6">3️⃣ Other Metrics in CSS</h2>
        <p className="mb-4">
          CSS mein aur bhi kuch important metrics hote hain jo aapko styling mein madad karte hain:
        </p>

        <ul className="space-y-2 text-lg">
          <li><strong>Opacity:</strong> Opacity 0 se 1 ke beech hota hai. 0 ka matlab hai full transparency (bilkul transparent), aur 1 ka matlab hai full opacity (bilkul visible).</li>
          <li><strong>RGB:</strong> Yeh color define karta hai red, green, aur blue ki intensity se. Har component ka value 0 se 255 ke beech hota hai.
            Example: `rgb(255, 0, 0)` → Red color.
          </li>
          <li><strong>RGBA:</strong> Yeh RGB ka extension hai, jisme A ka matlab hai alpha (opacity). Example: `rgba(255, 0, 0, 0.5)` → 50% transparency ke saath red color.</li>
          <li><strong>HSL:</strong> Yeh color ko hue, saturation, aur lightness ke basis par define karta hai. HSL values 0 se 360 ke beech hoti hain (hue), aur saturation aur lightness 0 se 100% ke beech hote hain.</li>
          <li><strong>HSLA:</strong> Yeh HSL ka extension hai, jisme A ka matlab hai alpha (opacity). Example: `hsla(0, 100%, 50%, 0.5)` → 50% opacity ke saath red color.</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/box-model"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/display"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CssSize;
