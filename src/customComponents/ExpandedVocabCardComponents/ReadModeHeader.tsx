import { useExpandedCardContext } from "@/customHooks/useEntryEditContext";
import { Icon as ArrowBack, Icon as EditSquare } from "../Icon";
import useVocabListContext from "@/customHooks/useVocabListContext";
type HeaderType = {
  setIsInEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReadModeHeader = ({ setIsInEditMode }: HeaderType) => {
  const { setIsExpandedCardVisible } = useExpandedCardContext();
  const { setIsDockVisible } = useVocabListContext();
  return (
    <div className="flex items-center justify-between p-3">
      <ArrowBack
        iconName={"arrow_back"}
        styles={"cursor-pointer"}
        onClick={() => {
          setIsExpandedCardVisible(false);
          setIsDockVisible(true);
        }}
      />
      <EditSquare
        iconName={"edit_square"}
        styles={"vocabListContent__edit-card cursor-pointer"}
        onClick={() => setIsInEditMode(true)}
      />
    </div>
  );
};
