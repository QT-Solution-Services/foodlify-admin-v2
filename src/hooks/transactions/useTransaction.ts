import { transactionsRoute } from "@/constants/apiRoutes";
import { AuthContext } from "@/contexts/Auth.context";
import { ToastContext } from "@/contexts/Toast.context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

const useTransaction = () => {
  const { showToast } = useContext(ToastContext);
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const page = router.query.page || 0;
  //   const location = router.query.location || "zaria";

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(transactionsRoute, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        params: { page },
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
          status === 404
            ? "No transactions in the location yet!"
            : "an error occured"
        } `,
      );
    }
  };

  const { isLoading, data: { is_last_page, total_pages, body } = {} } =
    useQuery({
      queryKey: ["transactions", page],
      queryFn: fetchTransactions,
    });

  return {
    isLoading,
    is_last_page,
    total_pages,
    body,
  };
};

export default useTransaction;
