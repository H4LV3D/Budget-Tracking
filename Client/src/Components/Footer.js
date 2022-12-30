import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full">
        <section className="bg-gray-200 dark:bg-gray-700 w-full flex items-center sm:my-0">
          <div className="container sm:mx-auto px-6 sm:px-12 my-20 flex flex-col justify-center">
            <div className="mt-10 mb-2">
              <div className="flex flex-row">
                <div className="w-full md:w-3/4 lg:w-2/4">
                  <Link to="/">
                    <h2 className="font-sans text-3xl text-blueDeep font-bold mb-4">
                      <i className="fab fa-bitcoin fa-1x fa-fw"></i>
                      Coin
                      <span className="font-raleway text-black dark:text-white font-medium">
                        Save
                      </span>
                    </h2>
                  </Link>
                  <p className="font-raleway font-medium text-xl text-blueDeep dark:text-gray-200">
                    Save. Spend. Invest. Repeat.
                  </p>
                  <p className="w-full md:w-3/4 lg:w-2/3 my-6 text-gray-800 dark:text-gray-400 font-raleway font-light text-base leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quaerat cumque unde hic porro dolores veritatis
                    quos,Optio quaerat cumque unde .Optio quaerat cumque unde
                  </p>

                  <div className="md:hidden mt-12 my-4 font-raleway font-medium text-xl text-blueDeep dark:text-gray-200 mb-6">
                    Contact <br />
                    <p className="text-base text-gray-800  dark:text-gray-400 font-light my-4">
                      contact@coinsave.com
                    </p>
                    <p className="text-base text-gray-800  dark:text-gray-400 font-light my-4">
                      hello@coinsave.com
                    </p>
                    <p className="text-base text-gray-800  dark:text-gray-400 font-light my-4">
                      +1 (208) 7308 4236
                    </p>
                  </div>

                  <div className="sm:hidden w-full sm:w-1/2 flex flex-row items-center sm:justify-end">
                    <p className="flex">
                      <i className="fab fa-instagram fa-2x fa-fw mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                      <i className="fab fa-twitter fa-fw fa-2x mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                      <i className="fab fa-linkedin fa-fw mx-2 fa-2x hover:text-blueDeep dark:text-blueDeep"></i>
                    </p>
                  </div>
                  <div className="mt-8 mb-6 hidden lg:flex flex-row ">
                    <Link to="/about">
                      <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:cursor-pointer hover:dark:text-gray-100 hover:text-gray-100">
                        About Us
                      </p>
                    </Link>
                    <Link to="/contact">
                      <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:cursor-pointer hover:dark:text-gray-100 hover:text-gray-100">
                        Contact
                      </p>
                    </Link>
                    <Link to="/login">
                      <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:cursor-pointer hover:dark:text-gray-100 hover:text-gray-100">
                        Login
                      </p>
                    </Link>
                    <Link to="/savings">
                      <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:cursor-pointer hover:dark:text-gray-100 hover:text-gray-100">
                        Savings
                      </p>
                    </Link>
                    <Link to="/downloads">
                      <p className="font-raleway font-medium text-sm text-blueDeep dark:text-blueDeep border border-blueDeep py-3 px-5 mr-3 rounded-lg hover:bg-blueDeep hover:cursor-pointer hover:dark:text-gray-100 hover:text-gray-100">
                        Downloads
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="w-1/4 hidden md:block">
                  <div className="mt-12 font-raleway font-medium text-xl text-blueDeep dark:text-gray-200 mb-6">
                    Contact <br />
                    <p className="text-base text-gray-800  dark:text-gray-400 font-light my-4">
                      contact@coinsave.com
                    </p>
                    <p className="text-base text-gray-800  dark:text-gray-400 font-light my-4">
                      hello@coinsave.com
                    </p>
                    <p className="text-base text-gray-800  dark:text-gray-400 font-light my-4">
                      +1 (208) 7308 4236
                    </p>
                  </div>
                </div>
                <div className="w-1/4 hidden lg:block">
                  <ul className="mt-12 list-none hover:list-inside">
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep hover:dark:text-blueDeep cursor-pointer my-4">
                      Terms and Conditions
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep hover:dark:text-blueDeep cursor-pointer my-4">
                      FAQ's
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep hover:dark:text-blueDeep cursor-pointer my-4">
                      Tracking
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep hover:dark:text-blueDeep cursor-pointer my-4">
                      Budgeting
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep hover:dark:text-blueDeep cursor-pointer my-4">
                      Transactions
                    </li>
                    <li className="font-raleway font-medium text-black dark:text-gray-400 text-lg hover:text-blueDeep hover:dark:text-blueDeep cursor-pointer my-4">
                      Billings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col sm:flex-row mt-6">
              <div className="w-full md:w-1/2 mb-3 sm:my-0">
                <p className="flex items-center text-md font-raleway font-medium text-black dark:text-gray-400">
                  <i className="fas fa-copyright fa-md fa-fw"></i>
                  2022
                  <span className="hidden md:block px-2"> CoinSave Inc. </span>
                  <span className="hidden lg:block ">All Rights Reserved</span>
                </p>
              </div>
              <div className="hidden sm:flex w-full sm:w-1/2 flex-row items-center sm:justify-end">
                <p className="flex">
                  <i className="fab fa-instagram fa-1x sm:fa-2x fa-fw mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                  <i className="fab fa-twitter fa-1x fa-fw sm:fa-2x mx-2 hover:text-blueDeep dark:text-blueDeep"></i>
                  <i className="fab fa-linkedin fa-1x fa-fw mx-2 sm:fa-2x hover:text-blueDeep dark:text-blueDeep"></i>
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
