import React from "react";

export default function Filter() {
  return (
    <div className="rounded-md bg-white p-1">
      <button className="hover:bg-primary text-grey-700 rounded-md px-2 font-medium hover:text-white">
        all
      </button>
      <button className="hover:bg-primary text-grey-700 rounded-md px-2 hover:text-white">
        active
      </button>
      <button className="hover:bg-primary text-grey-700 rounded-md px-2 hover:text-white">
        closed
      </button>
      <button className="hover:bg-primary text-grey-700 rounded-md px-2 hover:text-white">
        recent
      </button>
    </div>
  );
}
