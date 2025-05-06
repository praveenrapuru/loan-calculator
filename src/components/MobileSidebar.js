import React from "react";
import { Link } from "react-router-dom";

export default function MobileSidebar({ isSidebarOpen, setIsSidebarOpen, activeLink, handleClick }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        style={{ transition: "transform 0.3s ease" }}
      >
        <button
          onClick={() => setIsSidebarOpen(false)} 
          className="absolute top-4 right-4 text-2xl text-black dark:text-white"
        >
          ×
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 mt-10">
          <Link
            to="/"
            className={`px-4 py-2 rounded-md ${
              activeLink === "home"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => handleClick("home")}
          >
            HOME
          </Link>
          <Link
            to="/exchange-rates"
            className={`px-4 py-2 rounded-md ${
              activeLink === "exchange-rates"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => handleClick("exchange-rates")}
          >
            EXCHANGE RATES
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 rounded-md ${
              activeLink === "about"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => handleClick("about")}
          >
            ABOUT
          </Link>
          <Link
            to="/error"
            className={`px-4 py-2 rounded-md ${
              activeLink === "error"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => handleClick("error")}
          >
            ERROR
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
