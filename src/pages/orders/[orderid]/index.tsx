import ButtonCusttom, { Spinner } from "@/components/Button";
import AppLayout from "@/components/layouts/AppLayout";
import { formatCurrency, formatDate } from "@/utils/Helper";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import useSingleOrder from "../../../hooks/orders/useSingleOrder";
import { Divider } from "@mui/material";
import OrderItemBox from "@/components/orders/OrderItemBox";
import OrderDeliveryAddress from "@/components/orders/OrderDeliveryAddress";
import useOrderAction from "../../../hooks/orders/useOrderAction";
import { ToastContext } from "@/contexts/Toast.context";
import OrderItemCard from "@/components/orders/OrderItemCard";
import { testData } from "@/constants/data";

const statusColor: any = {
  delivered: "bg-green-200 px-2 mt-auto text-green-600 rounded-full",
  approved: "bg-sky-200 px-2 mt-auto text-sky-600 rounded-full",
  pending: "bg-amber-200 px-2 mt-auto text-amber-600 rounded-full",
  sent_for_delivery: "bg-purple-200 px-2 mt-auto text-purple-700 rounded-full",
  rejected: "bg-red-200 text-red-600  px-2 mt-auto rounded-full",
};

function Index() {
  const router = useRouter();
  const { orderid } = router.query;
  const { showToast } = useContext(ToastContext);

  if (orderid === undefined) return <p>Provide an orderId </p>;

  const { isLoading, data } = useSingleOrder(orderid);
  const {
    reject,
    aprrove,
    sentfordelivery,
    delivered,
    isRejecting,
    isApproving,
    isSendingForDelivery,
    isDelivering,
  } = useOrderAction();

  if (isLoading) return <Spinner />;

  // const {
  //   address,
  //   deliveryFee,
  //   items,
  //   deliveryType,
  //   orderAt,
  //   orderId,
  //   status,
  //   totalOrderPrice,
  // } = testData;

  const {
    address,
    deliveryFee,
    items,
    deliveryType,
    orderAt,
    orderId,
    status,
    totalOrderPrice,
  } = data;

  // console.log(status);

  function handleStatusButton(status: string, action = "approve") {
    if (status === "PENDING" && action === "approve") {
      aprrove(`${orderid}`);
    }
    if (status === "PENDING" && action === "reject") {
      reject(`${orderid}`);
    }
    if (status === "APPROVED") {
      sentfordelivery(`${orderid}`);
    }
    if (status === "SENT_FOR_DELIVERY") {
      delivered(`${orderid}`);
    }
    if (status === "DELIVERED") {
      showToast("success", "No action needed");
    }
  }

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
        {/* <OrderItemBox items={items} /> */}
        <OrderItemCard items={items} orderId={orderId} status={status} />

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
        {status === "PENDING" ? (
          <div className="flex justify-center gap-2">
            <ButtonCusttom
              type="pMedium"
              loading={isApproving}
              onClick={() => handleStatusButton(`${status}`, "approve")}
              bgc="bg-green-100"
              className="ml-2 hover:bg-green-200"
            >
              approve
            </ButtonCusttom>

            <ButtonCusttom
              type="pMedium"
              loading={isRejecting}
              onClick={() => handleStatusButton(`${status}`, "reject")}
              bgc="bg-red-400"
              className="ml-2 hover:bg-red-500"
            >
              reject
            </ButtonCusttom>
          </div>
        ) : status === "REJECTED" ? (
          ""
        ) : (
          <ButtonCusttom
            loading={isSendingForDelivery || isDelivering}
            onClick={() => handleStatusButton(`${status}`)}
            type="pMedium"
            className="ml-2 hover:text-white"
          >
            {status === "APPROVED" && "🙂️click to sent for delivery🚀️"}
            {status === "SENT_FOR_DELIVERY" && "🤠️click if delivered📝️"}
            {status === "DELIVERED" && "🙂️Already Delivered✅️"}
          </ButtonCusttom>
        )}

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
