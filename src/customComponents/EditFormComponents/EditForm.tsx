import useTagsContext from "@/customHooks/useTagsContext";
import EditFormContainer from "./EditFormContainer";
import { useEffect, useState } from "react";
import { useEntryEditContext } from "@/customHooks/useEntryEditContext";
import { Button } from "@/components/ui/button";

const EditForm = () => {
  const { clickedVocabCard } = useTagsContext();
  const [entryEdit, setEntryEdit] = useState({
    word: "",
    reading: "",
    meaning: "",
  });
  const { isEntryEditVisible } = useEntryEditContext();

  useEffect(() => {
    setEntryEdit({
      word: clickedVocabCard?.word ?? "",
      reading: clickedVocabCard?.reading ?? "",
      meaning: clickedVocabCard?.meaning ?? "",
    });
  }, [isEntryEditVisible, clickedVocabCard]);

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEntryEdit((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(entryEdit);

  return (
    <>
      {isEntryEditVisible && (
        <EditFormContainer>
          <div className="space-x-5 text-right">
            <label className="inline-block w-[75px] ">Kanji:</label>
            <input
              onChange={handleEdit}
              className="outline-none"
              type="text"
              name="word"
              required
              value={entryEdit.word ?? ""}
            />
          </div>
          <div className="space-x-5">
            <label className="inline-block text-right w-[75px] ">
              Reading:
            </label>
            <input
              onChange={handleEdit}
              type="text"
              name="reading"
              required
              className="outline-none"
              value={entryEdit.reading ?? ""}
            />
          </div>
          <div className="space-x-5">
            <label className="inline-block text-right w-[75px] ">
              Meaning:
            </label>
            <input
              onChange={handleEdit}
              type="text"
              name="meaning"
              className="outline-none"
              required
              value={entryEdit.meaning ?? ""}
            />
          </div>
          <div className="space-x-5 mt-8">
            <Button>Update</Button>
            <Button>Cancel</Button>
          </div>
        </EditFormContainer>
      )}
    </>
  );
};

export default EditForm;
