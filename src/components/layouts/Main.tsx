import { MainProps } from "@/interfaces/App.interface";
import React from "react";

function Main({ children }: MainProps) {
  return (
    <div className="max-h-screen overflow-y-auto bg-stone-100 px-24 py-10">
      <div className="">{children}</div>
    </div>
  );
}

export default Main;
