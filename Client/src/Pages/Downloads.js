import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
// import money from "../Assets/images/criterium-euros-1.svg";
import person from "../Assets/images/picture2.jpg";

function Home() {
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
          <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="md:w-1/2 sm:px-12 md:px-0 lg:pl-24 xl:pl-36 md:min-h-screen flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-raleway font-bold text-blueDeep dark:text-white mb-8">
                Do more with Our mobile App
              </h2>
              <p className="text-gray-800 dark:text-gray-300 font-raleway font-light text-base w-full md:w-3/4  leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis soluta nisi ea
                unde hic porro dolores veritatis.
              </p>

              <div className="w-full mt-12 flex items-center justify-start">
                <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 hover:border hover:border-blueDeep dark:hover:border-gray-300 pl-6 pr-24 py-3 mr-5 text-white text-lg rounded-lg mb-3 flex items-center">
                  <i class="fab fa-app-store fa-2xl fa-fw pr-6 text-black dark:text-white hover:text-blueDeep"></i>
                  <div className="flex flex-col items-start justify-start pl-3">
                    <h6 className="font-raleway font-medium text-base text-gray-800 dark:text-gray-400">
                      Available on
                    </h6>
                    <h5 className="font-raleway font-bold text-xl text-gray-800 dark:text-gray-200">
                      AppStore
                    </h5>
                  </div>
                </button>
                <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 hover:border hover:border-blueDeep dark:hover:border-gray-300 pl-6 pr-24 py-3 mr-3 text-white text-lg rounded-lg mb-3 flex items-center">
                  <i class="fab fa-google-play fa-2xl fa-fw pr-6 text-black dark:text-white hover:text-blueDeep"></i>
                  <div className="flex flex-col items-start justify-start pl-3">
                    <h6 className="font-raleway font-medium text-base text-gray-800 dark:text-gray-400">
                      Get it on
                    </h6>
                    <h5 className="font-raleway font-bold text-xl text-gray-800 dark:text-gray-200">
                      Playstore
                    </h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:min-h-screen flex items-center justify-center">
              <div className="rounded-2xl shadow-xl bg-gray-700">
                <img
                  src={person}
                  className="rounded-xl"
                  width="550"
                  height="550"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="h-80 w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="w-full min-h-screen flex items-center sm:my-0">
            <div className="md:w-1/2 sm:px-12 md:px-0 lg:pl-24 xl:pl-36 md:min-h-screen flex flex-col justify-center bg-gray-300 dark:bg-gray-800">
              <div className="flex flex-row">
                <i class="fab fa-microsoft fa-lg fa-fw"></i>
                <i class="fab fa-spotify fa-3x fa-fw px-6"></i>
                <i class="fab fa-Microsoft fa-3x fa-fw px-6"></i>
                <i class="fab fa-pinterest fa-3x fa-fw px-6"></i>
              </div>
            </div>
            <div className="md:w-1/2 md:min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-700"></div>
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
            <div className="md:w-1/2 px-6 sm:px-12 md:px-0 md:min-h-screen flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <hr className="hidden sm:block w-1/4 bg-gray-800 dark:bg-white" />
                <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200 sm:pl-4">
                  Expense Tracking
                </p>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-12">
                Tracking at <br className="hidden md:block" /> your tips.
              </h2>
              <p className="text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full md:w-2/3 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Optio quaerat
                cumque unde hic porro dolores veritatis quos.
              </p>
              <button className="border border-blueDeep text-blueDeep dark:bg-blueDeep dark:text-gray-200  text-center py-3 ps-6 sm:px-10 mr-3 text-lg rounded-lg mb-3 w-full md:w-[400px] mt-12">
                Find the Money Trail!
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
