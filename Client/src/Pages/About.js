import React from "react";
import Navbar from "../Components/Navbar";

function About() {
  const darkToggle = false;
  return (
    <>
      <header className="fixed w-full pt-2 top-0 z-50 text-gray-700">
        <Navbar darkToggle={darkToggle} />
      </header>
      <div className="h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-20 flex flex-col ">
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

      <div className="h-screen w-full">
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
      <div className="h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center  sm:my-0">
            <div className="md:w-1/2 md:min-h-screen"></div>
            <div className="md:w-1/2 sm:w-2/3 sm:mx-auto px-12 md:px-0 md:min-h-screen flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <hr className="w-1/4  bg-gray-800 dark:bg-white" />
                <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200 pl-4">
                  Expense Tracking
                </p>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-12">
                Tracking at <br /> your tips
              </h2>
              <p className="text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full md:w-2/3 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Optio quaerat
                cumque unde hic porro dolores veritatis quos.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex justify-center mx-auto">
            <div className="container mx-auto md:px-12 my-auto">
              <div className="flex items-center mb-12">
                <hr className="w-1/5  bg-gray-800 dark:bg-white" />
                <p className="font-raleway text-center font-medium text-2xl md:text-3xl text-blueDeep dark:text-gray-200 pl-4">
                  What Save with us?
                </p>
              </div>
              <div className="flex flex-col md:flex-row mt-20 md:mx-auto p-3 mx-5 sm:p-6 md:p-12 rounded-xl bg-gray-200 dark:bg-gray-700 shadow-2xl justify-center w-full">
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center">
                  <h2 className="text-blueDeep text-medium text-3xl font-raleway">
                    Sarah Willams
                  </h2>
                  <p className="pt-5 text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quaerat cumque unde hic porro dolores veritatis quos,
                    doloribus soluta nisi ea unde hic porro dolores veritatis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center">
                  <h2 className="text-blueDeep text-medium text-3xl font-raleway">
                    Sarah Willams
                  </h2>
                  <p className="pt-5 text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quaerat cumque unde hic porro dolores veritatis quos,
                    doloribus soluta nisi ea unde hic porro dolores veritatis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center">
                  <h2 className="text-blueDeep text-medium text-3xl font-raleway">
                    Sarah Willams
                  </h2>
                  <p className="pt-5 text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quaerat cumque unde hic porro dolores veritatis quos,
                    doloribus soluta nisi ea unde hic porro dolores veritatis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="w-full">
        <section className="bg-gray-200 dark:bg-gray-700 w-full flex items-center sm: sm:my-0">
          <div className="container sm:mx-auto px-12 my-20 flex flex-col justify-center">
            <div className="mt-10 mb-4">
              <div className="flex flex-row">
                <div className="w-full lg:w-3/4">
                  <h2 className="font-sans text-3xl text-blueDeep font-bold mb-4">
                    <i class="fab fa-bitcoin fa-1x fa-fw"></i>
                    Coin
                    <span className="font-raleway text-black dark:text-white font-medium">
                      Save
                    </span>
                  </h2>

                  <p className="font-raleway font-medium text-xl text-blueDeep dark:text-gray-200">
                    Save. Spend. Invest. Repeat.
                  </p>
                  <p className="w-full md:w-3/4 lg:w-2/3 my-6 text-grat-800 dark:text-gray-400 font-raleway font-light text-base leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quaerat cumque unde hic porro dolores veritatis quos,
                    doloribus soluta nisi ea unde hic porro dolores veritatis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quaerat cumque unde hic porro dolores veritatis quos.
                  </p>
                  <div className="sm:hidden w-full sm:w-1/2 flex flex-row items-center sm:justify-end">
                    <p className="flex">
                      <i class="fab fa-instagram fa-2x fa-fw mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                      <i class="fab fa-twitter fa-fw fa-2x mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                      <i class="fab fa-linkedin fa-fw mx-2 fa-2x hover:text-blueDeep dark:text-blueDeep"></i>
                    </p>
                  </div>
                  <div className="mt-8 mb-6 hidden lg:flex flex-row ">
                    <p className="font-raleway font-medium text-lg text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      About
                    </p>
                    <p className="font-raleway font-medium text-lg text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      Contact
                    </p>
                    <p className="font-raleway font-medium text-lg text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      Login
                    </p>
                    <p className="font-raleway font-medium text-lg text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      Sign Up
                    </p>
                    <p className="font-raleway font-medium text-lg text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      Read more...
                    </p>
                  </div>
                </div>
                <div className="w-1/4 hidden lg:block">
                  <ul className=" mt-20 list-none hover:list-inside">
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep my-4">
                      Terms and Conditions
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep my-4">
                      FAQ's
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep my-4">
                      Tracking
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep my-4">
                      Budgeting
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep my-4">
                      Transactions
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep my-4">
                      Billings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="w-full   dark:bg-white" />
            <div className="flex flex-col sm:flex-row mt-6">
              <div className="w-full md:w-1/2 mb-3 sm:my-0">
                <p className="flex items-center text-md font-raleway font-medium text-black dark:text-gray-400">
                  <i class="fas fa-copyright fa-md fa-fw"></i>
                  Copywright 2022.
                  <span className="hidden md:block">CoinSave Inc.</span>
                  <span className="hidden lg:block">All Rights Reserved</span>
                </p>
              </div>
              <div className="hidden sm:flex w-full sm:w-1/2 flex-row items-center sm:justify-end">
                <p className="flex">
                  <i class="fab fa-instagram fa-1x sm:fa-2x fa-fw mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                  <i class="fab fa-twitter fa-1x fa-fw sm:fa-2x mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                  <i class="fab fa-linkedin fa-1x fa-fw mx-2 sm:fa-2x hover:text-blueDeep dark:text-blueDeep"></i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default About;
