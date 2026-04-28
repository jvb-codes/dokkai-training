import type { ReactNode } from "react";
import { useState, useRef } from "react";
import type { VocabEntryType } from "@/types/types";
import { VocabListContext } from "../createdContexts/VocabListContext";
import { usePastedTextContext } from "../useContextHooks/usePastedTextContext";

export const VocabListProvider = ({ children }: { children: ReactNode }) => {
  const { prevSession } = usePastedTextContext();
  console.log(prevSession?.vocabList);
  const [vocabList, setVocabList] = useState<VocabEntryType[]>(
    prevSession ? prevSession.vocabList : [],
  );
  const [isVocabListVisible, setIsVocabListVisible] = useState(false);
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [lastEntryIsVisible, setLastEntryIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const lastEntryRef = useRef(null);
  const [isTagSelectionVisible, setIsTagSelectionVisible] = useState(false);

  return (
    <VocabListContext.Provider
      value={{
        vocabList,
        setVocabList,
        isVocabListVisible,
        setIsVocabListVisible,
        lastEntryIsVisible,
        setLastEntryIsVisible,
        lastEntryRef,
        isMounted,
        setIsMounted,
        isDockVisible,
        setIsDockVisible,
        isTagSelectionVisible,
        setIsTagSelectionVisible,
      }}
    >
      {children}
    </VocabListContext.Provider>
  );
};
