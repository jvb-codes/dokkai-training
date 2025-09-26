import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useVocabListContext from "@/customHooks/useVocabListContext";
import VocabCard from "./VocabCards";

const VocabListContent = () => {
  const { isVocabListVisible, setIsVocabListVisible, isMounted } =
    useVocabListContext();

  return (
    <>
      {isVocabListVisible && (
        <ScrollArea
          /*vocabList becomes hidden after it is unmounted, allowing time for "hide" animation to complete */
          onAnimationEnd={() => {
            if (!isMounted) {
              setIsVocabListVisible(false);
            }
          }}
          className={`w-full bg-inkwell-50 ${
            isMounted ? "animate-reveal" : "animate-hide"
          } -z-10`}
        >
          <VocabCard />
          <ScrollBar className="p-0" orientation="horizontal" />
        </ScrollArea>
      )}
    </>
  );
};

export default VocabListContent;
