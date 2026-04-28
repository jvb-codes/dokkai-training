import type { ReactNode, JSX } from "react";
import { useState } from "react";
import type { StudySessionType } from "@/types/types";
import { PastedTextContext } from "../createdContexts/PastedTextContext";

export const PastedTextContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [prevSession, setPrevSession] = useState<StudySessionType | null>(null);
  const [pastedText, setPastedText] = useState<string>(
    prevSession ? prevSession.text : "",
  );
  const [isPastedTextHighlighted, setIsPastedTextHighlighted] = useState(false);
  const [pastedTextWithHighlights, setPastedTextWithHighlights] = useState<
    (string | JSX.Element)[]
  >([]);
  const [highlightedWords, setHighlightedWords] = useState<string[]>([]);
  const [pastedTextError, setPastedTextError] = useState<string>("");
  const [isNewSession, setIsNewSession] = useState(false);

  return (
    <PastedTextContext.Provider
      value={{
        pastedText,
        setPastedText,
        isPastedTextHighlighted,
        setIsPastedTextHighlighted,
        pastedTextWithHighlights,
        setPastedTextWithHighlights,
        highlightedWords,
        setHighlightedWords,
        pastedTextError,
        setPastedTextError,
        prevSession,
        setPrevSession,
        isNewSession,
        setIsNewSession,
      }}
    >
      {children}
    </PastedTextContext.Provider>
  );
};
