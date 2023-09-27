// "use client";
import UpdateCareerForm from "@/components/UpdateCareerForm";
import React from "react";

const getCareerById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/career/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const PostCareer = async ({ params }) => {
  const { id } = params;
  const { career } = await getCareerById(id);
  const {
    jobTitle,
    jobLocation,
    requiredExperience,
    requiredSkill,
    jobDescription,
  } = career;
  return (
    <div className="mt-16 mx-auto">
      <h1 className="flex flex-col md:flex-row md:gap-1.5 text-2xl font-extrabold capitalize bg-gradient-to-r from-yellow-400 via-red-600 to-orange-500 bg-clip-text text-transparent text-center">
        <span> Update career detail</span>
      </h1>
      <div className="w-72 md:w-[30rem]">
        <UpdateCareerForm
          id={id}
          jobTitle={jobTitle}
          jobLocation={jobLocation}
          requiredExperience={requiredExperience}
          requiredSkill={requiredSkill}
          jobDescription={jobDescription}
        />
      </div>
    </div>
  );
};

export default PostCareer;
