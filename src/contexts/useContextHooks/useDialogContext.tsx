import { DialogContext } from "../createdContexts/DialogContext";
import { useContext } from "react";
const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "useDialogContext must be used within Dialog Context Proider. Is the component wrapped with the provider?",
    );
  }
  return context;
};

export default useDialogContext;
