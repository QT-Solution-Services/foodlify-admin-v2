import Filter from "@/components/layouts/Filter";
import React from "react";

function OrdersTableOperations() {
  return (
    <div>
      <Filter
        options={[
          { filterField: "all", lable: "All" },
          { filterField: "PENDING", lable: "Pending" },
          { filterField: "APPROVED", lable: "Aprroved" },
          { filterField: "DELIVERED", lable: "Delivered" },
          { filterField: "REJECTED", lable: "Rejected" },
        ]}
      />
    </div>
  );
}

export default OrdersTableOperations;
