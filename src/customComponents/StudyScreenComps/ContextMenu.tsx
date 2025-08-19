// import { useEffect } from "react";

type CoordsType = {
  y: number;
  x: number;
};

type ContextMenuPropsType = {
  isMenuVisible: boolean;
  coords: CoordsType;
  menuRef: React.RefObject<HTMLDivElement | null>;
  setMenuWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ContextMenu = ({
  isMenuVisible,
  coords,
  menuRef,
}: // setMenuWidth,
ContextMenuPropsType) => {
  // useEffect(() => {
  //   const width = menuRef.current?.getBoundingClientRect().width || 200;
  //   setMenuWidth(width);
  // }, [isMenuVisible, menuRef, setMenuWidth]);

  return (
    <>
      {isMenuVisible && (
        <div
          ref={menuRef}
          style={{
            top: coords.y,
            left: coords.x,
            position: "absolute",
          }}
          className=" w-[200px] absolute bg-secondary-foreground rounded-sm text-[12px] md:text-[14px] py-2 "
        >
          <div className="hover:bg-gray-700  text-white cursor-pointer pl-8 md:pl-6 py-2 flex items-center gap-3">
            <span className="material-symbols-outlined">search</span>
            <p>Look Up Word</p>
          </div>
          <div className="hover:bg-gray-700  text-white cursor-pointer pl-8 md:pl-6 py-2 flex items-center gap-3">
            <span className="material-symbols-outlined">add</span>
            <p>Add To My Vocab</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContextMenu;
