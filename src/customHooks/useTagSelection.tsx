import type { VocabEntryType } from "@/data/dummyVocabList";
import useFlashCard from "./useFlashCard";

import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";
import useTagsContext from "../contexts/useContextHooks/useTagsContext";
import useVocabListContext from "../contexts/useContextHooks/useVocabListContext";
import { useEffect } from "react";

const useTagSelection = () => {
  const {
    allTags,
    setAllTags,
    clickedTags,
    isTagSelectionPanelVisible,
    setIsTagSelectionPanelVisible,
    setTagsSelectionError,
    tagsPageNum,
    tagsGroupNum,
    setTagsPageNum,
    clickedVocabCard,
    setClickedVocabCard,
    searchedTag,
    setSearchedTag,
  } = useTagsContext();

  const { setIsDockVisible, vocabList, setVocabList } = useVocabListContext();
  const { setScreenId } = useDisplayIdContext();
  const { flashCardsProgress } = useFlashCard();

  //tag page number

  useEffect(() => {
    setTagsPageNum(tagsGroupNum * 5 - 4);
  }, [tagsGroupNum, setTagsPageNum]);

  function getTagsPage({
    tagsPageNum: page,
    itemsPerPage,
  }: {
    tagsPageNum: number;
    itemsPerPage: number;
  }) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const totalPages = clickedVocabCard?.tags
      ? Math.ceil(clickedVocabCard.tags.length / itemsPerPage)
      : 0;

    const onePageOfTags = clickedVocabCard?.tags?.filter((tag, index) => {
      if (index >= startIndex && index < endIndex) {
        return tag;
      }
    });

    return { onePageOfTags, totalPages };
  }

  function getTagGroups({
    tagsGroupNum,
    listsPerPage,
    totalPages,
  }: {
    tagsGroupNum: number;
    listsPerPage: number;
    totalPages: number;
  }) {
    const startIndex = (tagsGroupNum - 1) * listsPerPage;
    const endIndex = startIndex + listsPerPage;
    const numbers = Array.from({ length: totalPages }, (_, index) => {
      return index + 1;
    });

    const tagGroups = numbers.filter((tag, index) => {
      if (index >= startIndex && index < endIndex) {
        return tag;
      }
    });
    return tagGroups;
  }

  const { onePageOfTags, totalPages } = getTagsPage({
    tagsPageNum: tagsPageNum,
    itemsPerPage: 9,
  });

  const tagGroups = getTagGroups({
    tagsGroupNum: tagsGroupNum,
    listsPerPage: 5,
    totalPages,
  });

  function handleSubmitSelectedTags() {
    const okToSubmit = clickedTags.length > 0;

    if (okToSubmit) {
      flashCardsProgress.makeCustomFlashcardStack(
        vocabList,
        setScreenId,
        clickedTags,
      );

      setIsTagSelectionPanelVisible({
        ...isTagSelectionPanelVisible,
        visible: false,
      });
      setIsDockVisible(true);
      setTagsSelectionError(null);
      setScreenId(3);
    } else setTagsSelectionError("Select tags first");
  }

  const doesVocabExistInList = Array.isArray(vocabList);

  //sets tags from vocablist
  useEffect(() => {
    if (doesVocabExistInList) {
      const tags = Array.from(
        new Set(
          vocabList
            .map((entry) => {
              if (entry.tags) {
                return entry.tags;
              } else return [];
            })
            .flat(),
        ),
      );

      setAllTags(tags);
    }
  }, [setAllTags, vocabList, doesVocabExistInList]);

  //adds new tag via the plus icon
  const addTagViaIcon = () => {
    const tagExists = allTags?.find((tag) => tag === searchedTag);
    if (!tagExists) {
      setAllTags((prev) => [...prev, searchedTag]);
      setSearchedTag("");
      addTagToClickedVocabCard(
        searchedTag,
        clickedVocabCard,
        setClickedVocabCard,
      );
    }
  };

  //adds new tag via the Enter key
  const createTagViaEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const tagExists = clickedVocabCard?.tags?.find(
        (tag) => tag === searchedTag,
      );

      if (!tagExists) {
        setSearchedTag("");
        addTagToClickedVocabCard(
          searchedTag,
          clickedVocabCard,
          setClickedVocabCard,
        );
      } else return;
    }
  };

  const removeTag = (id: number) => {
    if (clickedVocabCard.tags) {
      const update = clickedVocabCard.tags.filter((_, index) => {
        return index !== id;
      });

      setClickedVocabCard({ ...clickedVocabCard, tags: update });
    }
  };

  //updates vocab list when user clicks back arrow
  const handleVocabListUpdate = () => {
    const update = doesVocabExistInList
      ? vocabList.map((entry) =>
          entry.id === clickedVocabCard?.id
            ? { ...entry, tags: clickedVocabCard?.tags }
            : entry,
        )
      : [];

    setVocabList(update);
  };

  const toggleCheckBox = (
    ev: React.ChangeEvent<HTMLInputElement>,
    checkedTag: string,
    clickedTags: string[],
    setClickedTags: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const isUnchecked = !ev.target.checked;
    const isChecked = ev.target.checked;

    if (isUnchecked) {
      removeTagFromAllTags(checkedTag, clickedTags, setClickedTags);
    }

    if (isChecked) addTagToAllTags(checkedTag, clickedTags, setClickedTags);
  };

  const addTagToClickedVocabCard = (
    tag: string,
    clickedVocabCard: VocabEntryType,
    addTag: React.Dispatch<React.SetStateAction<VocabEntryType>>,
  ) => {
    if (clickedVocabCard.tags)
      addTag({ ...clickedVocabCard, tags: [...clickedVocabCard.tags, tag] });
  };

  const removeTagFromAllTags = (
    tag: string,
    clickedTags: string[],
    setClickedTags: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setClickedTags(clickedTags?.filter((item) => item !== tag));
  };

  const addTagToAllTags = (
    tag: string,
    clickedTags: string[],
    setClickedTags: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setClickedTags([...clickedTags, tag]);
  };

  return {
    handleSubmitSelectedTags,
    onePageOfTags,
    tagGroups,
    createTagViaEnterKey,
    addTagViaIcon,
    removeTag,
    handleVocabListUpdate,
    toggleCheckBox,
    addTagToClickedVocabCard,
  };
};

export default useTagSelection;
