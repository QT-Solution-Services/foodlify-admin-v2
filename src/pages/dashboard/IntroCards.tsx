import { IntroCardProps } from "@/interfaces/App.interface";
import Image from "next/image";
import React from "react";

function IntroCards({
  restaurantLen,
  Sales,
  ordersLen,
  usersLen,
}: IntroCardProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex gap-2 rounded-2xl bg-white p-4 shadow-lg">
        <div className=" h-24 shrink-0 rounded-full bg-rose-300 p-6">
          <Image
            src="/restaurant.svg"
            alt="restaurant svg"
            height={30}
            width={30}
            className="mx-auto h-12 w-12"
          />
        </div>
        <div className="mt-4  text-stone-600">
          <h1 className="text-sm font-bold uppercase">café</h1>
          <h1 className="text-lighter text-3xl">16</h1>
        </div>
      </div>
      {/* sales */}
      <div className="flex gap-2 rounded-2xl bg-white p-4 shadow-lg">
        <div className=" h-24 shrink-0 rounded-full bg-lime-300 p-6">
          <Image
            src="/money.svg"
            alt="restaurant svg"
            height={30}
            width={30}
            className="mx-auto h-12 w-12"
          />
        </div>
        <div className="mt-4  text-stone-600">
          <h1 className="text-sm font-bold">SALES</h1>
          <h1 className="text-lighter text-3xl">16</h1>
        </div>
      </div>
      {/* orders */}
      <div className="flex gap-2 rounded-2xl bg-white p-4 shadow-lg">
        <div className=" h-24 shrink-0 rounded-full bg-green-300 p-6">
          <Image
            src="/delivered.svg"
            alt="restaurant svg"
            height={30}
            width={30}
            className="mx-auto h-12 w-12"
          />
        </div>
        <div className="mt-4  text-stone-600">
          <h1 className="text-sm font-bold">ORDERS</h1>
          <h1 className="text-lighter text-3xl">16</h1>
        </div>
      </div>
      {/* users */}
      <div className="flex gap-2 rounded-2xl bg-white p-4 shadow-lg">
        <div className=" h-24 shrink-0 rounded-full bg-sky-300 p-6">
          <Image
            src="/users.svg"
            alt="restaurant svg"
            height={30}
            width={30}
            className="mx-auto h-12 w-12"
          />
        </div>
        <div className="mt-4  text-stone-600">
          <h1 className="text-sm font-bold">USERS</h1>
          <h1 className="text-lighter text-3xl">16</h1>
        </div>
      </div>
    </div>
  );
}

export default IntroCards;
