import { useContext } from "react";
import { ContextMenuContext } from "@/context";

const useContextMenu = () => {
  const context = useContext(ContextMenuContext);

  if (!context) {
    throw new Error(
      "useContextMenu must be called within ContextMenuContextProvider. Is the component wrapped with the provider?"
    );
  }
  return context;
};

export default useContextMenu;
