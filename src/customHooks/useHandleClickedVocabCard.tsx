import { useExpandedCardContext } from "./useEntryEditContext";
import useTagsContext from "./useTagsContext";
import useVocabListContext from "./useVocabListContext";

const useHandleClickedVocabCard = () => {
  const { vocabList, setVocabList } = useVocabListContext();
  const { setIsEntryEdited, isEntryEdited } = useExpandedCardContext();

  //TODO - move this to a vocabListContext
  const {
    setClickedVocabCard,
    clickedVocabCard,
    clickedVocabCardDefaults,
    setClickedVocabCardDefaults,
  } = useTagsContext();

  const handleClickedVocabCard = {
    findCard: (id: number | undefined) => {
      const vocabCard = vocabList?.find((entry) => entry.id === id);
      if (vocabCard) {
        setClickedVocabCard(vocabCard);
        setClickedVocabCardDefaults(vocabCard);
      }
    },
    updateOnBlur: () => {
      if (!clickedVocabCard) return;
      const update = vocabList.map((entry) => {
        if (entry?.id === clickedVocabCard?.id) {
          return clickedVocabCard;
        }
        return entry;
      });
      setVocabList(update);
    },
    //either adds or removes tag from "clickedVocabCard", depending on whether the user checks or unchecks the checkbox.
    updateTagsOnChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      //adds new tag to tag array when checked
      if (e.target.checked) {
        setClickedVocabCard((prev) =>
          prev
            ? { ...prev, tags: [...(prev.tags ?? []), e.target.value] }
            : prev,
        );
      }

      //removes tag from array when unchecked
      if (!e.target.checked) {
        setClickedVocabCard((prev) =>
          prev
            ? {
                ...prev,
                tags: prev.tags?.filter((tag) => tag !== e.target.value),
              }
            : prev,
        );
      }
    },
    updateEntryOnChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      //handles changes to input values as the user types
      const { name, value } = e.target;

      setIsEntryEdited({ ...isEntryEdited, [name]: true });
      setClickedVocabCard(
        clickedVocabCard && { ...clickedVocabCard, [name]: value },
      );
    },
    undoChanges: (val?: string) => {
      if (val === "word") {
        const defaultWord = {
          ...clickedVocabCard,
          word: clickedVocabCardDefaults.word,
        };
        setIsEntryEdited({ ...isEntryEdited, word: false });
        setClickedVocabCard(defaultWord);
      } else if (val === "reading") {
        const defaultReading = {
          ...clickedVocabCard,
          reading: clickedVocabCardDefaults?.reading,
        };
        setIsEntryEdited({ ...isEntryEdited, reading: false });
        setClickedVocabCard(defaultReading);
      } else if (val === "meaning") {
        const defaultMeaning = {
          ...clickedVocabCard,
          meaning: clickedVocabCardDefaults?.definition,
        };
        setIsEntryEdited({ ...isEntryEdited, meaning: false });
        setClickedVocabCard(defaultMeaning);
      } else return;
    },
  };

  return { handleClickedVocabCard };
};

export default useHandleClickedVocabCard;
