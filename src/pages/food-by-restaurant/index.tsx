import AppLayout from "@/components/layouts/AppLayout";
import React, { useEffect, useState } from "react";
import useRestaurant from "@/hooks/restaurants/useRestaurant";
import { Spinner } from "@/components/Button";
import { formatResturantData } from "@/utils/Helper";
import Pagination from "@/components/layouts/Pagination";
import { useRouter } from "next/router";
import SearchBox from "@/components/SearchBox";
import FoodTable from "./FoodTable";
import useFoodByRestaurant from "@/hooks/food/useFoodByRestaurant";
import FoodByRestaurantTableOperation from "./FoodByRestaurantTableOperation";

function Index() {
  const router = useRouter();

  const {
    isLoading,
    is_last_page,
    total_pages,
    body: foodLists,
  } = useFoodByRestaurant();

  if (isLoading) return <Spinner />;

  let filterFoodByRestaurnat;
  if (router.query.filterField === "all") filterFoodByRestaurnat = foodLists;
  if (router.query.filterField === "ACTIVE")
    filterFoodByRestaurnat = foodLists.filter(
      (food: any) => food.status === true,
    );
  if (router.query.filterField === "INACTIVE")
    filterFoodByRestaurnat = foodLists.filter(
      (food: any) => food.status === false,
    );

  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-primary">
            All Food by {router.query.restaurantName}
          </h2>
          <FoodByRestaurantTableOperation />
          <button
            onClick={() => router.push("restaurant")}
            className="text-primary"
          >
            &larr; Back
          </button>
        </div>

        {!foodLists ? (
          <p>No Food found</p>
        ) : (
          <div>
            <FoodTable foods={filterFoodByRestaurnat} />
            {<Pagination totalPage={total_pages} lastPage={is_last_page} />}
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
