import { VocabEntry as Reading, VocabEntry as Meaning } from "../VocabEntry";
import { Button } from "@/components/ui/button";
import useFlashCard from "@/customHooks/useFlashCard";
import { useFlashCardContext } from "@/contexts/useContextHooks/useFlashCardContext";

const Back = () => {
  const { flashCardsProgress } = useFlashCard();
  const {
    setKnownWords,
    knownWords,
    isFlipped,
    setIsFlipped,
    words,
    currentCardIndex,
    setCurrentCardIndex,
  } = useFlashCardContext();

  return (
    isFlipped && (
      <div
        className={`${!isFlipped ? "invisible" : "visible"} backface-hidden flex flex-col items-center gap-7 transform rotate-y-180`}
      >
        <div className="flex flex-col gap-2 justify-center items-center ">
          <Reading
            styles="text-3xl"
            value={words[currentCardIndex]?.reading ?? ""}
          />
          <Meaning
            styles="text-lg"
            value={words[currentCardIndex]?.definition ?? ""}
          />
        </div>
        {isFlipped && (
          <div className="flex justify-center gap-5">
            <Button
              onClick={() => {
                setIsFlipped(false);
                setCurrentCardIndex((prev) => (prev + 1) % words.length);
              }}
              className="bg-inkwell-700 hover:bg-inkwell-900"
            >
              Unknown
            </Button>
            <Button
              className="bg-inkwell-200 hover:bg-inkwell-300 text-inkwell-900"
              onClick={() => {
                setIsFlipped(false);
                flashCardsProgress.markAsKnown(
                  words[currentCardIndex]?.id ?? 0,
                  setKnownWords,
                  knownWords,
                );
              }}
            >
              Known
            </Button>
          </div>
        )}
      </div>
    )
  );
};

export default Back;
