import { FilterProps } from "@/interfaces/App.interface";
import { useRouter } from "next/router";
import React from "react";

export default function Filter({ options }: FilterProps) {
  const router = useRouter();
  const currentFilter = router.query.filterField || options.at(0)?.filterField;

  function handleClick(filterField: any) {
    const currentQuery = { ...router.query };
    currentQuery.filterField = filterField;
    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
  }
  return (
    <div className="rounded-md bg-white p-1">
      {options.map((option, index): any => (
        <button
          key={index}
          onClick={() => handleClick(option.filterField)}
          disabled={currentFilter === option.filterField}
          className={`text-grey-700 rounded-md px-2 font-medium ${
            currentFilter === option.filterField ? "bg-primary text-white" : ""
          }  hover:bg-primary hover:text-white disabled:cursor-not-allowed`}
        >
          {option.lable}
        </button>
      ))}
    </div>
  );
}
