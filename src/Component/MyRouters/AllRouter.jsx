import React,{useEffect , useState} from "react";
import { Routes, Route,useLocation  } from "react-router-dom";

import Home from "../Home/Home";
import Subnav from "../Chapters/Subnav";
import Prep from "../practice/Prep";
import AboutSection from "../about/Aboutsection.jsx";

import QuizPage from "../practice/quize/QuizPage";
import Quizhtml from "../practice/quize/Quizhtml";
import Quizecss from "../practice/quize/Quizecss";
import Quizejs from "../practice/quize/Quizejs";
import Quizereact from "../practice/quize/Quizereact";
import Quizenodejs from "../practice/quize/Quizenodejs.jsx";
import Quizeexpress from "../practice/quize/Quizeexpress";
import Quizemongodb from "../practice/quize/Quizemongodb";

import Taskweb from "../practice/Tasks/Taskweb";
import Taskhtml from "../practice/Tasks/Taskhtml";
import Taskcss from "../practice/Tasks/Taskcss";
import Taskjs from "../practice/Tasks/Taskjs";
import Taskreact from "../practice/Tasks/Taskreact";
import Tasknode from "../practice/Tasks/Tasknode";
import Taskexpress from "../practice/Tasks/Taskexpress";
import Taskmongo from "../practice/Tasks/Taskmongo";

import Intro from "../Chapters/fundamentals/webchapters/Intro";
import Internet from "../Chapters/fundamentals/webchapters/Internet";
import Server from "../Chapters/fundamentals/webchapters/Server";
import Whatinter from "../Chapters/fundamentals/webchapters/Whatinter";
import Whatnet from "../Chapters/fundamentals/webchapters/Whatnet";
import InternetLayers from "../Chapters/fundamentals/webchapters/InternetLayers";
import Protocols from "../Chapters/fundamentals/webchapters/Protocols";
import BrowserInfo from "../Chapters/fundamentals/webchapters/BrowserInfo";
import Components from "../Chapters/fundamentals/webchapters/Component";
import GitInfo from "../Chapters/fundamentals/webchapters/GitInfo";
import GitDetails from "../Chapters/fundamentals/webchapters/GitDetails";
import Video from "../Chapters/fundamentals/webchapters/Video";

import HtmlWoking from "../Chapters/HTMLcode/htmlChapter/HtmlWoking";
import HtmlExcution from "../Chapters/HTMLcode/htmlChapter/HtmlExcution";
import HtmlStructure from "../Chapters/HTMLcode/htmlChapter/HtmlStructure";
import HtmlTags from "../Chapters/HTMLcode/htmlChapter/HtmlTags";
import HtmlAtributes from "../Chapters/HTMLcode/htmlChapter/HtmlAtributes";
import HtmlElements from "../Chapters/HTMLcode/htmlChapter/HtmlElements";
import HtmlClassId from "../Chapters/HTMLcode/htmlChapter/HtmlClassId";
import HtmlBlock from "../Chapters/HTMLcode/htmlChapter/HtmlBlock";
import HtmlInline from "../Chapters/HTMLcode/htmlChapter/HtmlInline";
import HtmlTables from "../Chapters/HTMLcode/htmlChapter/HtmlTables";
import HtmlLists from "../Chapters/HTMLcode/htmlChapter/HtmlLists";
import HtmlVideos from "../Chapters/HTMLcode/htmlChapter/HtmlVideos";
import Htmlforms from "../Chapters/HTMLcode/htmlChapter/Htmlforms";
import HtmlIntro from "../Chapters/HTMLcode/htmlChapter/HtmlIntro";

import CssIntro from "../Chapters/CSScode/CSSchapters/CssIntro";
import Cssworks from "../Chapters/CSScode/CSSchapters/Cssworks";
import CssSelector from "../Chapters/CSScode/CSSchapters/CssSelector";
import CssSize from "../Chapters/CSScode/CSSchapters/CssSize";
import CssTransitions from "../Chapters/CSScode/CSSchapters/CssTransitions";
import CssBoxModel from "../Chapters/CSScode/CSSchapters/CssBoxModel";
import CssSyntax from "../Chapters/CSScode/CSSchapters/CssSyntax";
import CssUseAdd from "../Chapters/CSScode/CSSchapters/CssUseAdd";
import CssDisplay from "../Chapters/CSScode/CSSchapters/CssDisplay";
import Cssforms from "../Chapters/CSScode/CSSchapters/Cssforms";
import Csspositions from "../Chapters/CSScode/CSSchapters/Csspositions";
import CssPseudo from "../Chapters/CSScode/CSSchapters/CssPseudo";
import CssFlex from "../Chapters/CSScode/CSSchapters/CssFlex";
import CssMedia from "../Chapters/CSScode/CSSchapters/CssMedia";
import Cssgrid from "../Chapters/CSScode/CSSchapters/Cssgrid";
import CssResposive from "../Chapters/CSScode/CSSchapters/CssResposive";
import Cssvideos from "../Chapters/CSScode/CSSchapters/Cssvideos";

