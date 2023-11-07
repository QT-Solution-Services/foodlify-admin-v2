import { blockRestaurantRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export function useBlockRestaurant() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

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

  const { mutate: blockRestaurant, isLoading } = useMutation({
    mutationFn: (restaurantId: string) => blockRestaurantApi(restaurantId),
    onSuccess: (data) => {
      showToast("success", `${data} `);
    },
    onError: () =>
      showToast("error", "there was an error while disabling restaurant"),
  });

  return {
    blockRestaurant,
    isLoading,
  };
}
