import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const Htmlforms = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        <h1 className="text-3xl text-cyan-500 font-semibold">HTML Forms in Detail 📝</h1>

        <p className="text-white">
          HTML forms humare web page par user se input lene ke liye use hote hain. Ye forms text fields, radio buttons, checkboxes, dropdowns, aur buttons jaise elements ka use karte hain. Form ke data ko server par bhejne ke liye hum <code>&lt;form&gt;</code> tag ka use karte hain. 🚀
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">HTML Form ka Structure 🏗️</h2>
        <p className="text-white">
          HTML form ko banane ke liye humein <code>&lt;form&gt;</code> element ka use karna padta hai. Ye form ke andar user input lene wale sabhi elements ko include karta hai, jaise ki text fields, radio buttons, checkboxes, etc.
        </p>

       
        <pre >
            {`<form action="server-endpoint" method="POST">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="username" required/>

  <label for="email">Email:</label>
  <input type="email" id="email" name="useremail" required/>

  <input type="submit" value="Submit"/>
</form>`}
        </pre>
         
        <p className="text-white">
          Upar diye gaye code mein, humne form element ka use kiya hai. Form ka action attribute batata hai ki form ka data kis server endpoint ko bhejna hai. Method attribute define karta hai ki data ko kaise bhejna hai: POST ya GET.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Form Elements 🤖</h2>
        <p className="text-white">
          HTML forms mein kai tarah ke elements hote hain jinhe hum user input ke liye use karte hain. Kuch common form elements hain:
        </p>
        <ul className="list-disc pl-6 text-white">
  <li><strong className='text-cyan-400'>Text Input:</strong> &lt;input type="text"&gt; - User se text input lene ke liye use hota hai.</li>
  <li><strong className='text-cyan-400'>Email Input:</strong> &lt;input type="email"&gt; - Email address input lene ke liye.</li>
  <li><strong className='text-cyan-400'>Radio Buttons:</strong> &lt;input type="radio"&gt; - Ek option select karne ke liye.</li>
  <li><strong className='text-cyan-400'>Checkboxes:</strong> &lt;input type="checkbox"&gt; - Multiple options select karne ke liye.</li>
  <li><strong className='text-cyan-400'>Submit Button:</strong> &lt;input type="submit"&gt; - Form ko submit karne ke liye button.</li>
</ul>


        <h2 className="text-2xl font-semibold mt-6 text-red-500">Form ka Example 🚀</h2>
        <p className="text-white">
          Yahan ek simple form ka example diya gaya hai jisme user ka naam aur email address liya jaata hai:
        </p>
      
        <pre>
            {`<form action="submit-form" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username" placeholder="Enter your name" required/>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="useremail" placeholder="Enter your email" required/>
  
  <input type="submit" value="Submit"/>
</form>`}
        </pre>
       

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Form Attributes 🛠️</h2>
        <p className="text-white">
          Form elements mein kuch important attributes hote hain jo unka behavior define karte hain. Kuch important attributes yeh hain:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li><strong className='text-cyan-400'>action:</strong> Form ka data kis URL par bhejna hai.</li>
          <li><strong className='text-cyan-400'>method:</strong> Data ko bhejne ka method (POST ya GET).</li>
          <li><strong className='text-cyan-400'>required:</strong> Ye attribute input field ko mandatory bana deta hai.</li>
          <li><strong className='text-cyan-400'>placeholder:</strong> Input field mein ek default text display hota hai jo user ko input lene mein help karta hai.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">HTML Form ka Use Case 🎯</h2>
        <p className="text-white">
          HTML forms ka use hum website ke contact page, user registration, login forms, surveys, aur feedback forms mein karte hain. Yeh web applications mein user se data collect karne ka ek important tool hai. 🖱️
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Form Validation 🚦</h2>
        <p className="text-white">
          Form validation ka use hum form ko submit karne se pehle user input ki checking karne ke liye karte hain. HTML mein hum required, <strong>pattern</strong>, aur <strong>minlength/maxlength</strong> attributes ka use karte hain input validation ke liye.
        </p>
          
        <pre >
            {`<form action="submit-form" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username" required placeholder="Enter your name" />
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="useremail" required placeholder="Enter your email" />
  
  <input type="submit" value="Submit"/>
</form>`}
        </pre>
   

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Key Takeaways 🔑</h2>
        <ul className="list-disc pl-6 text-white">
          <li>HTML forms user se input lene ka ek tareeka hai. 🖥️</li>
          <li>Form elements mein text fields, radio buttons, checkboxes, aur submit button shamil hain. 🛠️</li>
          <li>Form attributes jaise action, method, aur required form ka behavior define karte hain. 📜</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/inline-elements"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/tables"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Htmlforms;
