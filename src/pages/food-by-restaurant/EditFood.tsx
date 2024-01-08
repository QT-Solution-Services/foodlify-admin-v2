import Button from "@/components/Button";
import AppLayout from "@/components/layouts/AppLayout";
import { ToastContext } from "@/contexts/Toast.context";
import useFoodByRestaurant from "@/hooks/food/useFoodByRestaurant";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

function EditFood() {
  const router = useRouter();
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const foodId = router.query.foodId;

  const queryClient = useQueryClient();
  const { showToast } = useContext(ToastContext);

  const { updateFoodName, updateFoodPrice, isUpdatingName, isUpdatingPrice } =
    useFoodByRestaurant();

  function handleChangePrice(e: any) {
    e.preventDefault();

    if (!isNaN(price) && foodId) {
      updateFoodPrice({ foodId, price });
    } else {
      alert("Enter a valid number");
    }
  }

  function handleChangeName(e: any) {
    e.preventDefault();
    if (name.length > 3 && foodId) {
      updateFoodName({ foodId, name });
    } else {
      alert("Name too short");
    }
  }
  return (
    <AppLayout>
      {/* order header */}
      <div className="mb-10 flex justify-between ">
        <div className="flex gap-4">
          <h1 className="text-3xl font-semibold  text-slate-700">
            food id #<span>{router.query.foodId}</span>
          </h1>
          {/* <h1 className={`${statusColor[status.toLowerCase()]}`}>{status}</h1> */}
        </div>
        <button onClick={() => router.back()} className="text-primary">
          &larr; Back
        </button>
      </div>

      {/*  title*/}
      <div className="w-full rounded-tl-xl rounded-tr-2xl bg-primary px-12 py-4 text-lg">
        <div className="flex flex-col justify-between font-normal   text-white md:flex-row">
          <p> {router.query.restaurantName}&nbsp; </p>
          <p>Location: {router.query.location} </p>
        </div>
      </div>

      {/* body */}
      <div className=" bg-white px-12 py-4 shadow-lg">
        <form className="space-y-6">
          <div className="mb-2 flex items-center justify-center gap-4">
            <input
              type="text"
              className="input-style"
              value={price}
              onChange={(e: any) => setPrice(e.target.value)}
              placeholder="enter new price"
            />
            <Button
              type="pMedium"
              actionType="submit"
              loading={isUpdatingPrice}
              onClick={handleChangePrice}
              bgc="bg-red-400"
              className="ml-2 hover:bg-red-500"
            >
              update
            </Button>
          </div>
          {/* name */}
          <div className="mb-2 flex items-center justify-center gap-4">
            <input
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              className="input-style"
              placeholder="enter new name"
            />
            <Button
              type="pMedium"
              actionType="submit"
              loading={isUpdatingName}
              onClick={handleChangeName}
              bgc="bg-red-400"
              className="ml-2 hover:bg-red-500"
            >
              update
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}

export default EditFood;
