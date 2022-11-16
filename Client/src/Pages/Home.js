import React, { useState } from "react";
import Navbar from "../Components/Navbar";

function Home() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <>
      <div className="h-screen w-full dark:bg-blue">
        <Navbar darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
        <div
          className={`flex items-center justify-center bg-gray-300 flex-col ${
            darkToggle && "dark"
          }`}
        >
          <div className="max-w-sm rounded overflow-hidden bg-gray-100 p-5 mt-4 text-white dark:bg-red-900">
            <img
              className="w-full"
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-gray-800 dark:text-red-200 font-bold text-xl mb-2">
                The Coldest Sunset
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
export default Home;
