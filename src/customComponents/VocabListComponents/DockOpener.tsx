import useVocabListContext from "@/customHooks/useVocabListContext";

const DockOpener = () => {
  const {
    setIsVocabListVisible,
    isVocabListVisible,
    setIsMounted,
    isMounted,
    isDockVisible,
  } = useVocabListContext();

  return (
    <>
      {isDockVisible && (
        <div className="fixed bottom-0 flex-col items-center w-[300px] md:w-[600px] lg:w-[896px] flex justify-center  py-1 bg-inkwell-200">
          <span
            onClick={() => {
              setIsMounted(!isMounted);
              if (!isVocabListVisible) setIsVocabListVisible(true);
            }}
            className="cursor-pointer material-symbols-outlined vocabListDock__chevron "
          >
            {isVocabListVisible
              ? "keyboard_double_arrow_down"
              : "keyboard_double_arrow_up"}
          </span>
        </div>
      )}
    </>
  );
};

export default DockOpener;
