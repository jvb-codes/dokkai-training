import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import { CheckBox } from "../CheckBox";
import useHandleClickedVocabCard from "@/customHooks/useHandleClickedVocabCard";
import useHandleFlashcardStackCreation from "@/customHooks/useHandleFlashcardStackCreation";

type TagColumnsPropsType = {
  searchResult: string[];
};

const TagColumns = ({ searchResult }: TagColumnsPropsType) => {
  const { clickedVocabCard } = useTagsContext();
  const { handleClickedVocabCard } = useHandleClickedVocabCard();
  const { handleFlashcardStackCreation } = useHandleFlashcardStackCreation();

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 mx-7 ">
        {searchResult?.map((tag: string) => {
          const isTagChecked = clickedVocabCard?.tags?.some((entry) =>
            entry.includes(tag),
          );

          return (
            <CheckBox
              key={tag}
              value={tag}
              name={tag}
              onChange={(e) => {
                handleClickedVocabCard.updateTagsOnChange(e);
                handleFlashcardStackCreation.updateTags(
                  e.target.checked,
                  e.target.value,
                );
              }}
              defaultChecked={isTagChecked}
              label={tag}
              labelStyles="text-lg"
            />
          );
        })}
      </div>
    </>
  );
};

export default TagColumns;
