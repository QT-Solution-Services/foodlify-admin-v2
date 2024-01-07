import Button from "@/components/Button";
import SortBy from "@/components/SortBy";
import Filter from "@/components/layouts/Filter";
import React from "react";

function RestaurantTableOperations() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Filter
        options={[
          { filterField: "all", lable: "All" },
          { filterField: "ACTIVE", lable: "Active" },
          { filterField: "DISABLED", lable: "Disabled" },
        ]}
      />
      {/* <SortBy /> */}
    </div>
  );
}

export default RestaurantTableOperations;
