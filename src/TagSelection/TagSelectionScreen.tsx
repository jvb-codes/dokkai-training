import useTagsContext from "@/customHooks/useTagsContext";
import TagSelectionHeader from "@/TagSelection/TagSelectionHeader";

import TagSelectionPanel from "@/TagSelection/TagSelectionPanel";

import TagGrid from "./TagGrid";
import PaginationControls from "./PaginationControls";
import CreateFlashcardStackBtn from "./CreateFlashcardStackBtn";

const TagSelectionScreen = () => {
  const { isTagSelectionPanelVisible } = useTagsContext();

  return (
    <>
      {isTagSelectionPanelVisible.visible && (
        <TagSelectionPanel>
          <TagSelectionHeader />
          <TagGrid />
          <PaginationControls />
          <CreateFlashcardStackBtn />
        </TagSelectionPanel>
      )}
    </>
  );
};

export default TagSelectionScreen;
