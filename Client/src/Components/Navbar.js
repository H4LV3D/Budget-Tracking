import React, { useState } from "react";
import Toggle from "./toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function menuToggle() {
    if (isOpen) {
      let menu = document.getElementById("menu");
      document.getElementById("navbar").classList.remove("hidden");
      document.getElementById("navbar").classList.add("flex", "mt-2");
      menu.classList.add("w-0", "h-0", "opacity-0", "hidden");
      menu.classList.remove("w-screen", "min-h-screen", "opacity-95", "flex");
    } else {
      var menu = document.getElementById("menu");
      document.getElementById("navbar").classList.remove("flex", "mt-2");
      document.getElementById("navbar").classList.add("hidden");
      menu.classList.add("w-screen", "min-h-screen", "opactiy-95", "flex");
      menu.classList.remove("w-0", "h-0", "opacity-0", "hidden");
    }
    setIsOpen(!isOpen);
  }

  const toggleMenu = () => {
    menuToggle();
  };

  return (
    <>
      <div
        className="flex flex-row flex-wrap px-4 sm:px-8 md:px-12 py-6 md:items-center justify-between shadow-md lg:shadow-xl rounded-md sm:rounded-lg lg:rounded-xl mx-2 sm:mx-6 lg:mx-20 text-gray-700 bg-gray-200 dark:bg-gray-800 mt-2 md:mt-0"
        id="navbar"
      >
        <div className="flex">
          <Link to="/">
            <p className="flex items-center md:mb-0 mr-3">
              <i className="fab fa-bitcoin fa-lg fa-fw text-blueDeep"></i>
              <span className="text-blueDeep font-sans font-bold text-lg">
                Coin
              </span>
              <span className="text-gray-600 dark:text-gray-400 font-raleway font-medium text-lg">
                Save
              </span>
            </p>
          </Link>
          <nav className="hidden md:flex flex-wrap items-center justify-center ml-4 font-raleway">
            <Link to="/about">
              <p className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200">
                About Us
              </p>
            </Link>
            <Link to="/">
              <p className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200">
                Budgets
              </p>
            </Link>
            <Link to="/">
              <p className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200">
                Tracking
              </p>
            </Link>
            <Link to="/dashboard">
              <p className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200">
                Dashboard
              </p>
            </Link>
          </nav>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <Link to="/login">
            <button className="mx-3">
              <i
                className="fas fa-user-circle fa-fw fa-xl sm:px-5 py-3 text-blueDeep"
                aria-hidden="true"
              ></i>
            </button>
          </Link>

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
              <Link to="/login">
                <p className="mr-3 md:mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200">
                  Sign In
                </p>
              </Link>
              <Link to="/register">
                <p className="mr-3 md:mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-blueDeep hover:text-lg hover:font-black transition ease-in-out duration-200">
                  Register
                </p>
              </Link>
            </nav>
          </div>
          <div className="lg:hidden">
            <Link to="/login">
              <i
                className="fas fa-user-circle fa-fw fa-xl px-sm-5 text-gray-600 pl-5"
                aria-hidden="true"
              ></i>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="menu"
        className="hidden z-90 w-0 h-0 justify-center text-gray-800 dark:text-blueDeep bg-gray-200 dark:bg-gray-800 opacity-0 duration-700 font-raleway font-medium text-lg overflow-y-scroll min-vh-100"
      >
        <div className="flex flex-col text-center items-center text-xl font-lightName text-gray-800 dark:text-gray-300 pt-6">
          <Link to="/about">
            <p className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300">
              About Us
            </p>
          </Link>
          <Link to="/">
            <p className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300">
              Projects
            </p>
          </Link>
          <Link to="/">
            <p className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300">
              Plans
            </p>
          </Link>
          <Link to="/dashboard">
            <p className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300">
              Dashboard
            </p>
          </Link>
          <Link to="/login">
            <p className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300">
              Sign In
            </p>
          </Link>
          <Link to="/register">
            <p className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300">
              Register
            </p>
          </Link>
          <div
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            <Toggle />
          </div>
          <div
            className="hover:text-amber-500 my-6 hover:text-blueDeep hover:text-4xl transistion ease-in-out duration-300"
            href="/"
          >
            <button className="mx-3" onClick={toggleMenu}>
              <i
                className={`fas ${
                  isOpen ? "fa-times-square" : "fa-stream"
                } fa-lg fa-fw sm:p-3 py-3 text-blueDeep`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
