import { useContext } from "react";
import { ExpandedCardContext } from "@/context";

export const useExpandedCardContext = () => {
  const context = useContext(ExpandedCardContext);
  if (!context) {
    throw new Error(
      "useEntryEditContext must be used within EntryEditContextProvider. Is the component wrapped with the provider?"
    );
  }
  return context;
};
