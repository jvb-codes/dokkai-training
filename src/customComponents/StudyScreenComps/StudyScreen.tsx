import TextCard from "./TextCard";
import ScreenContainer from "../ScreenContainer";
import useScreenIdContext from "@/customHooks/useScreenIdContext";
import {
  ContextMenuContextProvider,
  WordDefContextProvider,
  ToastContextProvider,
  VocabListProvider,
  TagsContextProvider,
  EntryEditContextProvider,
} from "@/provider";
import Dock from "./Dock";
import VocabList from "./VocabList";
import DockOpener from "../VocabListComponents/DockOpener";
import Tags from "../TagComponents/Tags";
import EditForm from "../EditFormComponents/EditForm";

const StudyScreen = () => {
  const { screenId } = useScreenIdContext();

  return (
    <>
      {screenId === 2 && (
        <ScreenContainer>
          <ContextMenuContextProvider>
            <WordDefContextProvider>
              <ToastContextProvider>
                <VocabListProvider>
                  <TextCard />
                  <Dock>
                    <TagsContextProvider>
                      <EntryEditContextProvider>
                        <VocabList />
                        <EditForm />
                      </EntryEditContextProvider>
                      <Tags />
                      <DockOpener />
                    </TagsContextProvider>
                  </Dock>
                </VocabListProvider>
              </ToastContextProvider>
            </WordDefContextProvider>
          </ContextMenuContextProvider>
        </ScreenContainer>
      )}
    </>
  );
};

export default StudyScreen;
