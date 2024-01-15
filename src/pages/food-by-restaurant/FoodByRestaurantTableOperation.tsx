import Button from "@/components/Button";
import SortBy from "@/components/SortBy";
import Filter from "@/components/layouts/Filter";
import React from "react";

function FoodByRestaurantTableOperation() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Filter
        options={[
          { filterField: "all", lable: "All" },
          { filterField: "ACTIVE", lable: "Active" },
          { filterField: "INACTIVE", lable: "Inactive" },
        ]}
      />
      {/* <SortBy /> */}
    </div>
  );
}

export default FoodByRestaurantTableOperation;
