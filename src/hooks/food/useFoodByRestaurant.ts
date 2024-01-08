import {
  foodByRestaurantRoute,
  unBlockRestaurantRoute,
  blockRestaurantRoute,
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
  const location = router.query.location || "zaria";
  const restaurant_id = router.query.restaurantId || "111";
  const page = router.query.page || 0;

  const fetchFoodByRestaurantApi = async () => {
    try {
      const res = await axios.get(foodByRestaurantRoute, {
        params: { location, restaurant_id, page },
      });
      if (res) {
        console.log(res);
        return res.data.message;
      }
    } catch (error) {
      console.log("the error occured", error);
      throw new Error("Could not fetch food by restaurant ");
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

  const {
    isLoading,
    error,
    data: { is_last_page, total_pages, body } = {},
  } = useQuery({
    queryKey: [`${restaurant_id}`, page, location],
    queryFn: fetchFoodByRestaurantApi,
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
    is_last_page,
    total_pages,
    body,
    unBlockRestaurant,
    isLoading,
  };
};

export default useFoodByRestaurant;
