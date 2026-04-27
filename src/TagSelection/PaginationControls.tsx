import useTagsContext from "@/customHooks/useTagsContext";
import useTagSelection from "@/customHooks/useTagSelection";

const PaginationControls = () => {
  const { tagsGroupNum, tagsPageNum, setTagsPageNum, setTagsGroupNum } =
    useTagsContext();

  const { tagGroups } = useTagSelection();
  const renderTagGroups = tagGroups.map((tagGroup) => {
    return (
      <p
        className={`mb-3 cursor-pointer px-2 py-2 ${tagGroup === tagsPageNum ? "bg-inkwell-400" : "bg-inkwell-500"} rounded-lg text-sm`}
        onClick={() => setTagsPageNum(tagGroup)}
      >
        {tagGroup}
      </p>
    );
  });
  return (
    <div className="flex justify-center gap-3">
      {tagsGroupNum > 1 && (
        <p
          onClick={() => {
            setTagsGroupNum((prev) => {
              return prev - 1;
            });
          }}
          className="mb-3 cursor-pointer px-2 py-2 bg-inkwell-500 rounded-lg text-sm"
        >
          Prev
        </p>
      )}
      <div className="flex flex-wrap gap-2 justify-center ">
        {renderTagGroups}
      </div>
      {tagGroups.length === 5 && (
        <p
          onClick={() => {
            setTagsGroupNum((prev) => {
              return prev + 1;
            });
          }}
          className="mb-3 cursor-pointer px-2 py-2 bg-inkwell-500 rounded-lg text-sm"
        >
          Next
        </p>
      )}
    </div>
  );
};

export default PaginationControls;
