"use client";
import Link from "next/link";
import React from "react";
import RemoveCareer from "./RemoveCareer";
import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loadingAnimation from "./assets/loading.json";

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
};

const getCareer = async () => {
  try {
    const res = await fetch("/api/career", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch careers");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading careers: ", error);
    return { careers: [] };
  }
};

export default function SeeUpdateData() {
  const [careers, setCareers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const { careers } = await getCareer();
        setCareers(careers);
        setIsLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie
          animationData={loadingAnimation}
          className="w-40 h-20 object-contain"
        />
      </div>
    );
  }

  if (careers.length === 0) {
    return (
      <div className="border-double border-4 border-red-500 rounded-lg w-fit px-12 py-1.5 text-red-400 bg-orange-100">
        No careers to display.
      </div>
    );
  }

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
      {careers.map((c, index) => (
        <div
          key={c._id}
          className="w-72 md:w-full my-4 bg-orange-100 py-2 px-4 rounded-lg flex flex-col gap-2 md:flex-row md:items-center md:gap-10 justify-between"
        >
          <div className="flex justify-around md:gap-8">
            <span className=" text-base text-center font-bold md:text-sm md:w-10">
              {index + 1}.
            </span>
            <span className=" text-base font-bold md:text-sm md:w-20">
              {truncateString(c.jobTitle, 8)}
            </span>
            <span className="hidden md:inline text-base md:text-sm font-bold md:w-20">
              {truncateString(c.requiredSkill, 8)}
            </span>
            <span className=" text-base font-bold md:text-sm md:w-20">
              {truncateString(c.jobLocation, 8)}
            </span>
          </div>
          <div className="flex justify-evenly gap-1">
            <Link
              href={`/updateCareer/${c._id}`}
              className="text-base font-bold md:text-sm border border-violet-600 px-3 py-1 rounded-lg bg-blue-300 hover:border-2"
            >
              Update
            </Link>
            <RemoveCareer id={c._id} />
          </div>
        </div>
      ))}
    </>
  );
}
