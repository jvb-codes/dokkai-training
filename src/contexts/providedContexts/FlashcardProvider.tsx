import type { ReactNode } from "react";
import { useState } from "react";
import type { VocabEntryType } from "@/types/types";
import { FlashcardContext } from "../createdContexts/FlashcardContext";

export const FlashCardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [words, setWords] = useState<VocabEntryType[]>([]);
  const [knownWords, setKnownWords] = useState<VocabEntryType[]>([]);

  return (
    <FlashcardContext.Provider
      value={{
        isFlipped,
        setIsFlipped,
        currentCardIndex,
        setCurrentCardIndex,
        words,
        setWords,
        knownWords,
        setKnownWords,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};
