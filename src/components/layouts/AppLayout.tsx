import React, { useContext, useEffect } from "react";
import { AppLayoutProps } from "@/interfaces/App.interface";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";
import usePing from "@/hooks/usePing";
import { ToastContext } from "@/contexts/Toast.context";
import { useRouter } from "next/router";
import useLogout from "@/hooks/useLogout";
import { AuthContext } from "@/contexts/Auth.context";

function AppLayout({ children }: AppLayoutProps) {
  const { isLoading, data: isValidToken } = usePing();
  const router = useRouter();
  const { showToast } = useContext(ToastContext);
  const { userData } = useContext(AuthContext);
  const { handleLogout } = useLogout();
  useEffect(() => {
    if (userData === null || (!isLoading && !isValidToken)) {
      handleLogout();
      showToast("error", "Your session has expired. Please log in again");
    }
  }, []);

  return (
    <div className="grid max-h-screen grid-cols-[19rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </div>
  );
}

export default AppLayout;
