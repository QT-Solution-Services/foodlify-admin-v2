import {
  approveOrderRoute,
  sentForDeliveryRoute,
  rejetOrderRoute,
  orderDeliveredRoute,
  removeOrderItem,
} from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import axios from "axios";

import { useContext } from "react";

function useOrdersApi() {
  const { token } = useContext(AuthContext);

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

  const rejectOrderApi = async (orderId: string) => {
    const rejectUrl = rejetOrderRoute(orderId);
    console.log(token);
    try {
      const res = await axios.put(rejectUrl, null, {
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

  const deliveredOrderApi = async (orderId: string) => {
    const deliveredUrl = orderDeliveredRoute(orderId);
    console.log(token);
    try {
      const res = await axios.put(deliveredUrl, null, {
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

  const removeOrderItemApi = async (orderId: string, itmeId: string) => {
    const removeOrderItemUrl = removeOrderItem(orderId, itmeId);
    try {
      const res = await axios.put(removeOrderItemUrl, null, {
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

  return {
    rejectOrderApi,
    approveOrderApi,
    sendforDeliveryApi,
    deliveredOrderApi,
    removeOrderItemApi,
  };
}

export default useOrdersApi;
