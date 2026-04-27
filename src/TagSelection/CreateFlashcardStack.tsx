import AllTags from "./AllTags";
import NoTagsExist from "./NoTagsExist";

const CreateFlashcardStack = () => {
  return (
    <>
      <NoTagsExist />
      <AllTags />
    </>
  );
};

export default CreateFlashcardStack;
