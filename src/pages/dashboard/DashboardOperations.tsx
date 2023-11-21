import Filter from "@/components/layouts/Filter";
import React from "react";

function DashboardOperations() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Filter
        options={[
          { filterField: "last7days", lable: "Last 7 days" },
          { filterField: "last30days", lable: "Last 30 days" },
          { filterField: "last60days", lable: "Last 60 days" },
        ]}
      />
      {/* <SortBy /> */}
    </div>
  );
}

export default DashboardOperations;
