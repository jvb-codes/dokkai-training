import { useContext } from "react";
import { DisplayIdContext } from "../createdContexts/DisplayIdContext";

const useDisplayIdContext = () => {
  const context = useContext(DisplayIdContext);
  if (!context) {
    throw new Error(
      "useScreenIdContext must be used within ScreenIdProvider. Is the component wrapped with the provider?",
    );
  }
  return context;
};

export default useDisplayIdContext;
