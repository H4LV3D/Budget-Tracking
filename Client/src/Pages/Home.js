import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
// import Logo from "../Assets/Logo.png";
import picture1 from "../Assets/images/pexels-vladislav-murashko-5990737.jpg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const picturesAndTexts = [
    {
      picture:
        "/static/media/pexels-yuri-manei-2690323.190932c4f5270a2c3960.jpg",
      name: "Sarah Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
    {
      picture:
        "/static/media/pexels-vladislav-murashko-5990737.684912be4232d5f06cab.jpg",
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
    {
      picture:
        "/static/media/pexels-yuri-manei-2690323.190932c4f5270a2c3960.jpg",
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
    {
      picture:
        "/static/media/pexels-vladislav-murashko-5990737.684912be4232d5f06cab.jpg",
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
    {
      picture: picture1,
      name: "Jane Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
  ];

  const goToPrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? picturesAndTexts.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === picturesAndTexts.length - 1 ? 0 : currentIndex + 1
    );
  };

  const { picture, name, text } = picturesAndTexts[currentIndex];

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
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center py-24 sm:py-0">
            <div className="container mx-auto px-6 sm:px-12 py-20 flex flex-col items-center justify-center">
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
                <Link to="/dashboard">
                  <button className="bg-blueDeep text-center py-3 px-5 sm:px-10 mr-3 text-white text-lg rounded-lg mb-3 w-full md:w-[360px] hover:scale-110">
                    Start Budgeting
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="border border-blueDeep text-blueDeep text-center py-3 px-5 sm:px-10 text-lg rounded-lg mb-3 w-full md:w-[360px] hover:bg-blueDeep hover:text-black hover:scale-90">
                    Finance Tracking
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-screen w-full ">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section
            className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center overflow-x-auto over container-snap scrolling-wrapper py-24 md:py-0"
            id="container"
            ref={scrollRef}
          >
            <div className="flex flex-row px-12 ">
              <div className="px-10">
                <h1 className="font-sans font-black text-black dark:text-white text-[160px] lg:text-[160px] xl:text-[190px]">
                  WHY <br /> <span className="text-blueDeep">BUDGET?</span>
                </h1>
              </div>

              <div className="ml-12 mr-2  p-6 bg-black rounded-xl h-1/4">
                <i className="fa-solid fa-money-bill-1 fa-4x fa-fw text-white px-auto"></i>
              </div>

              <div className="ml-6 mr-12 p-12 flex flex-col bg-black rounded-xl shadow-xl w-[360px] flex-shrink-0">
                <h2 className="text-2xl font-archivo font-bold md:font-black text-white dark:text-white mb-2">
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
                <h2 className="text-2xl font-archivo font-bold md:font-black text-white dark:text-white mb-2">
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
                <h2 className="text-2xl font-archivo font-bold md:font-black text-black mb-2">
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
      <div className="min-h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 sm:px-12 py-20 flex flex-col">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light text-blueDeep dark:text-white mb-8">
                Spend Less, <br />
                <span className="font-black text-blueDeep text-6xl sm:text-7xl md:text-6xl lg:text-9xl">
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
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex justify-center mx-auto py-24 sm:py-0">
            <div className="container mx-auto md:px-12 my-auto">
              <div className="flex items-center mb-12">
                <hr className="hidden sm:block w-1/5  bg-gray-800 dark:bg-white" />
                <p className="font-raleway text-center font-medium text-2xl md:text-3xl text-blueDeep dark:text-gray-200 pl-4">
                  What People have to say
                </p>
              </div>
              <div className="flex flex-col md:flex-row xl:mx-auto mt-20 mx-5 sm:p-6 md:p-12 rounded-xl bg-gray-200 dark:bg-gray-700 shadow-2xl justify-center xl:w-[1000px] lg:w-[800px] md:[600px]">
                <div className="w-full md:w-1/3 p-6">
                  <img
                    src={picture}
                    alt={name}
                    className="rounded-xl w-[450px] shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-center p-8">
                  <h2 className="text-blueDeep text-medium text-xl md:text-3xl font-raleway">
                    {name}
                  </h2>
                  <p className="pt-2 text-sm text-gray-800 dark:text-gray-300 font-raleway font-light w-full leading-6">
                    {text}
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-20 flex flex-row items-center justify-center font-raleway">
                <p
                  className="inline-flex cursor-pointer items-center px-6 md:px-8 lg:px-12 text-center py-3 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 hover:scale-110  dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={goToPrev}
                >
                  <i className="fas fa-arrow-left fa-lg fa-fw"></i>
                  <span className="pl-2">Back</span>
                </p>
                <p
                  className="inline-flex cursor-pointer items-center px-6 md:px-8 lg:px-12 text-center py-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 hover:scale-110 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={goToNext}
                >
                  Next
                  <i className="fas fa-arrow-right fa-lg fa-fw px-2"></i>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
