import useTags from "@/customHooks/useTags";
import useTagsContext from "@/customHooks/useTagsContext";
import useVocabListContext from "@/customHooks/useVocabListContext";

const TagInput = ({
  filteredTagList,
}: {
  filteredTagList: string[] | undefined;
}) => {
  const { setIsDockVisible } = useVocabListContext();
  const { setIsTagListVisible, setSearchedTag } = useTagsContext();

  const {
    handleVocabListUpdate,
    handleSearch,
    handleEnterAddTag,
    handleClickAddTag,
  } = useTags();

  return (
    <div className="flex flex-col gap-5 text-inkwell-50 m-7 ">
      <div className="flex gap-5">
        <span
          onClick={() => {
            setIsTagListVisible(false);
            setIsDockVisible(true);
            setSearchedTag("");
            handleVocabListUpdate();
          }}
          className="material-symbols-outlined cursor-pointer"
        >
          arrow_back
        </span>
        <input
          autoFocus
          placeholder="Search for a tag"
          className=" w-full outline-none "
          type="text"
          onChange={(e) => handleSearch(e)}
          onKeyDown={(e) => handleEnterAddTag(e)}
        />
      </div>

      <div
        className={`flex gap-5  ${filteredTagList?.length === 0 ? "opacity-100" : "opacity-0"}`}
      >
        <span
          onClick={() => handleClickAddTag()}
          className="material-symbols-outlined"
        >
          add
        </span>
        <p>Create a new tag</p>
      </div>
    </div>
  );
};

export default TagInput;
