"use client";

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RemoveCareer = ({ id }) => {
  const removeCareer = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/career?id=${id}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          toast.success("Career deleted successfully!", {
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
            window.location.reload();
          }, 4000);
        } else {
          throw new Error("Failed to delete career");
        }
      } catch (error) {
        console.error("Error deleting career: ", error);
        toast.error("Failed to delete career", {
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
    }
  };

  return (
    <>
      <button
        onClick={removeCareer}
        className="text-base font-bold md:text-sm border border-red-400 px-3 py-1 rounded-lg bg-red-300 hover:border-2"
      >
        Delete
      </button>
    </>
  );
};

export default RemoveCareer;
