import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="grid max-h-screen grid-cols-[20rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default AppLayout;
