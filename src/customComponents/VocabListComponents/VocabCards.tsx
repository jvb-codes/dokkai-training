import useHandleClickedVocabCard from "@/customHooks/useHandleClickedVocabCard";
import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";
import Kanji from "./Kanji";
import Hiragana from "./Hiragana";
import English from "./English";
import VocabListEmpty from "./VocabListEmpty";
import {
  Icon as ExpandCard,
  Icon as AddTag,
  Icon as ToggleHighlightOn,
  Icon as ToggleHighlightOff,
  Icon as DeleteCard,
} from "../Icon";
import { useExpandedCardContext } from "@/contexts/useContextHooks/useExpandedCardContext";
import useHighlight from "@/customHooks/useHighlight";
import useDialogContext from "@/contexts/useContextHooks/useDialogContext";

const VocabCards = () => {
  const { vocabList, setIsDockVisible, setIsVocabListVisible } =
    useVocabListContext();
  const { setIsTagSelectionPanelVisible } = useTagsContext();
  const { handleClickedVocabCard } = useHandleClickedVocabCard();
  const { highlight } = useHighlight();
  const { setIsExpandedCardVisible } = useExpandedCardContext();
  const { setDialog } = useDialogContext();

  console.log(vocabList);

  return (
    <>
      {vocabList.length > 0 && (
        <div className="flex gap-1 -z-10 rounded-t-sm  ">
          {Array.isArray(vocabList) &&
            vocabList.map((entry) => (
              <div
                key={entry.id}
                className="w-[300px] text-inkwell-50 px-3 py-5 gap-3 flex flex-col border-r-inkwell-50 border-r "
              >
                <div className="flex items-start">
                  <div className="flex flex-col">
                    <Hiragana
                      hiragana={entry.reading}
                      styles="text-sm w-[250px] overflow-hidden text-ellipsis whitespace-nowrap"
                    />
                    <Kanji
                      kanji={entry.word}
                      styles="text-2xl w-[250px] overflow-hidden tex[t-ellipsis whitespace-nowrap"
                    />
                  </div>
                  <DeleteCard
                    onClick={() => {
                      setDialog({
                        isOpen: true,
                        type: "delete",
                        title: "Are you sure?",
                        message:
                          "You are about to delete this card from your vocabulary list.",
                        cardId: entry.id,
                      });
                    }}
                    iconName="close_small"
                    styles="cursor-pointer"
                  />
                </div>

                <English
                  english={entry.definition}
                  styles="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap "
                />
                <div className="space-x-1">
                  <ExpandCard
                    iconName={"full_coverage"}
                    title={"Expand Card"}
                    onClick={() => {
                      handleClickedVocabCard.findCard(entry.id);
                      setIsExpandedCardVisible(true);
                      setIsDockVisible(false);
                    }}
                    styles="vocabListContent__edit-card cursor-pointer inline-flex"
                  />
                  <AddTag
                    iconName={"new_label"}
                    title={"Add Tag"}
                    onClick={() => {
                      handleClickedVocabCard.findCard(entry.id);
                      setIsDockVisible(false);
                      setIsTagSelectionPanelVisible({
                        visible: true,
                        action: "createTags",
                      });
                      setIsVocabListVisible(false);
                    }}
                    styles="vocabListContent__add-label cursor-pointer inline-flex"
                  />
                  {entry.isHighlight && (
                    <ToggleHighlightOn
                      iconName={"toggle_on"}
                      title={"Highlight Word"}
                      onClick={() => {
                        if (entry.id) highlight.turnOff(entry.id);
                      }}
                      styles="vocabListContent__add-label cursor-pointer inline-flex vocabListConent__highlight-word"
                    />
                  )}
                  {!entry.isHighlight && (
                    <ToggleHighlightOff
                      iconName={"toggle_off"}
                      title={"Highlight Word"}
                      onClick={() => {
                        if (entry.id)
                          highlight.turnOn(entry.wordHighlightKey, entry.id);
                      }}
                      styles="vocabListContent__add-label cursor-pointer inline-flex vocabListConent__highlight-word"
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
      {vocabList.length === 0 && <VocabListEmpty />}
    </>
  );
};

export default VocabCards;
