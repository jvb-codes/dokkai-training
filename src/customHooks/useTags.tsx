import useHandleClickedVocabCard from "./useHandleClickedVocabCard";
import useTagsContext from "./useTagsContext";
import useVocabListContext from "./useVocabListContext";
import { useEffect } from "react";

const useTags = () => {
  const { vocabList, setVocabList } = useVocabListContext();
  const { handleClickedVocabCard } = useHandleClickedVocabCard();
  const {
    setClickedVocabCard,
    searchedTag,
    setSearchedTag,
    allTags,
    setAllTags,
    clickedVocabCard,
  } = useTagsContext();

  useEffect(() => {
    const getAllTags = () => {
      return vocabList.map((entry) => entry.tags);
    };
    const tagsArr = getAllTags().flat();

    //removes duplicates, if any.
    const cleanTagsArr = new Set(tagsArr);

    const updateAllTags = Array.from(cleanTagsArr);
    setAllTags(updateAllTags);
  }, [setAllTags, vocabList]);

  //returns the tags that match what the user types in the search bar
  const filteredTagList = allTags?.filter((tag) => {
    return tag.toLowerCase().includes(searchedTag.toLowerCase());
  });

  //either adds or removes tag from "clickedVocabCard", depending on whether the user checks or unchecks the checkbox.
  const updateClickedVocab = (e: React.ChangeEvent<HTMLInputElement>) => {
    //adds new tag to tag array when checked
    if (e.target.checked) {
      setClickedVocabCard((prev) =>
        prev ? { ...prev, tags: [...prev.tags, e.target.value] } : prev
      );
    }

    //removes tag from array when unchecked
    if (!e.target.checked) {
      setClickedVocabCard((prev) =>
        prev
          ? {
              ...prev,
              tags: prev.tags.filter((tag) => tag !== e.target.value),
            }
          : prev
      );
    }
  };

  //tracks what the user types in search bar
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedTag(e.target.value);
  };

  //adds new tag via the plus icon
  const handleClickAddTag = () => {
    setAllTags((prev) => [...prev, searchedTag]);
  };

  //adds new tag via the Enter key
  const handleEnterAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const tagExists = allTags.find((tag) => tag === searchedTag);
      if (!tagExists) {
        setAllTags((prev) => [...prev, searchedTag]);
      }
    }
  };

  //updates vocab list when user clicks back arrow
  const handleVocabListUpdate = () => {
    const update = vocabList.map((entry) => {
      if (entry.id === clickedVocabCard?.id) {
        return { ...entry, tags: clickedVocabCard.tags };
      }
      return entry;
    });
    setVocabList(update);
  };
  return {
    handleClickedVocabCard,
    handleSearch,
    handleClickAddTag,
    handleEnterAddTag,
    handleVocabListUpdate,
    filteredTagList,
    updateClickedVocab,
  };
};

export default useTags;
