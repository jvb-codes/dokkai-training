import useTagsContext from "@/contexts/useContextHooks/useTagsContext";

import { Icon as UndoArrow } from "../Icon";
import { useExpandedCardContext } from "@/contexts/useContextHooks/useExpandedCardContext";
import useHandleClickedVocabCard from "@/customHooks/useHandleClickedVocabCard";
import EditModeHeader from "./EditModeHeader";
import EditModeContent from "./EditModeContent";

const EditMode = () => {
  const { clickedVocabCard } = useTagsContext();

  const { isEntryEdited } = useExpandedCardContext();
  const { handleClickedVocabCard } = useHandleClickedVocabCard();

  return (
    <>
      <EditModeHeader />
      <EditModeContent>
        <div className="flex items-center justify-between gap-2 ">
          <label className=" ">Kanji:</label>
          <input
            onChange={(e) => {
              handleClickedVocabCard.updateOnBlur();
              handleClickedVocabCard.updateEntryOnChange(e);
            }}
            value={clickedVocabCard?.word ?? ""}
            name="word"
            className="focus:outline outline-inkwell-500 rounded-md overflow-ellipsis p-1 w-full  "
            type="text"
          />
          <UndoArrow
            iconName="undo"
            title="Undo Changes"
            onClick={() => handleClickedVocabCard.undoChanges("word")}
            styles={`${isEntryEdited.word ? "opacity-100 cursor-pointer " : "opacity-0 pointer-events-none"}`}
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <label className=" ">Reading:</label>
          <input
            onChange={(e) => {
              handleClickedVocabCard.updateOnBlur();
              handleClickedVocabCard.updateEntryOnChange(e);
            }}
            value={clickedVocabCard?.reading ?? ""}
            name="reading"
            className="focus:outline outline-inkwell-500 rounded-md overflow-ellipsis p-1 w-full"
            type="text"
          />
          <UndoArrow
            iconName="undo"
            title="Undo Changes"
            onClick={() => handleClickedVocabCard.undoChanges("reading")}
            styles={`${isEntryEdited.reading ? "opacity-100 cursor-pointer " : "opacity-0 pointer-events-none"}`}
          />
        </div>
        <div className="flex items-center justify-between gap-2 ">
          <label className=" ">Meaning:</label>
          <input
            onChange={(e) => {
              handleClickedVocabCard.updateOnBlur();
              handleClickedVocabCard.updateEntryOnChange(e);
            }}
            value={clickedVocabCard?.definition ?? ""}
            name="meaning"
            className="focus:outline outline-inkwell-500 rounded-md overflow-ellipsis p-1 w-full"
            type="text"
          />
          <UndoArrow
            iconName="undo"
            title="Undo Changes"
            onClick={() => handleClickedVocabCard.undoChanges("meaning")}
            styles={`${isEntryEdited.meaning ? "opacity-100 cursor-pointer " : "opacity-0 pointer-events-none"}`}
          />
        </div>
      </EditModeContent>
    </>
  );
};

export default EditMode;
