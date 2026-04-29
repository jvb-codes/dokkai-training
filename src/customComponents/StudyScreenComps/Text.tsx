import {
  Card as TextCard,
  CardContent as TextCardContent,
} from "@/components/ui/card";
import { usePastedTextContext } from "@/contexts/useContextHooks/usePastedTextContext";
import ContextMenu from "./ContextMenu";
import usePositionContextMenu from "@/customHooks/usePositionContextMenu";
import WordDefinition from "./WordDefinition";
import useWordDefContext from "@/contexts/useContextHooks/useWordDefContext";
import { useSearchedWordContext } from "@/contexts/useContextHooks/useSearchedWordContext";
import useContextMenu from "@/contexts/useContextHooks/useContextMenuContext";

import { useEffect } from "react";
import useLocalStorage from "@/customHooks/useLocalStorage";
import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";

const Text = () => {
  const { selectedText, setSelectedText, setSearchedWord } =
    useSearchedWordContext();
  const { pastedText, pastedTextWithHighlights, isPastedTextHighlighted } =
    usePastedTextContext();
  const { setIsMenuVisible } = useContextMenu();
  const { positionContextMenu } = usePositionContextMenu();

  const { cardRef, menuRef } = useContextMenu();
  const { setLocalStorage } = useLocalStorage();
  const { vocabList } = useVocabListContext();

  //word definition card variables
  const { setIsDefVisible } = useWordDefContext();

  const getSelectedText = () => {
    setTimeout(() => {
      const selectedText = getSelection()?.toString().trim();

      if (!selectedText) return;
      setSelectedText(selectedText);
    }, 100);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    setLocalStorage(pastedText as string, vocabList);
  }, [vocabList]);

  return (
    <>
      <TextCard
        onDragOver={(e) => handleDragOver(e)}
        onClick={() => {
          setIsMenuVisible(false);

          //gets the text selected by user
          getSelectedText();
        }}
        className="relative h-auto max-w-4xl py-6 mb-40 text-black border-none shadow-2xl bg-inkwell-100 mt-7 font-display-Japanese"
        ref={cardRef}
        //opens the context menu on right click.
        //closes the word definition window if opened.
        //sets searchedWord state back to default (undefined).
        onContextMenu={(e) => {
          e.preventDefault();
          setIsDefVisible(false);
          setSearchedWord(undefined);
          positionContextMenu(e);
        }}
      >
        <TextCardContent className="relative leading-8">
          {isPastedTextHighlighted ? (
            <p>{pastedTextWithHighlights}</p>
          ) : (
            <p>{pastedText}</p>
          )}
        </TextCardContent>
        <WordDefinition />
        <ContextMenu
          setIsDefVisible={setIsDefVisible}
          menuRef={menuRef}
          selectedText={selectedText}
        />
      </TextCard>
    </>
  );
};

export default Text;
