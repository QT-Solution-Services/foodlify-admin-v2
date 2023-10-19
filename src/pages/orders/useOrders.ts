import { ordersRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export default function useOrders() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const fetchOrders = async () => {
    try {
      const res = await axios.get(ordersRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res.data) {
        console.log(res.data);
        return res.data.body;
      }
    } catch (err) {
      showToast("error", `and error ${err}`);
    }
  };

  const queryClient = useQueryClient();
  const {
    data: orders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });

  return {
    isLoading,
    orders,
    error,
  };
}
