import React from "react";

function Footer() {
  return (
    <>
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
                    <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      About
                    </p>
                    <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      Contact
                    </p>
                    <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      Login
                    </p>
                    <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
                      Sign Up
                    </p>
                    <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:text-white">
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

export default Footer;
