import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
  const darkToggle = false;

  return (
    <>
      <header className="absolute w-full top-0 z-50">
        <Navbar darkToggle={darkToggle} />
      </header>
      <div className="h-screen w-full dark:bg-gray-800">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center">
            <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center">
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-10xl text-center font-sans font-black text-blueDeep dark:text-white mb-8">
                Follow <br /> <span className="text-blueDeep">The</span> Money!
              </h2>
              <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200">
                Save. Spend. Invest. Repeat.
              </p>
              <p className="text-grat-800 dark:text-gray-300 font-raleway font-light text-base text-center mx-auto w-full md:w-3/4 lg:w-1/2 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis.
              </p>
              <div className="flex flex-col md:flex-row  w-full px-10 justify-center">
                <button className="bg-blueDeep text-center py-3 px-10 mr-3 text-white text-lg rounded-lg mb-3">
                  Budget Now
                </button>
                <button className="border border-blueDeep text-blueDeep text-center py-3 px-10 text-lg rounded-lg mb-3">
                  Start Tracking
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Home;
