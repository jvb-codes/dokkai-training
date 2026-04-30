import useContextMenu from "@/contexts/useContextHooks/useContextMenuContext";
import usePreventOverflow from "./usePreventOverflow";

const usePositionContextMenu = () => {
  const { setCoords, setIsMenuVisible, cardRef, menuRef } = useContextMenu();

  const { preventOverflow } = usePreventOverflow();

  const positionContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!cardRef.current || !menuRef.current) return;
    const textCardRect = cardRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    const position = preventOverflow({
      clientX: e.clientX,
      clientY: e.clientY,
      parentElementRect: textCardRect,
      childElementRect: menuRect,
      //optional padding to prevent window from overlapping text.
      padding: 24,
    });

    //set coords according to what's returned from preventOverflow.
    if (position) {
      setIsMenuVisible(true);
      return setCoords(position);
    }

    //set coords when there is no overflow.
    if (!position) {
      setIsMenuVisible(true);
      return setCoords({
        x: e.clientX - textCardRect.left,
        y: e.clientY - textCardRect.top,
      });
    }
  };

  return { positionContextMenu };
};

export default usePositionContextMenu;
