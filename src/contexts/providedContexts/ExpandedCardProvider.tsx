import type { ReactNode } from "react";
import { useState } from "react";
import { ExpandedCardContext } from "../createdContexts/ExpandedCardContext";

export const ExpandedCardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isExpandedCardVisible, setIsExpandedCardVisible] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [isEntryEdited, setIsEntryEdited] = useState({
    word: false,
    reading: false,
    meaning: false,
  });

  return (
    <ExpandedCardContext.Provider
      value={{
        isExpandedCardVisible,
        setIsExpandedCardVisible,
        isInEditMode,
        setIsInEditMode,
        isEntryEdited,
        setIsEntryEdited,
      }}
    >
      {children}
    </ExpandedCardContext.Provider>
  );
};
