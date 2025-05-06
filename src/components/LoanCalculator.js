import React from "react";
import Header from "./Header";
import LoanForm from "./LoanForm";
import LoanResults from "./LoanResults";

export default function LoanCalculator() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LoanForm />
      <LoanResults/>
    </div>
  );
}
