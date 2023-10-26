import ButtonCusttom, { Spinner } from "@/components/Button";
import AppLayout from "@/components/layouts/AppLayout";
import { formatCurrency, formatDate } from "@/utils/Helper";
import { useRouter } from "next/router";
import { TfiLocationPin } from "react-icons/tfi";
import { LuUser } from "react-icons/lu";
import React from "react";
import useSingleOrder from "../useSingleOrder";
import { Divider } from "@mui/material";
import OrderItemBox from "../OrderItemBox";
import OrderDeliveryAddress from "../OrderDeliveryAddress";

const statusColor: any = {
  delivered: "bg-green-100 px-2 mt-auto text-green-300 rounded-full",
  approved: "bg-sky-100 px-2 mt-auto text-sky-400",
  pending: "bg-amber-100 px-2 mt-auto text-amber-400",
  sentfordelivery: "bg-purple-100 px-2 mt-auto text-purple-400",
  rejected: "bg-red-100 text-red-400  mt-auto px-3 text-center rounded-full",
};

function Index() {
  const router = useRouter();
  const { orderid } = router.query;

  if (orderid === undefined) return <p>Provide an orderId </p>;

  const { isLoading, data } = useSingleOrder(orderid);
  if (isLoading) return <Spinner />;
  const {
    address,
    deliveryFee,
    items,
    deliveryType,
    orderAt,
    status,
    totalOrderPrice,
  } = data;
  console.log("single order", data);

  return (
    <AppLayout>
      {/* order header */}
      <div className="mb-10 flex justify-between ">
        <div className="flex gap-4">
          <h1 className="text-3xl font-semibold  text-slate-700">
            Oder #<span>{orderid}</span>
          </h1>
          <h1 className={`${statusColor[status.toLowerCase()]}`}>{status}</h1>
        </div>
        <button onClick={() => router.back()} className="text-primary">
          &larr; Back
        </button>
      </div>

      {/*  title*/}
      <div className="w-full rounded-tl-xl rounded-tr-2xl bg-primary px-12 py-4 text-lg">
        <div className="flex flex-col justify-between font-normal   text-white md:flex-row">
          <p>This order was made at &nbsp; {formatDate(orderAt)}</p>
          <p>Delivery Type: {deliveryType}</p>
        </div>
      </div>

      {/* body */}
      <div className=" bg-white px-12 py-4 shadow-lg">
        <h1 className="mb-2 text-xl font-medium text-stone-600">
          Delivery Address
        </h1>
        <OrderDeliveryAddress address={address} deliveryFee={deliveryFee} />

        {/* food items */}
        <h1 className="mb-2 text-xl font-medium text-stone-600">Orders Menu</h1>
        <OrderItemBox items={items} />

        <div className="my-6">
          <Divider />
        </div>
        <div className="flex justify-between text-xl font-semibold text-stone-700">
          <h1 className=" ">Total</h1>
          <h1 className="text-primary">{formatCurrency(totalOrderPrice)}</h1>
        </div>
      </div>
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

export default Index;
