import { usersCountRoute } from "@/constants/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";

export default function useUsersCount() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const router = useRouter();
  const location = router.query.location || "zaria";

  const fetchUsersCount = async () => {
    try {
      const res = await axios.get(usersCountRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        params: { location },
      });
      if (res.data) {
        return res.data;
      }
      return null;
    } catch (err) {
      showToast("error", "An error occured while fetching user count");
      console.log("error", `and error ${err}`);
    }
  };

  const {
    isLoading,
    error,
    data: { body } = {},
  } = useQuery({
    queryKey: ["restaurant-count", location],
    queryFn: fetchUsersCount,
  });
  return {
    body,
    isLoading,
  };
}
