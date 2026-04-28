import Text from "./Text";
import ScreenContainer from "../ScreenContainer";
import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";
import { ExpandedCardContextProvider } from "@/contexts/providedContexts/ExpandedCardProvider";
import Dock from "./Dock";
import VocabList from "./VocabList";
import DockOpener from "../VocabListComponents/VocabListDock";
import ExpandedVocabCard from "../ExpandedVocabCardComponents/ExpandedVocabCard";
import TagSelectionScreen from "../../TagSelection/TagSelectionScreen";
import Dialog from "../Dialog";
import { Toaster } from "sonner";
import { ContextMenuContextProvider } from "@/contexts/providedContexts/ContextMenuProvider";
import { WordDefContextProvider } from "@/contexts/providedContexts/WordDefProvider";
import { VocabListProvider } from "@/contexts/providedContexts/VocabListProvider";
const StudyScreen = () => {
  const { screenId } = useDisplayIdContext();

  const customToastStyles = {
    unstyled: true,
    classNames: {
      toast:
        "bg-inkwell-600 text-white flex px-5 py-5 gap-2 rounded-md max-w-sm w-full items-center",
    },
  };

  return (
    <>
      {screenId === 2 && (
        <ScreenContainer>
          <ContextMenuContextProvider>
            <VocabListProvider>
              <WordDefContextProvider>
                <Dialog />
                <Toaster toastOptions={customToastStyles} />
                <Text />
                <Dock>
                  <ExpandedCardContextProvider>
                    <VocabList />
                    <ExpandedVocabCard />
                    <TagSelectionScreen />
                  </ExpandedCardContextProvider>
                  <DockOpener />
                </Dock>
              </WordDefContextProvider>
            </VocabListProvider>
          </ContextMenuContextProvider>
        </ScreenContainer>
      )}
    </>
  );
};

export default StudyScreen;
