import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import { ReadModeHeader } from "./ReadModeHeader";

import Hiragana from "../VocabListComponents/Hiragana";
import Kanji from "../VocabListComponents/Kanji";
import { useExpandedCardContext } from "@/contexts/useContextHooks/useExpandedCardContext";
import English from "../VocabListComponents/English";

const ReadMode = () => {
  const { clickedVocabCard } = useTagsContext();
  const { setIsInEditMode } = useExpandedCardContext();

  return (
    <div className="w-full m-7 space-y-20">
      <ReadModeHeader setIsInEditMode={setIsInEditMode} />
      <div className="space-y-8 pl-8">
        <div className="space-y-0 ">
          <Hiragana hiragana={clickedVocabCard?.reading} styles="text-lg" />
          <Kanji kanji={clickedVocabCard?.word} styles="text-4xl" />
        </div>
        <English english={clickedVocabCard?.definition} styles="text-lg" />
      </div>
    </div>
  );
};

export default ReadMode;
