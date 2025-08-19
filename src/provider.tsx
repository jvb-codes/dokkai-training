import { useState } from "react";
import { PastedTextContext, ScreenIdContext } from "@/context";
import type { ReactNode } from "react";

export const PastedTextContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [pastedText, setPastedText] = useState("");

  return (
    <PastedTextContext.Provider value={{ pastedText, setPastedText }}>
      {children}
    </PastedTextContext.Provider>
  );
};

export const ScreenIdContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [screenId, setScreenId] = useState(1);

  return (
    <ScreenIdContext.Provider value={{ screenId, setScreenId }}>
      {children}
    </ScreenIdContext.Provider>
  );
};
