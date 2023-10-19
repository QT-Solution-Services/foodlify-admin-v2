import React from "react";
import { AppLayoutProps } from "@/interfaces/App.interface";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="grid max-h-screen grid-cols-[19rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </div>
  );
}

export default AppLayout;
