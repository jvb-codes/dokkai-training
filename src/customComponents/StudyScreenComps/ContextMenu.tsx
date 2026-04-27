import useContextMenu from "@/customHooks/useContextMenu";
import { useSearchedWordContext } from "@/customHooks/useSearchedWordContext";

import useVocabListContext from "@/customHooks/useVocabListContext";
import { Icon as SearchIcon, Icon as ListIcon } from "../Icon";
import useWordLookUp from "@/customHooks/useWordLookUp";

import useTagsContext from "@/customHooks/useTagsContext";

import useScreenIdContext from "@/customHooks/useScreenIdContext";
import useFlashCard from "@/customHooks/useFlashCard";

type ContextMenuPropsType = {
  setIsDefVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement | null>;
  selectedText: string | undefined;
};

const ContextMenu = ({
  //positions menu on x and y axis within TextCard

  //gets height and width of menu for adjusting positioning; prevents going over TextCard's rt and bottom borders
  menuRef,
  selectedText,
}: ContextMenuPropsType) => {
  const { lookUpWord } = useWordLookUp();
  const { setSearchedWord } = useSearchedWordContext();
  const { isMenuVisible, setIsMenuVisible, coords } = useContextMenu();

  const {
    setIsVocabListVisible,
    setIsDockVisible,

    setIsMounted,
  } = useVocabListContext();
  const { setIsTagSelectionPanelVisible } = useTagsContext();
  const { flashCardsProgress } = useFlashCard();
  const { vocabList } = useVocabListContext();
  const { setScreenId } = useScreenIdContext();

  return (
    <>
      <div
        ref={menuRef}
        style={{
          top: !isMenuVisible ? -9999 : coords?.y,
          left: !isMenuVisible ? -9999 : coords?.x,
        }}
        className={` w-[220px] ${
          isMenuVisible
            ? "absolute animate-fade-in shadow-md shadow-card-foreground"
            : "absolute pointer-events-none invisible"
        }  bg-inkwell-50 border border-inkwell-200 rounded-md shadow-lg md:text-[14px]`}
      >
        <div
          onClick={() => {
            lookUpWord(selectedText, setSearchedWord);
            setIsMenuVisible(false);
          }}
          className="hover:bg-inkwell-100  text-black cursor-pointer pl-8 md:pl-6 py-3 flex items-center gap-3"
        >
          <SearchIcon iconName="search" />
          <p>Look Up Word</p>
        </div>

        <div
          onClick={() => {
            setIsMounted((prev) => !prev);
            setIsVocabListVisible(true);
          }}
          className="hover:bg-inkwell-100  text-black cursor-pointer pl-8 md:pl-6 py-3 flex items-center gap-3"
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
          className="hover:bg-inkwell-100  text-black cursor-pointer pl-8 md:pl-6 py-3 flex items-center gap-3"
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
          className="hover:bg-inkwell-100  text-black cursor-pointer pl-8 md:pl-6 py-3 flex items-center gap-3"
        >
          <ListIcon iconName="cards_stack" />
          <p>Customize Flashcards</p>
        </div>
      </div>
    </>
  );
};

export default ContextMenu;
