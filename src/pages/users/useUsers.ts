import { usersRoutes } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

export function useUsers() {
  const { showToast } = useContext(ToastContext);
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const page = router.query.page || 0;
  const location = router.query.location || "zaria";

  const fetchUsers = async () => {
    try {
      const res = await axios.get(usersRoutes, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        params: { page, location },
      });
      if (res.data) {
        console.log(res.data);
        return res.data;
      }
      return null;
    } catch (err: any) {
      const { status } = err?.response;
      showToast(
        "error",
        `${
          status === 404 ? "No users in the location yet!" : "an error occured"
        } `,
      );
    }
  };

  const { isLoading, data: { is_last_page, total_pages, body } = {} } =
    useQuery({
      queryKey: ["users", page, location],
      queryFn: fetchUsers,
    });

  return {
    isLoading,
    is_last_page,
    total_pages,
    body,
  };
}
