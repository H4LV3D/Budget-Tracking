import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Expense = () => {
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
            <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-8">
                What is a Budget?
              </h2>
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
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-8">
                How to Budget
              </h2>
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
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
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
      <div className="min-h-screen w-full">
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-8">
                Why Budget?
              </h2>
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
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-8">
                Why Budget with us?
              </h2>
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
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center  sm:my-0">
            <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-blueDeep dark:text-white mb-8">
                CTA
              </h2>
              <p>no. of people using the budget scheme</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Expense;
