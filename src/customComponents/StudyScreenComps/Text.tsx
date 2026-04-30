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
import MobileContextMenu from "./MobileContextMenu";

const Text = () => {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  const { selectedText, setSelectedText } = useSearchedWordContext();
  const { pastedText, pastedTextWithHighlights, isPastedTextHighlighted } =
    usePastedTextContext();
  const { setIsMenuVisible } = useContextMenu();
  const { positionContextMenu } = usePositionContextMenu();

  const { cardRef, menuRef } = useContextMenu();
  const { setLocalStorage } = useLocalStorage();
  const { vocabList } = useVocabListContext();

  //word definition card variables
  const { setIsDefVisible } = useWordDefContext();

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection()?.toString().trim();

      if (!selection) return;

      setSelectedText(selection);

      if (isTouchDevice) {
        setIsMenuVisible(true);
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [isTouchDevice, setSelectedText, setIsMenuVisible]);

  useEffect(() => {
    setLocalStorage(pastedText as string, vocabList);
  }, [vocabList]);

  return (
    <>
      <TextCard
        onClick={() => {
          setIsMenuVisible(false);
        }}
        className="relative h-auto max-w-4xl py-6 mb-40 text-black border-none shadow-2xl bg-inkwell-100 mt-7 font-display-Japanese"
        ref={cardRef}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsDefVisible(false);
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
        {!isTouchDevice && (
          <ContextMenu
            setIsDefVisible={setIsDefVisible}
            menuRef={menuRef}
            selectedText={selectedText}
          />
        )}
        {isTouchDevice && <MobileContextMenu />}
      </TextCard>
    </>
  );
};

export default Text;
