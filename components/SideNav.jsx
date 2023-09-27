"use client";

import React, { useRef, useState } from "react";
import SideNavContent from "./SideNavContent";
import SideNavIcon from "./SideNavIcon";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const SideNav = () => {
  const [showSideNav, setShowSideNav] = useState(true);
  const ref = useRef();

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <div className="">
      <div
        ref={ref}
        className={`sideNavContent fixed top-0 block md:w-64 w-0 bg-orange-200 h-full md:py-4 md:px-3 py-5 ml-3 md:ml-0 transform transition-transform 
              ${showSideNav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          onClick={toggleSideNav}
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-auto shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <AiOutlineDoubleRight className="text-2xl md:hidden block text-red-400 hover:text-red-600" />
          <AiOutlineDoubleLeft className="text-2xl hidden md:block text-red-400 hover:text-red-600" />
        </div>
        <SideNavContent />
      </div>
      <div
        className={`sideNavIcon fixed top-0 w-20 bg-orange-200 h-full py-4 px-3 transform transition-transform 
              ${showSideNav ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div
          onClick={toggleSideNav}
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-auto shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <AiOutlineDoubleLeft className="text-2xl md:hidden block text-red-400 hover:text-red-600" />
          <AiOutlineDoubleRight className="text-2xl hidden md:block text-red-400 hover:text-red-600" />
        </div>
        <SideNavIcon />
      </div>
    </div>
  );
};

export default SideNav;
