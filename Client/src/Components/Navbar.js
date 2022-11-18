import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  return (
    <header className="text-gray-700 dark:bg-gray-800 dark:shadow-gray-600">
      <div className="flex flex-col flex-wrap px-5 md:px-12 py-5 mx-auto md:items-center md:flex-row justify-between shadow-md lg:shadow-xl lg:rounded-xl lg:my-3 lg:mx-10">
        <div className="flex">
          <a href="/" className="flex items-center mb-4 md:mb-0 mr-3">
            <i class="fab fa-bitcoin fa-lg fa-fw text-blueDeep"></i>
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
        <div className="md:hidden flex items-center justify-center">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2 text-md font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none  transition ease-in-out duration-150"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="menu"
                data-bs-dropdown-toggle="dropdown"
              >
                <p className="px-5">
                  <span className="px-5">Home</span>
                </p>
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="md:hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-blueDeep shadow-lg ring-1 ring-black dark:ring-blueDeep ring-opacity-5 focus:outline-none"
              role="menu"
              id="dropdown"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <a
                  href="/"
                  className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="/"
                  className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 dark:text-gray-200 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap">
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
            <i class="fas fa-user-circle fa-fw fa-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
