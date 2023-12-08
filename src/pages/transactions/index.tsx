import AppLayout from "@/components/layouts/AppLayout";
import React, { useState } from "react";
import TransactionTableOperations from "./TransactionTableOperations";
import TransactionTable from "./TransactionTable";
import { Spinner } from "@/components/Button";
import useTransaction from "../../hooks/transactions/useTransaction";
import { useRouter } from "next/router";
import Pagination from "@/components/layouts/Pagination";
import SearchBox from "@/components/SearchBox";

function index() {
  const router = useRouter();
  // initailly filterField would be undefine there we setting it
  const [search, setSearch] = useState("");

  !router.query.filterField
    ? (router.query.filterField = "all")
    : router.query.filterField;

  const {
    body: transactions,
    total_pages,
    is_last_page,
    isLoading,
  } = useTransaction();

  if (isLoading) return <Spinner />;

  let filterTransactions;
  if (router.query.filterField === "all") filterTransactions = transactions;

  if (router.query.filterField === "walletTopUp")
    filterTransactions = transactions.filter((transaction: any) =>
      transaction.title.toLowerCase().includes("wallet"),
    );
  if (router.query.filterField === "orders")
    filterTransactions = transactions.filter((transaction: any) =>
      transaction.title.toLowerCase().includes("order"),
    );

  // searched
  let searchedTransaction;
  if (search.length === 0) {
    searchedTransaction = filterTransactions;
  } else {
    searchedTransaction = filterTransactions.filter((transaction: any) =>
      transaction.transaction_id.toLowerCase().includes(search),
    );
  }
  return (
    <AppLayout>
      <>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="  text-3xl font-medium capitalize text-primary">
            All Transactions
          </h2>
          <SearchBox
            search={search}
            onSetSearch={setSearch}
            tag="transaction id"
          />

          <TransactionTableOperations />
        </div>

        {!transactions ? (
          <p>No transactions founds</p>
        ) : (
          <div>
            <TransactionTable transactions={searchedTransaction} />
            <Pagination totalPage={total_pages} lastPage={is_last_page} />
          </div>
        )}
      </>
    </AppLayout>
  );
}

export default index;
