import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useTagSelection from "@/customHooks/useTagSelection";

const AllTags = () => {
  const { clickedTags, setClickedTags, allTags, searchedTag } =
    useTagsContext();
  const { toggleCheckBox } = useTagSelection();

  const filteredList = allTags.filter((tag) => {
    return tag.includes(searchedTag);
  });

  return (
    <>
      {filteredList.map((tag) => {
        return (
          <div>
            <div className="flex gap-2  ml-6 mt-6 items-center">
              <input
                onChange={(e) =>
                  toggleCheckBox(e, tag, clickedTags, setClickedTags)
                }
                type="checkbox"
              />
              <label>{tag}</label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllTags;
