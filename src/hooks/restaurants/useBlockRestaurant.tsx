import {
  blockRestaurantRoute,
  unBlockRestaurantRoute,
} from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

const useBlockRestaurant = () => {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const queryClient = useQueryClient();

  const blockRestaurantApi = async (restaurantId: string) => {
    const blockRestaurantUrl = blockRestaurantRoute(restaurantId);

    try {
      const res = await axios.put(blockRestaurantUrl, null, {
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
      throw new Error("Could not disable restaurant ");
    }
  };

  const unBlockRestaurantApi = async (restaurantId: string) => {
    const unBlockRestaurantUrl = unBlockRestaurantRoute(restaurantId);

    try {
      const res = await axios.put(unBlockRestaurantUrl, null, {
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
      throw new Error("Could not un-disable restaurant ");
    }
  };

  const { mutate: blockRestaurant, isLoading } = useMutation({
    mutationFn: (restaurantId: string) => blockRestaurantApi(restaurantId),
    onSuccess: (data) => {
      showToast("success", `${data} `);
      queryClient.invalidateQueries();
    },
    onError: () =>
      showToast("error", "there was an error while disabling restaurant"),
  });

  const { mutate: unBlockRestaurant } = useMutation({
    mutationFn: (restaurantId: string) => unBlockRestaurantApi(restaurantId),
    onSuccess: (data) => {
      showToast("success", `${data} `);
      queryClient.invalidateQueries();
    },
    onError: () =>
      showToast("error", "there was an error while unblocking restaurant"),
  });

  return {
    blockRestaurant,
    unBlockRestaurant,
    isLoading,
  };
};

export default useBlockRestaurant;
