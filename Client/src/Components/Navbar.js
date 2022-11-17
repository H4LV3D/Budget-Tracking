import React from "react";
import Toggle from "./toggle";
// import logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <header className="text-gray-700 bg-white dark:bg-black body-font ">
      <div className="flex lg:container flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between shadow-xl border-r-5">
        <div className="flex">
          <a
            href="/"
            className="flex items-center mb-4 font-medium text-gray-900 md:mb-0"
          >
            <span className="text-blueDeep font-montserrat font-black">
              Coin
            </span>
            <span className="text-gray-600 font-raleway">Save</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center ml-4 text-base font-raleway">
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Dashboard
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Projects
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Setting
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Account
            </a>
          </nav>
        </div>
        <div>
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
