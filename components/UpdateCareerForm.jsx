"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCareerForm = ({
  id,
  jobTitle,
  jobLocation,
  requiredExperience,
  requiredSkill,
  jobDescription,
}) => {
  const [newjobTitle, setNewJobTitle] = useState(jobTitle);
  const [newjobLocation, setNewJobLocation] = useState(jobLocation);
  const [newrequiredExperience, setNewRequiredExperience] =
    useState(requiredExperience);
  const [newrequiredSkill, setNewRequiredSkill] = useState(requiredSkill);
  const [newjobDescription, setNewJobDescription] = useState(jobDescription);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !newjobTitle ||
      !newjobLocation ||
      !newrequiredExperience ||
      !newrequiredSkill ||
      !newjobDescription
    ) {
      toast.error("All fields are required.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/career/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newJobTitle: newjobTitle,
          newJobLocation: newjobLocation,
          newRequiredExperience: newrequiredExperience,
          newRequiredSkill: newrequiredSkill,
          newJobDescription: newjobDescription,
        }),
      });
      if (!res.ok) {
        throw new Error(`Failed to update Career. Status: ${res.status}`);
      }

      toast.success("Career updated successfully!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/UpdateDeleteCareer");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }, 2000);
    } catch (error) {
      console.log("Error updating career:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <form
        onSubmit={handleSubmit}
        className="my-10 mx-auto w-full flex flex-col gap-1.5"
      >
        <input
          onChange={(e) => setNewJobTitle(e.target.value)}
          value={newjobTitle}
          className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
          type="text"
          id="jobTitle"
          name="jobTitle"
          placeholder="Job Title"
        />
        <input
          onChange={(e) => setNewJobLocation(e.target.value)}
          value={newjobLocation}
          className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
          type="text"
          name="jobLocation"
          id="jobLocation"
          placeholder="Job Location"
        />
        <input
          onChange={(e) => setNewRequiredExperience(e.target.value)}
          value={newrequiredExperience}
          className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
          type="text"
          name="requiredExperience"
          id="requiredExperience"
          placeholder="Required Experience"
        />
        <input
          onChange={(e) => setNewRequiredSkill(e.target.value)}
          value={newrequiredSkill}
          className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
          type="text"
          name="requiredSkill"
          id="requiredSkill"
          placeholder="Required Skill"
        />
        <textarea
          onChange={(e) => setNewJobDescription(e.target.value)}
          value={newjobDescription}
          className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
          id="jobDescription"
          name="jobDescription"
          rows="6"
          placeholder="Job Desc"
        />
        <input
          type="submit"
          value={"Update"}
          className="mt-4 border border-orange-300 rounded-lg py-2 px-4 w-fit text-sm font-bold 
            bg-gradient-to-l from-yellow-200 to-orange-200 text-red-600 hover:border-2"
        />
      </form>
    </>
  );
};

export default UpdateCareerForm;
