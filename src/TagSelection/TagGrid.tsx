import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import CreateFlashcardStack from "./CreateFlashcardStack";
import Tags from "./Tags";

const TagGrid = () => {
  const { isTagSelectionPanelVisible } = useTagsContext();
  return (
    <div className="grid grid-cols-3 min-h-[190px]">
      {isTagSelectionPanelVisible.action === "createFlashcardStack" && (
        <CreateFlashcardStack />
      )}

      {isTagSelectionPanelVisible.action === "createTags" && <Tags />}
    </div>
  );
};

export default TagGrid;
