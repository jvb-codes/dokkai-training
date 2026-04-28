import {
  ScrollArea as VocabListScrollArea,
  ScrollBar as VocabListScrollBar,
} from "@/components/ui/scroll-area";
import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";
import VocabCard from "./VocabCards";

const VocabListContent = () => {
  const { isVocabListVisible, setIsVocabListVisible, isMounted } =
    useVocabListContext();

  return (
    <>
      {isVocabListVisible && (
        <VocabListScrollArea
          /*vocabList becomes hidden after it is unmounted, allowing time for "hide" animation to complete */
          onAnimationEnd={() => {
            if (!isMounted) {
              setIsVocabListVisible(false);
            }
          }}
          className={`w-full bg-inkwell-50 ${
            isMounted ? "animate-reveal" : "animate-hide"
          } -z-10 bg-inkwell-600 rounded-md`}
        >
          <VocabCard />
          <VocabListScrollBar className="p-0" orientation="horizontal" />
        </VocabListScrollArea>
      )}
    </>
  );
};

export default VocabListContent;
