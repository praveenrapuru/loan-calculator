import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Header({ darkMode, setDarkMode }) {
  const [activeLink, setActiveLink] = useState(""); 
  const linkClass = "hover:border-white px-4 py-2 rounded-md transition-all duration-300";

  const handleClick = (link) => {
    setActiveLink(link); 
  };

  return (
    <header className={`bg-blue-600 dark:bg-gray-800 text-white shadow-md`}>
      <div className="flex items-center justify-between px-4 py-4">
        <div className="text-xl font-light">Loan Calculator</div>
        <div className="flex items-center text-sm font-light space-x-10">
          <Link to="/" 
                className={`${linkClass} ${activeLink === "home" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
                onClick={() => handleClick("home")}>
            HOME
          </Link>
          <Link to="/exchange-rates" 
                className={`${linkClass} ${activeLink === "exchange-rates" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
                onClick={() => handleClick("exchange-rates")}>
            EXCHANGE RATES
          </Link>
          <Link to="/about" 
                className={`${linkClass} ${activeLink === "about" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
                onClick={() => handleClick("about")}>
            ABOUT
          </Link>
          <Link to="/error" 
                className={`${linkClass} ${activeLink === "error" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
                onClick={() => handleClick("error")}>
            ERROR
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-blue-500" />}
          </button>
        </div>
      </div>
    </header>
  );
}
