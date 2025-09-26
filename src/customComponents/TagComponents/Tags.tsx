import TagsContainer from "./TagsContainer";
import useTagsContext from "@/customHooks/useTagsContext";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TagInput from "./TagInput";
import useTags from "@/customHooks/useTags";

const Tags = () => {
  const {
    clickedVocabCard,

    isTagListVisible,
  } = useTagsContext();

  const { filteredTagList, updateClickedVocab } = useTags();

  return (
    <>
      {isTagListVisible && (
        <TagsContainer>
          <>
            <TagInput filteredTagList={filteredTagList} />

            <ScrollArea className=" h-[300px]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 mx-7 ">
                {filteredTagList?.map((tag) => {
                  const isTagChecked = clickedVocabCard?.tags.some((entry) =>
                    entry.includes(tag)
                  );

                  return (
                    <div className=" flex gap-3 p-3" key={tag}>
                      <input
                        value={tag}
                        name={tag}
                        onChange={(e) => updateClickedVocab(e)}
                        type="checkbox"
                        defaultChecked={isTagChecked}
                      />
                      <label className="text-lg">{tag}</label>
                    </div>
                  );
                })}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </>
        </TagsContainer>
      )}
    </>
  );
};

export default Tags;
