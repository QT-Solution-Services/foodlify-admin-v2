import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import RestaurantTableOperations from "./RestaurantTableOperations";
import RestaurantTable from "./RestaurantTable";

function index() {
  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-rose-700">
            All Restaurants
          </h2>
          <RestaurantTableOperations />
        </div>
        <div>
          <RestaurantTable />
        </div>
      </>
    </AppLayout>
  );
}

export default index;
