import { Card, CardContent } from "@/components/ui/card";
import { usePastedTextContext } from "@/customHooks/usePastedTextContext";
import ContextMenu from "./ContextMenu";
import usePositionContextMenu from "@/customHooks/usePositionContextMenu";
import WordDefinition from "./WordDefinition";
import useWordDefinitionContext from "@/customHooks/useWordDefinitionContext";
import { useSearchedWordContext } from "@/customHooks/useSearchedWordContext";
import useContextMenu from "@/customHooks/useContextMenu";
import usePositionWordDef from "@/customHooks/usePositionWordDef";

const TextCard = () => {
  const { selectedText, setSelectedText, setSearchedWord } =
    useSearchedWordContext();
  const { pastedText } = usePastedTextContext();
  const { setIsMenuVisible, coords } = useContextMenu();
  const { positionContextMenu } = usePositionContextMenu();
  const { positionWordDefFromDrop } = usePositionWordDef();
  const { cardRef, menuRef } = useContextMenu();

  //word definition card variables
  const { setIsDefVisible, wordDefWindowRef, grabOffset } =
    useWordDefinitionContext();

  const getSelectedText = () => {
    const selectedText = getSelection()?.toString();
    if (selectedText && selectedText.length === 0) {
      return;
    }
    setSelectedText(selectedText);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (cardRef.current && coords && wordDefWindowRef.current && grabOffset) {
      const rect = cardRef.current.getBoundingClientRect();
      //at drop
      const dropPosition = { x: e.pageX - rect.left, y: e.pageY - rect.top };

      //dropped position - previous position = the difference in distance between positions
      const dropAndPrevPosDifference = {
        x: dropPosition.x - coords.x,
        y: dropPosition.y - coords.y,
      };

      const newCoords = {
        x: coords.x + dropAndPrevPosDifference.x - grabOffset.x,
        y: coords.y + dropAndPrevPosDifference.y - grabOffset.y,
      };

      positionWordDefFromDrop(newCoords);
    }
  };
  return (
    <>
      <Card
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
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
        <CardContent className="relative leading-8">
          <p>{pastedText}</p>
        </CardContent>
        <WordDefinition />
        <ContextMenu
          setIsDefVisible={setIsDefVisible}
          menuRef={menuRef}
          selectedText={selectedText}
        />
      </Card>
    </>
  );
};

export default TextCard;
