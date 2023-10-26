import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";

import { LoginFormProps } from "@/interfaces/App.interface";
import { loginRoute } from "@/constants/apiRoutes";
import { useRouter } from "next/router";
import axios from "axios";

export default function useAuthQuery() {
  const queryClient = useQueryClient();
  const router = useRouter();

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
    try {
      const res = await axios.post(loginRoute, data);
      if (res.data) return res.data;
    } catch (error) {
      console.log("Error", error);
      throw new Error(`An Error occured, ${error}`);
    }
  };

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data: LoginFormProps) => handleLoginWithForm(data),
    onSuccess: (data) => {
      extractAdminData(data);
      router.push("/restaurant");
      queryClient.invalidateQueries({
        queryKey: ["login"],
      });
    },
    onError: (error) => {
      showToast("error", `invalide username or password`);
    },
  });

  return { isLoading, login };
}
