import AppLayout from "@/components/layouts/AppLayout";
import React, { useEffect } from "react";
import RestaurantTableOperations from "./RestaurantTableOperations";
import RestaurantTable from "./RestaurantTable";
import useRestaurant from "@/hooks/useRestaurant";
import { Spinner } from "@/components/Button";
import { formatResturantData } from "@/utils/Helper";

function Index() {
  const { isLoading, error, data: restaurants } = useRestaurant();

  if (isLoading)
    return (
      <AppLayout>
        <Spinner />
      </AppLayout>
    );
  const resturantData =
    restaurants !== undefined
      ? restaurants.map((resturant: any) => formatResturantData(resturant))
      : [];

  console.log(restaurants);
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
          <RestaurantTable restaurants={resturantData} />
        </div>
      </>
    </AppLayout>
  );
}

export default Index;
