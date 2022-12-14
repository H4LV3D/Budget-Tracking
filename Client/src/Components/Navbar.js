import React, { useState } from "react";
import Toggle from "./toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function menuToggle() {
    if (isOpen) {
      let menu = document.getElementById("menu");
      menu.classList.add("w-0", "h-0", "opacity-0", "hidden");
      menu.classList.remove("w-screen", "h-screen", "opacity-95", "flex");
    } else {
      var menu = document.getElementById("menu");
      menu.classList.add("w-screen", "h-screen", "opactiy-95", "flex");
      menu.classList.remove("w-0", "h-0", "opacity-0", "hidden");
    }
    setIsOpen(!isOpen);
  }

  const toggleMenu = () => {
    menuToggle();
  };

  return (
    <>
      <div className="flex flex-row flex-wrap px-8 md:px-12 py-5 mx-auto md:items-center justify-between shadow-md lg:shadow-xl lg:rounded-xl lg:mx-10 text-gray-700 bg-gray-200 dark:bg-gray-800 md:pt-8">
        <div className="flex">
          <a href="/" className="flex items-center md:mb-0 mr-3">
            <i className="fab fa-bitcoin fa-lg fa-fw text-blueDeep"></i>
            <span className="text-blueDeep font-sans font-bold text-lg">
              Coin
            </span>
            <span className="text-gray-600 dark:text-gray-400 font-raleway font-medium text-lg">
              Save
            </span>
          </a>
          <nav className="hidden md:flex flex-wrap items-center justify-center ml-4 font-raleway">
            <a
              href="/about"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              About Us
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Budgets
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Tracking
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Download
            </a>
            <a
              href="/dashboard"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Dashboard
            </a>
          </nav>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <button className="mx-3">
            <i
              className="fas fa-user-circle fa-fw fa-xl sm:px-5 py-3 text-blueDeep"
              aria-hidden="true"
            ></i>
          </button>

          <button className="mx-3" onClick={toggleMenu}>
            <i
              className={`fas ${
                isOpen ? "fa-times-square" : "fa-stream"
              } fa-lg fa-fw sm:p-3 py-3 text-blueDeep`}
            ></i>
          </button>
        </div>
        <div className="hidden md:flex flex-nowrap">
          <Toggle />
          <div className="hidden lg:block ml-6">
            <nav className=" md:flex flex-wrap items-center justify-center text-base font-raleway">
              <a
                href="/login"
                className="mr-3 md:mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
              >
                Sign In
              </a>
              <a
                href="/register"
                className="mr-3 md:mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
              >
                Register
              </a>
            </nav>

            <button className="sm:hidden inline-flex items-center p-2 rounded-md bg-blueDeep focus:outline-none shadow-lg">
              <svg
                className="w-5 h-5 text-white rounded-sm"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="lg:hidden">
            <a href="/login" className="text-decoration-none">
              <i
                className="fas fa-user-circle fa-fw fa-xl px-sm-5 text-gray-600 pl-5"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div
        id="menu"
        className="hidden z-90 w-0 h-0 justify-center pt-12 bg-gray-900 opacity-0 duration-700 font-raleway font-medium text-lg"
      >
        <div className="flex flex-col text-white text-center text-xl font-lightName">
          <a
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            About
          </a>
          <a
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            Projects
          </a>
          <a
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            Plans
          </a>
          <a
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/login"
          >
            Sign In
          </a>
          <a
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/register"
          >
            Register
          </a>
          <p
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            <Toggle />
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
