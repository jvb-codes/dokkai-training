import { useEntryEditContext } from "@/customHooks/useEntryEditContext";
import useHandleClickedVocabCard from "@/customHooks/useHandleClickedVocabCard";
import useTagsContext from "@/customHooks/useTagsContext";
import useVocabListContext from "@/customHooks/useVocabListContext";

const VocabCards = () => {
  const { vocabList, setIsDockVisible } = useVocabListContext();
  const { setIsTagListVisible } = useTagsContext();
  const { handleClickedVocabCard } = useHandleClickedVocabCard();

  const { setIsEntryEditVisible } = useEntryEditContext();

  return (
    <div className="flex gap-1 -z-10 rounded-t-sm">
      {vocabList.map((entry) => (
        <div
          key={entry.id}
          className="w-[300px] bg-inkwell-600 text-inkwell-50 px-3 py-5 flex flex-col gap-3 justify-start items-start  rounded-t-md  "
        >
          <div>
            <p className="text-xl">{entry.word}</p>
            <p className="text-md">{entry.reading}</p>
          </div>
          <p className="text-md">{entry.meaning}</p>
          <div className="flex items-center gap-3 ">
            <span
              onClick={() => {
                handleClickedVocabCard(entry.id);
                setIsEntryEditVisible(true);
              }}
              title="Edit Vocab"
              className="material-symbols-outlined vocabListContent__edit-card cursor-pointer"
            >
              edit_square
            </span>
            <span
              className="cursor-pointer material-symbols-outlined vocabListContent__add-label"
              title="Add Tags"
              onClick={() => {
                handleClickedVocabCard(entry.id);
                setIsDockVisible(false);
                setIsTagListVisible(true);
              }}
            >
              new_label
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VocabCards;
