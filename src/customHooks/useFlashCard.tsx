import { useFlashCardContext } from "./useFlashCardContext";
import { type VocabEntryType } from "@/data/vocabList";

const useFlashCard = () => {
  const { setCurrentCardIndex, setWords, words } = useFlashCardContext();

  const flashCardsProgress = {
    makeDefaultFlashcardStack: (
      vocabList: VocabEntryType[],
      setScreenId: React.Dispatch<React.SetStateAction<number>>,
    ) => {
      setWords(vocabList);
      setScreenId(3);
    },
    makeCustomFlashcardStack: (
      vocabList: VocabEntryType[],
      setScreenId: React.Dispatch<React.SetStateAction<number>>,
      clickedTags?: string[],
    ) => {
      const result = vocabList.filter((entry) => {
        if (!entry.tags || !clickedTags) return null;

        return clickedTags.some((tag) => entry.tags?.includes(tag));
      });
      setWords(result);
      setScreenId(3);
    },

    markAsKnown: (
      id: number,
      setKnownWords: React.Dispatch<React.SetStateAction<VocabEntryType[]>>,
      knownWords: VocabEntryType[],
    ) => {
      const updated = words
        .map((entry) => {
          if (entry.id === id) {
            setKnownWords([...knownWords, entry]);
            return { ...entry, isKnown: true };
          } else return entry;
        })
        .filter((entry) => !entry.isKnown);

      setWords(updated);

      // 4. Fix the index based on updatedUnknown
      setCurrentCardIndex((prevIndex: number) => {
        if (words.length === 0) return 0; // nothing left to show

        if (prevIndex >= words.length) {
          // e.g. last card was just marked known
          return 0;
        }

        // otherwise, stay at same index:
        // the "next" card shifted into this position
        return prevIndex;
      });
    },
    restartFlashcardStack: (
      knownWords: VocabEntryType[],
      setKnownWords: React.Dispatch<React.SetStateAction<VocabEntryType[]>>,
    ) => {
      setWords(knownWords);
      setKnownWords([]);
    },
  };

  return {
    flashCardsProgress,
  };
};

export default useFlashCard;
