import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useTagSelection from "@/customHooks/useTagSelection";
import { Icon as Remove } from "@/customComponents/Icon";
import NoTagsOnVocabCard from "./NoTagsOnVocabCard";

const Tags = () => {
  const { onePageOfTags, removeTag } = useTagSelection();
  const { searchedTag } = useTagsContext();

  const filteredTags = onePageOfTags?.filter((tag) => {
    return tag.toLowerCase().includes(searchedTag.toLowerCase());
  });

  return (
    <>
      {filteredTags?.length === 0 ? (
        <NoTagsOnVocabCard />
      ) : (
        filteredTags?.map((tag, index) => {
          return (
            <div className="flex items-start gap-2  ml-6 mt-6">
              <Remove
                iconName="remove"
                styles="cursor-pointer"
                onClick={() => removeTag(index)}
              />
              <p className="truncate">{tag}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default Tags;
