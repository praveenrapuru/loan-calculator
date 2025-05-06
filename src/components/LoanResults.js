import React from "react";

function LoanResults({  schedule, currency, rate }) {
  if (!Array.isArray(schedule) || schedule.length === 0) {
    return null;
  }

  const format = (val) =>
    `${(val * rate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} ${currency}`;

  const tableHader = "p-2 text-left font-light w-1/4";
  const tableData = "p-3 w-1/4 text-sm font-light";

  return (
    <div className="mt-6">
      <div className="rounded-md shadow overflow-hidden">
        <table className="min-w-full table-fixed border border-collapse">
          <thead>
            <h4 className="text-xl font-light px-2 mt-2 mb-4">
              Amortization Schedule ({currency})
            </h4>
            <tr>
              <th className={tableHader}>Month</th>
              <th className={tableHader}>Principal</th>
              <th className={tableHader}>Interest</th>
              <th className={tableHader}>Balance</th>
            </tr>
          </thead>
        </table>

        <div className="max-h-80 overflow-y-auto">
          <table className="min-w-full table-fixed border-collapse">
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index} className="border">
                  <td className={tableData}>{item.month}</td>
                  <td className={tableData}>{format(item.principal)}</td>
                  <td className={tableData}>{format(item.interest)}</td>
                  <td className={tableData}>{format(item.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoanResults;
