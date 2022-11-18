import React from "react";
import Navbar from "../Components/Navbar";

function About() {
  const darkToggle = false;
  return (
    <>
      <div className="h-screen w-full dark:bg-gray-800">
        <Navbar darkToggle={darkToggle} />
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <div className="max-w-sm rounded overflow-hidden bg-gray-100 dark:bg-gray-700 mt-5 dark:bg-red-900 font-raleway dark:text-blue-600 shadow-lg">
            <img
              className="w-full"
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
              width="9em"
            />
            <div className="px-6 p-5">
              <div className="text-gray-800 dark:text-blue-200 font-bold text-xl mb-2 font-montserrat">
                The Coldest Sunset
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-red rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
