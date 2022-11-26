import React from "react";
import Navbar from "../Components/Navbar";

function Login() {
  const darkToggle = false;

  return (
    <>
      <header className="fixed w-full md:pt-2 top-0 z-50 text-gray-700">
        <Navbar darkToggle={darkToggle} />
      </header>
      <div>
        <section class="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center justify-center">
          <div class="bg-gray-100 dark:bg-gray-700 flex rounded-2xl shadow-xl p-12 w-full items-center lg:w-[900px] font-raleway mx-10 lg:mx-0 my-28 md:my-0">
            <div class="w-full md:w-1/2 md:px-8 ">
              <h2 class="font-sans font-black text-blueDeep dark:text-white text-4xl ">
                Login
              </h2>
              <p class="font-raleway text-md dark:text-gray-300 mt-4 text-blue">
                It's Easy, Login.
              </p>

              <form action="" class="flex flex-col gap-6 mt-8">
                <div className="relative">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                  >
                    Email
                  </label>
                  <input
                    class="py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="mrmoneywiththevibe@gmail.com"
                    autoFocus
                  />
                </div>
                <div className="relative">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-1"
                  >
                    Password
                  </label>
                  <input
                    class="focus:border-blue py-2 px-4 rounded-md border border-gray-500 focus:outline-none focus:border-blue w-full bg-gray-100 dark:bg-gray-800 dark:border-0 dark:text-gray-200 active:bg-gray-700"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="text-xs text-blue dark:text-gray-400">
                  <a href="/">Forgot your password?</a>
                </div>

                <button className=" bg-blueDeep shadow-2xl text-white rounded-lg py-2 hover:scale-105 duration-300">
                  Login
                </button>
              </form>

              <div class="mt-4 hidden md:grid grid-cols-3 items-center text-gray-400">
                <hr class="border-gray-400" />
                <p class="text-center text-sm">OR</p>
                <hr class="border-gray-400" />
              </div>

              <button class="hidden bg-white dark:bg-gray-800 dark:border-gray-900 dark:text-white border py-2 w-full rounded-md mt-5 md:flex justify-center items-center text-sm hover:scale-105 duration-400 text-blue">
                <svg
                  class="mr-3"
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

              <div class="mt-6 text-xs flex justify-between items-center text-blue dark:text-gray-400  pt-4 ">
                <p>Don't have an account?</p>
                <a href="/register">
                  <button class="py-3 px-6 bg-blueDeep dark:bg-gray-800 dark:border-gray-900 border rounded-md hover:scale-110 duration-300">
                    Register
                  </button>
                </a>
              </div>
            </div>

            <div class="md:block hidden w-1/2">
              <img
                class="rounded-2xl"
                src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="nice ima"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
