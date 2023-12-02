import React from "react";
import { MdSearch } from "react-icons/md";

function SearchBox({ search, onSetSearch, tag = "name" }: any) {
  return (
    <div className="relative ">
      <input
        type="search"
        value={search}
        onChange={(e) => onSetSearch(e.target.value)}
        placeholder={`search by ${tag}`}
        className="rounded-full px-6 py-1 pr-12 text-primary placeholder:text-stone-300 focus:outline focus:outline-offset-4 focus:outline-primary"
      />
      <button className="absolute right-[2px] h-full  w-8   rounded-r-full bg-primary hover:bg-orange-500">
        <MdSearch class="mx-auto" />
      </button>
    </div>
  );
}

export default SearchBox;
