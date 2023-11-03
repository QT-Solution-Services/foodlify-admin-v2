import AppLayout from "@/components/layouts/AppLayout";
import React, { useEffect } from "react";
import RestaurantTableOperations from "./RestaurantTableOperations";
import RestaurantTable from "./RestaurantTable";
import useRestaurant from "@/hooks/useRestaurant";
import { Spinner } from "@/components/Button";
import { formatResturantData } from "@/utils/Helper";
import Pagination from "@/components/layouts/Pagination";
import { useRouter } from "next/router";

function Index() {
  const {
    isLoading,
    is_last_page,
    total_pages,
    error,
    body: restaurants,
  } = useRestaurant();

  if (isLoading) return <Spinner />;

  const resturantData =
    restaurants !== undefined
      ? restaurants.map((resturant: any) => formatResturantData(resturant))
      : [];

  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-rose-700">
            All Restaurants
          </h2>
          <RestaurantTableOperations />
        </div>

        {!restaurants ? (
          <p>No restaurants found</p>
        ) : (
          <div>
            <RestaurantTable restaurants={resturantData} />
            <Pagination totalPage={total_pages} lastPage={is_last_page} />
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
