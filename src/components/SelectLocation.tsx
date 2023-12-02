import { useGetLocations } from "@/hooks/useGetLocations";
import { useSelectLocation } from "@/hooks/useSelectLocation";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SelectLocation() {
  const { selectedLocation, setSelectedLocation } = useSelectLocation();
  const { body: locations, isLoading } = useGetLocations();
  const router = useRouter();

  function handleChangeLocation(e: any) {
    setSelectedLocation(e.target.value);
    const currentQuery = { ...router.query };
    currentQuery.location = e.target.value;
    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading locations...</p>
      ) : (
        <select
          // disabled
          value={selectedLocation}
          onChange={handleChangeLocation}
          className="w-[200px] rounded-md border border-stone-400 bg-white px-4 py-2 text-primary outline-none focus:border-primary "
        >
          {locations.map((location: any) => (
            <option value={location.toLowerCase()}>{location}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SelectLocation;
