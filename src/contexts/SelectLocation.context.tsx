import { useRouter } from "next/router";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface SelectLocationContextProps {
  selectedLocation: string;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
}

export const SelectLocationContext = createContext<SelectLocationContextProps>({
  selectedLocation: "",
  setSelectedLocation: () => {},
});

export function SelectLocationProvider({ children }: any) {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("zaria");
  router.query.location =
    router.query.location === undefined
      ? selectedLocation
      : router.query.location;

  return (
    <SelectLocationContext.Provider
      value={{ selectedLocation, setSelectedLocation }}
    >
      {children}
    </SelectLocationContext.Provider>
  );
}
