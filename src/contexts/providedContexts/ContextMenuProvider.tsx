import type { ReactNode } from "react";
import { useState, useRef } from "react";
import { ContextMenuContext } from "../createdContexts/ContextMenuContext";

export const ContextMenuContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  type CoordsType = {
    x: number;
    y: number;
  };
  const [coords, setCoords] = useState<CoordsType | undefined>({
    x: -9999,
    y: -9999,
  });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <ContextMenuContext.Provider
      value={{
        coords,
        setCoords,
        isMenuVisible,
        setIsMenuVisible,
        cardRef,
        menuRef,
      }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
};
