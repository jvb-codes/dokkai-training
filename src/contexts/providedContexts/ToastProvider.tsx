import type { ReactNode } from "react";
import { useState } from "react";
import { ToastContext } from "../createdContexts/ToastContext";

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toastMsg, setToastMsg] = useState<string>("");
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);

  return (
    <ToastContext.Provider
      value={{ toastMsg, setToastMsg, isToastVisible, setIsToastVisible }}
    >
      {children}
    </ToastContext.Provider>
  );
};
