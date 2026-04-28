import "./App.css";
import Flashcards from "./customComponents/Flashcards/Flashcards";
import StartScreen from "./customComponents/StartScreen";
import StudyScreen from "./customComponents/StudyScreenComps/StudyScreen";

import { DialogContextProvider } from "./contexts/providedContexts/DialogProvider";

import { PastedTextContextProvider } from "./contexts/providedContexts/PastedTextProvider";

import { SearchedWordProvider } from "./contexts/providedContexts/SearchedWordProvider";

import { VocabListProvider } from "./contexts/providedContexts/VocabListProvider";

import { TagsContextProvider } from "./contexts/providedContexts/TagsProvider";

import { FlashCardContextProvider } from "./contexts/providedContexts/FlashcardProvider";

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
