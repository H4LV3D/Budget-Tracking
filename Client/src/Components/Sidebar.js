import React from "react";
import Toggle from "./toggle";
import "../Assets/fontawesome-free-6.2.1-web/css/solid.css";
import "../Assets/fontawesome-free-6.2.1-web/css/all.css";
import "../Assets/fontawesome-free-6.2.1-web/css/brands.css";
import "../Assets/fontawesome-free-6.2.1-web/css/fontawesome.css";

function Sidebar() {
  return (
    <>
      <section>
        <aside
          className="hidden sm:block fixed top-0 left-0 md:w-16 lg:w-64 h-full md:overflow-x-hidden"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auton overflow-x-hidden py-5 px-3 h-full bg-gray-200 border-r border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <a
              href="/"
              className="flex items-center sm:ml-12 lg:ml-0 md:mb-0 mr-3 mt-4 px-2 py-3"
            >
              <i className="fab fa-bitcoin fa-lg fa-fw text-blueDeep"></i>
              <span className="text-blueDeep font-sans font-bold text-lg">
                Coin
              </span>
              <span className="text-gray-600 dark:text-gray-400 font-raleway font-black text-lg">
                Save
              </span>
            </a>
            <ul className="space-y-2 mt-5 font-raleway md:mb-14">
              <li>
                <a
                  href="/dashboard"
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-gray-300 dark:bg-gray-700"
                >
                  <i className="fa-solid fa-house fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="ml-6">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  type="button"
                  className="flex items-center p-3 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <i className="fas fa-file-invoice-dollar fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="flex-1 ml-6 text-left whitespace-nowrap">
                    Invoice
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  type="button"
                  className="flex items-center p-3 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-sales"
                  data-collapse-toggle="dropdown-sales"
                >
                  <i className="fas fa-cart-shopping fa-lg fa-fw dark:text-white text-blueDeep"></i>
                  <span className="flex-1 ml-6 text-left whitespace-nowrap">
                    Sales
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fas fa-envelope fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="flex-1 ml-6 whitespace-nowrap">
                    Messages
                  </span>
                  <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                    6
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  type="button"
                  className="flex items-center p-3 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <i className="fas fa-lock fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="flex-1 ml-6 text-left whitespace-nowrap">
                    Authentication
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <i className="fas fa-file fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="ml-6">Docs</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <i className="fas fa-folder fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="ml-6">Components</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <i className="fa-solid fa-circle-info fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="ml-6">Help</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <i className="fas fa-gear fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="ml-6">Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <i className="fas fa-globe-africa fa-lg fa-fw dark:text-white text-blueDeep my-auto"></i>
                  <span className="ml-6">Language</span>
                </a>
              </li>
              <li>
                <p className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <Toggle />
                </p>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 lg:flex left-0 justify-center border-r bg-gray-200 border-gray-300 lg:px-4 xl:p-4 space-x-4 w-64 dark:bg-gray-800 z-20 font-raleway">
            <div className="w-full rounded-md px-4 py-3 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700">
              <i className="fas fa-user-circle fa-2x fa-fw my-auto text-gray-500 dark:text-blueDeep"></i>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Toluwalope</p>
                <small className="text-gray-500 dark:text-gray-400">
                  Kinkunmz
                </small>
              </div>
              <a
                href="/login"
                className=" text-gray-500 hover:text-gray-900 p-3 cursor-pointer dark:text-gray-400 dark:hover:text-blueDeep "
              >
                <i className="fas fa-sign-out-alt fa-lg fa-fw  py-auto"></i>
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

export default Sidebar;
