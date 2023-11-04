import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import { useUsers } from "./useUsers";
import { Spinner } from "@/components/Button";
import UserTableOperations from "./UserTableOperations";
import UserTables from "./UsersTable";
import Pagination from "@/components/layouts/Pagination";

function Index() {
  const { isLoading, is_last_page, total_pages, body: users } = useUsers();
  if (isLoading) return <Spinner />;
  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-rose-700">
            All Users
          </h2>
          <UserTableOperations />
        </div>

        {!users ? (
          <p>No user founds</p>
        ) : (
          <div>
            <UserTables users={users} />{" "}
            <Pagination totalPage={total_pages} lastPage={is_last_page} />
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
