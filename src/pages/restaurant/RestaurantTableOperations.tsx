import Button from "@/components/Button";
import SortBy from "@/components/SortBy";
import Filter from "@/components/layouts/Filter";
import React from "react";

function RestaurantTableOperations() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Filter />
      <SortBy />
    </div>
  );
}

export default RestaurantTableOperations;
