import { useEffect, useRef, useState } from "react";

const useContextMenu = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);

  console.log(menuWidth);

  const positionContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    //prevents the menu from spilling over the TextCard component.
    //Takes the position on the X axis (where the user clicks relative to the browser's width), and then adds the menu's width to see whether is goes over the TextCard's right edge.
    //If the total is greater than the right edge, then the coords on the X axis are set, minus the width of the context menu.
    if (menuWidth && e.pageX + menuWidth > rect.right) {
      setCoords({ x: e.pageX - rect.left - menuWidth, y: e.pageY - 10 });
    } else setCoords({ x: e.pageX - rect.left, y: e.pageY - 10 });

    setIsMenuVisible(true);
  };

  //gets the width of the menu, which is needed to prevent the menu spilling over the TextCard component.
  useEffect(() => {
    const width = menuRef.current?.getBoundingClientRect().width || 200;
    setMenuWidth(width);
  }, [isMenuVisible, menuRef, setMenuWidth]);

  return {
    positionContextMenu,
    cardRef,
    coords,
    isMenuVisible,
    setIsMenuVisible,
    menuRef,
    setMenuWidth,
  };
};

export default useContextMenu;
