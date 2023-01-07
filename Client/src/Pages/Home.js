import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import picture1 from "../Assets/images/picture1.jpg";
import picture2 from "../Assets/images/picture2.jpg";
import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
import video from "../Assets/images/PIG.mp4";

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
      picture: picture1,
      name: "Sarah Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
    {
      picture: picture2,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
    {
      picture: picture1,
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat cumque unde hic porro dolores veritatis quos,doloribus soluta nisi ea unde hic porro dolores veritatis.",
    },
    {
      picture: picture2,
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

  function displayRange() {
    let range = document.getElementById("priceRange");
    let display = document.getElementById("displayPriceRange");
    display.innerText = "$" + range.value;
  }

  const [checked, setChecked] = useState(true);

  function switchBudgetTab() {
    let budgetTab = document.getElementById("budget");
    let savingsTab = document.getElementById("savings");
    if (checked) {
      document.getElementById("savingsRadio").checked = checked;
      document
        .getElementById("budgetTab")
        .classList.add("bg-gray-200", "dark:bg-gray-700");
      document
        .getElementById("savingsTab")
        .classList.remove("bg-gray-200", "dark:bg-gray-700");
      document.getElementById("budgetRadio").checked = true;
    } else {
      document
        .getElementById("budgetTab")
        .classList.remove("bg-gray-200", "dark:bg-gray-700");
      document
        .getElementById("savingsTab")
        .classList.add("bg-gray-200", "dark:bg-gray-700");
    }
    budgetTab.classList.toggle("hidden");
    savingsTab.classList.toggle("hidden");

    setChecked(!checked);
  }
  // switchBudgetTab();

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
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center pt-48 pb-24 lg:pt-0">
            <div className="container mx-auto px-6 sm:px-8 py-20 flex flex-col items-center justify-center pt-12 sm:pt-24 lg:mt-48">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-sans font-black text-blueDeep dark:text-white mb-8">
                Follow <br /> <span className="text-blueDeep">The</span> Money!
              </h2>
              <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200">
                Save. Spend. Invest. Repeat.
              </p>
              <p className=" text-gray-800 dark:text-gray-400 font-raleway font-light text-base text-center mx-auto w-full md:w-3/4 xl:w-1/2 my-5 mb-10">
                The quality of an expenditure is not in how much but in how well
                it was spent. At Coinsave, we ensure you get quality of every
                coin you spend on every expense.
              </p>
              <div className="flex flex-col md:flex-row w-full justify-center">
                <div className="col-12 md:w-[450px] md:h-[600px] rounded-2xl shadow-2xl bg-gray-300 border border-gray-400 dark:bg-gray-800 text-gray-800 dark:text-gray-400 mb-4">
                  <div className="row flex">
                    <div
                      className="col-6 w-1/2 flex flex-row items-center justify-between p-4 rounded-tl-2xl bg-gray-200 dark:bg-gray-700"
                      id="savingsTab"
                    >
                      <div className="icon">
                        <i class="fas fa-coins fa-lg fa-fw"></i>
                      </div>
                      <label htmlFor="savingsRadio">
                        <div className="text">
                          <h6 className="font-sans">Savings</h6>
                          <p className="font-raleway">Start a new plan</p>
                        </div>
                      </label>
                      <div className="input">
                        <input
                          type="radio"
                          name="Savings_radio"
                          class="bg-blueDeep"
                          id="savingsRadio"
                          checked={checked}
                          onChange={switchBudgetTab}
                        />
                      </div>
                    </div>
                    <div
                      className="col-6 w-1/2 flex flex-row items-center justify-between p-4 rounded-tr-2xl"
                      id="budgetTab"
                    >
                      <div className="icon">
                        <i class="fas fa-coins fa-lg fa-fw"></i>
                      </div>
                      <label htmlFor="budgetRadio">
                        <div className="text">
                          <h6 className="font-sans">Budget</h6>
                          <p className="font-raleway">Start a new plan</p>
                        </div>
                      </label>
                      <div className="input">
                        <input
                          type="radio"
                          name="Savings_radio"
                          class="bg-blueDeep"
                          id="budgetRadio"
                          onChange={switchBudgetTab}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row py-8 px-12 flex">
                    <div className="left" id="savings">
                      <h4
                        className="font-sans font-bold text-4xl pb-2 text-blueDeep dark:text-white"
                        id="displayPriceRange"
                      >
                        $200
                      </h4>
                      <input
                        type="range"
                        name="price"
                        min="200"
                        max="5000"
                        id="priceRange"
                        step="50"
                        onChange={displayRange}
                        class="appearance-none w-full h-2 bg-blueDeep dark:bg-gray-700 rounded-md outline-none slider-thumb accent-blueDeep"
                      />
                      <small className="text-gray-500">
                        Move the slider to adjust the amount
                      </small>
                      <div className="mid mt-4">
                        <p className="font-raleway text-gray-800 dark:text-gray-400 mb-1">
                          Frequency
                        </p>
                        <select className="py-3 px-4 pr-9 block w-full rounded-lg text-sm dark:border-gray-700  font-raleway text-gray-800 dark:text-gray-300 bg-gray-200 dark:hover:bg-gray-800 focus:outline-none font-medium dark:bg-gray-700 hover:border dark:hover:border-gray-700 dark:focus:border dark:focus:border-blueDeep">
                          <option value="Daily" selected>
                            Daily
                          </option>
                          <option value="Weekly">Weekly</option>
                          <option value="Forthnight">Forthnight</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Quaterly">Quaterly</option>
                          <option value="Yearly">Yearly</option>
                        </select>

                        <p className="font-raleway text-gray-800 dark:text-gray-400 mb-1 mt-3">
                          Duration
                        </p>
                        <select className="py-3 px-4 pr-9 block w-full rounded-lg text-sm dark:border-gray-700  font-raleway text-gray-800 dark:text-gray-300 bg-gray-200 dark:hover:bg-gray-800 focus:outline-none font-medium dark:bg-gray-700 hover:border dark:hover:border-gray-700 dark:focus:border dark:focus:border-blueDeep">
                          <option value="30" selected>
                            30 Days
                          </option>
                          <option value="60">60 Days</option>
                          <option value="90">90 Days</option>
                          <option value="180">180 Days</option>
                          <option value="365">365Days</option>
                          <option value="">
                            <input
                              type="number"
                              name=""
                              id=""
                              placeholder="No. of Days"
                            />
                          </option>
                        </select>

                        <p className="font-raleway text-gray-800 dark:text-gray-400 mb-1 mt-3">
                          Savings Mode
                        </p>
                        <div class="flex gap-x-6 font-raleway font-light text-lg text-gray-800 dark:text-gray-300">
                          <div class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 accent-blueDeep"
                              id="hs-checkbox-group-4"
                            />
                            <label
                              for="hs-checkbox-group-4"
                              class="text-md ml-3"
                            >
                              Manual
                            </label>
                          </div>

                          <div class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 accent-blueDeep"
                              id="hs-checkbox-group-2"
                            />
                            <label
                              for="hs-checkbox-group-5"
                              class="text-md ml-3"
                            >
                              Automatic
                            </label>
                          </div>
                        </div>

                        <button className="mt-6 rounded-lg w-full bg-blue font-raleway font-medium text-lg py-4 text-gray-100 bg-blueDeep hover:animate-bounce">
                          Start Now!
                        </button>
                      </div>
                      <div className="py-6 px-8 flex items-center justify-center mx-auto">
                        <div id="circle" className="mr-2 bg-blueDeep"></div>
                        <div id="circle" className="bg-gray-500"></div>
                      </div>
                    </div>
                    <div className="hidden" id="budget">
                      <h4
                        className="font-sans font-bold text-4xl pb-2 text-blueDeep dark:text-white"
                        id="displayPriceRange"
                      >
                        $200
                      </h4>
                      <input
                        type="range"
                        name="price"
                        min="200"
                        max="5000"
                        id="priceRange"
                        step="50"
                        onChange={displayRange}
                        class="appearance-none w-full h-2 bg-blueDeep dark:bg-gray-700 rounded-md outline-none slider-thumb accent-blueDeep"
                      />
                      <small className="text-gray-500">
                        Move the slider to adjust the amount
                      </small>
                      <div className="mid mt-4">
                        <p className="font-raleway text-gray-800 dark:text-gray-400 mb-1">
                          Frequency
                        </p>

                        <select className="py-3 px-4 pr-9 block w-full rounded-lg text-sm dark:border-gray-700 dark:text-gray-400 font-raleway text-gray-800 bg-gray-200 hover:bg-gray-400 focus:outline-none font-medium dark:bg-gray-700 dark:hover:bg-gray-800 dark:hover:border dark:hover:border-gray-700 dark:focus:border dark:focus:border-blueDeep dark:focus:bg-gray-800 border-r-8">
                          <option value="Daily" selected>
                            Daily
                          </option>
                          <option value="Weekly">Weekly</option>
                          <option value="Forthnight">Forthnight</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Quaterly">Quaterly</option>
                          <option value="Yearly">Yearly</option>
                        </select>

                        <button className="mt-24 rounded-lg w-full bg-blue font-raleway font-medium text-lg py-4 text-gray-100 bg-blueDeep">
                          Start Now!
                        </button>
                      </div>
                      <div className="py-6 px-8 flex items-center justify-center mx-auto">
                        <div id="circle" className="mr-2 bg-gray-500"></div>
                        <div id="circle" className="mr-2 bg-blueDeep"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 w-full md:w-1/4 text-center mb-8">
                <small className="font-raleway font-light text-gray-400 text-center">
                  Please note that there could be various factors that could
                  affect the actualization of this budget calculator to be
                  amassed at the end of the duration.
                </small>
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
              <div className="pl-10 pr-24">
                <h1 className="font-sans font-black text-blueDeep text-[160px] lg:text-[160px] xl:text-[190px]">
                  WHY <br /> <span className="text-blueDeep">BUDGET?</span>
                </h1>
              </div>

              <div className="ml-16 p-12 flex flex-col bg-black rounded-xl shadow-xl w-[360px] flex-shrink-0">
                <i className="fa-solid fa-money-bill-1 fa-2x fa-fw text-white pb-3"></i>
                <h2 className="text-2xl font-archivo font-bold md:font-black text-white dark:text-white mb-2">
                  Proper Money Management
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

              <div className="ml-16 p-12 flex flex-col flex-shrink-0 bg-blueDeep rounded-xl shadow-xl w-[360px]">
                <i className="fa-solid fa-money-bill-transfer fa-2x fa-fw text-white pb-3"></i>
                <h2 className="text-2xl font-archivo font-bold md:font-black text-white dark:text-white mb-2">
                  Easy Money Management
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

              <div className="ml-16 p-12 flex flex-col flex-shrink-0 bg-white dark:bg-gray-400 rounded-xl shadow-xl w-[360px]">
                <i className="fa-solid fa-sack-dollar fa-2x fa-fw text-black pb-3"></i>
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-sans font-light text-blueDeep dark:text-white mb-8">
                <span className="font-raleway">Spend less,</span>
                <br />
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

              <button className="font-raleway font-medium text-lg text-center bg-blueDeep py-3 ps-6 sm:px-10 mr-3 text-white rounded-lg mb-3 w-full md:w-[400px] mt-12 hover:animate-pulse">
                Start Saving!
              </button>
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
            className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center justify-center"
            id="container"
          >
            <div className="flex items-center justify-center">
              <div className="">
                <div className="rounded-xl">
                  <video autoPlay loop className="">
                    <source src={video} type="video/mp4" />
                    Sorry, your browser does not support videos
                  </video>
                </div>
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
          <section className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center py-24 sm:py-0">
            <div className="md:w-1/2 md:min-h-screen"></div>
            <div className="md:w-1/2 px-8 sm:px-12 md:px-0 md:min-h-screen flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <hr className="hidden sm:block w-1/4 bg-blueDeep dark:bg-white" />
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
              <button className="font-raleway font-medium border border-blueDeep text-blueDeep dark:bg-blueDeep dark:text-gray-200  text-center py-3 ps-6 sm:px-10 mr-3 text-lg rounded-lg mb-3 w-full md:w-[400px] mt-12">
                See Expenditure!
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
                <hr className="hidden sm:block w-1/5 bg-blueDeep dark:bg-white" />
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
