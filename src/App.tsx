import "./App.css";
import Flashcards from "./customComponents/Flashcards/Flashcards";
import StartScreen from "./customComponents/StartScreen";
import StudyScreen from "./customComponents/StudyScreenComps/StudyScreen";

import {
  DialogContextProvider,
  FlashCardContextProvider,
  PastedTextContextProvider,
  SearchedWordProvider,
  TagsContextProvider,
  VocabListProvider,
} from "./provider";

function App() {
  return (
    <div>
      <PastedTextContextProvider>
        <StartScreen />
        <DialogContextProvider>
          <SearchedWordProvider>
            <VocabListProvider>
              <TagsContextProvider>
                <FlashCardContextProvider>
                  <Flashcards />
                  <StudyScreen />
                </FlashCardContextProvider>
              </TagsContextProvider>
            </VocabListProvider>
          </SearchedWordProvider>
        </DialogContextProvider>
      </PastedTextContextProvider>
    </div>
  );
}

export default App;
