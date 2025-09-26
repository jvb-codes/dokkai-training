import useContextMenu from "./useContextMenu";
import usePreventOverflow from "./usePreventOverflow";
import useWordDefinitionContext from "./useWordDefinitionContext";

const usePositionWordDef = () => {
  const { setWordDefCoords, setIsDefVisible, wordDefWindowRef } =
    useWordDefinitionContext();
  const { cardRef } = useContextMenu();
  const { preventOverflow } = usePreventOverflow();

  const positionWordDef = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current || !wordDefWindowRef.current) return;

    const textCardRect = cardRef.current.getBoundingClientRect();
    const wordDefRect = wordDefWindowRef.current.getBoundingClientRect();

    const position = preventOverflow({
      clientX: e.clientX,
      clientY: e.clientY,
      parentElementRect: textCardRect,
      childElementRect: wordDefRect,
      //optional padding to prevent window from overlapping text.
      padding: 24,
    });

    //set coords according to what's returned from preventOverflow.
    if (position) {
      setIsDefVisible(true);
      return setWordDefCoords(position);
    }

    //set coords when there is no overflow.
    if (!position) {
      setIsDefVisible(true);
      return setWordDefCoords({
        x: e.clientX - textCardRect.left,
        y: e.clientY - textCardRect.top,
      });
    }

    //possible errors in args passed into preventOverflow.
    console.log(
      "Nothing was returned from preventOverflow so the menu positioning failed. Check args passed into preventOverflow."
    );
  };

  const positionWordDefFromDrop = (coords: { x: number; y: number }) => {
    if (!cardRef.current || !wordDefWindowRef.current) return;

    const textCardRect = cardRef.current.getBoundingClientRect();
    const wordDefRect = wordDefWindowRef.current.getBoundingClientRect();

    const position = preventOverflow({
      clientX: coords.x + textCardRect.left,
      clientY: coords.y + textCardRect.top,
      parentElementRect: textCardRect,
      childElementRect: wordDefRect,
    });

    setIsDefVisible(true);
    if (position) return setWordDefCoords(position);
    //no overflow → use coords directly

    setWordDefCoords(coords);
  };

  return { positionWordDef, positionWordDefFromDrop };
};

export default usePositionWordDef;
