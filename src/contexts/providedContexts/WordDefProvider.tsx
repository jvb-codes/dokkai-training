import type { ReactNode } from "react";
import { useState } from "react";
import { WordDefContext } from "../createdContexts/WordDefContext";

export const WordDefContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDefVisible, setIsDefVisible] = useState(false);

  return (
    <WordDefContext.Provider
      value={{
        isDefVisible,
        setIsDefVisible,
      }}
    >
      {children}
    </WordDefContext.Provider>
  );
};
