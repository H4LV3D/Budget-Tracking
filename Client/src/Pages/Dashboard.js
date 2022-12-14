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
      <div className="left-64 h-screen w-full">
        <div
          className={`left-64 flex items-center justify-center flex-col h-screen w-full`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-sans font-black text-blueDeep dark:text-white mb-8">
                Follow <br /> <span className="text-blueDeep">The</span> Money!
              </h2>
              <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200 mb-10">
                Save. Spend. Invest. Repeat.
              </p>
              <p className="hidden text-grat-800 dark:text-gray-300 font-raleway font-light text-base text-center mx-auto w-full md:w-3/4 lg:w-1/2 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis.
              </p>
              <div className="flex flex-col md:flex-row  w-full px-10 justify-center">
                <button className="bg-blueDeep text-center py-3 px-5 sm:px-10 mr-3 text-white text-lg rounded-lg mb-3 w-full md:w-[360px] hover:scale-110">
                  Start Budgeting
                </button>
                <button className="border border-blueDeep text-blueDeep text-center py-3 px-5 sm:px-10 text-lg rounded-lg mb-3 w-full md:w-[360px] hover:bg-blueDeep hover:text-black hover:scale-90">
                  Finance Tracking
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="left-64 h-full bg-gray-200 dark:bg-gray-800"></section>
    </>
  );
}

export default Dashboard;
