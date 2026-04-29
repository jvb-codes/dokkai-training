import { useExpandedCardContext } from "@/contexts/useContextHooks/useExpandedCardContext";
import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import { Icon as BackArrow } from "../Icon";

const EditModeHeader = () => {
  const { setIsInEditMode, setIsEntryEdited } = useExpandedCardContext();
  const { setClickedVocabCardDefaults, clickedVocabCard } = useTagsContext();
  return (
    <div>
      <BackArrow
        iconName="arrow_back"
        title="Back"
        onClick={() => {
          setIsInEditMode(false);
          setClickedVocabCardDefaults(clickedVocabCard);
          setIsEntryEdited({ word: false, reading: false, meaning: false });
        }}
        styles="cursor-pointer flex-self-centered"
      />
    </div>
  );
};

export default EditModeHeader;
