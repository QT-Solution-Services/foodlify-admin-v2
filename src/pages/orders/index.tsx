import AppLayout from "@/components/layouts/AppLayout";
import React, { useState } from "react";
import OrdersTableOperations from "./OrdersTableOperations";
import useOrders from "./useOrders";
import { Spinner } from "@/components/Button";
import { formatOrdersData } from "@/utils/Helper";
import OrdersTable from "./OrdersTable";
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

  const { body: orders, total_pages, is_last_page, isLoading } = useOrders();

  if (isLoading) return <Spinner />;

  const formatedOrders =
    orders !== undefined
      ? orders.map((order: any) => formatOrdersData(order))
      : [];

  // filter
  let filterOrders;
  if (router.query.filterField === "all") filterOrders = formatedOrders;

  if (router.query.filterField === "DELIVERED")
    filterOrders = formatedOrders.filter(
      (order: any) => order.status === "DELIVERED",
    );

  if (router.query.filterField === "PENDING")
    filterOrders = formatedOrders.filter(
      (order: any) => order.status === "PENDING",
    );

  if (router.query.filterField === "APPROVED")
    filterOrders = formatedOrders.filter(
      (order: any) => order.status === "APPROVED",
    );

  if (router.query.filterField === "REJECTED")
    filterOrders = formatedOrders.filter(
      (order: any) => order.status === "REJECTED",
    );

  // searched
  let searchedOrder;
  if (search.length === 0) {
    searchedOrder = filterOrders;
  } else {
    searchedOrder = filterOrders.filter((order: any) =>
      order.orderId.toLowerCase().includes(search),
    );
  }
  console.log(searchedOrder.length);

  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-primary">
            All Orders
          </h2>
          <SearchBox search={search} onSetSearch={setSearch} />
          <OrdersTableOperations />
        </div>

        {!orders ? (
          <p>No orders founds</p>
        ) : (
          <div>
            <OrdersTable orders={searchedOrder} />
            <Pagination totalPage={total_pages} lastPage={is_last_page} />
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
