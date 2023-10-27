import { approveOrderRoute, sentForDeliveryRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

function useOrdersApi() {
  const { token } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const router = useRouter();

  // Approve order
  const approveOrderApi = async (orderId: string) => {
    const aproveUrl = approveOrderRoute(orderId);
    console.log(token);
    try {
      const res = await axios.put(aproveUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        console.log(res);
        return res.data.message;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Could not approve order ");
    }
  };

  const sendforDeliveryApi = async (orderId: string) => {
    const deliveryeUrl = sentForDeliveryRoute(orderId);
    console.log(token);
    try {
      const res = await axios.put(deliveryeUrl, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (res) {
        console.log(res);
        return res.data.message;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Could not approve order ");
    }
  };

  const { mutate: aprrove, isLoading: isLoadingApprove } = useMutation({
    mutationFn: (orderId: string) => approveOrderApi(orderId),
    onSuccess: (data) => {
      router.push("/orders");
      showToast("success", `${data} `);
    },
    onError: () => showToast("error", "there was an error while approving"),
  });

  const { mutate: sentfordelivery, isLoading: isLoadingOrder } = useMutation({
    mutationFn: sendforDeliveryApi,
    onSuccess: (data) => {
      router.push("/orders");
      showToast("success", `${data}`);
    },
    onError: () =>
      showToast("error", "there was an error while sending for delivery"),
  });

  return {
    aprrove,
    sentfordelivery,
    isLoadingOrder,
    isLoadingApprove,
  };
}

export default useOrdersApi;
