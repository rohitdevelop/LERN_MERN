import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Subnav from "./Component/Chapters/Subnav";
import Practice from './Component/practice/practice';
 
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
import Cssworks from './Component/Chapters/CSScode/CSSchapters/Cssworks';
import CssSelector from './Component/Chapters/CSScode/CSSchapters/CssSelector';
import CssSize from './Component/Chapters/CSScode/CSSchapters/CssSize';
import CssTransitions from './Component/Chapters/CSScode/CSSchapters/CssTransitions';
import CssBoxModel from './Component/Chapters/CSScode/CSSchapters/CssBoxModel';
import CssSyntax from './Component/Chapters/CSScode/CSSchapters/CssSyntax';
import CssUseAdd from './Component/Chapters/CSScode/CSSchapters/CssUseAdd';
import CssDisplay from './Component/Chapters/CSScode/CSSchapters/CssDisplay';
import Cssforms from './Component/Chapters/CSScode/CSSchapters/Cssforms';
import Csspositions from './Component/Chapters/CSScode/CSSchapters/Csspositions';
import CssPseudo from './Component/Chapters/CSScode/CSSchapters/CssPseudo';
import CssFlex from './Component/Chapters/CSScode/CSSchapters/CssFlex';
import CssMedia from './Component/Chapters/CSScode/CSSchapters/CssMedia';
import Cssgrid from './Component/Chapters/CSScode/CSSchapters/Cssgrid';
import CssResposive from './Component/Chapters/CSScode/CSSchapters/CssResposive';
import Cssvideos from './Component/Chapters/CSScode/CSSchapters/Cssvideos';
import JsConditionals from './Component/Chapters/JScode/jschapters/JsConditionals';
import JsLetVarConst from './Component/Chapters/JScode/jschapters/JsLetVarConst';
import JsLoops from './Component/Chapters/JScode/jschapters/JsLoops';
import JsObjects from './Component/Chapters/JScode/jschapters/JsObjects';
import JsOperators from './Component/Chapters/JScode/jschapters/JsOperators';
import Jsprimitives from './Component/Chapters/JScode/jschapters/Jsprimitives';
import JsPromises from './Component/Chapters/JScode/jschapters/JsPromises';
import JsVideo from './Component/Chapters/JScode/jschapters/JsVideo';
import Jsexcution from './Component/Chapters/JScode/jschapters/Jsexcution';
import JsFunctions from './Component/Chapters/JScode/jschapters/JsFunctions';
import JsHoisting from './Component/Chapters/JScode/jschapters/JsHoisting';
import JsES6 from './Component/Chapters/JScode/jschapters/JsES6';
import JsEvents from './Component/Chapters/JScode/jschapters/JsEvents';
import JsDataTypes from './Component/Chapters/JScode/jschapters/JsDataTypes';
import JsDOM from './Component/Chapters/JScode/jschapters/JsDOM';
import ReactSetup from "./Component/Chapters/Reactcode/Reactchapters/ReactSetup";
import ReactJsx from "./Component/Chapters/Reactcode/Reactchapters/ReactJsx";
import ReactRender from "./Component/Chapters/Reactcode/Reactchapters/ReactRender";
import ReactComponnents from "./Component/Chapters/Reactcode/Reactchapters/ReactComponnents";
import ReactProps from "./Component/Chapters/Reactcode/Reactchapters/ReactProps";
import ReactEvents from "./Component/Chapters/Reactcode/Reactchapters/ReactEvents";
import ReactRouter from "./Component/Chapters/Reactcode/Reactchapters/ReactRouter";
import ReactMemo from "./Component/Chapters/Reactcode/Reactchapters/ReactMemo";
import ReactHooks from "./Component/Chapters/Reactcode/Reactchapters/ReactHooks";
import ReactStates from "./Component/Chapters/Reactcode/Reactchapters/ReactStates";
import ReactUseContext from "./Component/Chapters/Reactcode/Reactchapters/ReactUseContext";
import ReactUseRef from "./Component/Chapters/Reactcode/Reactchapters/ReactUseRef";
import ReactUseMemo from "./Component/Chapters/Reactcode/Reactchapters/ReactUseMemo";
import ReactContextApi from "./Component/Chapters/Reactcode/Reactchapters/ReactContextApi";
import ReactRedux from "./Component/Chapters/Reactcode/Reactchapters/ReactRedux";
import ReactPerformance from "./Component/Chapters/Reactcode/Reactchapters/ReactPerformance";
import ReactErrorBoundaries from "./Component/Chapters/Reactcode/Reactchapters/ReactErrorBoundaries";
import ReactVideo from "./Component/Chapters/Reactcode/Reactchapters/ReactVideo";
  const Router = () => {
     return (
     <div>
       <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/chapters" element={<Subnav />}></Route>
  <Route path='/practice' element={<Practice />}></Route>
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
         <Route path="/css/works" element={<Cssworks />}></Route>
         <Route path="/css/syntax" element={<CssSyntax />}></Route>
         <Route path="/css/use-add" element={<CssUseAdd />}></Route>
         <Route path="/css/selectors" element={<CssSelector />}></Route> 
         <Route path="/css/box-model" element={<CssBoxModel />}></Route>
         <Route path="/css/size" element={<CssSize />}></Route>
         <Route path="/css/display" element={<CssDisplay />}></Route>
         <Route path="/css/forms" element={<Cssforms />}></Route>
         <Route path="/css/positions" element={<Csspositions />}></Route>
         <Route path="/css/pseudo" element={<CssPseudo />}></Route>
         <Route path="/css/flexbox" element={<CssFlex />}></Route>
         <Route path="/css/grid" element={<Cssgrid />}></Route>
         <Route path="/css/animations" element={<CssTransitions />}></Route>
         <Route path="/css/media-queries" element={<CssMedia />}></Route>
         <Route path="/css/responsive" element={<CssResposive />}></Route>
         <Route path="/css/video" element={<Cssvideos/>}></Route>
 {/* ................. */}
 {/* chapte 4 Java Scipt  */}
 <Route path="/javascript/what-is-js" element={<JsIntro />}></Route>
 <Route path="/javascript/excution" element={<Jsexcution />}></Route>
 <Route path="/javascript/let-var-const" element={<JsLetVarConst />}></Route>
 <Route path="/javascript/primitives" element={<Jsprimitives />}></Route>
 <Route path="/javascript/operators" element={<JsOperators />}></Route>
 <Route path="/javascript/objects" element={<JsObjects />}></Route>
 <Route path="/javascript/data-types" element={<JsDataTypes />}></Route>
 <Route path="/javascript/functions" element={<JsFunctions/>}></Route>
 <Route path="/javascript/conditionals" element={<JsConditionals />}></Route>
 <Route path="/javascript/loops" element={<JsLoops />}></Route>
 <Route path="/javascript/events" element={<JsEvents />}></Route>
 <Route path="/javascript/dom" element={<JsDOM />}></Route>
 <Route path="/javascript/es6" element={<JsES6 />}></Route>
 <Route path="/javascript/promises" element={<JsPromises />}></Route>
 <Route path="/javascript/hoisting" element={<JsHoisting />}></Route>
 <Route path="/javascript/video" element={<JsVideo />}></Route>
  {/* ................. */}
 {/* chapte 5 React  */}
 <Route path="/react/what-is-react" element={<ReactIntro />}></Route>
 <Route path="/react/setup" element={<ReactSetup />} />
<Route path="/react/jsx" element={<ReactJsx />} />
<Route path="/react/render" element={<ReactRender />} />
<Route path="/react/Componnents" element={<ReactComponnents />} />
<Route path="/react/Props" element={<ReactProps />} />
<Route path="/react/events" element={<ReactEvents />} />
<Route path="/react/router" element={<ReactRouter />} />
<Route path="/react/Memo" element={<ReactMemo />} />
<Route path="/react/hooks" element={<ReactHooks />} />
<Route path="/react/states" element={<ReactStates />} />
<Route path="/react/useContext" element={<ReactUseContext />} />
<Route path="/react/useRef" element={<ReactUseRef />} />
<Route path="/react/useMemo" element={<ReactUseMemo />} />
<Route path="/react/context-api" element={<ReactContextApi />} />
<Route path="/react/redux" element={<ReactRedux />} />
<Route path="/react/performance" element={<ReactPerformance />} />
<Route path="/react/error-boundaries" element={<ReactErrorBoundaries />} />
<Route path="/react/video" element={<ReactVideo />} />
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
 