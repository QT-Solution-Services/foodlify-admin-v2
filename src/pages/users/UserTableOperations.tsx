import Filter from "@/components/layouts/Filter";
import React from "react";

function UserTableOperations() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Filter
        options={[
          { filterField: "all", lable: "All" },
          { filterField: "completed", lable: "Completed" },
          { filterField: "not-completed", lable: "Not completed" },
          { filterField: "blocked", lable: "Blocked" },
        ]}
      />
      {/* <SortBy /> */}
    </div>
  );
}

export default UserTableOperations;
