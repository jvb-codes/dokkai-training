import useFlashCard from "@/customHooks/useFlashCard";
import { VocabEntry as Word } from "../VocabEntry";
import { Button } from "@/components/ui/button";
import { useFlashCardContext } from "@/contexts/useContextHooks/useFlashCardContext";
import { useEffect } from "react";
import { usePastedTextContext } from "@/contexts/useContextHooks/usePastedTextContext";
import useLocalStorage from "@/customHooks/useLocalStorage";
import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";

const Front = () => {
  const { setScreenId, screenId } = useDisplayIdContext();
  const { flashCardsProgress } = useFlashCard();
  const {
    setKnownWords,
    knownWords,
    words,
    isFlipped,
    setIsFlipped,
    currentCardIndex,
  } = useFlashCardContext();
  const { setPrevSession } = usePastedTextContext();
  const { getLocalStorge } = useLocalStorage();
  const { setClickedTags } = useTagsContext();

  useEffect(() => {
    setPrevSession(getLocalStorge());
  }, [screenId]);

  return (
    <>
      {!isFlipped && (
        <div className={`backface-hidden animate-fade-in`}>
          <span
            onClick={() => setScreenId(2)}
            className={`material-symbols-outlined cursor-pointer absolute top-2 right-2`}
          >
            close
          </span>
          <div className="flex flex-col justify-center items-center gap-5">
            {words.length > 0 && (
              <>
                <Word
                  value={words[currentCardIndex]?.word ?? ""}
                  styles="text-3xl"
                />
                <Button
                  className="bg-inkwell-700 hover:bg-inkwell-900"
                  onClick={() => setIsFlipped(true)}
                >
                  Flip
                </Button>
              </>
            )}
            {words.length === 0 && (
              <>
                <p className="text-lg text-center">
                  No more words to study. Let's take a break!
                </p>
                <div className="flex gap-5 mt-4">
                  <Button
                    onClick={() => {
                      flashCardsProgress.restartFlashcardStack(
                        knownWords,
                        setKnownWords,
                      );
                    }}
                    className="cursor-pointer bg-inkwell-700 hover:bg-inkwell-600 border"
                  >
                    Restart
                  </Button>
                  <Button
                    onClick={() => {
                      setScreenId(2);
                      setClickedTags([]);
                    }}
                    className="cursor-pointer"
                  >
                    Exit
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Front;
