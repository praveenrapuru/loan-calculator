import React, { useEffect, useState } from "react";

export default function ExchangeRatesPage() {
  const [rates, setRates] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          "https://v6.exchangerate-api.com/v6/d7787fbf441e8a4ba4ae82ab/latest/USD"
        );
        const data = await res.json();
        if (data.result === "success") {
          setRates(data.conversion_rates);
        } else {
          throw new Error("API returned failure.");
        }
      } catch (err) {
        setError("Error fetching exchange rates. Please try again later.");
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-medium mb-4">Live Exchange Rates</h2>
      {error ? (
        <p className="text-red-500 dark:text-red-400">{error}</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(rates).map(([currency, value]) => (
            <li
              key={currency}
              className="bg-white dark:bg-black p-2 shadow rounded border border-gray-200 dark:border-gray-700"
            >
              <strong>{currency}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
