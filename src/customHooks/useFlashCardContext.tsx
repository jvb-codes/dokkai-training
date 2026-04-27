import { useContext } from "react";
import { FlashCardContext } from "@/context";

export const useFlashCardContext = () => {
  const context = useContext(FlashCardContext);
  if (!context) {
    throw new Error(
      "useFlashCardContext must be used within FlashCardContextProvider. Is the component wrapped with the provider?"
    );
  }
  return context;
};
