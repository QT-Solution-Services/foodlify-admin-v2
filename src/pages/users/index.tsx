import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import { useUsers } from "./useUsers";
import { Spinner } from "@/components/Button";
import UserTableOperations from "./UserTableOperations";
import UserTables from "./UsersTable";
import Pagination from "@/components/layouts/Pagination";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  // initailly filterField would be undefine there we setting it
  !router.query.filterField
    ? (router.query.filterField = "all")
    : router.query.filterField;

  const { isLoading, is_last_page, total_pages, body: users } = useUsers();
  if (isLoading) return <Spinner />;

  let filterUsers;
  if (router.query.filterField === "all") filterUsers = users;
  if (router.query.filterField === "completed")
    filterUsers = users.filter((user: any) => user.profile_completed === true);
  if (router.query.filterField === "not-completed")
    filterUsers = users.filter((user: any) => user.profile_completed !== true);

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
            <UserTables users={filterUsers} />{" "}
            <Pagination totalPage={total_pages} lastPage={is_last_page} />
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default Index;
