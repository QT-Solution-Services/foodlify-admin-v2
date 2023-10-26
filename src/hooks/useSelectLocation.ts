import { SelectLocationContext } from "@/contexts/SelectLocation.context";
import { useContext } from "react";

export function useSelectLocation() {
  const context = useContext(SelectLocationContext);
  if (context === undefined)
    throw new Error("Location context used outside of it provided ");

  return context;
}
