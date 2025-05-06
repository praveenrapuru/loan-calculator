import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MobileSidebar from "./MobileSidebar";

export default function Header({ darkMode, setDarkMode }) {
  const [activeLink, setActiveLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const linkClass = "hover:bg-blue-500 px-4 py-2 text-sm rounded-md font-light";

  const handleClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 md:px-4 md:py-3">
        
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="text-white">
              <span className="material-icons">menu</span>
            </button>
            <div className="text-xl font-light ml-3">Loan Calculator</div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-blue-500" />
            )}
          </button>
        </div>

        
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="text-xl font-light">Loan Calculator</div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${linkClass} ${activeLink === "home" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
              onClick={() => handleClick("home")}
            >
              HOME
            </Link>
            <Link
              to="/exchange-rates"
              className={`${linkClass} ${activeLink === "exchange-rates" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
              onClick={() => handleClick("exchange-rates")}
            >
              EXCHANGE RATES
            </Link>
            <Link
              to="/about"
              className={`${linkClass} ${activeLink === "about" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
              onClick={() => handleClick("about")}
            >
              ABOUT
            </Link>
            <Link
              to="/error"
              className={`${linkClass} ${activeLink === "error" ? (darkMode ? "bg-gray-600" : "bg-blue-700") : ""}`}
              onClick={() => handleClick("error")}
            >
              ERROR
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-blue-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeLink={activeLink}
        handleClick={handleClick}
      />
    </header>
  );
}
