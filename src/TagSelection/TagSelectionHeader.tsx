import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import SearchTagInput from "./SearchTagInput";
import { Icon as ClosePanelButton } from "@/customComponents/Icon";
import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";
import useVocabList from "@/customHooks/useVocabList";
import { useFlashCardContext } from "@/contexts/useContextHooks/useFlashCardContext";

const TagSelectionHeader = () => {
  const {
    setIsTagSelectionPanelVisible,
    clickedVocabCard,
    setClickedTags,
    setSearchedTag,
  } = useTagsContext();
  const { setIsDockVisible, vocabList, setVocabList, setIsVocabListVisible } =
    useVocabListContext();

  const { updateVocabList } = useVocabList();
  const { setWords } = useFlashCardContext();

  return (
    <div className="flex  items-center gap-2">
      <ClosePanelButton
        styles="cursor-pointer"
        iconName="arrow_back "
        title="Back"
        onClick={() => {
          setWords([]);
          setClickedTags([]);
          setIsTagSelectionPanelVisible({ visible: false, action: null });
          setIsDockVisible(true);
          setIsVocabListVisible(true);
          setSearchedTag("");
          if (clickedVocabCard)
            updateVocabList(
              clickedVocabCard?.id,
              vocabList,
              clickedVocabCard,
              setVocabList,
            );
        }}
      />
      <SearchTagInput />
    </div>
  );
};

export default TagSelectionHeader;
