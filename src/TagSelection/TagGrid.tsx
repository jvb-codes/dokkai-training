import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import CreateFlashcardStack from "./CreateFlashcardStack";
import Tags from "./Tags";

const TagGrid = () => {
  const { isTagSelectionPanelVisible } = useTagsContext();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 p-2 mb-5 min-h-[190px] place-content-center ">
      {isTagSelectionPanelVisible.action === "createFlashcardStack" && (
        <CreateFlashcardStack />
      )}

      {isTagSelectionPanelVisible.action === "createTags" && <Tags />}
    </div>
  );
};

export default TagGrid;
