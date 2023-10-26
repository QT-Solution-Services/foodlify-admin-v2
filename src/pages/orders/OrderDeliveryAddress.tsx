import { formatCurrency } from "@/utils/Helper";
import { Divider } from "@mui/material";
import React from "react";
import { LuUser } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";

function OrderDeliveryAddress({ address, deliveryFee }: any) {
  return (
    <>
      <div className="flex justify-between text-stone-600">
        <h1>
          <TfiLocationPin className="mr-2 inline-block text-primary" />
          {address.address} <br />
          <LuUser className="mr-2 inline-block text-primary" />
          {address.contactName}
        </h1>
        <h1>
          <span className="block">call &#8594; {address.phoneNumber}</span>
          <span className="block">
            delivery fee &#8594; {formatCurrency(deliveryFee)}
          </span>
        </h1>
      </div>

      <div className="my-6">
        <Divider />
      </div>
    </>
  );
}

export default OrderDeliveryAddress;
