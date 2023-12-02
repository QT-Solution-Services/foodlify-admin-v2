import Filter from "@/components/layouts/Filter";
import React from "react";

function TransactionTableOperations() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Filter
        options={[
          { filterField: "all", lable: "All" },
          { filterField: "walletTopUp", lable: "Wallet Top Up" },
          { filterField: "orders", lable: "Orders" },
        ]}
      />
      {/* <SortBy /> */}
    </div>
  );
}

export default TransactionTableOperations;
