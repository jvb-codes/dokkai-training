import useTagsContext from "@/customHooks/useTagsContext";
import useTagSelection from "@/customHooks/useTagSelection";

const SearchTagInput = () => {
  const { setSearchedTag, allTags, searchedTag } = useTagsContext();
  const { createTagViaEnterKey } = useTagSelection();

  console.log(searchedTag);

  return (
    <>
      <input
        onChange={(ev) => setSearchedTag(ev.target.value)}
        onKeyDown={(ev) => {
          createTagViaEnterKey(ev);
        }}
        value={searchedTag}
        className="p-1 outline outline-inkwell-500 rounded-md w-full"
        placeholder={`${allTags.length > 0 ? "Search tags " : "Enter tag name"}`}
      />
    </>
  );
};

export default SearchTagInput;
