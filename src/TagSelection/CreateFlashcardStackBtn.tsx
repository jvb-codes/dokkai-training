import { Button } from "@/components/ui/button";
import useFlashCard from "@/customHooks/useFlashCard";
import useLocalStorage from "@/customHooks/useLocalStorage";
import { usePastedTextContext } from "@/customHooks/usePastedTextContext";
import useScreenIdContext from "@/customHooks/useScreenIdContext";
import useTagsContext from "@/customHooks/useTagsContext";
import useVocabListContext from "@/customHooks/useVocabListContext";

const CreateFlashcardStackBtn = () => {
  const { isTagSelectionPanelVisible, clickedTags } = useTagsContext();
  const { flashCardsProgress } = useFlashCard();
  const { setScreenId } = useScreenIdContext();
  const { vocabList } = useVocabListContext();
  const { setLocalStorage } = useLocalStorage();
  const { pastedText } = usePastedTextContext();

  const { makeCustomFlashcardStack } = flashCardsProgress;

  return (
    <>
      {isTagSelectionPanelVisible.action === "createFlashcardStack" && (
        <div className="text-center">
          <Button
            onClick={() => {
              if (pastedText) setLocalStorage(pastedText, vocabList);
              makeCustomFlashcardStack(vocabList, setScreenId, clickedTags);
            }}
          >
            Create Flashcard Stack
          </Button>
        </div>
      )}
    </>
  );
};

export default CreateFlashcardStackBtn;
