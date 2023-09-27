import SeeUpdateData from "@/components/SeeUpdateData";
import React from "react";

const SeeUpdateCareer = () => {
  return (
    <div className="mt-16 mx-auto">
      <h1 className="flex flex-col md:flex-row md:gap-1.5 text-2xl font-extrabold capitalize bg-gradient-to-r from-yellow-400 via-red-600 to-orange-500 bg-clip-text text-transparent text-center">
        <span>See/Update the new </span>
        <span> posted job career</span>
      </h1>
      <div className="w-72 md:w-full my-4 bg-orange-100 py-2 px-4 rounded-lg flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
        <div className="flex justify-evenly md:gap-8">
          <span className=" text-base font-bold md:text-sm">Sr.no</span>
          <span className=" text-base font-bold md:text-sm">Job Title</span>
          <span className="hidden md:inline text-base md:text-sm font-bold">
            Required Skill
          </span>
          <span className=" text-base font-bold md:text-sm">Job Location</span>
        </div>
        <div className="px-6 py-1 flex justify-evenly gap-5 bg-gradient-to-r from-blue-400 from-10%  to-red-500 to-100% text-sm font-semibold rounded-lg">
          <span> Update</span>
          <span>Delete</span>
        </div>
      </div>
      <SeeUpdateData />
    </div>
  );
};

export default SeeUpdateCareer;
