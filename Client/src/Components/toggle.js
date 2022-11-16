import React from "react";
import { ThemeContext } from "./themeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="checkbox">
        <svg
          className="w-6 h-6 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              theme === "dark"
                ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }
          ></path>
        </svg>
      </label>
      <label className="toggleDarkBtn">
        <input
          type="checkbox"
          id="checkbox"
          className="dark:bg-gray-300"
          checked={theme === "dark"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <span className="slideBtnTg round"></span>
      </label>
    </div>
  );
};

export default Toggle;