import JsIntro from "../Chapters/JScode/jschapters/jsInto";
import JsConditionals from "../Chapters/JScode/jschapters/JsConditionals";
import JsLetVarConst from "../Chapters/JScode/jschapters/JsLetVarConst";
import JsLoops from "../Chapters/JScode/jschapters/JsLoops";
import JsObjects from "../Chapters/JScode/jschapters/JsObjects";
import JsOperators from "../Chapters/JScode/jschapters/JsOperators";
import Jsprimitives from "../Chapters/JScode/jschapters/Jsprimitives";
import JsPromises from "../Chapters/JScode/jschapters/JsPromises";
import JsVideo from "../Chapters/JScode/jschapters/JsVideo";
import Jsexcution from "../Chapters/JScode/jschapters/Jsexcution";
import JsFunctions from "../Chapters/JScode/jschapters/JsFunctions";
import JsHoisting from "../Chapters/JScode/jschapters/JsHoisting";
import JsES6 from "../Chapters/JScode/jschapters/JsES6";
import JsEvents from "../Chapters/JScode/jschapters/JsEvents";
import JsDataTypes from "../Chapters/JScode/jschapters/JsDataTypes";
import JsDOM from "../Chapters/JScode/jschapters/JsDOM";

import ReactIntro from "../Chapters/Reactcode/Reactchapters/ReactIntro";
import ReactSetup from "../Chapters/Reactcode/Reactchapters/ReactSetup";
import ReactJsx from "../Chapters/Reactcode/Reactchapters/ReactJsx";
import ReactRender from "../Chapters/Reactcode/Reactchapters/ReactRender";
import ReactComponnents from "../Chapters/Reactcode/Reactchapters/ReactComponnents";
import ReactProps from "../Chapters/Reactcode/Reactchapters/ReactProps";
import ReactEvents from "../Chapters/Reactcode/Reactchapters/ReactEvents";
import ReactRouter from "../Chapters/Reactcode/Reactchapters/ReactRouter";
import ReactMemo from "../Chapters/Reactcode/Reactchapters/ReactMemo";
import ReactHooks from "../Chapters/Reactcode/Reactchapters/ReactHooks";
import ReactStates from "../Chapters/Reactcode/Reactchapters/ReactStates";
import ReactUseContext from "../Chapters/Reactcode/Reactchapters/ReactUseContext";
import ReactUseRef from "../Chapters/Reactcode/Reactchapters/ReactUseRef";
import ReactUseMemo from "../Chapters/Reactcode/Reactchapters/ReactUseMemo";
import ReactContextApi from "../Chapters/Reactcode/Reactchapters/ReactContextApi";
import ReactRedux from "../Chapters/Reactcode/Reactchapters/ReactRedux";
import ReactPerformance from "../Chapters/Reactcode/Reactchapters/ReactPerformance";
import ReactErrorBoundaries from "../Chapters/Reactcode/Reactchapters/ReactErrorBoundaries";
import ReactVideo from "../Chapters/Reactcode/Reactchapters/ReactVideo";

import NodeIntro from "../Chapters/Nodecode/Nodechapters/NodeIntro";
import NodeVsExpress from "../Chapters/Nodecode/Nodechapters/NodeVsExpress";
import EjsVsJsx from "../Chapters/Nodecode/Nodechapters/EjsVsJsx";
import NodeServer from "../Chapters/Nodecode/Nodechapters/NodeServer";
import ExportImport from "../Chapters/Nodecode/Nodechapters/ExportImport";
import ErrorHandling from "../Chapters/Nodecode/Nodechapters/ErrorHandling";
import RestApi from "../Chapters/Nodecode/Nodechapters/RestApi";
import NodeVideo from "../Chapters/Nodecode/Nodechapters/NodeVideo";
import NodeSetup from "../Chapters/Nodecode/Nodechapters/NodeSetup";
import AsyncNode from "../Chapters/Nodecode/Nodechapters/AsyncNode";
import NodeModules from "../Chapters/Nodecode/Nodechapters/NodeModules";

