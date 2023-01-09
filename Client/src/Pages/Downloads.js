import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
import { ReactComponent as MoneySvg } from "../Assets/images/criterium-euros-1.svg";
import person from "../Assets/images/picture2.jpg";

function Home() {
  const darkToggle = false;

  useEffect(() => {
    var _CONTENT = ["Pocket", "Wallet", "Account"];

    var _PART = 0;

    var _PART_INDEX = 0;

    var _INTERVAL_VAL;

    var _ELEMENT = document.querySelector("#text");

    var _CURSOR = document.querySelector("#cursor");

    function Type() {
      var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX++;

      if (text === _CONTENT[_PART]) {
        // Hide the cursor
        _CURSOR.style.display = "inline-block";

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
          _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1300);
      }
    }

    function Delete() {
      var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX--;

      if (text === "") {
        clearInterval(_INTERVAL_VAL);
        _CURSOR.style.display = "inline-block";

        if (_PART === _CONTENT.length - 1) _PART = 0;
        else _PART++;

        _PART_INDEX = 0;

        setTimeout(function () {
          _CURSOR.style.display = "inline-block";
          _INTERVAL_VAL = setInterval(Type, 200);
        }, 300);
      }
    }

    _INTERVAL_VAL = setInterval(Type, 100);
  }, []);

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
            <div className="lg:w-1/2 px-8 sm:px-12 md:px-24 lg:pl-24 xl:pl-36 md:min-h-screen flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-raleway font-bold text-blueDeep dark:text-white mb-8">
                Do more with Our mobile App.
              </h2>
              <p className="text-gray-800 dark:text-gray-300 font-raleway font-light text-base w-full  leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis soluta nisi ea
                unde hic porro dolores veritatis.
              </p>

              <div className="w-full mt-12 block md:flex items-center justify-start">
                <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 hover:border hover:border-blueDeep dark:hover:border-gray-300 pl-6 pr-24 py-3 md:mr-5 text-white text-lg rounded-lg mb-3 flex items-center mx-auto md:mx-0">
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
                <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 hover:border hover:border-blueDeep dark:hover:border-gray-300 pl-6 pr-24 py-3 md:mr-3 text-white text-lg rounded-lg mb-3 flex items-center mx-auto md:mx-0">
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
            <div className="hidden lg:w-1/2 md:min-h-screen lg:flex items-center justify-center">
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
      {/* <div className="min-h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-300 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="flex items-center justify-center">
              <hr className="hidden sm:block w-1/4 bg-gray-800 dark:bg-white" />
              <p className="font-raleway text-center font-medium text-xl text-blueDeep dark:text-gray-200 sm:pl-4">
                Expense Tracking
              </p>
            </div>
          </section>
        </div>
      </div> */}
      {/* <div className="h-80 w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-300 dark:bg-gray-800 w-full h-80 flex items-center sm:my-0">
            <div className="md:w-1/2 h-80 sm:px-12 md:px-0 lg:pl-24 xl:pl-36 flex flex-col justify-center bg-gray-300 dark:bg-gray-800">
              <p className="font-raleway font-medium text-xl text-blueDeep text-center py-10 ">
                They trust Us
              </p>
              <div className="flex flex-row justify-between px-auto mr-20">
                <i class="fab fa-spotify fa-4x fa-fw px-12 text-gray-400"></i>
                <i class="fab fa-microsoft fa-4x fa-fw px-12 text-gray-400"></i>
                <i class="fab fa-pinterest fa-4x fa-fw px-12 text-gray-400"></i>
                <i class="fab fa-apple fa-4x fa-fw px-12 text-gray-400"></i>
                <i class="fab fa-google fa-4x fa-fw px-12 text-gray-400"></i>
              </div>
            </div>
            <div className="md:w-1/2 h-80 flex items-center justify-center bg-gray-200 dark:bg-gray-700"></div>
          </section>
        </div>
      </div> */}
      <div className="min-h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-700 w-full min-h-screen flex items-center py-24 sm:py-0">
            <div className="lg:w-1/2 px-8 sm:px-12 md:px-24 lg:px-0 lg:pl-24 xl:pl-36 md:min-h-screen flex flex-col justify-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-12">
                More Money in <br className=" lg:hidden" />
                <span className="text-blueDeep">
                  your <span id="text"></span>
                  <span
                    id="cursor"
                    className="!w-[4px] text-blueDeep dark:text-blueDeep bg-blueDeep pt-16 mx-3 rounded-t-md rounded-b-md animate-pulse"
                  ></span>
                  .
                </span>
              </h2>
              <p className="text-gray-800 dark:text-gray-300 font-raleway font-light text-base w-full lg:pr-16 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quaerat cumque unde hic porro dolores veritatis quos, doloribus
                soluta nisi ea unde hic porro dolores veritatis. Lorem ipsum
                dolor sit.
              </p>
              <div className="w-full sm:flex items-center mt-10 md:mt-16 lg:pr-16">
                <input
                  type="text"
                  name="email"
                  id=""
                  className="bg-gray-300 dark:bg-gray-800 py-4 px-8 rounded-md sm:rounded-none sm:rounded-l-md text-lg text-gray-800 dark:text-gray-300 w-full h-[60px] font-raleway font-medium"
                  autoFocus
                />
                <button className="border border-blueDeep font-raleway font-medium text-white bg-blueDeep dark:bg-blueDeep dark:text-gray-200 text-center py-4 sm:px-10 text-lg rounded-md sm:rounded-none px-12 mx-auto mt-3 sm:mt-0 sm:rounded-r-md h-[60px]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="w-full hidden lg:block lg:w-1/2 md:min-h-screen">
              <div className="h-screen lg:pt-20">
                <MoneySvg />
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
