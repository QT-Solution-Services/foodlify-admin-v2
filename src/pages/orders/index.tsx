import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import OrdersTableOperations from "./OrdersTableOperations";
import useOrders from "./useOrders";
import { Spinner } from "@/components/Button";
import { formatOrdersData } from "@/utils/Helper";
import OrdersTable from "./OrdersTable";
import Pagination from "@/components/layouts/Pagination";

function Index() {
  const { body: orders, total_pages, is_last_page, isLoading } = useOrders();

  if (isLoading) return <Spinner />;

  const formatedOrders =
    orders !== undefined
      ? orders.map((order: any) => formatOrdersData(order))
      : [];
  // !isLoading && console.log(orders);
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
            <OrdersTable orders={formatedOrders} />{" "}
            <Pagination totalPage={total_pages} lastPage={is_last_page} />
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
