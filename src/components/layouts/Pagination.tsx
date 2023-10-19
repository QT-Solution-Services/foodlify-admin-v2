import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Pagination({ totalPage, lastPage }: any) {
  console.log(lastPage);
  const router = useRouter();

  const currentPage = Number(router.query.page) || 0;

  const updateURL = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { page },
    });
  };

  function nextPage() {
    if (currentPage < totalPage - 1) {
      updateURL(currentPage + 1);
    }
  }
  function prevPage() {
    if (currentPage > 0) {
      updateURL(currentPage - 1);
    }
  }
  return (
    <div className="flex w-full justify-between bg-stone-200 px-4 py-2">
      <p>
        Showing <Span value={currentPage + 1} />
        of <Span value={totalPage} /> pages
      </p>
      <div className="flex gap-3">
        <button
          disabled={currentPage === 0}
          onClick={prevPage}
          className={`disable rounded-md px-2 py-1 duration-300 hover:bg-primary hover:text-white hover:transition-all ${
            currentPage === 0 && "cursor-not-allowed opacity-50"
          }`}
        >
          <HiChevronLeft className="inline-block text-2xl" />
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={lastPage}
          className={`rounded-md px-2 py-1 duration-300 hover:bg-primary hover:text-white hover:transition-all ${
            lastPage ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <span>Next</span>
          <HiChevronRight className="inline-block text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;

export function Span({ value }: any) {
  return <span className="font-semibold">{value} </span>;
}
