import { useContext } from "react";
import { ToastContext } from "../createdContexts/ToastContext";

const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error(
      "useToastContext must be used within ToastContextProvider. Is the component wrapped with the provider?",
    );

  return context;
};

export default useToastContext;
