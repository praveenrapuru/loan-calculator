import React from "react";

function EmiDisplay({ emi, currency, rate }) {
  const formattedEmi = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(emi * rate);

  return (
    <h2 className="text-xl font-light mb-4">
      Monthly EMI: {formattedEmi}
    </h2>
  );
}

export default EmiDisplay;
