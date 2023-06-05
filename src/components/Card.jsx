import React from "react";

export const Card = ({ repoDetails }) => {
  return (
    <div className="w-full lg:w-[51%] pl-1 shadow-md mx-auto lg:max-w-lg">
      <div className="grid gap-7 grid-cols-1 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-center lg:text-left p-6">
            {repoDetails.name}
          </h3>
          <h4 className="text-center lg:text-left p-6">
            Author: {repoDetails.author}
          </h4>
        </div>
        <img
          className="mt-5 w-10 h-10 rounded-full mx-auto lg:mt-6 lg:ml-auto lg:mr-6"
          src={repoDetails.authorImage}
          alt="Author Profile"
        ></img>{" "}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
        <span className="text-center lg:text-left p-6">
          {repoDetails.stars} Stars
        </span>
        <span className="text-center lg:text-left p-6">
          {repoDetails.forks} Forks
        </span>
        <span className="text-center lg:text-left p-6">
          {repoDetails.isPopular ? "Popular" : "Not Popular"}
        </span>
      </div>
    </div>
  );
};
