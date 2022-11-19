import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";

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
          }
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
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
      <header className="absolute w-full top-0 z-50">
        <Navbar darkToggle={darkToggle} />
      </header>
      <div className="h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center my-10 sm:my-0">
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
          <section className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center overflow-x-auto over container-snap scrolling-wrapper">
            <div className="flex flex-row px-12 " ref={scrollRef}>
              <div className="px-10">
                <h1 className="font-sans font-black text-gray-800 dark:text-white text-9xl text-[240px]">
                  WHY <br /> BUDGET?
                </h1>
              </div>

              <div className="ml-12 mr-2  p-6 bg-black rounded-xl h-1/4">
                <i className="fas fa-user-circle fa-4x fa-fw text-white px-auto"></i>
              </div>

              <div className="ml-6 mr-12 p-12 flex flex-col bg-black rounded-xl shadow-xl w-[360px] flex-shrink-0">
                <h2 className="text-2xl font-archivo font-black text-blueDeep dark:text-white mb-2">
                  Proper <br /> Money Management
                </h2>
                <p className="font-raleway font-medium text-xl text-blueDeep dark:text-gray-200">
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
                <button className="bg-white py-3 px-5 sm:px-12 mr-3 text-black text-lg rounded-lg mb-3">
                  Budget Now
                </button>
              </div>

              <div className="ml-12 mr-2  p-6 bg-blueDeep rounded-xl h-1/4">
                <i className="fas fa-user-circle fa-4x fa-fw text-white px-auto"></i>
              </div>

              <div className="ml-6 mr-12 p-12 flex flex-col flex-shrink-0 bg-blueDeep rounded-xl shadow-xl w-[360px]">
                <h2 className="text-2xl font-archivo font-black text-black dark:text-white mb-2">
                  Proper <br /> Money Management
                </h2>
                <p className="font-raleway font-medium text-xl text-black dark:text-gray-200">
                  why Save?
                </p>
                <p className="text-gray-800 dark:text-gray-300 font-raleway font-light text-base my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  quaerat cumque unde hic porro dolores veritatis quos,
                  doloribus soluta nisi ea unde hic porro dolores
                  veritatis.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Optio quaerat cumque unde hic porro dolores veritatis
                  quos, doloribus soluta nisi ea unde hic porro dolores
                  veritatis.
                </p>
                <button className="bg-white py-3 px-5 sm:px-12 mr-3 text-black text-lg rounded-lg mb-3">
                  Budget Now
                </button>
              </div>

              <div className="ml-12 mr-2  p-6 bg-white rounded-xl h-1/4">
                <i className="fas fa-user-circle fa-4x fa-fw text-black px-auto"></i>
              </div>

              <div className="ml-6 p-12 flex flex-col flex-shrink-0 bg-white rounded-xl shadow-xl w-[360px]">
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
                <button className="bg-black py-3 px-5 sm:px-12 mr-3 text-white text-lg rounded-lg mb-3">
                  Budget Now
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
