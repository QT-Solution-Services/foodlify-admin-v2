import { resturantsRoute } from "@/constants/apiRoutes";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";

export default function useRestaurant() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const router = useRouter();
  const page = router.query.page || 0;
  const location = router.query.location || "zaria";

  const fetchResutrant = async () => {
    try {
      const res = await axios.get(resturantsRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        params: { page, location },
      });
      if (res.data) {
        console.log(res.data);
        return res.data;
      }
      return null;
    } catch (err) {
      console.log("error", `and error ${err}`);
    }
  };

  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: { is_last_page, total_pages, body } = {},
  } = useQuery({
    queryKey: ["restaurant", page, location],
    queryFn: fetchResutrant,
  });
  return {
    isLoading,
    body,
    is_last_page,
    total_pages,
    error,
  };
}
