 import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Subnav from "./Component/Chapters/Subnav";
 
import Intro from "./Component/Chapters/fundamentals/webchapters/Intro";
import Internet from "./Component/Chapters/fundamentals/webchapters/Internet";
import Server from "./Component/Chapters/fundamentals/webchapters/Server";
import Whatinter from "./Component/Chapters/fundamentals/webchapters/Whatinter";
import Whatnet from "./Component/Chapters/fundamentals/webchapters/Whatnet";
import InternetLayers from "./Component/Chapters/fundamentals/webchapters/InternetLayers";
import Protocols from "./Component/Chapters/fundamentals/webchapters/Protocols";
import BrowserInfo from "./Component/Chapters/fundamentals/webchapters/BrowserInfo";
import Components from "./Component/Chapters/fundamentals/webchapters/Component";
import GitInfo from "./Component/Chapters/fundamentals/webchapters/GitInfo";
import GitDetails from "./Component/Chapters/fundamentals/webchapters/GitDetails";
import Video from "./Component/Chapters/fundamentals/webchapters/Video";
import HtmlIntro from "./Component/Chapters/HTMLcode/htmlChapter/HtmlIntro";
import CssIntro from "./Component/Chapters/CSScode/CSSchapters/CssIntro";
import JsIntro from "./Component/Chapters/JScode/jschapters/jsInto";
import ReactIntro from "./Component/Chapters/Reactcode/Reactchapters/ReactIntro";
import NodeIntro from "./Component/Chapters/Nodecode/Nodechapters/NodeIntro";
import MongoIntro from "./Component/Chapters/Mongocode/MongoChapters/MongoIntro";
import ExpressIntro from "./Component/Chapters/Expressnode/expressChapters/ExpressIntro";
import HtmlWoking from "./Component/Chapters/HTMLcode/htmlChapter/HtmlWoking";
import HtmlExcution from "./Component/Chapters/HTMLcode/htmlChapter/HtmlExcution";
import HtmlStructure from "./Component/Chapters/HTMLcode/htmlChapter/HtmlStructure";
import HtmlTags from "./Component/Chapters/HTMLcode/htmlChapter/HtmlTags";
import HtmlAtributes from "./Component/Chapters/HTMLcode/htmlChapter/HtmlAtributes";
import HtmlElements from "./Component/Chapters/HTMLcode/htmlChapter/HtmlElements";
import HtmlClassId from "./Component/Chapters/HTMLcode/htmlChapter/HtmlClassId";
import HtmlBlock from "./Component/Chapters/HTMLcode/htmlChapter/HtmlBlock";
import HtmlInline from "./Component/Chapters/HTMLcode/htmlChapter/HtmlInline";
import HtmlTables from "./Component/Chapters/HTMLcode/htmlChapter/HtmlTables";
import HtmlLists from "./Component/Chapters/HTMLcode/htmlChapter/HtmlLists";
import HtmlVideos from "./Component/Chapters/HTMLcode/htmlChapter/HtmlVideos";
import Htmlforms from "./Component/Chapters/HTMLcode/htmlChapter/Htmlforms";
 const Router = () => {
     return (
     <div>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chapters" element={<Subnav />}></Route>
{/* chapter 1 Web fundamentals*/}
        <Route path="/introduction/web-development" element={<Intro />}></Route>
        <Route path="/introduction/how-websites-work" element={<Server />}></Route>
        <Route path="/introduction/client-vs-server" element={<Internet />}></Route>
        <Route path="/INTERNET-NETWORK/internet" element={<Whatinter />}></Route>
        <Route path="/INTERNET-NETWORK/network" element={<Whatnet />}></Route>
        <Route path="/INTERNET-NETWORK/layers" element={<InternetLayers />}></Route>
        <Route path="/INTERNET-NETWORK/protocols" element={<Protocols />}></Route>
        <Route path="/BROWSERS/informaition" element={<BrowserInfo />}></Route>
        <Route path="/BROWSERS/componnets" element={<Components />}></Route>
        <Route path="/GIT/GITHUB/informaition" element={<GitInfo />}></Route>
        <Route path="/GIT/GITHUB/details" element={<GitDetails />}></Route>
        <Route path="/Video/LERN_MERN" element={<Video />}></Route>
 {/* ............... */}
 {/* chapte 2 HTML  */}
 <Route path="/html/what-is-html" element={<HtmlIntro />}></Route>
 <Route path="/html/working" element={<HtmlWoking />}></Route>
 <Route path="/html/Excution" element={<HtmlExcution />}></Route>
 <Route path="/html/structure" element={<HtmlStructure />}></Route>
 <Route path="/html/tags" element={<HtmlTags />}></Route>
 <Route path="/html/element" element={<HtmlElements />}></Route>
 <Route path="/html/atributes" element={<HtmlAtributes />}></Route>

 <Route path="/html/class-id" element={<HtmlClassId />}></Route>
 <Route path="/html/block-elements" element={<HtmlBlock />}></Route>
 <Route path="/html/inline-elements" element={<HtmlInline />}></Route>
 <Route path="/html/forms" element={<Htmlforms />}></Route>
 <Route path="/html/tables" element={ <HtmlTables/>}></Route>
 <Route path="/html/lists" element={<HtmlLists />}></Route>
 <Route path="/html/videos" element={<HtmlVideos />}></Route>
 {/* ................. */}
 {/* chapte 3 css  */}

 <Route path="/css/what-is-css" element={<CssIntro />}></Route>



 {/* ................. */}
 {/* chapte 4 Java Scipt  */}

 <Route path="/javascript/what-is-js" element={<JsIntro />}></Route>



 {/* ................. */}
 {/* chapte 5 React  */}

 <Route path="/react/what-is-react" element={<ReactIntro />}></Route>



 {/* ................. */}
 {/* chapte 6 Node,js  */}

 <Route path="/node/what-is-node" element={<NodeIntro />}></Route>



 {/* ................. */}
 {/* chapte 7 express  */}

 <Route path="/express/What-is-express" element={<ExpressIntro />}></Route>



 {/* ................. */}
 {/* chapte 8 MongoDB  */}

 <Route path="/mongo/What-is-mongo" element={<MongoIntro />}></Route>



 {/* ................. */}
      </Routes>
     </div>
   )
 }
 
 export default Router
 