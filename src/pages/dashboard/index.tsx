import React from "react";
import AppLayout from "@/components/layouts/AppLayout";
import IntroCards from "./IntroCards";
import MiddleStats from "./MiddleStats";
import TransactionsChart from "./TransactionsChart";
import DashboardOperations from "./DashboardOperations";
import useRestaurant from "@/hooks/useRestaurant";

function Index() {
  const { body } = useRestaurant();
  console.log(body);
  return (
    <AppLayout>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="  text-3xl font-medium capitalize text-primary">
          Dashbaord
        </h2>
        <DashboardOperations />
      </div>
      <div className="grid grid-rows-[8rem_19rem_1fr] gap-6">
        <IntroCards />
        <MiddleStats />
        <TransactionsChart />
      </div>
    </AppLayout>
  );
}

export default Index;
