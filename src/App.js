import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoanForm from "./components/LoanForm";
import ExchangeRatesPage from "./components/ExchangeRatesPage";
import AboutPage from "./components/AboutPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <LoanForm/>
        <Routes>
          <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
