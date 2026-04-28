import type { ReactNode } from "react";
import { useState } from "react";
import { DisplayIdContext } from "../createdContexts/DisplayIdContext";

export const DisplayIdContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [screenId, setScreenId] = useState(1);

  return (
    <DisplayIdContext.Provider value={{ screenId, setScreenId }}>
      {children}
    </DisplayIdContext.Provider>
  );
};
