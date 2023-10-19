import ButtonCusttom from "@/components/Button";
import AppLayout from "@/components/layouts/AppLayout";
import { formatDate } from "@/utils/Helper";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const statusColor = {
  deliver: "bg-green-100 px-2 text-green-300 rounded-full",
  approve: "bg-sky-100 px-2 text-sky-300",
  cancel: "bg-red-100 text-red-400  px-3 mt-auto text-center rounded-full",
};

function index() {
  const router = useRouter();
  const { orderid } = router.query;
  return (
    <AppLayout>
      {/* order header */}
      <div className="mb-10 flex justify-between ">
        <div className="flex gap-4">
          <h1 className="text-3xl font-semibold  text-slate-700">
            Oder #<span>{orderid}</span>
          </h1>
          <h1 className={` ${statusColor["cancel"]}`}> cancle</h1>
        </div>
        <button onClick={() => router.back()} className="text-primary">
          &larr; Back
        </button>
      </div>

      {/*  title*/}
      <div className="w-full rounded-tl-xl rounded-tr-2xl bg-primary px-12 py-4">
        <div className="flex flex-col justify-between font-light   text-white md:flex-row">
          <p>This order was made at &nbsp; 12:20 12-12-2022 ,</p>
          <p>Delivery Type: logistic</p>
          {/* <p>This order was made at &nbsp; {formatDate(orderTime)} ,</p>
                <p>Delivery Type: {deliveryType}</p> */}
        </div>
      </div>

      {/* body */}
      <div className="h-44 bg-white px-12 py-4 shadow-lg">body</div>
      {/* footer */}
      <div className="mt-10 flex justify-end gap-4">
        <ButtonCusttom type="pMedium" className="text-white">
          approve
        </ButtonCusttom>
        <ButtonCusttom
          onClick={() => router.back()}
          type="primary"
          className="border border-primary px-2 hover:text-white "
        >
          back
        </ButtonCusttom>
      </div>
    </AppLayout>
  );
}

export default index;
