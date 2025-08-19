import "./App.css";
import StartScreen from "./customComponents/StartScreen";
import StudyScreen from "./customComponents/StudyScreenComps/StudyScreen";
import { PastedTextContextProvider } from "./provider";

function App() {
  return (
    <div className="">
      <PastedTextContextProvider>
        <StartScreen />
        <StudyScreen />
      </PastedTextContextProvider>
    </div>
  );
}

export default App;
