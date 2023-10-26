import { useSelectLocation } from "@/hooks/useSelectLocation";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SelectLocation() {
  const { selectedLocation, setSelectedLocation } = useSelectLocation();
  const router = useRouter();

  function handleChangeLocation(e: any) {
    setSelectedLocation(e.target.value);
    router.push({
      query: { location: e.target.value },
    });
  }

  return (
    <div>
      <select
        value={selectedLocation}
        onChange={handleChangeLocation}
        className="w-[200px] rounded-md border border-stone-400 bg-white px-4 py-2 text-primary outline-none focus:border-primary "
      >
        <option value="zaria">Zaria</option>
        <option value="kaduna">Kaduna</option>
        <option value="abuja">Abuja</option>
      </select>
    </div>
  );
}

export default SelectLocation;
