import { AuthContext } from "@/contexts/Auth.context";
import CookieService from "@/services/Cookie.services";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function useLogout() {
  const router = useRouter();
  const { setAdminDetails, setAuthToken } = useContext(AuthContext);
  const handleLogout = async () => {
    CookieService.remover("app_session");
    CookieService.remover("user_data");
    setAuthToken("");
    setAdminDetails(null);
    router.push("/login");
  };
  return {
    handleLogout,
  };
}
