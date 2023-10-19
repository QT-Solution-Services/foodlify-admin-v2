import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import OrdersTableOperations from "./OrdersTableOperations";
import useOrders from "./useOrders";
import { Spinner } from "@/components/Button";
import { formatOrdersData } from "@/utils/Helper";
import OrdersTable from "./OrdersTable";

function Index() {
  const { orders, isLoading, error } = useOrders();

  if (isLoading) return <Spinner />;

  const formatedOrders =
    orders !== undefined
      ? orders.map((order: any) => formatOrdersData(order))
      : [];

  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-rose-700">
            All Orders
          </h2>
          <OrdersTableOperations />
        </div>

        <div>
          {" "}
          <OrdersTable orders={formatedOrders} />{" "}
        </div>
      </>
    </AppLayout>
  );
}

export default Index;
