import React from "react";

export default function CurrencySelector({ rates, selected, onChange }) {
  const currencies = Object.keys(rates || {});

  return (
    <div className="my-1">
      <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
        Currency
      </label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-black text-gray-900 dark:text-gray-100"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
}
