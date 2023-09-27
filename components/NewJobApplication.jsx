import React from "react";

const NewJobApplication = () => {
  return (
    <div className="w-72 md:w-full my-4 bg-orange-100 py-2 px-4 rounded-lg flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
      <div className="flex justify-evenly md:gap-8">
        <span className=" text-base font-bold md:text-sm">Sr.no</span>
        <span className=" text-base font-bold md:text-sm">Job Title</span>
        <span className="hidden md:inline text-base md:text-sm font-bold">
          Required Skill
        </span>
        <span className=" text-base font-bold md:text-sm">Job Location</span>
      </div>
      <div className="flex justify-evenly gap-1">
        <button className="text-base font-bold md:text-sm border border-green-950 px-3 py-1 rounded-lg bg-green-300">
          Reade
        </button>
      </div>
    </div>
  );
};

export default NewJobApplication;
