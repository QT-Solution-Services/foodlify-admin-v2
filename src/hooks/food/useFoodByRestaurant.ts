import {
  updateFoodPriceRoute,
  updateFoodNameRoute,
  deactiavteFoodRoute,
  actiavteFoodRoute,
  restaurantFoodsRoute,
} from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

const useFoodByRestaurant = () => {
  const router = useRouter();
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const queryClient = useQueryClient();
  const location = router.query.location || "zaria"; // used in line 107
  const restaurant_id = router.query.restaurantId || "111";
  const page = router.query.page || 0;

  const fetchFoodByRestaurantApi = async () => {
    // const publicUrl = `http://34.225.48.149:8090/api/v1/public/food_by_restaurant`;
    try {
      const res = await axios.get(restaurantFoodsRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        params: { restaurant_id, page },
      });
      if (res) {
        console.log(res);
        return res.data;
      }
    } catch (error) {
      console.log("the error occured", error);
      throw new Error("Could not fetch food by restaurant ");
    }
  };

  const deactivateFoodApi = async (foodId: string) => {
    const deactivateFoodUrl = deactiavteFoodRoute(foodId);

    try {
      const res = await axios.put(deactivateFoodUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        console.log(res);
        return res.data.message;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Could not de-activate food ");
    }
  };

  const activateFoodApi = async (foodId: string) => {
    const activateFoodUrl = actiavteFoodRoute(foodId);

    try {
      const res = await axios.put(activateFoodUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        console.log(res);
        return res.data.message;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Could not activate food ");
    }
  };

  // update price
  const updateFoodPriceApi = async (foodId: string, price: string) => {
    const updateFoodPriceUrl = updateFoodPriceRoute(foodId, price);

    try {
      const res = await axios.put(updateFoodPriceUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        console.log(res);
        return res.data.message;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Could not update food price");
    }
  };

  // update name
  const updateFoodNameApi = async (foodId: string, name: string) => {
    const updateFoodNameUrl = updateFoodNameRoute(foodId, name);

    try {
      const res = await axios.put(updateFoodNameUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        console.log(res);
        return res.data.message;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Could not update food price");
    }
  };

  const {
    isLoading,
    error,
    data: { is_last_page, total_pages, body } = {},
  } = useQuery({
    queryKey: [`${restaurant_id}`, page, location],
    queryFn: fetchFoodByRestaurantApi,
  });

  // activate and deactivate food
  const { mutate: deActivateFood } = useMutation({
    mutationFn: (foodId: string) => deactivateFoodApi(foodId),
    onSuccess: (data) => {
      showToast("success", `${data} `);
      queryClient.invalidateQueries();
    },
    onError: () =>
      showToast("error", "there was an error while deactivating food"),
  });

  const { mutate: activateFood } = useMutation({
    mutationFn: (foodId: string) => activateFoodApi(foodId),
    onSuccess: (data) => {
      showToast("success", `${data} `);
      queryClient.invalidateQueries();
    },
    onError: () =>
      showToast("error", "there was an error while activating food"),
  });

  // change price
  const { mutate: updateFoodPrice, isLoading: isUpdatingPrice } = useMutation({
    mutationFn: ({ foodId, price }: any) => updateFoodPriceApi(foodId, price),
    onSuccess: (data) => {
      showToast("success", `${data} `);
      queryClient.invalidateQueries();
      router.back();
    },
    onError: () =>
      showToast("error", "there was an error while updating food price"),
  });

  // change price
  const { mutate: updateFoodName, isLoading: isUpdatingName } = useMutation({
    mutationFn: ({ foodId, name }: any) => updateFoodNameApi(foodId, name),
    onSuccess: (data) => {
      showToast("success", `${data} `);
      queryClient.invalidateQueries();
      router.back();
    },
    onError: () =>
      showToast("error", "there was an error while updating food name"),
  });

  return {
    is_last_page,
    total_pages,
    body,
    deActivateFood,
    activateFood,
    updateFoodPrice,
    updateFoodName,
    isUpdatingPrice,
    isUpdatingName,
    isLoading,
  };
};

export default useFoodByRestaurant;
