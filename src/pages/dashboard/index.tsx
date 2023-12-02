import React from "react";
import AppLayout from "@/components/layouts/AppLayout";
import IntroCards from "./IntroCards";
import MiddleStats from "./MiddleStats";
import TransactionsChart from "./TransactionsChart";
import DashboardOperations from "./DashboardOperations";
import useRestaurant from "@/hooks/useRestaurant";
import useRestaurantsCount from "./useRestaurantsCount";
import useOrdersCount from "./useOrdersCount";
import useUsersCount from "./useUsersCount";

function Index() {
  const { body: restaurants, isLoading } = useRestaurantsCount();
  const { body: orders } = useOrdersCount();
  const { body: users } = useUsersCount();

  return (
    <AppLayout>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="  text-3xl font-medium capitalize text-primary">
          Dashbaord
        </h2>
        <DashboardOperations />
      </div>
      <div className="grid grid-rows-[8rem_19rem_1fr] gap-6">
        <IntroCards
          isLoading={isLoading}
          restaurantLen={restaurants?.count}
          Sales={0}
          ordersLen={orders?.count}
          usersLen={users?.count}
        />
        <MiddleStats
          isLoading={isLoading}
          restaurantLen={restaurants?.count}
          ordersLen={orders?.count}
          usersLen={users?.count}
        />
        <TransactionsChart />
      </div>
    </AppLayout>
  );
}

export default Index;
