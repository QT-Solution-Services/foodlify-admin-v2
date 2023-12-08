import AppLayout from "@/components/layouts/AppLayout";
import React, { useEffect, useState } from "react";
import RestaurantTableOperations from "./RestaurantTableOperations";
import RestaurantTable from "./RestaurantTable";
import useRestaurant from "@/hooks/restaurants/useRestaurant";
import { Spinner } from "@/components/Button";
import { formatResturantData } from "@/utils/Helper";
import Pagination from "@/components/layouts/Pagination";
import { useRouter } from "next/router";
import SearchBox from "@/components/SearchBox";

function Index() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // initailly filterField would be undefine there we setting it
  !router.query.filterField
    ? (router.query.filterField = "all")
    : router.query.filterField;

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
  let filterRestaurants;
  if (router.query.filterField === "all") filterRestaurants = resturantData;
  if (router.query.filterField === "ACTIVE")
    filterRestaurants = resturantData.filter(
      (restaurant: any) => restaurant.status === "ACTIVE",
    );
  if (router.query.filterField === "BLOCKED")
    filterRestaurants = resturantData.filter(
      (restaurant: any) => restaurant.status === "BLOCKED",
    );

  // searched
  let searchedRestaurant;
  if (search.length === 0) {
    searchedRestaurant = filterRestaurants;
  } else {
    searchedRestaurant = filterRestaurants.filter((restaurant: any) =>
      restaurant.name.toLowerCase().includes(search),
    );
  }

  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-primary">
            All Restaurants
          </h2>
          <SearchBox search={search} onSetSearch={setSearch} tag="name" />

          <RestaurantTableOperations />
        </div>

        {!restaurants ? (
          <p>No restaurants found</p>
        ) : (
          <div>
            <RestaurantTable restaurants={searchedRestaurant} />
            {<Pagination totalPage={total_pages} lastPage={is_last_page} />}
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
