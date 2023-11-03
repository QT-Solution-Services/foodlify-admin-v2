import { ordersRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function useOrders() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const router = useRouter();
  const page = router.query.page || 0;
  const location = router.query.location || "zaria";

  const fetchOrders = async () => {
    try {
      const res = await axios.get(ordersRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        params: { location, page },
      });
      if (res.data) {
        return res.data;
      }
    } catch (err: any) {
      const { status } = err?.response;
      showToast(
        "error",
        `${
          status === 404 ? "No orders on the location yet!" : "an error occured"
        } `,
      );
    }
  };

  const {
    data: { body, is_last_page, total_pages } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["orders", page, location],
    queryFn: fetchOrders,
    // refetchInterval: 2000,
    //
  });

  return {
    isLoading,
    body,
    is_last_page,
    total_pages,
  };
}
