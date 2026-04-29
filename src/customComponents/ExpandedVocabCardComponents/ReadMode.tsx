import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import { ReadModeHeader } from "./ReadModeHeader";
import ReadModeContent from "./ReadModeContent";

import Hiragana from "../VocabListComponents/Hiragana";
import Kanji from "../VocabListComponents/Kanji";
import { useExpandedCardContext } from "@/contexts/useContextHooks/useExpandedCardContext";
import English from "../VocabListComponents/English";

const ReadMode = () => {
  const { clickedVocabCard } = useTagsContext();
  const { setIsInEditMode } = useExpandedCardContext();

  return (
    <>
      <ReadModeHeader setIsInEditMode={setIsInEditMode} />
      <ReadModeContent>
        <Hiragana hiragana={clickedVocabCard?.reading} styles="text-lg  " />
        <Kanji kanji={clickedVocabCard?.word} styles="text-4xl" />
        <English
          english={clickedVocabCard?.definition}
          styles="text-lg mt-10"
        />
      </ReadModeContent>
    </>
  );
};

export default ReadMode;
