import useTagsContext from "@/contexts/useContextHooks/useTagsContext";

const NoTagsExist = () => {
  const { allTags } = useTagsContext();
  return (
    <>{allTags.length === 0 && <p className="ml-2 mt-1">No Tags Exist</p>}</>
  );
};

export default NoTagsExist;
