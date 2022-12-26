import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function About() {
  const darkToggle = false;
  return (
    <>
      <header className="fixed w-full pt-2 top-0 z-50 text-gray-700">
        <Navbar darkToggle={darkToggle} />
      </header>
      <div className="min-h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-24 flex flex-col ">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl  font-sans font-black text-blueDeep dark:text-white mb-8">
                About <br /> <span className="text-blueDeep">Coin</span>Save
              </h2>
              <p className="font-raleway font-medium text-xl text-blueDeep dark:text-gray-200">
                Save. Spend. Invest. Repeat.
              </p>
              <p className="text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full md:w-2/5 my-8">
                We at Coin save linited aim ti help you make better financial
                and analysis of the inflow and outflow of cash wwithin your
                wallet and your financiual life and help you better predict your
                next spending savinga and tracking Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Optio quaerat cumque unde hic
                porro dolores veritatis quos, doloribus soluta nisi ea unde hic
                porro dolores veritatis.
              </p>
              <div className="flex flex-col md:flex-row w-full">
                <button className="bg-blueDeep text-center py-3 px-5 sm:px-10 mr-3 text-white text-lg rounded-lg mb-3 w-full md:w-[260px] hover:scale-75">
                  Budget Now
                </button>
                <button className="border border-blueDeep text-blueDeep text-center py-3 px-5 sm:px-10 text-lg rounded-lg mb-3 w-full md:w-[260px] hover:scale-90">
                  Start Tracking
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
