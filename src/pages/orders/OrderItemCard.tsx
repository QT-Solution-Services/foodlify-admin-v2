import React from "react";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import Button from "@/components/Button";
import { formatCurrency } from "@/utils/Helper";
import useOrderAction from "./useOrderAction";
import { useQueryClient } from "@tanstack/react-query";

function OrderItemCard({ items, orderId, status }: any) {
  const { removeOrderItem, isRemoving } = useOrderAction();
  const queryClient = useQueryClient();

  function handleRemoveOrderItem(orderId: string, itemId: string) {
    removeOrderItem(
      { orderId, itemId },
      {
        onSuccess: () => {
          // eslint-disable-next-line no-use-before-define
          queryClient.invalidateQueries({ active: true });
        },
      },
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {items.map(({ item, price, quantity }: any, idx: number) => (
        <div className="flex flex-col gap-2 rounded-xl border px-4 py-2 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:transition-all hover:duration-300">
          <div className="flex justify-between gap-6 ">
            <Tooltip arrow title={"Description: " + item.description}>
              {/* <Image src={item.image} width={80} height={80} alt="food" /> */}
              <Image
                src={`/${idx + 1}.webp`}
                width={100}
                height={100}
                alt="food"
                className="object-cover "
              />
            </Tooltip>

            <div className="text-sm text-stone-700">
              <h1>
                <span className="font-medium">Restaurant:</span>{" "}
                {item.restaurant.name}
              </h1>
              {/* <h1>
              <span className="font-medium">Category:</span> {item.restaurant.number}
            </h1> */}
              <h1>
                <span className="font-medium">Restaurant No:</span> 09067773494
              </h1>
              <h1>
                <span className="font-medium">Category:</span> {item.category}
              </h1>
              <h1>
                <span className="font-medium">Title:</span> {item.title}
              </h1>
              <h1>
                <span className="font-medium">Quantity:</span> {quantity}
              </h1>
              <h1>
                <span className="font-medium">unitPrice:</span>
                {formatCurrency(item.price)}
              </h1>
              <h1>
                <span className="font-medium">totalPrice:</span>{" "}
                {formatCurrency(price)}
              </h1>
            </div>
          </div>

          {/* card buttton */}
          {status === "PENDING" && (
            <div className="mt-4 flex items-center justify-center">
              <Button
                loading={false}
                onClick={() => {}}
                type="secondaryGreen"
                className="ml-2 hover:text-white"
              >
                {"Pay now 💰️"}
              </Button>
              <Button
                loading={isRemoving}
                onClick={() => handleRemoveOrderItem(orderId, item.foodId)}
                type="secondaryRed"
                className="ml-2 hover:text-white"
              >
                {"Remove ❌️"}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OrderItemCard;
