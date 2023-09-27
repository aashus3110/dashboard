import NewJobApplication from "@/components/NewJobApplication";
import React from "react";

const Home = () => {
  return (
    <div className="text-center mx-auto">
      <div className="mx-auto mt-20 md:mt-10 mb-8 md:mb-8">
        <h1 className="flex flex-col md:flex-row md:gap-1.5 text-2xl font-extrabold capitalize bg-gradient-to-r from-yellow-400 via-red-600 to-orange-500 bg-clip-text text-transparent text-center">
          <span>view the latest new </span>
          <span> job application</span>
        </h1>
      </div>
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
      <NewJobApplication />
    </div>
  );
};

export default Home;
