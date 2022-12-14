import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Assets/fontawesome-free-6.2.1-web/css/solid.css";
import "../Assets/fontawesome-free-6.2.1-web/css/all.css";
import "../Assets/fontawesome-free-6.2.1-web/css/brands.css";
import "../Assets/fontawesome-free-6.2.1-web/css/fontawesome.css";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <section className="fixed h-screen left-64 display-size bg-gray-200 dark:bg-gray-800 p-9">
        <main>
          <div className="w-full xl:w-2/3 py-3 flex justify-between items-center shadow-sm">
            <h2 className="font-raleway font-bold text-2xl">Dashboard</h2>
            <div className="flex items-center justify-center space-x-5">
              <div class="flex rounded-md shadow-sm font-raleway">
                <button className="py-2 px-3 btn bg-white border-gray-200 shadow-sm rounded-l-md text-md dark:bg-gray-800 dark:text-gray-400 dark:border-l  dark:border-b dark:border-t dark:border-blueDeep">
                  <i class="fas fa-search fa-sm fa-fw"></i>
                </button>
                <input
                  type="text"
                  class="py-2 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-md focus:z-10 dark:focus:border-r dark:focus:border-b dark:focus:border-t focus:border-blueDeep dark:bg-gray-800 dark:text-gray-400 dark:border-r dark:border-b dark:border-t dark:border-blueDeep"
                  placeholder="Search"
                  autoComplete="true"
                />
              </div>
            </div>
          </div>
          <div className="row w-full xl:w-2/3 py-4 flex justify-between space-x-6 overflow-x-auto">
            <div className="p-10 lg:py-10 lg:px-12 bg-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-lg">
              <p className="pb-3 dark:text-gray-400">
                <span className="text-md font-light font-raleway">
                  Total Earning
                </span>
                <i class="fas fa-chart-simple fa-lg fa-fw pl-4"></i>
              </p>
              <div class="w-full bg-gray-200 h-2 rounded-lg mb-3">
                <div
                  class="bg-blueDeep rounded-lg h-2"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="font-black font-archivo text-2xl dark:text-gray-400">
                $450,000.30
              </p>
            </div>
            <div className="p-10 lg:py-10 lg:px-12 bg-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-lg">
              <p className="pb-3 dark:text-gray-400">
                <span className="text-md font-light font-raleway">
                  Total Earning
                </span>
                <i class="fas fa-chart-simple fa-lg fa-fw pl-4"></i>
              </p>
              <div class="w-full bg-gray-200 h-2 rounded-lg mb-3">
                <div
                  class="bg-blueDeep rounded-lg h-2"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="font-black font-archivo text-2xl dark:text-gray-400">
                $450,000.30
              </p>
            </div>
            <div className="p-10 lg:py-10 lg:px-12 bg-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-lg">
              <p className="pb-3 dark:text-gray-400">
                <span className="text-md font-light font-raleway">
                  Total Earning
                </span>
                <i class="fas fa-chart-simple fa-lg fa-fw pl-4"></i>
              </p>
              <div class="w-full bg-gray-200 h-2 rounded-lg mb-3">
                <div
                  class="bg-blueDeep rounded-lg h-2"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="font-black font-archivo text-2xl dark:text-gray-400">
                $450,000.30
              </p>
            </div>
          </div>
          <div className="row w-full xl:w-2/3 py-4 flex space-x-6 overflow-x-auto my-4">
            <div className="bg-gray-300 p-6 pb-64 w-full rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-sans font-medium text-xl">
                  Weekly Activity
                </h3>
                <span className="font-raleway font-light text-md border border-gray-400 rounded-md px-5 py-2 bg-gray-100">
                  Daily
                </span>
              </div>
            </div>
          </div>
          <div className="row w-full xl:w-2/3 py-4 flex space-x-6 overflow-x-auto my-4"></div>
        </main>
      </section>
    </>
  );
}

export default Dashboard;
