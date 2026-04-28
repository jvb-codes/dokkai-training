import { Icon as Add } from "@/customComponents/Icon";
import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useTagSelection from "@/customHooks/useTagSelection";

const NoTagsOnVocabCard = () => {
  const { searchedTag } = useTagsContext();
  const { addTagViaIcon } = useTagSelection();

  return (
    <>
      <div className="flex gap-1 items-start">
        {searchedTag.length > 0 && (
          <>
            <Add
              onClick={() => addTagViaIcon()}
              iconName="add_circle"
              styles="cursor-pointer"
            />
            <p>Add {searchedTag}</p>
          </>
        )}
        {searchedTag.length === 0 && (
          <p className="ml-1">No tags added to card</p>
        )}
      </div>
    </>
  );
};

export default NoTagsOnVocabCard;
