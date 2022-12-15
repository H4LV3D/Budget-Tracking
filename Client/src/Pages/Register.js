import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Register() {
  const darkToggle = false;

  return (
    <>
      <header className="fixed w-full md:pt-2 top-0 z-50 text-gray-700">
        <Navbar darkToggle={darkToggle} />
      </header>
      <div>
        <section className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center justify-center">
          <div className="bg-gray-100 dark:bg-gray-700 flex rounded-2xl shadow-xl p-8 md:p-12 w-full items-center lg:w-[900px] font-raleway mx-8 sm:mx-14 md:mx-8 lg:mx-0 my-28 md:my-0">
            <div className="w-full px-0 sm:px-8">
              <h2 className="font-sans font-black text-blueDeep dark:text-white text-4xl">
                Sign Up.
              </h2>
              <p className="font-raleway text-md dark:text-gray-300 mt-3 text-blue">
                It's Easy, Register.
              </p>

              <form action="" className="flex flex-col gap-6 mt-8">
                <div className="md:flex flex-row gap-10 w-full">
                  <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      for="lastname"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                    >
                      Last Name
                    </label>
                    <input
                      className="py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                      type="text"
                      name="Lastname"
                      id="lastname"
                      placeholder="Asake"
                      autoFocus
                    />
                  </div>
                  <div className="relative md:w-1/2">
                    <label
                      for="firstname"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                    >
                      Firstname
                    </label>
                    <input
                      className="focus:border-blue py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Mr Money"
                    />
                  </div>
                </div>
                <div className="md:flex flex-row gap-10 w-full">
                  <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                    >
                      Email
                    </label>
                    <input
                      className="py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="mrmoneywiththevibe@gmail.com"
                      autoFocus
                    />
                  </div>
                  <div className="relative w-full md:w-1/2 ">
                    <label
                      for="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                    >
                      Sex
                    </label>
                    <input
                      className="focus:border-blue py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="md:flex flex-row gap-10 w-full">
                  <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                    >
                      Password
                    </label>
                    <input
                      className="py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                      type="Password"
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      autoFocus
                    />
                  </div>
                  <div className="relative w-full md:w-1/2">
                    <label
                      for="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="focus:border-blue py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="block md:flex justify-between items-center mt-8">
                  <button className="hidden bg-white dark:bg-gray-800 dark:border-gray-900 dark:text-white border py-2 px-6 rounded-md md:flex justify-center items-center text-sm hover:scale-105 duration-400 text-blue ">
                    <svg
                      className="mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="25px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Register with Google
                  </button>
                  <a href="/dashboard">
                    <button className=" bg-blueDeep text-white rounded-md py-2 px-20 hover:scale-105 duration-300 w-full">
                      Submit
                    </button>
                  </a>
                </div>
              </form>

              <div className="mt-3 text-xs flex justify-between items-center text-blue dark:text-gray-400 pt-4 border-t border-blueDeep">
                <p>Already have an account?</p>
                <Link to="/login">
                  <p>
                    <button className="py-3 px-6 bg-blueDeep dark:bg-gray-800 dark:border-gray-900 border rounded-md hover:scale-110 duration-300">
                      Login
                    </button>
                  </p>
                </Link>
              </div>
              <div className="md:hidden">
                <div className="mt-12 grid grid-cols-3 items-center text-gray-400">
                  <hr className="border-gray-400" />
                  <p className="text-center text-sm">OR</p>
                  <hr className="border-gray-400" />
                </div>

                <button className="bg-white dark:bg-gray-800 dark:border-gray-900 dark:text-white border py-2 w-full rounded-md mt-5 flex justify-center items-center text-sm hover:scale-105 duration-400 text-blue">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="25px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
