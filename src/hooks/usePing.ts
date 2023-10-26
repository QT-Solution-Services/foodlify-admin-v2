import { ordersRoute, resturantsRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useContext } from "react";

export default function usePing() {
  const { token } = useContext(AuthContext);
  const testToen = token + "njksj";
  const queryClient = useQueryClient();
  const page = 0;

  const ping = async () => {
    try {
      const res = await axios.get(ordersRoute, {
        headers: {
          Authorization: token ? `Bearer ${testToen}` : "",
        },
      });

      if (res.data?.body) {
        return true;
      } else return false;
    } catch (err) {
      //   console.log(err);
    }
  };

  const { isLoading, data } = useQuery({
    queryFn: ping,
    cacheTime: 0,
  });

  return { isLoading, data };
}
