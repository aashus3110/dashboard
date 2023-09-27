"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);

        toast.success("User login successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        window.location.reload();

        // Successful login
        // You can store the token in local storage or a state management solution
        // console.log("Token:", data.token);
      } else {
        // setError(data.error);
        toast.error(data.error, {
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
    } catch (error) {
      setError("An error occurred. Please try again later.");
      toast.error(data.error, {
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

    setIsLoading(false);
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
        <h1 className="flex flex-col md:flex-row md:justify-center md:gap-1.5 text-3xl font-extrabold capitalize bg-gradient-to-r from-yellow-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
          Login in to your account
        </h1>
        <div className="w-72 md:w-full my-20 mx-auto md:mx-0">
          <form
            onSubmit={handleLogin}
            className="my-10 mx-auto w-full flex flex-col gap-1"
          >
            <input
              className="px-5 py-1.5 rounded-lg border border-red-300 text-sm font-semibold outline-none my-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              // required
            />
            <input
              className="px-5 py-1.5 rounded-lg border border-red-300 text-sm font-semibold outline-none my-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              // required
            />
            <input
              type="submit"
              value={isLoading ? "Logging in..." : "Login"}
              className="mt-4 border border-orange-300 rounded-lg py-2 px-4 w-fit text-sm font-bold 
            bg-gradient-to-l from-yellow-200 to-orange-200 text-red-600 hover:border-2"
              disabled={isLoading}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
