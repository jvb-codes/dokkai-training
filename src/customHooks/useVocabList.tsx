import type { VocabEntryType } from "@/data/vocabList";
import type { SearchedWordType } from "@/context";
import useVocabListContext from "./useVocabListContext";
import useLocalStorage from "./useLocalStorage";
import { usePastedTextContext } from "./usePastedTextContext";
import { toast } from "sonner";
import useDialogContext from "./useDialogContext";
import { useSearchedWordContext } from "./useSearchedWordContext";

const useVocabList = () => {
  const { vocabList, setVocabList } = useVocabListContext();

  const { setLocalStorage } = useLocalStorage();

  const { pastedText } = usePastedTextContext();

  const { setDialog } = useDialogContext();

  const { setSearchedWord } = useSearchedWordContext();

  const doesExistInList = (
    vocabList: VocabEntryType[],
    searchedWord: SearchedWordType,
  ) => {
    return vocabList.find((entry) => entry.word === searchedWord.word);
  };

  const createWordHighlightKey = (word: string) => {
    const wordEnding = word[word.length - 1];
    const verbEndings = ["う", "く", "ぐ", "す", "つ", "ぬ", "ぶ", "む", "る"];

    if (verbEndings.includes(wordEnding)) {
      return word.charAt(0);
    } else return word;
  };

  const addWord = (
    searchedWord: SearchedWordType,
    setVocabList: React.Dispatch<React.SetStateAction<VocabEntryType[]>>,
  ) => {
    const newEntry: VocabEntryType = {
      id: Date.now(),
      ...searchedWord,
      tags: [],
      isKnown: false,
      isHighlight: false,
      wordHighlightKey: createWordHighlightKey(searchedWord.word),
    };

    if (doesExistInList(vocabList, searchedWord)) {
      setDialog({
        type: "duplicate",
        isOpen: true,
        title: "This looks familiar",
        message: "You've already added this word to your vocabulary list.",
      });
    } else {
      setVocabList([...vocabList, newEntry]);
      toast.success("Word added", {
        position: "top-center",
        duration: 2500,
      });
    }

    setSearchedWord(undefined);
  };

  const deleteWord = (id: number) => {
    const update = vocabList.filter((entry) => {
      return entry.id !== id;
    });
    setVocabList(update);
    if (pastedText) setLocalStorage(pastedText, vocabList);
  };

  const updateVocabList = (
    id: number,
    vocabCards: VocabEntryType[],
    vocabCard: VocabEntryType,
    setNewVocabCards: React.Dispatch<React.SetStateAction<VocabEntryType[]>>,
  ) => {
    const updatedCards = vocabCards.map((card) => {
      if (card.id === id) {
        return vocabCard;
      } else return card;
    });
    setNewVocabCards(updatedCards);
  };

  return { addWord, updateVocabList, deleteWord };
};

export default useVocabList;
