import { blockUserRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export function useBlockUser() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

  const blockUserApi = async (userId: string) => {
    const blockUserUrl = blockUserRoute(userId);

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

  const { mutate: blockUser, isLoading } = useMutation({
    mutationFn: (userId: string) => blockUserApi(userId),
    onSuccess: (data) => {
      showToast("success", `${data} `);
    },
    onError: () =>
      showToast("error", "there was an error while disabling user"),
  });

  return {
    blockUser,
    isLoading,
  };
}
