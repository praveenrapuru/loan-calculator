import React from "react";

export default function AboutPage() {
  return (
    <div className="mx-auto p-6 mt-8 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-semibold mb-4">About This Loan Calculator</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        This loan calculator helps you estimate your monthly EMI (Equated Monthly Installment)
        based on the loan amount, interest rate, and loan tenure. It also shows you a detailed
        amortization schedule, which breaks down the interest and principal components of each monthly payment.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Features include:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Real-time EMI calculation based on your input.</li>
        <li>Amortization schedule generation over the loan tenure.</li>
        <li>Live exchange rate conversion using ExchangeRate API.</li>
        <li>Responsive design built with React and Tailwind CSS.</li>
        <li>Reset functionality to start over easily.</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        This tool is useful for personal financial planning, budgeting, or understanding the
        cost of borrowing. For best results, always consult with your bank or financial advisor
        before making financial decisions.
      </p>
    </div>
  );
}
