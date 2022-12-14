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
              <p className="text-md font-raleway bg-gray-300 py-3 px-16 rounded-md">
                <i className="fas fa-search fa-md fa-fw pr-3"></i>
                Search
              </p>
            </div>
          </div>
          <div className="row w-full lg:w-2/3 py-4 flex space-x-6 overflow-x-auto">
            <div className="p-10 bg-gray-300 dark:bg-gray-900 rounded-lg">
              <i class="fas fa-bars fa-lg fa-fw"></i>
              <span className="text-md font-light font-raleway">
                Total Earning
              </span>
              <hr />
              <p className="font-black font-archivo text-2xl">$450,000.30</p>
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
