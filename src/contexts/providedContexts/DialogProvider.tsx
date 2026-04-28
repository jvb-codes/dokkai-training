import type { ReactNode } from "react";
import { useState } from "react";
import type { DialogType } from "@/types/types";
import { DialogContext } from "../createdContexts/DialogContext";

export const DialogContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const dialogDefaults = {
    cardId: null,
    type: "",
    isOpen: false,
    title: "",
    message: "",
  };
  const [dialog, setDialog] = useState<DialogType>(dialogDefaults);

  return (
    <DialogContext.Provider
      value={{
        dialog,
        setDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
