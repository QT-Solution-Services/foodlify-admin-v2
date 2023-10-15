import React from "react";
import SelectLocation from "../SelectLocation";
import AccountMenu from "../AccountMenu";

function Header() {
  return (
    <div className=" flex justify-between border-b border-stone-300 bg-white px-16 py-4">
      <SelectLocation />
      <AccountMenu />
    </div>
  );
}

export default Header;
