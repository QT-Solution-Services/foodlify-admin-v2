import { duration } from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
const statusColor: any = {
  delivered: {
    text: " mt-auto text-green-600 rounded-full text-bold",
    btn: " h-8 rounded-full bg-green-600 px-4 py-0 text-white hover:scale-105 hover:shadow-md hover:transition-all hover:duration-300",
  },
  approved: {
    text: "mt-auto text-sky-600 rounded-full",
    btn: " h-8 rounded-full bg-sky-600 px-4 py-0 text-white hover:scale-105 hover:shadow-md hover:transition-all hover:duration-300",
  },
  pending: {
    text: " mt-auto text-amber-600 rounded-full",
    btn: " h-8 rounded-full bg-amber-600 px-4 py-0 text-white hover:scale-105 hover:shadow-md hover:transition-all hover:duration-300",
  },
  sent_for_delivery: {
    text: " mt-auto text-purple-700 rounded-full",
    btn: " h-8 rounded-full bg-purple-700 px-4 py-0 text-white hover:scale-105 hover:shadow-md hover:transition-all hover:duration-300",
  },
  rejected: {
    text: "text-red-600  mt-auto rounded-full",
    btn: " h-8 rounded-full bg-red-600 px-4 py-0 text-white hover:scale-105 hover:shadow-md hover:transition-all hover:duration-300",
  },
};

const statusArr = [
  "delivered",
  "approved",
  "pending",
  "sent_for_delivery",
  "rejected",
];

const startDataLight = [
  {
    label: "Restaurants",
    value: 23,
    color: "#a855f7",
  },
  {
    label: "Users",
    value: 276,
    color: "#3b82f6",
  },
  {
    label: "Orders",
    value: 54,
    color: "#eab308",
  },
  {
    label: "Delivered",
    value: 11,
    color: "#84cc16",
  },
  {
    label: "Rejected",
    value: 7,
    color: "#b91c1c",
  },
];

function MiddleStats() {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div className="relative overflow-y-auto rounded-2xl bg-white px-6 shadow-md">
        <div className="sticky top-0 z-10 bg-white py-2">
          <h1 className="text-xl   font-semibold text-stone-800">
            Today's Orders
          </h1>
        </div>
        <div className="mt-6 space-y-4">
          {[...Array(8)].map((__, idx): any => (
            <OrderCard key={idx} status={statusArr.at(Math.random() * 5)} />
          ))}
        </div>
      </div>
      <div className="relative overflow-y-auto rounded-2xl bg-stone-50 shadow-md">
        <div className="sticky top-0 z-10 bg-white px-4 py-2">
          <h1 className="text-xl   font-semibold text-stone-800">
            Overall summary
          </h1>
        </div>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={startDataLight}
              nameKey="label"
              dataKey="value"
              innerRadius={85}
              outerRadius={110}
              cx="40%"
              cy="50%"
              paddingAngle={3}
              className="transition-all duration-300 "
            >
              {startDataLight.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.label}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconSize={10}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MiddleStats;

function OrderCard({ status }: any) {
  console.log(status);
  return (
    <div className="flex h-14 items-center justify-between rounded-2xl bg-stone-100 px-1">
      <div className="text-lighter ">
        <p>id#090897728</p>
        {/* <h1 className={`${statusColor[status.toLowerCase()]}`}>{status}</h1> */}
        <h1 className={`${statusColor[status].text}`}>{status}</h1>
      </div>
      <Link href="/orders">
        <button className={`${statusColor[status].btn}`}>see details</button>
      </Link>
    </div>
  );
}
