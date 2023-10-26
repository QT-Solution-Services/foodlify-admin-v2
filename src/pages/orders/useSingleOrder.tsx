import { singleOrderRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function useSingleOrder(orderid: any) {
  const router = useRouter();
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const queryClient = useQueryClient();

  const fetchSingleOrder = async () => {
    const orderUrl = singleOrderRoute(orderid);
    try {
      const res = await axios.get(orderUrl, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res.data) {
        // console.log(res.data);
        return res.data.body;
      }
    } catch (err) {
      showToast("error", `An error occured ${err}`);
    }
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ["order", router.query.orderid],
    queryFn: fetchSingleOrder,
  });

  return {
    isLoading,
    data,
    error,
  };
}
