import ExpandedVocabCardContainer from "./ExpandedVocabCardContainer";
import { useExpandedCardContext } from "@/contexts/useContextHooks/useExpandedCardContext";
import EditMode from "./EditMode";
import ReadMode from "./ReadMode";

const ExpandedVocabCard = () => {
  const { isExpandedCardVisible, isInEditMode } = useExpandedCardContext();

  return (
    <>
      {isExpandedCardVisible && (
        <ExpandedVocabCardContainer>
          {isInEditMode ? <EditMode /> : <ReadMode />}
        </ExpandedVocabCardContainer>
      )}
    </>
  );
};

export default ExpandedVocabCard;
