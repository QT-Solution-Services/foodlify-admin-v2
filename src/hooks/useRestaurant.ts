import { resturantsRoute } from "@/constants/apiRoutes";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthentication from "./useAuthentication";
import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";

export default function useRestaurant() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const fetchResutrant = async () => {
    try {
      const res = await axios.get(resturantsRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res.data) return res.data.body;
    } catch (err) {
      showToast("error", `and error ${err}`);
    }
  };

  const queryClient = useQueryClient();
  const { isLoading, data, error } = useQuery({
    queryKey: ["restaurant"],
    queryFn: fetchResutrant,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["restaurant"],
      });
    },
  });
  return {
    isLoading,
    data,
    error,
  };
}
