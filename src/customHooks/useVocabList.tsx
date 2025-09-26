import type { VocabListType } from "@/data/vocabList";
import useToastContext from "./useToastContext";
import useVocabListContext from "./useVocabListContext";

const useVocabList = () => {
  //From VocabContext
  const { setVocabList } = useVocabListContext();
  //From ToastContext
  const { setToastMsg, setIsToastVisible } = useToastContext();

  const openToast = (message: string | "") => {
    setToastMsg(message);
    setIsToastVisible(true);
  };

  const checkDoesWordExist = (
    wordList: VocabListType,
    selection: string | number
  ) => {
    const result = wordList.find((wordEntry) => {
      if (typeof selection === "string") {
        return wordEntry.word === selection;
      }
      if (typeof selection === "number") {
        return wordEntry.id === selection;
      }
    });
    return result;
  };

  const addWord = (wordList: VocabListType, selectedText: string) => {
    const doesExist = checkDoesWordExist(wordList, selectedText);

    if (!doesExist) {
      const msg = `${selectedText} is already on your list.`;

      openToast(msg);
    }

    if (wordList && doesExist) {
      const newEntry = {
        id: wordList.length + 1,
        word: "",
        reading: "",
        meaning: "",
        tags: [],
      };
      setVocabList((prev) => [...prev, newEntry]);
    }
  };

  const deleteWord = (
    wordList: VocabListType,
    ev: React.MouseEvent<HTMLElement>
  ) => {
    const indexOfClickedWord = ev.target.id;

    const update = wordList.filter(
      (wordEntry) => wordEntry.id !== indexOfClickedWord
    );

    setVocabList(update);
  };

  const updateTags = (
    wordList: VocabListType,
    ev: React.MouseEvent<HTMLElement>,
    newTag: string
  ) => {
    const id = ev.target.id;
    const update = wordList.map((wordEntry) => {
      if (wordEntry.id === id) {
        wordEntry.tags = [...wordEntry.tags, newTag];
      }
      return wordEntry;
    });
    setVocabList(update);
  };

  // useEffect(() => {
  //   if (isVocabListVisible && lastEntryRef.current) {
  //     //IntersectionObserver is used to determine whether the last card in the vocabList is visible in the viewport.
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       //if last card is visible, isIntersecting === true, otherwise === false.
  //       setLastEntryIsVisible(entry.isIntersecting);
  //     });
  //     //watches the last card
  //     observer.observe(lastEntryRef.current);
  //   }
  // }, [isVocabListVisible, lastEntryRef, setLastEntryIsVisible]);

  return { checkDoesWordExist, addWord, deleteWord, updateTags };
};

export default useVocabList;
