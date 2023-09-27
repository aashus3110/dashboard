"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostCareer = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [requiredExperience, setRequiredExperience] = useState("");
  const [requiredSkill, setRequiredSkill] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !jobTitle ||
      !jobLocation ||
      !requiredExperience ||
      !requiredSkill ||
      !jobDescription
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
      const res = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          jobTitle,
          jobLocation,
          requiredExperience,
          requiredSkill,
          jobDescription,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Clear the form values
        setJobTitle("");
        setJobLocation("");
        setRequiredExperience("");
        setRequiredSkill("");
        setJobDescription("");

        // Show success toast message
        toast.success("Career posted successfully!", {
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
       else {
        // Handle validation errors from the backend
        if (data && data.errors) {
          data.errors.forEach((error) => {
            toast.error(error.message, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
          });
        } else {
          throw new Error("Failed to create a career");
        }
      }
    } catch (error) {
      console.log(error);
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
      <div className="mt-16 mx-auto">
        <h1 className="flex flex-col md:flex-row md:gap-1.5 text-2xl font-extrabold capitalize bg-gradient-to-r from-yellow-400 via-red-600 to-orange-500 bg-clip-text text-transparent text-center">
          <span>all detail is required to </span>
          <span>post new career</span>
        </h1>
        <div className="w-72 md:w-full">
          <form
            onSubmit={handleSubmit}
            className="my-10 mx-auto w-full flex flex-col gap-1.5"
          >
            <input
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
              className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Job Title"
            />
            <input
              onChange={(e) => setJobLocation(e.target.value)}
              value={jobLocation}
              className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
              type="text"
              name="jobLocation"
              id="jobLocation"
              placeholder="Job Location"
            />
            <input
              onChange={(e) => setRequiredExperience(e.target.value)}
              value={requiredExperience}
              className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
              type="text"
              name="requiredExperience"
              id="requiredExperience"
              placeholder="Required Experience"
            />
            <input
              onChange={(e) => setRequiredSkill(e.target.value)}
              value={requiredSkill}
              className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
              type="text"
              name="requiredSkill"
              id="requiredSkill"
              placeholder="Required Skill"
            />
            <textarea
              onChange={(e) => setJobDescription(e.target.value)}
              value={jobDescription}
              className="px-5 py-1.5 rounded-lg border border-red-300 hover:border-2 text-sm font-semibold outline-none"
              id="jobDescription"
              name="jobDescription"
              rows="6"
              placeholder="Job Desc"
            />
            <input
              type="submit"
              className="mt-4 border border-orange-300 rounded-lg py-2 px-4 w-fit text-sm font-bold 
            bg-gradient-to-l from-yellow-200 to-orange-200 text-red-600 hover:border-2 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PostCareer;
