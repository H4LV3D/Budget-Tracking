import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
  const darkToggle = false;

  return (
    <>
      <div className="h-screen w-full dark:bg-gray-800">
        <Navbar darkToggle={darkToggle} />
        <div
          className={`flex items-center justify-center flex-col ${
            darkToggle && "dark"
          }`}
        >
          <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen">
            <div className="container mx-auto px-6 py-20">
              <h2 className="text-8xl font-merriweather font-black text-blueDeep dark:text-white mb-8">
                Follow The Trace
              </h2>
              <p className="font-raleway font-medium text-lg">
                Save. Spend. Invest. Repeat.
              </p>
              <p></p>
              <div className="flex flex-wrap -mx-6">
                <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
                  <div className="bg-white rounded shadow py-2">
                    <a
                      href="/"
                      className="block w-full h-full p-4 hover:bg-gray-100 rounded transition duration-300 ease-in-out"
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-500 mr-4">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                          </svg>
                        </div>
                        <div className="text-gray-600">
                          <h4 className="text-lg font-semibold text-gray-800">
                            Add New Post
                          </h4>
                          <p className="mt-1">Create a new blog post</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
                  <div className="bg-white rounded shadow py-2">
                    <a
                      href="/"
                      className="block w-full h-full p-4 hover:bg-gray-100 rounded transition duration-300 ease-in-out"
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-500 mr-4">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                          </svg>
                        </div>
                        <div className="text-gray-600">
                          <h4 className="text-lg font-semibold text-gray-800">
                            Add New Post
                          </h4>
                          <p className="mt-1">Create a new blog post</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Home;
