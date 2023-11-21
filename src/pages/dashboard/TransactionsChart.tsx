import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const fakeData = [
  { label: "Jan 09", totalSales: 480, extrasSales: 20 },
  { label: "Jan 10", totalSales: 580, extrasSales: 100 },
  { label: "Jan 11", totalSales: 550, extrasSales: 150 },
  { label: "Jan 12", totalSales: 600, extrasSales: 50 },
  { label: "Jan 13", totalSales: 700, extrasSales: 150 },
  { label: "Jan 14", totalSales: 800, extrasSales: 150 },
  { label: "Jan 15", totalSales: 700, extrasSales: 200 },
  { label: "Jan 16", totalSales: 650, extrasSales: 200 },
  { label: "Jan 17", totalSales: 600, extrasSales: 300 },
  { label: "Jan 18", totalSales: 550, extrasSales: 100 },
  { label: "Jan 19", totalSales: 700, extrasSales: 100 },
  { label: "Jan 20", totalSales: 800, extrasSales: 200 },
  { label: "Jan 21", totalSales: 700, extrasSales: 100 },
  { label: "Jan 22", totalSales: 810, extrasSales: 50 },
  { label: "Jan 23", totalSales: 950, extrasSales: 250 },
  { label: "Jan 24", totalSales: 970, extrasSales: 100 },
  { label: "Jan 25", totalSales: 900, extrasSales: 200 },
  { label: "Jan 26", totalSales: 950, extrasSales: 300 },
  { label: "Jan 27", totalSales: 850, extrasSales: 200 },
  { label: "Jan 28", totalSales: 900, extrasSales: 100 },
  { label: "Jan 29", totalSales: 800, extrasSales: 300 },
  { label: "Jan 30", totalSales: 950, extrasSales: 200 },
  { label: "Jan 31", totalSales: 1100, extrasSales: 300 },
  { label: "Feb 01", totalSales: 1200, extrasSales: 400 },
  { label: "Feb 02", totalSales: 1250, extrasSales: 300 },
  { label: "Feb 03", totalSales: 1400, extrasSales: 450 },
  { label: "Feb 04", totalSales: 1500, extrasSales: 500 },
  { label: "Feb 05", totalSales: 1400, extrasSales: 600 },
  { label: "Feb 06", totalSales: 1450, extrasSales: 400 },
];

const colors = {
  totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
  extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
  text: "#a16207",
  background: "#18212f",
};

function TransactionsChart() {
  return (
    <div className="relative overflow-y-auto rounded-2xl bg-white px-6 shadow-md">
      <div className="sticky  top-0 z-10  py-2 ">
        <h1 className="text-3xl  font-medium text-stone-800">
          Sales from Oct 19 2023 — Nov 17 2023
        </h1>
        <div>
          <ResponsiveContainer width="100%" height={400} className="mt-16">
            <AreaChart data={fakeData}>
              <XAxis dataKey="label" />
              <YAxis unit="₦" />
              <Tooltip
              // contentStyle={{
              //   backgroundColor: colors.background,
              // }}
              />
              <Area
                dataKey="totalSales"
                type="monotone"
                stroke={colors.totalSales.stroke}
                fill={colors.totalSales.fill}
                strokeWidth={2}
                name="Total Sales"
                unit="$"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default TransactionsChart;
