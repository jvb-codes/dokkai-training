import useContextMenu from "@/contexts/useContextHooks/useContextMenuContext";
import { useSearchedWordContext } from "@/contexts/useContextHooks/useSearchedWordContext";

import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";
import { Icon as SearchIcon, Icon as ListIcon } from "../Icon";
import useWordLookUp from "@/customHooks/useWordLookUp";

import useTagsContext from "@/contexts/useContextHooks/useTagsContext";

import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";
import useFlashCard from "@/customHooks/useFlashCard";

type ContextMenuPropsType = {
  setIsDefVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement | null>;
  selectedText: string | undefined;
};

const ContextMenu = ({ menuRef, selectedText }: ContextMenuPropsType) => {
  const { lookUpWord } = useWordLookUp();
  const { setSearchedWord } = useSearchedWordContext();
  const { isMenuVisible, setIsMenuVisible, coords } = useContextMenu();

  const { setIsVocabListVisible, setIsDockVisible, setIsMounted } =
    useVocabListContext();
  const { setIsTagSelectionPanelVisible } = useTagsContext();
  const { flashCardsProgress } = useFlashCard();
  const { vocabList } = useVocabListContext();
  const { setScreenId } = useDisplayIdContext();

  return (
    <>
      <div
        ref={menuRef}
        style={{
          top: !isMenuVisible ? -9999 : coords?.y,
          left: !isMenuVisible ? -9999 : coords?.x,
        }}
        className={` w-[300px] ${
          isMenuVisible
            ? "absolute animate-fade-in shadow-md shadow-card-foreground"
            : "absolute pointer-events-none invisible"
        }  bg-inkwell-600 border text-inkwell-50 rounded-md shadow-lg md:text-[14px] flex flex-col `}
      >
        <div
          onClick={() => {
            lookUpWord(selectedText, setSearchedWord);
            setIsMenuVisible(false);
          }}
          className="flex gap-2 cursor-pointer hover:bg-inkwell-500 py-5 px-3"
        >
          <SearchIcon iconName="search" />
          <p>Look Up Word</p>
        </div>

        <div
          onClick={() => {
            setIsMounted((prev) => !prev);
            setIsVocabListVisible(true);
          }}
          className="flex gap-2 cursor-pointer hover:bg-inkwell-500 py-5 px-3"
        >
          <ListIcon iconName="list" />
          <p>See Vocab List</p>
        </div>
        <div
          onClick={() => {
            setIsMounted((prev) => !prev);
            flashCardsProgress.makeDefaultFlashcardStack(
              vocabList,
              setScreenId,
            );
          }}
          className="flex gap-2 cursor-pointer hover:bg-inkwell-500 py-5 px-3"
        >
          <ListIcon iconName="list" />
          <p>Study Flashcards</p>
        </div>
        <div
          onClick={() => {
            setIsDockVisible(false);
            setIsVocabListVisible(false);
            setIsTagSelectionPanelVisible({
              visible: true,
              action: "createFlashcardStack",
            });
          }}
          className="flex gap-2 cursor-pointer hover:bg-inkwell-500 py-5 px-3"
        >
          <ListIcon iconName="cards_stack" />
          <p>Customize Flashcards</p>
        </div>
      </div>
    </>
  );
};

export default ContextMenu;
