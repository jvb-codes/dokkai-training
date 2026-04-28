import { useContext } from "react";
import { PastedTextContext } from "../createdContexts/PastedTextContext";

export const usePastedTextContext = () => {
  const context = useContext(PastedTextContext);
  if (!context) {
    throw new Error(
      "usePastedTextContext must be used within PastedTextContextProvider. Is the component wrapped with the provider?",
    );
  }
  return context;
};
