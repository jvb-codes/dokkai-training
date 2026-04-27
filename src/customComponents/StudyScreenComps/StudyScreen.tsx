import Text from "./Text";
import ScreenContainer from "../ScreenContainer";
import useScreenIdContext from "@/customHooks/useScreenIdContext";
import {
  ContextMenuContextProvider,
  WordDefContextProvider,
  VocabListProvider,
  ExpandedCardContextProvider,
} from "@/provider";
import Dock from "./Dock";
import VocabList from "./VocabList";
import DockOpener from "../VocabListComponents/VocabListDock";
import ExpandedVocabCard from "../ExpandedVocabCardComponents/ExpandedVocabCard";
import TagSelectionScreen from "../../TagSelection/TagSelectionScreen";
import Dialog from "../Dialog";
import { Toaster } from "sonner";
const StudyScreen = () => {
  const { screenId } = useScreenIdContext();

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
            <WordDefContextProvider>
              <VocabListProvider>
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
              </VocabListProvider>
            </WordDefContextProvider>
          </ContextMenuContextProvider>
        </ScreenContainer>
      )}
    </>
  );
};

export default StudyScreen;
