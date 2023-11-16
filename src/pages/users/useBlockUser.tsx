import { blockUserRoute, unBlockUserRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export function useBlockUser() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

  const blockUserApi = async (username: string) => {
    const blockUserUrl = blockUserRoute(username);

    try {
      const res = await axios.put(blockUserUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        return res.data.message;
      }
    } catch (error) {
      throw new Error("Could not disable restaurant ");
    }
  };

  const unBlockUserApi = async (username: string) => {
    const unBlockUserUrl = unBlockUserRoute(username);

    try {
      const res = await axios.put(unBlockUserUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        return res.data.message;
      }
    } catch (error) {
      throw new Error("Could not disable restaurant ");
    }
  };

  const { mutate: blockUser, isLoading } = useMutation({
    mutationFn: (username: string) => blockUserApi(username),
    onSuccess: (data) => {
      showToast("success", `${data} `);
    },
    onError: () =>
      showToast("error", "there was an error while disabling user"),
  });

  const { mutate: unBlockUser } = useMutation({
    mutationFn: (username: string) => unBlockUserApi(username),
    onSuccess: (data) => {
      showToast("success", `${data} `);
    },
    onError: () =>
      showToast("error", "there was an error while unblocking user"),
  });

  return {
    blockUser,
    unBlockUser,
    isLoading,
  };
}
