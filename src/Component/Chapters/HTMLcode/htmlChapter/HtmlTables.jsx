import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from "react-router-dom";

const HtmlTables = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
      <h1 className="text-3xl text-cyan-500 font-semibold">HTML Tables in Detail 📊</h1>

<p className="text-white">
  HTML tables humare web pages par data ko rows aur columns mein display karne ke liye use hote hain. Tables ki madad se hum tabular data ko organize kar sakte hain. Basic structure mein <strong>&lt;table&gt;</strong>, <strong>&lt;tr&gt;</strong>, <strong>&lt;th&gt;</strong>, aur <strong>&lt;td&gt;</strong> tags ka use hota hai. 🚀
</p>

<h2 className="text-2xl font-semibold mt-6 text-red-500">HTML Table ka Structure 🏗️</h2>
<p className="text-white">
  Table ko banane ke liye hum <strong>&lt;table&gt;</strong> tag ka use karte hain. Har row ko <strong>&lt;tr&gt;</strong> (table row) tag ke andar rakha jaata hai, aur har column ko <strong>&lt;td&gt;</strong> (table data) tag ke andar rakha jaata hai. Table ka heading define karne ke liye hum <strong>&lt;th&gt;</strong> tag ka use karte hain.
</p>


        <pre >
        
            {`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Rohit</td>
    <td>19</td>
    <td>Noida</td>
  </tr>
  <tr>
    <td>Aman</td>
    <td>22</td>
    <td>Delhi</td>
  </tr>
</table>`}
     
        </pre>

        <p className="text-white">
          Upar diye gaye example mein, humne ek simple table banaya hai jisme teen columns hain: Name, Age, aur City. Har row mein humne kisi user ka naam, age, aur city data display kiya hai.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Table Elements 🛠️</h2>
        <p className="text-white">
          HTML table mein kai important elements hote hain:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li><strong className='text-cyan-400'>&lt;table&gt;:</strong> Table ko define karta hai.</li>
          <li><strong className='text-cyan-400'>&lt;tr&gt;:</strong> Table row ko define karta hai. Har row mein columns hote hain.</li>
          <li><strong className='text-cyan-400'>&lt;th&gt;:</strong> Table header cells ko define karta hai, jo normally bold aur center-aligned hote hain.</li>
          <li><strong className='text-cyan-400'>&lt;td&gt;:</strong> Table data cells ko define karta hai, jahan hum data rakhte hain.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Table Example with Heading 🚀</h2>
        <p className="text-white">
          Yahan ek example diya gaya hai jisme table ke header row ko define kiya gaya hai aur data ko display kiya gaya hai:
        </p>
        <pre  >
 
            {`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Rohit</td>
    <td>19</td>
    <td>Noida</td>
  </tr>
  <tr>
    <td>Aman</td>
    <td>22</td>
    <td>Delhi</td>
  </tr>
</table>`}
        
        </pre>

        <p className="text-white">
          Is example mein, humne <code>border="1"</code> attribute add kiya hai jo table ke cells ke around ek border show karega. Ye ek basic styling hai.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Table with Multiple Rows & Columns 📊</h2>
        <p className="text-white">
          Tables mein multiple rows aur columns ho sakte hain. Jaise ki humare data ko different categories mein organize kar sakte hain.
        </p>
          
        <pre >
            {`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    <th>Profession</th>
  </tr>
  <tr>
    <td>Rohit</td>
    <td>19</td>
    <td>Noida</td>
    <td>Developer</td>
  </tr>
  <tr>
    <td>Aman</td>
    <td>22</td>
    <td>Delhi</td>
    <td>Designer</td>
  </tr>
  <tr>
    <td>Simran</td>
    <td>25</td>
    <td>Gurgaon</td>
    <td>Manager</td>
  </tr>
</table>`}
        </pre>
        <img
          src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-tables/colspan-rowspan.png" 
            alt="VS Code Open Folder"
          className="md:w-2xl md:h-auto rounded-lg shadow-lg my-4"
        />
        <h2 className="text-2xl font-semibold mt-6 text-red-500">Table Attributes ⚙️</h2>
        <p className="text-white">
          Tables ke kuch important attributes hote hain, jaise:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li><strong className='text-cyan-400'>border:</strong> Table ke around border show karne ke liye use hota hai. (e.g., <strong>border="1"</strong>)</li>
          <li><strong className='text-cyan-400'>cellpadding:</strong> Cell ke andar space define karta hai. (e.g., <strong>cellpadding="10"</strong>)</li>
          <li><strong className='text-cyan-400'>cellspacing:</strong> Cells ke beech mein space define karta hai. (e.g., <strong>cellspacing="5"</strong>)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-red-500">Key Takeaways 🔑</h2>
        <ul className="list-disc pl-6 text-white">
          <li>HTML tables ka use hum data ko rows aur columns mein organize karne ke liye karte hain. 📊</li>
          <li>Table elements mein <strong>&lt;table&gt;</strong>, <strong>&lt;tr&gt;</strong>, <strong>&lt;th&gt;</strong>, aur <strong>&lt;td&gt;</strong> shamil hain. 🔧</li>
          <li>Table attributes jaise <strong>border</strong>, <strong>cellpadding</strong>, aur <strong>cellspacing</strong> table ka appearance customize karte hain. 🎨</li>
        </ul>

        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/forms"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/lists"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlTables;
