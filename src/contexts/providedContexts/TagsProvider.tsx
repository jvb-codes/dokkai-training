import type { ReactNode } from "react";
import { useState } from "react";
import type {
  VocabEntryType,
  IsTagSelectionPanelVisibleType,
} from "@/types/types";
import { TagsContext } from "../createdContexts/TagsContext";

export const TagsContextProvider = ({ children }: { children: ReactNode }) => {
  const clickedVocabCardInitialValues = {
    id: 0,
    word: "",
    reading: "",
    definition: "",
    tags: [],
    isHighlight: false,
    wordHighlightKey: "",
    isKnown: false,
  };
  const [clickedVocabCard, setClickedVocabCard] = useState<VocabEntryType>(
    clickedVocabCardInitialValues,
  );
  const [clickedVocabCardDefaults, setClickedVocabCardDefaults] =
    useState<VocabEntryType>(clickedVocabCardInitialValues);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isTagListVisible, setIsTagListVisible] = useState(false);
  const [isTagSelectionPanelVisible, setIsTagSelectionPanelVisible] =
    useState<IsTagSelectionPanelVisibleType>({
      visible: false,
      action: null,
    });
  const [searchedTag, setSearchedTag] = useState("");
  const [tagsPageNum, setTagsPageNum] = useState(1);
  const [tagsGroupNum, setTagsGroupNum] = useState(1);
  const [clickedTags, setClickedTags] = useState<string[]>([]);
  const [tags, setTags] = useState<string[] | null>(null);
  const [tagsSelectionError, setTagsSelectionError] = useState<string | null>(
    null,
  );

  return (
    <TagsContext.Provider
      value={{
        clickedVocabCard,
        setClickedVocabCard,
        clickedVocabCardDefaults,
        setClickedVocabCardDefaults,
        isTagListVisible,
        setIsTagListVisible,
        searchedTag,
        setSearchedTag,
        allTags,
        setAllTags,
        tagsPageNum,
        setTagsPageNum,
        tagsGroupNum,
        setTagsGroupNum,
        clickedTags,
        setClickedTags,
        isTagSelectionPanelVisible,
        setIsTagSelectionPanelVisible,
        tags,
        setTags,
        tagsSelectionError,
        setTagsSelectionError,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};
