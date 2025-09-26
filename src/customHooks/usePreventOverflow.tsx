type PreventOverflowArgs = {
  clientX: number;
  clientY: number;
  parentElementRect: DOMRect;
  childElementRect: DOMRect;
  padding?: number;
};

const usePreventOverflow = () => {
  const preventOverflow = ({
    clientX,
    clientY,
    parentElementRect,
    childElementRect,
    padding = 0,
  }: PreventOverflowArgs) => {
    //determines if the child element overflows the right border of its parent container.
    const isOverRight =
      clientX + childElementRect.width > parentElementRect.right;
    //determines if the child element overflows the bottom border of its parent container.
    const isOverBottom =
      clientY + childElementRect.height > parentElementRect.bottom;

    //returns coords that neither overflow the right and bottom borders.
    if (isOverBottom && isOverRight) {
      return {
        x: clientX - parentElementRect.left - childElementRect.width - padding,
        y:
          clientY -
          parentElementRect.top -
          childElementRect.height -
          padding / 2,
      };
    }
    //returns coords that do not overflow the right border.
    if (isOverRight) {
      return {
        x:
          clientX -
          parentElementRect.left -
          childElementRect.width -
          padding / 2,
        y: clientY - parentElementRect.top,
      };
    }
    //returns coords that do not overflow the bottom border.
    if (isOverBottom) {
      return {
        x: clientX - parentElementRect.left,
        y:
          clientY -
          parentElementRect.top -
          childElementRect.height -
          padding / 2,
      };
    }
    //for when the child element does not overflow its parent container.
    return null;
  };

  return { preventOverflow };
};

export default usePreventOverflow;
