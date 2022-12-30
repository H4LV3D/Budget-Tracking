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
      <div className="min-h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-300 dark:bg-gray-900 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-20 flex flex-col">
              <div className="flex items-center mb-4">
                <hr className="w-1/4  bg-gray-800 dark:bg-white" />
                <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200 pl-4">
                  Why Save?
                </p>
              </div>
              <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light text-blueDeep dark:text-white mb-8">
                <span className="text-blueDeep font-black text-5xl sm:text-7xl md:text-6xl lg:text-8xl">
                  Control <br />
                  your Expense
                </span>
              </h2>
              <p className="text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full md:w-2/5 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis soluta nisi ea
                unde hic porro dolores veritatis.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center py-24 sm:py-0">
            <div className="md:w-1/2 md:min-h-screen"></div>
            <div className="md:w-1/2 sm:w-2/3 sm:mx-auto px-6 sm:px-12 md:px-0 md:min-h-screen flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <hr className="hidden sm:block w-1/4 bg-gray-800 dark:bg-white" />
                <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200 sm:pl-4">
                  Expense Tracking
                </p>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-12">
                Tracking at <br className="hidden sm:block" /> your tips.
              </h2>
              <p className="text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full md:w-2/3 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Optio quaerat
                cumque unde hic porro dolores veritatis quos.
              </p>
              <button className="border border-blueDeep text-blueDeep dark:bg-blueDeep dark:text-gray-200  text-center py-3 ps-6 sm:px-10 mr-3 text-lg rounded-lg mb-3 w-full md:w-[400px] mt-12">
                Save Now!
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex justify-center items-center">
          <div className="container mx-auto my-auto p-3">
            <div className="flex flex-col justify-center w-full my-20 mx-auto px-10 py-14 lg:p-16 rounded-xl bg-gray-200 dark:bg-gray-700 shadow-2xl max-w-screen-xl">
              <div className="flex justify-center md:justify-start items-center mb-12">
                <hr className="hidden md:block w-1/6 bg-blueDeep dark:bg-white" />
                <p className="font-raleway text-center font-medium text-2xl md:text-3xl text-blueDeep dark:text-gray-200 pl-4">
                  What Save with us?
                </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Marketing
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-raleway">
                    Plan it, create it, launch it. Collaborate seamlessly with
                    all the organization and hit your marketing goals every
                    month with our marketing plan.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Legal
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-raleway">
                    Protect your organization, devices and stay compliant with
                    our structured workflows and custom permissions made for
                    you.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Business Automation
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-raleway">
                    Auto-assign tasks, send Slack messages, and much more. Now
                    power up with hundreds of new templates to help you get
                    started.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Finance
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-raleway">
                    Audit-proof software built for critical financial operations
                    like month-end close and quarterly budgeting.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Enterprise Design
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-raleway">
                    Craft beautiful, delightful experiences for both marketing
                    and product with real cross-company collaboration.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Operations
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-raleway">
                    Keep your company’s lights on with customizable, iterative,
                    and structured workflows built for all efficient teams and
                    individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
