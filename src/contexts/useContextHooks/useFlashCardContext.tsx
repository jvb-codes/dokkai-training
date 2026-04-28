import { useContext } from "react";
import { FlashcardContext } from "../createdContexts/FlashcardContext";

export const useFlashCardContext = () => {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error(
      "useFlashCardContext must be used within FlashCardContextProvider. Is the component wrapped with the provider?",
    );
  }
  return context;
};
