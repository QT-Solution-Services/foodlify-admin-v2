import { ToastContext } from "@/contexts/Toast.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";
import useOrdersApi from "./useOrdersApi";

export default function useOrderAction() {
  const router = useRouter();
  const { showToast } = useContext(ToastContext);
  const {
    rejectOrderApi,
    approveOrderApi,
    sendforDeliveryApi,
    deliveredOrderApi,
  } = useOrdersApi();

  const { mutate: aprrove, isLoading: isApproving } = useMutation({
    mutationFn: (orderId: string) => approveOrderApi(orderId),
    onSuccess: (data) => {
      router.push("/orders");
      showToast("success", `${data} `);
    },
    onError: () => showToast("error", "there was an error while approving"),
  });

  const { mutate: reject, isLoading: isRejecting } = useMutation({
    mutationFn: (orderId: string) => rejectOrderApi(orderId),
    onSuccess: (data) => {
      router.push("/orders");
      showToast("success", `${data} `);
    },
    onError: () => showToast("error", "there was an error while approving"),
  });

  const { mutate: sentfordelivery, isLoading: isSendingForDelivery } =
    useMutation({
      mutationFn: sendforDeliveryApi,
      onSuccess: (data) => {
        router.push("/orders");
        showToast("success", `${data}`);
      },
      onError: () =>
        showToast("error", "there was an error while sending for delivery"),
    });

  const { mutate: delivered, isLoading: isDelivering } = useMutation({
    mutationFn: (orderId: string) => deliveredOrderApi(orderId),
    onSuccess: (data) => {
      router.push("/orders");
      showToast("success", `${data} `);
    },
    onError: () => showToast("error", "there was an error while approving"),
  });

  return {
    reject,
    aprrove,
    sentfordelivery,
    delivered,
    isRejecting,
    isApproving,
    isSendingForDelivery,
    isDelivering,
  };
}
