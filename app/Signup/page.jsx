"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in all the fields.", {
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
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("User registered successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });

        setFormData({
          name: "",
          email: "",
          password: "",
        });

        setTimeout(() => {
          window.location.href = "/Login";
        }, 2000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
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
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <div className="mt-16 mx-auto md:w-[35rem]">
        <h1 className="flex flex-col md:flex-row md:justify-center md:gap-1.5 text-3xl font-extrabold capitalize bg-gradient-to-r from-yellow-400 via-red-400 to-orange-500 bg-clip-text text-transparent text-center">
          Signup to create a new account
        </h1>
        <div className="w-72 md:w-full my-20 mx-auto md:mx-0">
          <form
            onSubmit={handleSubmit}
            className="my-10 mx-auto w-full flex flex-col gap-1"
          >
            <input
              onChange={handleInputChange}
              className="px-5 py-1.5 rounded-lg border border-red-300 text-sm font-semibold outline-none my-1"
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
            />
            <input
              onChange={handleInputChange}
              className="px-5 py-1.5 rounded-lg border border-red-300 text-sm font-semibold outline-none my-1"
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
            />
            <input
              onChange={handleInputChange}
              className="px-5 py-1.5 rounded-lg border border-red-300 text-sm font-semibold outline-none my-1"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
            />
            <input
              type="submit"
              value={"Signup"}
              className="mt-4 mx-auto border border-orange-300 rounded-lg py-2 px-4 w-full text-sm font-bold 
            bg-gradient-to-l from-yellow-200 to-orange-200 text-red-600 hover:border-2"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
