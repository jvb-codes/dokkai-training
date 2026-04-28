import useTagsContext from "@/contexts/useContextHooks/useTagsContext";

const NoSearchResults = () => {
  const { searchedTag } = useTagsContext();
  return <>{!searchedTag && <p className="ml-4 mt-4">No tags found</p>}</>;
};

export default NoSearchResults;