import ExpressIntro from "../Chapters/Expressnode/expressChapters/ExpressIntro";
import ExpInstall from "../Chapters/Expressnode/expressChapters/ExpInstall";
import Expserver from "../Chapters/Expressnode/expressChapters/Expserver";
import Expfiles from "../Chapters/Expressnode/expressChapters/Expfiles";
import Expejs from "../Chapters/Expressnode/expressChapters/Expejs";
import Exprouter from "../Chapters/Expressnode/expressChapters/Exprouter";
import Expmiddleware from "../Chapters/Expressnode/expressChapters/Expmiddleware";
import Expreqres from "../Chapters/Expressnode/expressChapters/Expreqres";
import Expproxy from "../Chapters/Expressnode/expressChapters/Expproxy";
import Expintegration from "../Chapters/Expressnode/expressChapters/Expintegration";
import Exprestapi from "../Chapters/Expressnode/expressChapters/Exprestapi";
import Experror from "../Chapters/Expressnode/expressChapters/Experror";
import Expenv from "../Chapters/Expressnode/expressChapters/Expenv";
import Expvideo from "../Chapters/Expressnode/expressChapters/Expvideo";

import MongoIntro from "../Chapters/Mongocode/MongoChapters/MongoIntro";
import MongoSQLvsNoSQL from "../Chapters/Mongocode/MongoChapters/MongoSQLvsNoSQL";
import MongoSetup from "../Chapters/Mongocode/MongoChapters/MongoSetup";
import MongoShellAtlas from "../Chapters/Mongocode/MongoChapters/MongoShellAtlas";
import MongoDataCollections from "../Chapters/Mongocode/MongoChapters/MongoDataCollections";
import MongoDocuments from "../Chapters/Mongocode/MongoChapters/MongoDocuments";
import MongoFindFilter from "../Chapters/Mongocode/MongoChapters/MongoFindFilter";
import MongoCrud from "../Chapters/Mongocode/MongoChapters/MongoCrud";
import MongoIndexing from "../Chapters/Mongocode/MongoChapters/MongoIndexing";
import MongoAggregation from "../Chapters/Mongocode/MongoChapters/MongoAggregation";
import MongoRelationships from "../Chapters/Mongocode/MongoChapters/MongoRelationships";
import MongoVideo from "../Chapters/Mongocode/MongoChapters/MongoVideo";


