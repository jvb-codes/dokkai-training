import useTagsContext from "@/customHooks/useTagsContext";
import {
  EditField as WordField,
  EditField as ReadingField,
  EditField as MeaningField,
} from "./EditField";
import { Icon as BackArrow, Icon as UndoArrow } from "../Icon";
import { useExpandedCardContext } from "@/customHooks/useEntryEditContext";
import useHandleClickedVocabCard from "@/customHooks/useHandleClickedVocabCard";

const EditMode = () => {
  const { clickedVocabCard, setClickedVocabCardDefaults } = useTagsContext();

  const { setIsInEditMode, isEntryEdited, setIsEntryEdited } =
    useExpandedCardContext();
  const { handleClickedVocabCard } = useHandleClickedVocabCard();

  return (
    <div className="w-full space-y-20 m-7 animate-fade-in">
      <BackArrow
        iconName="arrow_back"
        title="Back"
        onClick={() => {
          setIsInEditMode(false);
          setClickedVocabCardDefaults(clickedVocabCard);
          setIsEntryEdited({ word: false, reading: false, meaning: false });
        }}
        styles="cursor-pointer"
      />
      <div className="flex flex-col gap-3 text-xl w-full items-center">
        <div className="flex items-center justify-center gap-3">
          <WordField
            handleOnBlur={() => handleClickedVocabCard.updateOnBlur()}
            autofocus
            value={clickedVocabCard?.word ?? ""}
            name="word"
            handleEdit={(e) => handleClickedVocabCard.updateEntryOnChange(e)}
            labelName="Kanji:"
          />

          <UndoArrow
            iconName="undo"
            title="Undo Changes"
            styles={`${isEntryEdited.word ? "opacity-100 cursor-pointer " : "opacity-0 pointer-events-none"}`}
            onClick={() => handleClickedVocabCard.undoChanges("word")}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <ReadingField
            handleOnBlur={() => handleClickedVocabCard.updateOnBlur()}
            value={clickedVocabCard?.reading ?? ""}
            name="reading"
            handleEdit={(e) => handleClickedVocabCard.updateEntryOnChange(e)}
            labelName="Reading:"
          />
          <UndoArrow
            iconName="undo"
            title="Undo Changes"
            styles={`${isEntryEdited.reading ? "opacity-100 cursor-pointer " : "opacity-0 pointer-events-none"}`}
            onClick={() => handleClickedVocabCard.undoChanges("reading")}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <MeaningField
            handleOnBlur={() => handleClickedVocabCard.updateOnBlur()}
            value={clickedVocabCard?.definition}
            name="meaning"
            handleEdit={(e) => handleClickedVocabCard.updateEntryOnChange(e)}
            labelName="Meaning:"
          />
          <UndoArrow
            iconName="undo"
            title="Undo Changes"
            styles={`${isEntryEdited.meaning ? "opacity-100 cursor-pointer " : "opacity-0 pointer-events-none"}`}
            onClick={() => handleClickedVocabCard.undoChanges("meaning")}
          />
        </div>
      </div>
    </div>
  );
};

export default EditMode;
