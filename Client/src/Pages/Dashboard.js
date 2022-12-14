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
          <div className="w-full lg:w-2/3 py-3 flex justify-between items-center shadow-sm">
            <h2 className="font-raleway font-bold text-2xl">Dashboard</h2>
            <div className="flex items-center justify-center space-x-5">
              <i class="fas fa-bars fa-lg fa-fw"></i>
              <div>
                <div>
                  <div class="flex rounded-md shadow-sm">
                    <span class="p-3 flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">
                      Default
                    </span>
                    <input
                      type="text"
                      class="py-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row w-full lg:w-2/3 py-4 flex space-x-6 overflow-x-auto">
            <div className="p-10 lg:py-8 lg:px-6 bg-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-lg">
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
            <div className="py-16 px-20 bg-gray-300 rounded-lg"></div>
            <div className="py-16 px-20 bg-gray-300 rounded-lg"></div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Dashboard;
