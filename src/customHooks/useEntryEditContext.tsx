import { useContext } from "react";
import { EntryEditContext } from "@/context";

export const useEntryEditContext = () => {
  const context = useContext(EntryEditContext);
  if (!context) {
    throw new Error(
      "useEntryEditContext must be used within EntryEditContextProvider. Is the component wrapped with the provider?"
    );
  }
  return context;
};
