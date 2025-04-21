import React from "react";
import CssSidenav from "../CssSidenav";
import { Link } from "react-router-dom";

const CssBoxModel = () => {
  return (
    <>
      <CssSidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-purple-400 font-bold mb-4">
          📦 CSS Box Model
        </h1>

        <p className="mb-4">
          CSS Box Model ek important concept hai jo har element ko visual space
          mein define karta hai. Har element jo hum web page pe dekhte hain, wo
          ek box ke form mein hota hai. Ye box model ka structure kuch is tarah
          hota hai:
        </p>

        {/* 1. Content */}
        <h2 className="text-2xl text-yellow-300 font-semibold mt-6">
          1️⃣ Content
        </h2>
        <p className="mb-4">
          Ye wo area hai jahan content (text, image, etc.) displayed hota hai.
          Iska size aap element ke width aur height se control kar sakte hain.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
            {`div {
  width: 300px;
  height: 200px;
}`}
          </code>
        </pre>
        <p>
          👉 Is example mein, div element ka content ka size 300px wide aur
          200px high hoga.
        </p>

        {/* 2. Padding */}
        <h2 className="text-2xl text-yellow-300 font-semibold mt-6">
          2️⃣ Padding
        </h2>
        <p className="mb-4">
          Padding element ke content aur border ke beech ka space hota hai. Ye
          internal spacing hota hai jo content ko border se door rakhta hai. Aap
          padding ko top, right, bottom, aur left direction mein set kar sakte
          hain.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
            {`div {
  padding: 20px;
}`}
          </code>
        </pre>
        <p>
          👉 Is example mein, div element ke content ke aas-paas 20px ka padding
          hoga, jo content ko border se door rakhega.
        </p>

        {/* 3. Border */}
        <h2 className="text-2xl text-yellow-300 font-semibold mt-6">
          3️⃣ Border
        </h2>
        <p className="mb-4">
          Border element ke content aur margin ke beech ka line hota hai. Border
          ka style, thickness, aur color aap easily CSS se define kar sakte
          hain.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
            {`div {
  border: 5px solid red;
}`}
          </code>
        </pre>
        <p>
          👉 Is example mein, div element ke around ek 5px ka solid red border
          hoga.
        </p>

        {/* 4. Margin */}
        <h2 className="text-2xl text-yellow-300 font-semibold mt-6">
          4️⃣ Margin
        </h2>
        <p className="mb-4">
          Margin element ke border ke bahar ka space hota hai. Ye space elements
          ke beech ka gap define karta hai. Aap margin ko bhi top, right,
          bottom, aur left direction mein set kar sakte hain.
        </p>
        <pre className="bg-white text-black p-4 rounded-md overflow-auto">
          <code>
            {`div {
  margin: 30px;
}`}
          </code>
        </pre>
        <p>
          👉 Is example mein, div element ke around 30px ka margin hoga, jo
          doosre elements ke beech mein gap create karega.
        </p>
        <div className="w-full flex justify-center my-6">
          <img
            src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-box-model/box%20model.png"
            alt="DOM Diagram"
            className="w-full max-w-4xl h-auto rounded-lg border-2 border-gray-700 shadow-md"
          />
        </div>
        {/* Box Model Summary */}
        <h2 className="text-xl font-semibold text-purple-300 mt-6">
          ✅ Box Model Summary
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Content: Element ka main area, jisme content display hota hai.
          </li>
          <li>Padding: Content aur border ke beech ka space.</li>
          <li>
            Border: Element ke around ek line jo padding aur margin ke beech
            hoti hai.
          </li>
          <li>
            Margin: Border ke bahar ka space, jo elements ke beech ka gap define
            karta hai.
          </li>
        </ul>

        <p className="mt-6">
          Jab aap kisi element ko style karte hain, toh box model ko samajhna
          bahut zaroori hota hai, kyunki har ek part ka size aapke element ke
          total width aur height ko affect karta hai.
        </p>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/css/selectors"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/css/size"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CssBoxModel;
