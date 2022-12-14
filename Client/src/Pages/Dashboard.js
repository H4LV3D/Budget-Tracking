import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Assets/fontawesome-free-6.2.1-web/css/solid.css";
import "../Assets/fontawesome-free-6.2.1-web/css/all.css";
import "../Assets/fontawesome-free-6.2.1-web/css/brands.css";
import "../Assets/fontawesome-free-6.2.1-web/css/fontawesome.css";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <section className="fixed overflow-y-auto left-64 display-size bg-gray-200 dark:bg-gray-800 p-9">
        <main>
          <div className="w-full xl:w-2/3 py-3 flex justify-between items-center shadow-sm">
            <h2 className="font-raleway font-bold text-2xl">Dashboard</h2>
            <div className="flex items-center justify-center space-x-5">
              <div class="flex rounded-md shadow-sm font-raleway">
                <button className="py-2 px-3 btn bg-white border-gray-200 shadow-sm rounded-l-md text-md dark:bg-gray-800 dark:text-gray-400 dark:border-l  dark:border-b dark:border-t dark:border-blueDeep">
                  <i class="fas fa-search fa-sm fa-fw"></i>
                </button>
                <input
                  type="text"
                  class="py-2 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-md focus:z-10 dark:focus:border-r dark:focus:border-b dark:focus:border-t focus:border-blueDeep dark:bg-gray-800 dark:text-gray-400 dark:border-r dark:border-b dark:border-t dark:border-blueDeep"
                  placeholder="Search"
                  autoComplete="true"
                />
              </div>
            </div>
          </div>
          <div className="row w-full xl:w-2/3 py-4 flex justify-between space-x-6 overflow-x-auto">
            <div className="p-10 lg:py-10 lg:px-12 bg-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-lg">
              <p className="pb-3 dark:text-gray-400">
                <span className="text-md font-light font-raleway">
                  Total Earning
                </span>
                <i class="fas fa-chart-simple fa-lg fa-fw pl-4"></i>
              </p>
              <div class="w-full bg-gray-200 h-2 rounded-lg mb-3">
                <div
                  class="bg-blueDeep rounded-lg h-2"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="font-black font-archivo text-2xl dark:text-gray-400">
                $450,000.30
              </p>
            </div>
            <div className="p-10 lg:py-10 lg:px-12 bg-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-lg">
              <p className="pb-3 dark:text-gray-400">
                <span className="text-md font-light font-raleway">
                  Total Earning
                </span>
                <i class="fas fa-chart-simple fa-lg fa-fw pl-4"></i>
              </p>
              <div class="w-full bg-gray-200 h-2 rounded-lg mb-3">
                <div
                  class="bg-blueDeep rounded-lg h-2"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="font-black font-archivo text-2xl dark:text-gray-400">
                $450,000.30
              </p>
            </div>
            <div className="p-10 lg:py-10 lg:px-12 bg-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-lg">
              <p className="pb-3 dark:text-gray-400">
                <span className="text-md font-light font-raleway">
                  Total Earning
                </span>
                <i class="fas fa-chart-simple fa-lg fa-fw pl-4"></i>
              </p>
              <div class="w-full bg-gray-200 h-2 rounded-lg mb-3">
                <div
                  class="bg-blueDeep rounded-lg h-2"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="font-black font-archivo text-2xl dark:text-gray-400">
                $450,000.30
              </p>
            </div>
          </div>
          <div className="row w-full xl:w-2/3 py-4 flex space-x-6 overflow-x-auto my-4">
            <div className="bg-gray-300 p-6 pb-64 w-full rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-sans font-medium text-xl">
                  Weekly Activity
                </h3>
                <span className="font-raleway font-light text-md border border-gray-400 rounded-md px-5 py-2 bg-gray-100">
                  Daily
                </span>
              </div>
            </div>
          </div>
          <div className="row w-full xl:w-2/3 py-4 flex space-x-6 overflow-x-auto my-4">
            <div className="p-6">
              <div className="head">
                <h1>Recent Purchases</h1>
              </div>
              <div className="table">
                <div class="flex flex-col">
                  <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                      <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                              >
                                Age
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                              >
                                Address
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                John Brown
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                45
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                New York No. 1 Lake Park
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  class="text-blue-500 hover:text-blue-700"
                                  href="/"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>

                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                Jim Green
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                27
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                London No. 1 Lake Park
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  class="text-blue-500 hover:text-blue-700"
                                  href="/"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>

                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                Joe Black
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                31
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                Sidney No. 1 Lake Park
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  class="text-blue-500 hover:text-blue-700"
                                  href="/"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>

                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                Edward King
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                16
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                LA No. 1 Lake Park
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  class="text-blue-500 hover:text-blue-700"
                                  href="/"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>

                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                Jim Red
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                45
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                Melbourne No. 1 Lake Park
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  class="text-blue-500 hover:text-blue-700"
                                  href="/"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Dashboard;
