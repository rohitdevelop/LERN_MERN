import React from 'react';
import Htmlsidenav from '../Htmlsidenav';
import { Link } from 'react-router-dom';

const HtmlTags = () => {
  return (
    <>
      <Htmlsidenav />
      <div className="fixed top-16 md:left-72 md:w-[80%] w-full h-[calc(100vh-4rem)] bg-gray-900 p-6 text-white overflow-y-auto space-y-6 text-left pb-24 md:pb-6">
        
        <h1 className="text-3xl font-bold text-cyan-400">🏷️ HTML Tags</h1>
        <p className="text-lg">
          Agar aap ek <span className="text-red-400">beautiful website</span> banana chahte ho toh,
          <span className="text-red-400 font-semibold"> HTML Tags </span> sabse important hote hain. 💻
          Ek HTML tag ek <span className="text-red-400">container</span> ki tarah kaam karta hai jisme content ya doosre tags hote hain.
          Tags hamesha <span className="text-red-400">&lt; &gt;</span> ke beech likhe jaate hain.
          Ye browser ko batate hain ki <span className="text-red-400">content ko kaise dikhana hai</span>.
        </p>
     

        <h2 className="text-2xl text-cyan-300 font-bold mt-8">🔥 Commonly Used HTML Tags</h2>
        <p className="text-white">Yeh wo tags hain jo 70% cases mein use hote hain:</p>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">🧱 Document Structure Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;!DOCTYPE html&gt;</code>: Document ka type batata hai</li>
          <li><code className="text-red-400">&lt;html&gt;</code>: Pura HTML document wrap karta hai</li>
          <li><code className="text-red-400">&lt;head&gt;</code>: Meta info aur links rakhta hai</li>
          <li><code className="text-red-400">&lt;body&gt;</code>: Webpage ka main content</li>
        </ul>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">🔖 Metadata Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;title&gt;</code>: Page ka title set karta hai</li>
          <li><code className="text-red-400">&lt;meta&gt;</code>: Extra info jaise charset, viewport</li>
          <li><code className="text-red-400">&lt;link&gt;</code>: External stylesheet ya favicon</li>
        </ul>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">📝 Text Formatting Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;p&gt;</code>: Paragraph</li>
          <li><code className="text-red-400">&lt;h1&gt; to &lt;h6&gt;</code>: Headings (h1 sabse bada)</li>
          <li><code className="text-red-400">&lt;strong&gt;</code>: Bold</li>
          <li><code className="text-red-400">&lt;em&gt;</code>: Italic</li>
          <li><code className="text-red-400">&lt;br&gt;</code>: Line break</li>
          <li><code className="text-red-400">&lt;hr&gt;</code>: Horizontal line</li>
        </ul>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">📋 List Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;ul&gt;</code>: Unordered list</li>
          <li><code className="text-red-400">&lt;ol&gt;</code>: Ordered list</li>
          <li><code className="text-red-400">&lt;li&gt;</code>: List item</li>
        </ul>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">🔗 Hyperlink & Media Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;a&gt;</code>: Anchor / Link</li>
          <li><code className="text-red-400">&lt;img&gt;</code>: Image</li>
          <li><code className="text-red-400">&lt;audio&gt;</code>: Audio</li>
          <li><code className="text-red-400">&lt;video&gt;</code>: Video</li>
        </ul>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">🧾 Form Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;form&gt;</code>: Form start karta hai</li>
          <li><code className="text-red-400">&lt;input&gt;</code>: Input field</li>
          <li><code className="text-red-400">&lt;textarea&gt;</code>: Long text input</li>
          <li><code className="text-red-400">&lt;button&gt;</code>: Button</li>
          <li><code className="text-red-400">&lt;select&gt;</code>: Dropdown</li>
          <li><code className="text-red-400">&lt;option&gt;</code>: Option inside dropdown</li>
        </ul>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">📊 Table Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;table&gt;</code>: Table start karta hai</li>
          <li><code className="text-red-400">&lt;tr&gt;</code>: Table row</li>
          <li><code className="text-red-400">&lt;td&gt;</code>: Table data</li>
          <li><code className="text-red-400">&lt;th&gt;</code>: Table header</li>
          <li><code className="text-red-400">&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</code>: Table groups</li>
        </ul>

        <h3 className="text-xl text-cyan-400 font-semibold mt-4">🔤 Semantic Tags</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><code className="text-red-400">&lt;header&gt;, &lt;footer&gt;</code>: Page ke sections</li>
          <li><code className="text-red-400">&lt;article&gt;, &lt;section&gt;</code>: Logical blocks</li>
          <li><code className="text-red-400">&lt;nav&gt;</code>: Navigation bar</li>
          <li><code className="text-red-400">&lt;aside&gt;</code>: Sidebar</li>
        </ul>

        <h2 className="text-2xl text-cyan-300 font-bold mt-10">🧑‍🏫 Paired vs Unpaired Tags</h2>
        <h3 className="text-lg text-red-300 mt-2">1️⃣ Paired Tags (Container Tags)</h3>
        <p className="ml-4">Yeh 2 parts mein hote hain — opening aur closing:</p>
        <pre className="bg-gray-800 p-3 rounded-xl text-red-400 overflow-x-auto ml-4">
{`<p>This is a paragraph.</p>
<h1>This is a heading.</h1>`}
        </pre>

        <h3 className="text-lg text-red-300 mt-4">2️⃣ Unpaired Tags (Self-Closing Tags)</h3>
        <p className="ml-4">Yeh khud mein hi complete hote hain, close nahi karte:</p>
        <pre className="bg-gray-800 p-3 rounded-xl text-red-400 overflow-x-auto ml-4">
{`<br/>
<hr/>
<img src="image.jpg" alt="Example Image"/>`}
        </pre>
        <p className="text-white text-sm italic mt-2 ml-4">
          ⚠️ React ya JSX mein hamesha self-closing tags ko close karna padta hai like: <code className="text-red-400">&lt;br /&gt;</code>, <code className="text-red-400">&lt;img /&gt;</code>
        </p>

        <h2 className="text-2xl text-cyan-300 font-bold mt-10">🖼️ Pictorial Representation</h2>
        <p className="text-white mb-2">Niche image mein aap dekh sakte ho kaise HTML tags ek tree-like structure banate hain 🌳:</p>
        <img 
          src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-tags/representation-of-html-tags.png"
           alt="HTML Tag Structure"
          className="rounded-xl bg-gradient-to-b from-purple-400 to-amber-100 shadow-lg"
        />
        <div className="w-full flex items-center justify-between mt-8 px-4">
          <Link to={"/html/structure"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              PREVIOUS
            </button>
          </Link>

          <Link to={"/html/element"}>
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HtmlTags;
