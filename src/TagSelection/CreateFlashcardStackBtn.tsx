import { Button } from "@/components/ui/button";
import useFlashCard from "@/customHooks/useFlashCard";
import useLocalStorage from "@/customHooks/useLocalStorage";
import { usePastedTextContext } from "@/contexts/useContextHooks/usePastedTextContext";
import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";
import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";

const CreateFlashcardStackBtn = () => {
  const { isTagSelectionPanelVisible, clickedTags } = useTagsContext();
  const { flashCardsProgress } = useFlashCard();
  const { setScreenId } = useDisplayIdContext();
  const { vocabList } = useVocabListContext();
  const { setLocalStorage } = useLocalStorage();
  const { pastedText } = usePastedTextContext();
  const { allTags } = useTagsContext();

  const { makeCustomFlashcardStack } = flashCardsProgress;

  return (
    <>
      {isTagSelectionPanelVisible.action === "createFlashcardStack" && (
        <div className="text-center mb-4">
          {allTags.length > 0 && (
            <Button
              onClick={() => {
                if (pastedText) setLocalStorage(pastedText, vocabList);
                makeCustomFlashcardStack(vocabList, setScreenId, clickedTags);
              }}
            >
              Create Flashcard Stack
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default CreateFlashcardStackBtn;
