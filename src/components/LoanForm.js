import React, { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";
import LoanResults from "./LoanResults";
import EmiDisplay from "./EmiDisplay";

function LoanForm() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [currency, setCurrency] = useState("USD");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          "https://v6.exchangerate-api.com/v6/d7787fbf441e8a4ba4ae82ab/latest/USD"
        );
        const data = await res.json();
        if (data.result === "success") {
          setExchangeRates(data.conversion_rates);
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    fetchRates();
  }, []);

  const calculateEMI = () => {
    const newErrors = {};
    if (!amount || amount <= 0) newErrors.amount = "Required";
    if (!rate || rate <= 0) newErrors.rate = "Required";
    if (!term || term <= 0) newErrors.term = "Required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const monthlyRate = rate / 100 / 12;
    const n = term * 12;
    const emiCalc =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    setEmi(emiCalc.toFixed(2));
    generateSchedule(emiCalc, monthlyRate, n);
  };

  const generateSchedule = (emiCalc, monthlyRate, n) => {
    let balance = amount;
    const scheduleData = [];

    for (let i = 1; i <= n; i++) {
      const interest = balance * monthlyRate;
      const principal = emiCalc - interest;
      balance -= principal;
      scheduleData.push({
        month: i,
        principal,
        interest,
        balance: balance > 0 ? balance : 0,
      });
    }

    setSchedule(scheduleData);
  };

  const reset = () => {
    setAmount(100000);
    setRate(8.5);
    setTerm(5);
    setEmi(0);
    setSchedule([]);
    setCurrency("USD");
    setErrors({});
  };

  const inputClass =
    "peer w-full p-3 border rounded-md bg-white dark:bg-black border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const labelClass =
    "absolute left-2 -top-3.5 text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-black px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-700";

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <style>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>

      <h1 className="text-4xl font-light mt-3 mb-6 dark:text-white">Loan Calculator Dashboard</h1>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative w-60">
          <label className={labelClass}>Loan Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className={inputClass}
            placeholder=" "
          />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
        </div>

        <div className="relative w-60">
          <label className={labelClass}>Interest Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className={inputClass}
            placeholder=" "
          />
          {errors.rate && <p className="text-red-500 text-xs mt-1">{errors.rate}</p>}
        </div>

        <div className="relative w-60">
          <label className={labelClass}>Term (Years)</label>
          <input
            type="number"
            value={term}
            onChange={(e) => setTerm(parseFloat(e.target.value))}
            className={inputClass}
            placeholder=" "
          />
          {errors.term && <p className="text-red-500 text-xs mt-1">{errors.term}</p>}
        </div>
      </div>

      <button
        onClick={calculateEMI}
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        CALCULATE
      </button>

      {emi > 0 && exchangeRates && Object.keys(exchangeRates).length > 0 && (
        <div>
          <div className="mt-8">
            <EmiDisplay emi={emi} currency={currency} rate={exchangeRates[currency] || 1} />
          </div>

          <div className="flex justify-between items-center gap-4 mt-4">
            <CurrencySelector
              rates={exchangeRates}
              selected={currency}
              onChange={setCurrency}
            />
            <button
              onClick={reset}
              className="ml-4 text-purple-400 border border-purple-400 px-6 py-2 rounded hover:bg-purple-100 dark:hover:bg-purple-800"
            >
              RESET TABLE
            </button>
          </div>

          <LoanResults
            emi={emi}
            schedule={schedule}
            currency={currency}
            rate={exchangeRates[currency] || 1}
          />
        </div>
      )}
    </div>
  );
}

export default LoanForm;
