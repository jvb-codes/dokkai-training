import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useTagSelection from "@/customHooks/useTagSelection";
import { Icon as BackArrow } from "@/customComponents/Icon";
import useVocabList from "@/customHooks/useVocabList";
import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";

const CreateTagInput = () => {
  const {
    allTags,
    isTagSelectionPanelVisible,
    setIsTagSelectionPanelVisible,
    clickedVocabCard,
    setSearchedTag,
    setTagsSelectionError,
  } = useTagsContext();
  const { createTagViaEnterKey } = useTagSelection();
  const { updateVocabList } = useVocabList();
  const { vocabList, setVocabList, setIsVocabListVisible, setIsDockVisible } =
    useVocabListContext();

  return (
    <>
      {allTags.length === 0 &&
        isTagSelectionPanelVisible.action === "createTags" && (
          <div className="flex items-center gap-2">
            <BackArrow
              onClick={() => {
                if (clickedVocabCard)
                  updateVocabList(
                    clickedVocabCard.id,
                    vocabList,
                    clickedVocabCard,
                    setVocabList,
                  );
                setIsTagSelectionPanelVisible({
                  ...isTagSelectionPanelVisible,
                  visible: false,
                });
                setSearchedTag("");
                setTagsSelectionError(null);
                setIsVocabListVisible(true);
                setIsDockVisible(true);
              }}
              styles="cursor-pointer"
              iconName="arrow_back "
              title="Back"
            />
            <input
              onKeyDown={(e) => createTagViaEnterKey(e)}
              className="p-2 outline outline-inkwell-500 rounded-md w-full"
              placeholder="Create a new tag"
            />
          </div>
        )}
    </>
  );
};

export default CreateTagInput;
