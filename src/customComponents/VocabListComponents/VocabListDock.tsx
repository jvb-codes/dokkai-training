import useVocabListContext from "@/customHooks/useVocabListContext";
import { Icon as ChevronUp, Icon as ChevronDown } from "../Icon";

const VocabListDock = () => {
  const {
    setIsVocabListVisible,
    isVocabListVisible,
    setIsMounted,
    isDockVisible,
  } = useVocabListContext();

  return (
    <>
      {isDockVisible && (
        <div className="fixed bottom-0 flex-col items-center w-[300px] md:w-[600px] lg:w-[896px] flex justify-center  py-1 bg-inkwell-200">
          {!isVocabListVisible && (
            <ChevronUp
              iconName={"keyboard_double_arrow_up"}
              title="See Vocab List"
              onClick={() => {
                setIsMounted((prev) => !prev);
                if (!isVocabListVisible) setIsVocabListVisible(true);
              }}
              styles="cursor-pointer vocabListDock__chevron"
            />
          )}
          {isVocabListVisible && (
            <ChevronDown
              iconName={"keyboard_double_arrow_down"}
              title="Close Vocab List"
              onClick={() => {
                setIsMounted((prev) => !prev);
                if (!isVocabListVisible) setIsVocabListVisible(false);
              }}
              styles="cursor-pointer vocabListDock__chevron"
            />
          )}
        </div>
      )}
    </>
  );
};

export default VocabListDock;
