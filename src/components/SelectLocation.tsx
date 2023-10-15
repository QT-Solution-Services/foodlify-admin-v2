import React, { useState } from "react";
import { HiLockOpen } from "react-icons/hi2";

function SelectLocation() {
  const [location, setLocation] = useState("");
  console.log(location);
  return (
    <div>
      <select
        value={location}
        defaultValue={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-[200px] rounded-md border border-stone-400 bg-white px-4 py-2 text-primary outline-none focus:border-primary "
      >
        <option value="kaduna">Kaduna</option>
        <option value="kano">Kano</option>
        <option value="abuja">Abuja</option>
      </select>
    </div>
  );
}

export default SelectLocation;