import Chatbot from "../AI/Chatbot"; // if you created Chatbot.jsx
import Navmain from "..//Navbar/Navmain";
import  Login from "../Navbar/Athentication/Login"; // if you created Chatbot.jsx
import Shinup from "../Navbar/Athentication/Shinup"; // if you created Chatbot.jsx
import Loder from "../Loder/Loder";
import ProtectedRoute from "../about/ProtectedRoute";
const AllRouter = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show loader when user is on homepage
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds loader

      return () => clearTimeout(timer);
    } else {
      setLoading(false); // Disable loader for other pages
    }
  }, [location.pathname]);

  if (loading && location.pathname === "/") {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <Loder />
      </div>
    );
  }

  return (
    <>
    <Navmain/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Shinup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chapters" element={<Subnav />} />
        <Route path="/practice" element={<Prep />} />
       <Route
  path="/about"
  element={
    <ProtectedRoute>
      <AboutSection />
    </ProtectedRoute>
  }
/>
        <Route path="/quiz/web" element={<QuizPage />} />
        <Route path="/quiz/html" element={<Quizhtml />} />
        <Route path="/quiz/css" element={<Quizecss />} />
        <Route path="/quiz/javascript" element={<Quizejs />} />
        <Route path="/quiz/react" element={<Quizereact />} />
        <Route path="/quiz/node.js" element={<Quizenodejs />} />
        <Route path="/quiz/express" element={<Quizeexpress />} />
        <Route path="/quiz/mongodb" element={<Quizemongodb />} />

        <Route path="/task/web" element={<Taskweb />} />
        <Route path="/task/html" element={<Taskhtml />} />
        <Route path="/task/css" element={<Taskcss />} />
        <Route path="/task/js" element={<Taskjs />} />
        <Route path="/task/react" element={<Taskreact />} />
        <Route path="/task/node" element={<Tasknode />} />
        <Route path="/task/express" element={<Taskexpress/>} />
        <Route path="/task/mongodb" element={<Taskmongo />} />

        <Route path="introduction/web-development" element={<Intro />} />
        <Route path="introduction/how-websites-work" element={<Server />} />
        <Route path="introduction/client-vs-server" element={<Internet />} />
        <Route path="internet-network/internet" element={<Whatinter />} />
        <Route path="internet-network/network" element={<Whatnet />} />
        <Route path="internet-network/layers" element={<InternetLayers />} />
        <Route path="internet-network/protocols" element={<Protocols />} />
        <Route path="browsers/information" element={<BrowserInfo />} />
        <Route path="browsers/components" element={<Components />} />
        <Route path="git/info" element={<GitInfo />} />
        <Route path="git/details" element={<GitDetails />} />
        <Route path="video/lern-mern" element={<Video />} />

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
        <Route path="/html/tables" element={<HtmlTables />}></Route>
        <Route path="/html/lists" element={<HtmlLists />}></Route>
        <Route path="/html/videos" element={<HtmlVideos />}></Route>

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
        <Route path="/css/video" element={<Cssvideos />}></Route>

        <Route path="/javascript/what-is-js" element={<JsIntro />}></Route>
        <Route path="/javascript/excution" element={<Jsexcution />}></Route>
        <Route
          path="/javascript/let-var-const"
          element={<JsLetVarConst />}
        ></Route>
        <Route path="/javascript/primitives" element={<Jsprimitives />}></Route>
        <Route path="/javascript/operators" element={<JsOperators />}></Route>
        <Route path="/javascript/objects" element={<JsObjects />}></Route>
        <Route path="/javascript/data-types" element={<JsDataTypes />}></Route>
        <Route path="/javascript/functions" element={<JsFunctions />}></Route>
        <Route
          path="/javascript/conditionals"
          element={<JsConditionals />}
        ></Route>
        <Route path="/javascript/loops" element={<JsLoops />}></Route>
        <Route path="/javascript/events" element={<JsEvents />}></Route>
        <Route path="/javascript/dom" element={<JsDOM />}></Route>
        <Route path="/javascript/es6" element={<JsES6 />}></Route>
        <Route path="/javascript/promises" element={<JsPromises />}></Route>
        <Route path="/javascript/hoisting" element={<JsHoisting />}></Route>
        <Route path="/javascript/video" element={<JsVideo />}></Route>

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
        <Route
          path="/react/error-boundaries"
          element={<ReactErrorBoundaries />}
        />
        <Route path="/react/video" element={<ReactVideo />} />

        <Route path="/node/what-is-node" element={<NodeIntro />} />
        <Route path="/node/node-exp" element={<NodeVsExpress />} />
        <Route path="/node/setup" element={<NodeSetup />} />
        <Route path="/node/ejs" element={<EjsVsJsx />} />
        <Route path="/node/server" element={<NodeServer />} />
        <Route path="/node/modules" element={<NodeModules />} />
        <Route path="/node/Export" element={<ExportImport />} />
        <Route path="/node/error" element={<ErrorHandling />} />
        <Route path="/node/rest-api" element={<RestApi />} />
        <Route path="/node/async" element={<AsyncNode />} />
        <Route path="/node/video" element={<NodeVideo />} />

        <Route
          path="/express/What-is-express"
          element={<ExpressIntro />}
        ></Route>
        <Route path="/express/install" element={<ExpInstall />}></Route>
        <Route path="/express/server" element={<Expserver />}></Route>
        <Route path="/express/static-files" element={<Expfiles />}></Route>
        <Route path="/express/ejs" element={<Expejs />}></Route>
        <Route path="/express/router" element={<Exprouter />}></Route>
        <Route path="/express/middleware" element={<Expmiddleware />}></Route>
        <Route path="/express/req-res" element={<Expreqres />}></Route>
        <Route path="/express/proxy" element={<Expproxy />}></Route>
        <Route path="/express/integration" element={<Expintegration />}></Route>
        <Route path="/express/rest-api" element={<Exprestapi />}></Route>
        <Route path="/express/error-handling" element={<Experror />}></Route>
        <Route path="/express/env" element={<Expenv />}></Route>
        <Route path="/express/video" element={<Expvideo />}></Route>

        <Route path="/mongo/What-is-mongo" element={<MongoIntro />} />
        <Route path="/mongodb/sql-vs-nosql" element={<MongoSQLvsNoSQL />} />
        <Route path="/mongodb/setup" element={<MongoSetup />} />
        <Route path="/mongodb/shell-atlas" element={<MongoShellAtlas />} />
        <Route
          path="/mongodb/deta-Collections"
          element={<MongoDataCollections />}
        />
        <Route path="/mongodb/documents" element={<MongoDocuments />} />
        <Route path="/mongodb/find-filter" element={<MongoFindFilter />} />
        <Route path="/mongodb/crud" element={<MongoCrud />} />
        <Route path="/mongodb/indexing" element={<MongoIndexing />} />
        <Route path="/mongodb/aggregation" element={<MongoAggregation />} />
        <Route path="/mongodb/relationships" element={<MongoRelationships />} />
        <Route path="/mongodb/video" element={<MongoVideo />} />
      </Routes>
    </>
  );
};

export default AllRouter;
