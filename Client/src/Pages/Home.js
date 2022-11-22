import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import person from "../Assets/Logo.png";

function Home() {
  const darkToggle = false;

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          if (
            !(el.scrollLeft === 0 && e.deltaY < 0) &&
            !(
              el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) ===
                0 && e.deltaY > 0
            )
          ) {
            e.preventDefault();
            var container = document.getElementById("container");
            var containerScrollPosition =
              document.getElementById("container").scrollLeft;
            container.scrollTo({
              top: 0,
              left: containerScrollPosition + e.deltaY,
              behaviour: "smooth", //if you want smooth scrolling
            });
          }
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }
  const scrollRef = useHorizontalScroll();

  return (
    <>
      <header className="sticky w-full top-0 z-50 text-gray-700 bg-gray-200 dark:bg-gray-800">
        <Navbar darkToggle={darkToggle} />
      </header>
      <div className="h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center">
              <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-10xl text-center font-sans font-black text-blueDeep dark:text-white mb-8">
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
                <button className="bg-blueDeep text-center py-3 px-5 sm:px-10 mr-3 text-white text-lg rounded-lg mb-3 w-full md:w-[360px]">
                  Budget Now
                </button>
                <button className="border border-blueDeep text-blueDeep text-center py-3 px-5 sm:px-10 text-lg rounded-lg mb-3 w-full md:w-[360px] hover:bg-blueDeep hover:text-black">
                  Start Tracking
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="h-screen w-full ">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section
            className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center overflow-x-auto over container-snap scrolling-wrapper"
            id="container"
            ref={scrollRef}
          >
            <div className="flex flex-row px-12 ">
              <div className="px-10">
                <h1 className="font-sans font-black text-black dark:text-white text-[100px] md:text-[160px] lg:text-[220px] xl:text-[240px]">
                  WHY <br /> <span className="text-blueDeep">BUDGET?</span>
                </h1>
              </div>

              <div className="ml-12 mr-2  p-6 bg-black rounded-xl h-1/4">
                <i className="fa-solid fa-money-bill-1 fa-4x fa-fw text-white px-auto"></i>
              </div>

              <div className="ml-6 mr-12 p-12 flex flex-col bg-black rounded-xl shadow-xl w-[360px] flex-shrink-0">
                <h2 className="text-2xl font-archivo font-black text-white dark:text-white mb-2">
                  Proper <br /> Money Management
                </h2>
                <p className="font-raleway font-medium text-xl text-white dark:text-gray-200">
                  why Save?
                </p>
                <p className="text-white dark:text-gray-300 font-raleway font-light text-base my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  quaerat cumque unde hic porro dolores veritatis quos,
                  doloribus soluta nisi ea unde hic porro dolores
                  veritatis.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Optio quaerat cumque unde hic porro dolores veritatis
                  quos, doloribus soluta nisi ea unde hic porro dolores
                  veritatis.
                </p>
                <button className="bg-white py-3 px-5 sm:px-12 mr-3 text-black text-lg rounded-lg mt-5">
                  Budget Now
                </button>
              </div>

              <div className="ml-12 mr-2  p-6 bg-blueDeep rounded-xl h-1/4">
                <i className="fa-solid fa-money-bill-transfer fa-4x fa-fw text-white px-auto"></i>
              </div>

              <div className="ml-6 mr-12 p-12 flex flex-col flex-shrink-0 bg-blueDeep rounded-xl shadow-xl w-[360px]">
                <h2 className="text-2xl font-archivo font-black text-white dark:text-white mb-2">
                  Proper <br /> Money Management
                </h2>
                <p className="font-raleway font-medium text-xl text-white dark:text-gray-200">
                  why Save?
                </p>
                <p className="text-white dark:text-gray-300 font-raleway font-light text-base my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  quaerat cumque unde hic porro dolores veritatis quos,
                  doloribus soluta nisi ea unde hic porro dolores
                  veritatis.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Optio quaerat cumque unde hic porro dolores veritatis
                  quos, doloribus soluta nisi ea unde hic porro dolores
                  veritatis.
                </p>
                <button className="bg-white py-3 px-5 sm:px-12 mr-3 text-black text-lg rounded-lg mt-5">
                  Budget Now
                </button>
              </div>

              <div className="ml-12 mr-2  p-6 bg-white dark:bg-gray-400 rounded-xl h-1/4">
                <i className="fas fa-sack-dollar fa-4x fa-fw text-black px-auto"></i>
              </div>

              <div className="ml-6 p-12 flex flex-col flex-shrink-0 bg-white dark:bg-gray-400 rounded-xl shadow-xl w-[360px]">
                <h2 className="text-2xl font-archivo font-black text-black mb-2">
                  Proper <br /> Money Management
                </h2>
                <p className="font-raleway font-medium text-xl text-black ">
                  why Save?
                </p>
                <p className="text-black font-raleway font-light text-base my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  quaerat cumque unde hic porro dolores veritatis quos,
                  doloribus soluta nisi ea unde hic porro dolores
                  veritatis.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Optio quaerat cumque unde hic porro dolores veritatis
                  quos, doloribus soluta nisi ea unde hic porro dolores
                  veritatis.
                </p>
                <button className="bg-black py-3 px-5 sm:px-12 mr-3 text-white text-lg rounded-lg mt-5">
                  Budget Now
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
          <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-20 flex flex-col">
              <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black text-blueDeep dark:text-white mb-8">
                Spend Less, <br />
                <span className="text-blueDeep text-5xl sm:text-7xl md:text-6xl lg:text-9xl">
                  Save More.
                </span>
              </h2>
              <p className="text-grat-800 dark:text-gray-300 font-raleway font-light text-base w-full md:w-3/4 lg:w-2/4 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis soluta nisi ea
                unde hic porro dolores veritatis.
              </p>

              <button className="bg-blueDeep text-center py-3 ps-6 sm:px-10 mr-3 text-white text-lg rounded-lg mb-3 w-full md:w-[400px] mt-12">
                Save Now!
              </button>
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
          <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex justify-center">
            <div className="container mx-auto md:px-12 my-auto">
              <div className="flex items-center mb-12">
                <hr className="w-1/5  bg-gray-800 dark:bg-white" />
                <p className="font-raleway text-center font-medium text-2xl md:text-3xl text-blueDeep dark:text-gray-200 pl-4">
                  What People have to say
                </p>
              </div>
              <div className="flex flex-col md:flex-row mx-auto mt-20  p-3 mx-5 sm:p-6 md:p-12 rounded-xl bg-gray-200 dark:bg-gray-700 shadow-2xl justify-center xl:w-[1000px] lg:w-[800px] md:[600px]">
                <div className="w-full md:w-1/3 p-4">
                  <img src={person} alt="" />
                </div>
                <div className="w-full md:w-2/3 p-4 flex flex-col justify-center">
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
              <div className="mx-auto mt-20 flex flex-row items-center justify-center">
                <a
                  href="/"
                  class="inline-flex items-center px-6 py-3 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Previous
                </a>
                <a
                  href="/"
                  class="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
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
export default Home;
