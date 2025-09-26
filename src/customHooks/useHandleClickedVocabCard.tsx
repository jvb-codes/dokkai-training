import useTagsContext from "./useTagsContext";
import useVocabListContext from "./useVocabListContext";

const useHandleClickedVocabCard = () => {
  const { vocabList } = useVocabListContext();
  //TODO - move this to a vocabListContext
  const { setClickedVocabCard } = useTagsContext();

  //finds and sets state of the vocab card that the user clicks
  const handleClickedVocabCard = (id: number) => {
    const update = vocabList?.find((entry) => entry.id === id);
    if (update) {
      setClickedVocabCard(update);
    }
  };
  return { handleClickedVocabCard };
};

export default useHandleClickedVocabCard;
