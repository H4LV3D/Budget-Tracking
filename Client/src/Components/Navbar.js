import React from "react";
import Toggle from "./toggle";
// import logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <header className="text-gray-700 bg-white dark:bg-gray-800 body-font ">
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

          <button className="inline-flex items-center p-2 rounded-md bg-blueDeep focus:outline-none shadow-lg">
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
          <nav className="md:hidden flex flex-wrap items-center justify-center ml-4 text-base font-raleway">
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
        <div className="flex items-center justify-center">
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 active:outline-none active:bg-gray-100 transition ease-in-out duration-150"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="menu"
                data-dropdown-toggle="dropdown"
              >
                <p className="px-5">
                  <span className="px-5">Options</span>
                </p>
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-blueDeep shadow-lg ring-1 ring-black dark:ring-blueDeep ring-opacity-5 focus:outline-none"
              role="menu"
              id="dropdown"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <a
                  href="/"
                  class="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="/"
                  class="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="/"
                  class="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    class="text-gray-700 dark:text-gray-200 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <Toggle />
          </div>
          <nav className="hidden md:flex flex-wrap items-center justify-center text-base font-raleway">
            <a
              href="/"
              className="mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Sign In
            </a>
            <a
              href="/"
              className="mr-5 text-md font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Register
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
