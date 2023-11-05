import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import OrdersTableOperations from "./OrdersTableOperations";
import useOrders from "./useOrders";
import { Spinner } from "@/components/Button";
import { formatOrdersData } from "@/utils/Helper";
import OrdersTable from "./OrdersTable";
import Pagination from "@/components/layouts/Pagination";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
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

  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-rose-700">
            All Orders
          </h2>
          <OrdersTableOperations />
        </div>

        {!orders ? (
          <p>No orders founds</p>
        ) : (
          <div>
            <OrdersTable orders={filterOrders} />{" "}
            <Pagination totalPage={total_pages} lastPage={is_last_page} />
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
