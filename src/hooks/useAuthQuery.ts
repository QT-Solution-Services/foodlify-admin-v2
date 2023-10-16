import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";

import { LoginFormProps } from "@/interfaces/App.interface";
import { loginRoute } from "@/constants/apiRoutes";
import useSecureRequest from "./useRequest";
import { useRouter } from "next/router";
import axios from "axios";

export default function useAuthQuery() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { post, get, put } = useSecureRequest();

  const { showToast } = useContext(ToastContext);

  const { setAuthToken, setAdminDetails } = useContext(AuthContext);

  function extractAdminData(data: any) {
    const { body, message } = data || {};
    const { access_token: token, refresh_token: refreshToken } = body || {};
    const adminData = { refreshToken, message };
    setAuthToken(token);
    setAdminDetails(adminData);
  }

  const handleLoginWithForm = async (data: LoginFormProps) => {
    showToast("warn", "processing request...");
    try {
      const res = await axios.post(loginRoute, data);
      if (res.status === 200) {
        console.log(res.data);
        extractAdminData(res.data);
        router.push("/restaurant");
        queryClient.invalidateQueries({
          queryKey: ["login"],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, error, data } = useMutation({
    mutationFn: handleLoginWithForm,
    onError: (error) => {
      showToast("error", "an error occured");
      console.log("rq", error);
    },
  });

  return { isLoading, handleLoginWithForm, data };
}
