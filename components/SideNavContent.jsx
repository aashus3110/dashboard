import Link from "next/link";
import React from "react";

const SideNavContent = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/Login"; // Redirect to the login page
  };
  return (
    <div className="hidden md:block">
      <div className=" border border-red-500 my-2 w-full rounded-full"></div>
      <div className="mt-4 flex flex-col gap-6">
        <Link
          href="/"
          className="text-sm ml-8 font-semibold w-44 px-4 py-2 border border-red-300 rounded-md hover:outline-2 hover:outline hover:font-bold hover:outline-red-300 "
        >
          New Job Application
        </Link>
        <Link
          href="/UpdateDeleteCareer"
          className="text-sm ml-8 font-semibold w-44 pl-4 py-2 border border-red-300 rounded-md hover:outline-2 hover:outline hover:font-bold hover:outline-red-300 "
        >
          Update/Delete Career
        </Link>
        <Link
          href="/PostCareer"
          className="text-sm ml-8 font-semibold w-44 px-4 py-2 border border-red-300 rounded-md hover:outline-2 hover:outline hover:font-bold hover:outline-red-300 "
        >
          Post New Career
        </Link>
        <Link
          href="/Login"
          className="text-sm ml-8 font-semibold w-44 px-4 py-2 border border-red-300 rounded-md hover:outline-2 hover:outline hover:font-bold hover:outline-red-300 "
        >
          Login
        </Link>
        <Link
          href="/Signup"
          className="text-sm ml-8 font-semibold w-44 px-4 py-2 border border-red-300 rounded-md hover:outline-2 hover:outline hover:font-bold hover:outline-red-300 "
        >
          Signup
        </Link>
        <button
          onClick={handleLogout}
          className="text-sm ml-8 text-start font-semibold w-44 px-4 py-2 border border-red-300 rounded-md hover:outline-2 hover:outline hover:font-bold hover:outline-red-300 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavContent;
