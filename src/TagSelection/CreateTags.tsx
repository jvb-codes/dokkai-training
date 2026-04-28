import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import TagGrid from "./TagGrid";

const CreateTags = () => {
  const { isTagSelectionPanelVisible } = useTagsContext();

  return (
    <div>
      {isTagSelectionPanelVisible.action === "createTags" && (
        <>
          <TagGrid />
        </>
      )}
    </div>
  );
};

export default CreateTags;
