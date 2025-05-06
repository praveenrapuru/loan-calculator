import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 text-gray-800 dark:text-gray-100 bg-white dark:bg-black">
      <h1 className="text-4xl font-bold dark:text-white mb-4">
        Something went wrong in the application
      </h1>
  
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded transition"
      >
        Go to Home Page
      </button>
    </div>
  );
}

