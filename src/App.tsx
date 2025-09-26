import "./App.css";
import StartScreen from "./customComponents/StartScreen";
import StudyScreen from "./customComponents/StudyScreenComps/StudyScreen";
import { PastedTextContextProvider, SearchedWordProvider } from "./provider";

function App() {
  return (
    <div className="">
      <PastedTextContextProvider>
        <StartScreen />
        <SearchedWordProvider>
          <StudyScreen />
        </SearchedWordProvider>
      </PastedTextContextProvider>
    </div>
  );
}

export default App;
