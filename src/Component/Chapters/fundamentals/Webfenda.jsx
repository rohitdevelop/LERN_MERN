import React from 'react';
import Subnav from '../Subnav';
import Websidenav from './Websidenav';
import Intro from './webchapters/Intro';

const Webfenda = () => {
  return (
    <>
      <div className="hidden md:block">
        <Subnav />
      </div>

      <div className="flex">
        <Websidenav />
        <div className="ml-72 p-4">
         <Intro />
        </div>
      </div>
    </>
  );
};

export default Webfenda;