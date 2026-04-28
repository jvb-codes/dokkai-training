import { useContext } from "react";
import { VocabListContext } from "../createdContexts/VocabListContext";

const useVocabListContext = () => {
  const context = useContext(VocabListContext);

  if (!context)
    throw new Error(
      "useVocabListContext must be used within VocabListContextProvider. Is the component wrapped with the provider?",
    );

  return context;
};

export default useVocabListContext;
