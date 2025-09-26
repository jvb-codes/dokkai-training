import { useContext } from "react";
import { SearchedWordContext } from "@/context";

export const useSearchedWordContext = () => {
  const context = useContext(SearchedWordContext);
  if (!context) {
    throw new Error(
      "useSearchedWordContext must be used within SearchedWordContext. Is the component wrapped with the provider?"
    );
  }
  return context;
};
