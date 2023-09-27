import Link from "next/link";
import React from "react";
import { PiNotePencilBold } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { IoReaderOutline } from "react-icons/io5";
import {
  MdOutlinePostAdd,
  MdLogin,
  MdOutlineAssignmentInd,
} from "react-icons/md";

const SideNavIcon = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/Login"; // Redirect to the login page
  };
  return (
    <div className="">
      <div className=" border border-red-500 my-8 md:my-4 w-full rounded-full"></div>
      <div className="mt-4 flex flex-col gap-6 ">
        <Link
          href="/"
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-3 shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <IoReaderOutline className="text-xl block text-red-400 hover:text-red-600" />
        </Link>
        <Link
          href="/UpdateDeleteCareer"
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-3 shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <PiNotePencilBold className="text-xl block text-red-400 hover:text-red-600" />
        </Link>
        <Link
          href="/PostCareer"
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-3 shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <MdOutlinePostAdd className="text-xl block text-red-400 hover:text-red-600" />
        </Link>
        <Link
          href="/Login"
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-3 shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <MdLogin className="text-xl block text-red-400 hover:text-red-600" />
        </Link>
        <Link
          href="/Signup"
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-3 shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <MdOutlineAssignmentInd className="text-xl block text-red-400 hover:text-red-600" />
        </Link>
        <button
          onClick={handleLogout}
          className="border-2 cursor-pointer border-orange-400 h-8 w-8 flex justify-center items-center rounded-md ml-3 shadow-sm shadow-orange-300 hover:border-orange-600"
        >
          <BiLogOut className="text-xl block text-red-400 hover:text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default SideNavIcon;
