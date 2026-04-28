import { useContext } from "react";
import { TagsContext } from "../createdContexts/TagsContext";

const useTagsContext = () => {
  const context = useContext(TagsContext);

  if (!context) {
    throw new Error(
      "useTagsContext must be used within TagsContextProvider. Is the component wrapped with the provider?",
    );
  }

  return context;
};

export default useTagsContext;
