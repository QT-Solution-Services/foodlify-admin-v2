import { locationsRoute } from "@/constants/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";

export const useGetLocations = () => {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const getLocations = async () => {
    try {
      const res = await axios.get(locationsRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        params: {},
      });

      if (res.data) {
        return res.data;
      }
      return null;
    } catch (err) {
      console.log(err);
      showToast("error", "Error occured while fetching location");
    }
  };

  const {
    data: { body, message } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocations(),
  });

  return {
    body,
    isLoading,
    error,
  };
};
