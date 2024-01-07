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
    // onSuccess: (data) => {  this was supposed to be for getting the last data in the last page consumed by most recent orders in MIddlestat component
    //   // Check if total_pages is greater than 1 and update the page variable accordingly
    //   if (total_pages > 1 && page !== total_pages - 1) {
    //     router.push({
    //       pathname: router.pathname,
    //       query: { ...router.query, page: total_pages - 1 },
    //     });
    //     // Refetch the data for the new page
    //     // refetch();
    //   }
    // },
  });

  return {
    isLoading,
    body,
    is_last_page,
    total_pages,
  };
}
