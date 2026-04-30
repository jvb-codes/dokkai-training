import useContextMenu from "@/contexts/useContextHooks/useContextMenuContext";
import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";

import { useSearchedWordContext } from "@/contexts/useContextHooks/useSearchedWordContext";
import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";
import useFlashCard from "@/customHooks/useFlashCard";
import useWordLookUp from "@/customHooks/useWordLookUp";

const MobileContextMenu = () => {
  const { isMenuVisible, setIsMenuVisible } = useContextMenu();
  const { lookUpWord } = useWordLookUp();
  const { selectedText, setSearchedWord } = useSearchedWordContext();
  const { flashCardsProgress } = useFlashCard();
  const { setScreenId } = useDisplayIdContext();
  const { vocabList, setIsDockVisible, setIsVocabListVisible } =
    useVocabListContext();
  const { setIsTagSelectionPanelVisible } = useTagsContext();
  return (
    <>
      {isMenuVisible && (
        <section className="fixed bottom-0 z-100 p-5 bg-inkwell-600 justify-center w-full max-w-[896px] animate-fade-in shadow-md shadow-card-foreground left-[50%] translate-x-[-50%] text-inkwell-50 flex flex-col gap-5">
          <p
            onClick={() => {
              lookUpWord(selectedText, setSearchedWord);
              setIsMenuVisible(false);
            }}
            className="flex gap-2 py-2 justify-center"
          >
            Look Up Word
          </p>
          <p
            onClick={() => {
              flashCardsProgress.makeDefaultFlashcardStack(
                vocabList,
                setScreenId,
              );
            }}
            className="flex gap-2 py-2 justify-center"
          >
            Study All Flashcards
          </p>
          <p
            onClick={() => {
              setIsDockVisible(false);
              setIsVocabListVisible(false);
              setIsTagSelectionPanelVisible({
                visible: true,
                action: "createFlashcardStack",
              });
            }}
            className="flex gap-2 py-2 justify-center"
          >
            Customize Flashcard Stack
          </p>
        </section>
      )}
    </>
  );
};

export default MobileContextMenu;
