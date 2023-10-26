import { formatCurrency } from "@/utils/Helper";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";

function OrderItemBox({ items }: any) {
  return (
    <div className="space-y-3">
      {items.map(({ item, price, quantity }: any, idx: number) => (
        <div key={idx} className="flex justify-between">
          <div className="flex flex-row gap-3">
            <Tooltip arrow title={item.description}>
              <div className=" rounded-md border border-primary p-2 ">
                {/* <Image src={item.image} width={80} height={80} alt="food" /> */}
                <Image
                  src={`/${idx + 1}.webp`}
                  width={50}
                  height={50}
                  alt="food"
                />
              </div>
            </Tooltip>
            <div className="flex flex-col text-stone-800">
              <h1> {item.category}</h1>
              <h1 className="mt-auto font-light"> x{quantity}</h1>
            </div>
          </div>
          <div className="flex items-center justify-center text-primary">
            {formatCurrency(item.price)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderItemBox;
