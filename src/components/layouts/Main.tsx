import { MainProps } from "@/interfaces/App.interface";
import React from "react";

function Main({ children }: MainProps) {
  return (
    <div className="max-h-screen overflow-y-auto bg-stone-100 p-4">
      <div className="bg-white ">{children}</div>
    </div>
  );
}

export default Main;
