import { useContext } from "react";
import { WordDefContext } from "../createdContexts/WordDefContext";

const useWordDefContext = () => {
  const context = useContext(WordDefContext);
  if (!context) {
    throw new Error(
      "useWordDefContext must be used within WordDefContextProvider. Is the component wrapped with the provider?",
    );
  }
  return context;
};

export default useWordDefContext;
