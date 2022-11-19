import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  var menu = document.getElementById("menu");
  function openMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("w-0", "h-0", "opacity-0", "hidden");
    menu.classList.add("w-screen", "h-screen", "opacity-95", "flex");
  }

  function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("w-screen", "h-screen", "opactiy-95", "flex");
    menu.classList.add("w-0", "h-0", "opacity-0", "hidden");
  }

  return (
    <header className="text-gray-700 dark:bg-gray-800 dark:shadow-gray-600">
      <div className="flex flex-row flex-wrap px-8 md:px-12 py-5 mx-auto md:items-center justify-between shadow-md lg:shadow-xl lg:rounded-xl lg:my-3 lg:mx-10">
        <div className="flex">
          <a href="/" className="flex items-center md:mb-0 mr-3">
            <i className="fab fa-bitcoin fa-lg fa-fw text-blueDeep"></i>
            <span className="text-blueDeep font-sans font-bold text-lg">
              Coin
            </span>
            <span className="text-gray-600 dark:text-gray-400 font-raleway font-black text-lg">
              Save
            </span>
          </a>
          <nav className="hidden md:flex flex-wrap items-center justify-center ml-4 font-raleway">
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800 hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Dashboard
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800 hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Projects
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800 hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Setting
            </a>
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800 hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200"
            >
              Account
            </a>
          </nav>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <button className="mx-3">
            <i
              className="fas fa-user-circle fa-fw fa-xl px-5 text-blueDeep"
              aria-hidden="true"
            ></i>
          </button>

          <button className="mx-3" onClick={openMenu}>
            <i className={`fas fa-stream fa-lg fa-fw p-3 text-blueDeep`}></i>
          </button>
        </div>
        <div className="hidden md:flex flex-nowrap">
          <Toggle />
          <div className="hidden lg:block ml-6">
            <nav className=" md:flex flex-wrap items-center justify-center text-base font-raleway">
              <a
                href="/login"
                className="mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black"
              >
                Sign In
              </a>
              <a
                href="/"
                className="mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep"
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
            <i
              className="fas fa-user-circle fa-fw fa-xl px-5 text-blueDeep"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>

      <div
        id="menu"
        className="hidden z-90 w-0 h-0 justify-center items-center bg-gray-900 opacity-0 duration-700 font-raleway font-medium text-lg"
      >
        <div className="flex flex-col text-white text-center text-xl font-lightName">
          <a className="hover:text-amber-500 duration-300 mb-12" href="/">
            <i
              className="fas fa-times-circle fa-2x fa-fw text-blueDeep mb-9"
              onClick={closeMenu}
            ></i>
          </a>
          <a
            className="hover:text-amber-500 duration-300 my-5 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            About
          </a>
          <a
            className="hover:text-amber-500 duration-300 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            Projects
          </a>
          <a
            className="hover:text-amber-500 duration-300 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            Plans
          </a>
          <a
            className="hover:text-amber-500 duration-300 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/login"
          >
            Sign In
          </a>
          <a
            className="hover:text-amber-500 duration-300 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            Register
          </a>
          <a
            className="hover:text-amber-500 duration-300 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            <Toggle />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
